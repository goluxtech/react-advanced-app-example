import React from 'react';
import { connect } from 'react-redux';
import CourseForm from './CourseForm';
import { addCourse } from '../actions/courses';

export class AddCoursePage extends React.Component {
  onSubmit = (course) => {
    this.props.addCourse(course);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Course</h1>
          </div>
        </div>
        <div className="content-container">
          <CourseForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCourse: (course) => dispatch(addCourse(course))
});

export default connect(undefined, mapDispatchToProps)(AddCoursePage);
