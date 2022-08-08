export const checkFormForEmpty = (arr, messageRef) => {
  let anyEmptyField = false;
  // if any input is false, make anyEmptyField true and add highlight to show empty field
  arr.forEach((input) => {
    if (input.current.value === "") {
      input.current.classList.add("empty");
      anyEmptyField = true;
    } else {
      input.current.classList.remove("empty");
    }
  });
  // if anyEmpty field is true, remove hidden class from message and return true
  if (anyEmptyField) {
    messageRef.current.classList.remove("disabled");
    return true;
  }
  messageRef.current.classList.add("disabled");
  return false;
};
