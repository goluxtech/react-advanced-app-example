import uuid from 'uuid';

// ADD_COURSE
export const addCourse = (course) => ({
  type: 'ADD_COURSE',
  course: {
    id: uuid(),
    ...course
  }
});

// REMOVE_COURSE
export const removeCourse = ({ id } = {}) => ({
  type: 'REMOVE_COURSE',
  id
});

// EDIT_COURSE
export const editCourse = (id, updates) => ({
  type: 'EDIT_COURSE',
  id,
  updates
});

// SET_COURSES
export const setCourses = (courses) => ({
  type: 'SET_COURSES',
  courses
});
