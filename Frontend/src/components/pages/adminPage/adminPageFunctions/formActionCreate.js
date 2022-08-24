import { checkFormForEmpty } from "./checkFormForEmpty.js/index.js";

// checks to make sure all inputs are filled. Then make into object. Must follow FormData() guidelines
// https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
export const formAction = ([refs], messageRef) => {
  e.preventDefault();
  if (
    // if any field is empty, will return true, and then formAction will return to stop sending
    checkFormForEmpty([refs], messageRef) === true
  )
    return;
  // Object must not be nested
  let dogFormObject = {
    adopted: adopted,
    waiting: waiting,
    vaccinated: vaccinated,
    name: name.trim(),
    breed: breed.trim(),
    age: age,
    sex: sex,
    size: size,
    description: description,
    image: image,
  };

  // postNewDog(dogFormObject);
  navigate("/admin", { replace: true });
};
