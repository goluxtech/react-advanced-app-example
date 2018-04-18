import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectCourses from '../selectors/courses';
import selectCoursesTotal from '../selectors/courses-total';

export const CoursesSummary = ({ courseCount, coursesTotal }) => {
  const courseWord = courseCount === 1 ? 'course' : 'courses';
  const formattedCoursesTotal = numeral(coursesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{courseCount}</span> {courseWord} totalling <span>{formattedCoursesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Course</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleCourses = selectCourses(state.courses, state.filters);

  return {
    courseCount: visibleCourses.length,
    coursesTotal: selectCoursesTotal(visibleCourses)
  };
};

export default connect(mapStateToProps)(CoursesSummary);
