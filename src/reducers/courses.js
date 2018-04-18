// Courses Reducer

const coursesReducerDefaultState = [];

export default (state = coursesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return [
        ...state,
        action.course
      ];
    case 'REMOVE_COURSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_COURSE':
      return state.map((course) => {
        if (course.id === action.id) {
          return {
            ...course,
            ...action.updates
          };
        } else {
          return course;
        };
      });
    case 'SET_COURSES':
      return action.courses;
    default:
      return state;
  }
};
