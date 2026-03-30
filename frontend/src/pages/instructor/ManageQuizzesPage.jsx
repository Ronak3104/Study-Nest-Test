import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getMyCourses } from '../../api/courseApi';
import { getCourseQuizzes, createQuiz } from '../../api/quizApi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import QuizCard from '../../components/quizzes/QuizCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Button } from '../../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Loader2 } from '../../components/ui/lucide-react';

const ManageQuizzesPage = () => {
  const { user } = useAuth();
  const [myCourses, setMyCourses] = useState([]);
  const [quizzes, setQuizzes] = useState({});
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    courseId: '',
    title: '',
    description: '',
    maxScore: '',
    questions: [
      {
        question: '',
        options: ['', '', '', ''],
        correctIndex: 0,
      }
    ]
  });

  useEffect(() => {
    fetchMyData();
  }, []);

  const fetchMyData = async () => {
    try {
      const { data: coursesRes } = await getMyCourses(user.id);
      const courses = coursesRes.data;
      setMyCourses(courses);

      const quizzesData = {};
      for (const course of courses) {
        const { data: quizzesRes } = await getCourseQuizzes(course._id);
        quizzesData[course._id] = quizzesRes.data;
      }
      setQuizzes(quizzesData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const addQuestion = () => {
    setFormData(prev => ({
      ...prev,
      questions: [...prev.questions, { question: '', options: ['', '', '', ''], correctIndex: 0 }]
    }));
  };

  const updateQuestion = (index, field, value) => {
    const newQuestions = [...formData.questions];
    if (field === 'options') {
      newQuestions[index].options = value;
    } else {
      newQuestions[index][field] = value;
    }
    setFormData(prev => ({ ...prev, questions: newQuestions }));
  };

  const removeQuestion = (index) => {
    if (formData.questions.length > 1) {
      const newQuestions = formData.questions.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, questions: newQuestions }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);
    try {
      await createQuiz(formData);
      setShowCreateModal(false);
      setFormData({
        courseId: '',
        title: '',
        description: '',
        maxScore: '',
        questions: [{ question: '', options: ['', '', '', ''], correctIndex: 0 }]
      });
      fetchMyData();
    } catch (error) {
      console.error('Failed to create quiz:', error);
    } finally {
      setCreating(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-8 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Manage Quizzes</h1>
            <p className="text-gray-500 mt-2">Create interactive quizzes for your students</p>
          </div>
          <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
            <DialogTrigger asChild>
              <Button size="lg" className="px-8 bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-lg">
                + New Quiz
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6">
              <DialogHeader>
                <DialogTitle>Create New Quiz</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label>Course</Label>
                  <Select value={formData.courseId} onValueChange={(value) => setFormData(prev => ({ ...prev, courseId: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {myCourses.map((course) => (
                        <SelectItem key={course._id} value={course._id}>
                          {course.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Title</Label>
                  <Input 
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Quiz title"
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea 
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Quiz description (optional)"
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Max Score</Label>
                  <Input 
                    type="number"
                    value={formData.maxScore}
                    onChange={(e) => setFormData(prev => ({ ...prev, maxScore: e.target.value }))}
                    placeholder="100"
                  />
                </div>

                {/* Dynamic Questions */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Label className="text-lg font-semibold">Questions ({formData.questions.length})</Label>
                    <Button type="button" variant="outline" onClick={addQuestion} size="sm">
                      + Add Question
                    </Button>
                  </div>
                  {formData.questions.map((q, index) => (
                    <div key={index} className="border p-4 rounded-2xl mb-4 bg-gray-50">
                      <div className="flex items-center justify-between mb-3">
                        <Label className="font-semibold">Question {index + 1}</Label>
                        {formData.questions.length > 1 && (
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeQuestion(index)}
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                      <Input 
                        value={q.question}
                        onChange={(e) => updateQuestion(index, 'question', e.target.value)}
                        placeholder={`Question ${index + 1} text`}
                        className="mb-4"
                      />
                      <div className="space-y-2">
                        {q.options.map((option, optIndex) => (
                          <div key={optIndex} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id={`q${index}-opt${optIndex}`}
                              checked={q.correctIndex === optIndex}
                              onChange={() => updateQuestion(index, 'correctIndex', optIndex)}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                            />
                            <label htmlFor={`q${index}-opt${optIndex}`} className="flex-1">
                              <Input
                                value={option}
                                onChange={(e) => {
                                  const newOptions = [...q.options];
                                  newOptions[optIndex] = e.target.value;
                                  updateQuestion(index, 'options', newOptions);
                                }}
                                placeholder={`Option ${optIndex + 1}`}
                                className="ml-2"
                              />
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <Button type="submit" className="w-full" disabled={creating}>
                  {creating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : '+ Create Quiz'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Quizzes by Course */}
        <div className="space-y-6">
          {myCourses.map((course) => (
            <div key={course._id} className="border border-gray-200 rounded-3xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">Q</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{course.title}</h2>
                  <p className="text-gray-500">{course.enrollments?.length || 0} students</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizzes[course._id]?.length > 0 ? (
                  quizzes[course._id].map((quiz) => (
                    <QuizCard key={quiz._id} quiz={quiz} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 text-gray-400">
                    No quizzes yet. Create your first quiz for this course!
                  </div>
                )}
              </div>
            </div>
          ))}
          {myCourses.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-2xl mb-4">No courses yet</p>
              <Button asChild className="inline-flex">
                <Link to="/instructor/courses">Create Your First Course →</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageQuizzesPage;
