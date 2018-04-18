export default (courses) => {
  return courses
      .map((course) => course.amount)
      .reduce((sum, value) => sum + value, 0);
};
