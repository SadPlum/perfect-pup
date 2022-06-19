export const checkForm = () => {
  let anyEmptyField = false;
  // Make html collections into arrays
  let inputArr = Array.from(document.getElementsByTagName("input"));
  let textAreaArr = Array.from(document.getElementsByTagName("textarea"));
  let selectArr = Array.from(document.getElementsByTagName("select"));
  //   destructure
  let arr = [...inputArr, ...textAreaArr, ...selectArr];

  //   if field empty, highlight & make empty true
  arr.forEach((item) => {
    if (item.value.trim() === "") {
      item.classList.add("empty");
      anyEmptyField = true;
    } else {
      item.classList.remove("empty");
    }
  });

  //   if any fields empty, show warning message
  let warning = document.getElementsByClassName("admin-warning")[0];
  if (document.getElementsByClassName("empty").length !== 0) {
    warning.classList.remove("disabled");
    anyEmptyField = true;
  } else {
    warning.classList.add("disabled");
  }

  if (anyEmptyField === true) return true;
};
