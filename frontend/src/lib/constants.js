export const APP_NAME = import.meta.env.VITE_APP_NAME || 'StudyNest';

export const USER_ROLES = {
  STUDENT: 'student',
  INSTRUCTOR: 'instructor',
  ADMIN: 'admin'
};

export const COURSE_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
};

export const GENDERS = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
  { label: 'Prefer not to say', value: 'prefer_not_to_say' }
];

export const COURSE_CATEGORIES = [
  'Web Development',
  'Backend Development',
  'Database',
  'Programming',
  'AI/ML',
  'Cyber Security',
  'Cloud Computing'
];

export const DEFAULT_PAGINATION_LIMIT = 10;