export const handleOnChange = (event, fn) => {
  if (fn) {
    const { value } = event.target;
    fn(value);
  }
};
