import React from 'react';
import { connect } from 'react-redux';
import CourseListItem from './CourseListItem';
import selectCourses from '../selectors/courses';

export const CourseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Courses</div>
      <div className="show-for-desktop">Course</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.courses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No courses</span>
          </div>
        ) : (
            props.courses.map((course) => {
              return <CourseListItem key={course.createdAt} {...course} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    courses: selectCourses(state.courses, state.filters)
  };
};

export default connect(mapStateToProps)(CourseList);
