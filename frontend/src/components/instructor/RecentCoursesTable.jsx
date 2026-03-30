import { useState } from 'react';

const RecentCoursesTable = ({ courses }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h3 className="text-lg font-semibold text-gray-900">Recent Courses</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {courses?.length > 0 ? (
          courses.slice(0, 5).map((course) => (
            <div key={course._id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{course.title?.[0] || 'C'}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{course.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{course.enrollments?.length || 0} students</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>{new Date(course.updatedAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center text-gray-400">
            <p>No recent courses</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentCoursesTable;
