import React from 'react';
import CourseList from './CourseList';
import CourseListFilters from './CourseListFilters';
import CoursesSummary from './CoursesSummary';

const CourseDashboardPage = () => (
  <div>
    <CoursesSummary />
    <CourseListFilters />
    <CourseList />
  </div>
);

export default CourseDashboardPage;
