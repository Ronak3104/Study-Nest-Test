import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getMyCourses } from '../../api/courseApi';
import { getCourseAssignments, createAssignment } from '../../api/assignmentApi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import AssignmentCard from '../../components/assignments/AssignmentCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Button } from '../../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Calendar } from '../../components/ui/calendar';
// import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { cn } from '../../lib/utils';
import { CalendarIcon, Loader2 } from '../../components/ui/lucide-react';
import { Textarea } from '../../components/ui/textarea';

const ManageAssignmentsPage = () => {
  const { user } = useAuth();
  const [myCourses, setMyCourses] = useState([]);
  const [assignments, setAssignments] = useState({});
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    courseId: '',
    title: '',
    description: '',
    dueDate: null,
    maxPoints: '',
  });

  useEffect(() => {
    fetchMyData();
  }, []);

  const fetchMyData = async () => {
    try {
      const { data: coursesRes } = await getMyCourses(user.id);
      const courses = coursesRes.data;
      setMyCourses(courses);

      // Fetch assignments for each course
      const assignmentsData = {};
      for (const course of courses) {
        const { data: assRes } = await getCourseAssignments(course._id);
        assignmentsData[course._id] = assRes.data;
      }
      setAssignments(assignmentsData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);
    try {
      await createAssignment(formData);
      setShowCreateModal(false);
      setFormData({ courseId: '', title: '', description: '', dueDate: null, maxPoints: '' });
      fetchMyData(); // Refresh
    } catch (error) {
      console.error('Failed to create assignment:', error);
    } finally {
      setCreating(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-8 flex items-center justify-center">
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Manage Assignments</h1>
            <p className="text-gray-500 mt-2">Create and manage assignments for your courses</p>
          </div>
          <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
            <DialogTrigger asChild>
              <Button size="lg" className="px-8 bg-gradient-to-r from-emerald-500 to-green-600 hover:shadow-lg">
                + New Assignment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl p-8">
              <DialogHeader>
                <DialogTitle>Create New Assignment</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label>Course</Label>
                  <Select value={formData.courseId} onValueChange={(value) => handleInputChange('courseId', value)}>
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
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Assignment title"
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea 
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Detailed instructions..."
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Due Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.dueDate && "text-muted-foreground"
                          )}
                        >
<svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line><line x1="8" x2="8" y1="2" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line><line x1="3" x2="3" y1="10" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line></svg>
{formData.dueDate ? formData.dueDate.toLocaleDateString() : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        {/* Calendar component needed - simplified for now */}
                        <input type="date" onChange={(e) => handleInputChange('dueDate', new Date(e.target.value))} className="p-2" />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label>Max Points</Label>
                    <Input 
                      type="number"
                      value={formData.maxPoints}
                      onChange={(e) => handleInputChange('maxPoints', e.target.value)}
                      placeholder="100"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={creating}>
                  {creating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : '+ Create Assignment'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Assignments by Course */}
        <div className="space-y-6">
          {myCourses.map((course) => (
            <div key={course._id} className="border border-gray-200 rounded-3xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">{course.title[0]}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{course.title}</h2>
                  <p className="text-gray-500">{course.enrollments?.length || 0} students</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assignments[course._id]?.length > 0 ? (
                  assignments[course._id].map((assignment) => (
                    <AssignmentCard key={assignment._id} assignment={assignment} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 text-gray-400">
                    No assignments yet. Create your first assignment for this course!
                  </div>
                )}
              </div>
            </div>
          ))}
          {myCourses.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-2xl mb-4">No courses yet</p>
              <Link to="/instructor/courses" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-2xl font-medium hover:bg-blue-700">
                Create Your First Course →
              </Link>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageAssignmentsPage;
