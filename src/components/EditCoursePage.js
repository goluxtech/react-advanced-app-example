import React from 'react';
import { connect } from 'react-redux';
import CourseForm from './CourseForm';
import { editCourse, removeCourse } from '../actions/courses';

export class EditCoursePage extends React.Component {
  onSubmit = (course) => {
    this.props.editCourse(this.props.course.id, course);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeCourse({ id: this.props.course.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Course</h1>
          </div>
        </div>
        <div className="content-container">
          <CourseForm
            course={this.props.course}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Course</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  course: state.courses.find((course) => course.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editCourse: (id, course) => dispatch(editCourse(id, course)),
  removeCourse: (data) => dispatch(removeCourse(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCoursePage);
