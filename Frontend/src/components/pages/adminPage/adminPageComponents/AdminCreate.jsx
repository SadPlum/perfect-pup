import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminForm from "./AdminForm";
import { checkFormForEmpty } from "../adminPageFunctions/checkForm";
import { postNewDog } from "../../../../functions/apiRequests";

function AdminCreate() {
  // Values for form
  const [adopted, setAdopted] = useState(null);
  const [waiting, setWaiting] = useState(null);
  const [vaccinated, setVaccinated] = useState(null);
  const [name, setName] = useState(null);
  const [breed, setBreed] = useState(null);
  const [sex, setSex] = useState(null);
  const [age, setAge] = useState(null);
  const [size, setSize] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);

  // refernces to check form
  const [adoptedRef, setAdoptedRef] = useState(null);
  const [waitingRef, setWaitingRef] = useState(null);
  const [vaccinatedRef, setVaccinatedRef] = useState(null);
  const [nameRef, setNameRef] = useState(null);
  const [breedRef, setBreedRef] = useState(null);
  const [sexRef, setSexRef] = useState(null);
  const [ageRef, setAgeRef] = useState(null);
  const [sizeRef, setSizeRef] = useState(null);
  const [descriptionRef, setDescriptionRef] = useState(null);
  const [imageRef, setImageRef] = useState(null);

  // reference to display checkFormForEmpty message
  const [messageRef, setMessageRef] = useState(null);

  // for navigate back to main admin page after data sent to database
  const navigate = useNavigate(null);

  // checks to make sure all inputs are filled. Then make into object. Must follow FormData() guidelines
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
  const formAction = (e) => {
    e.preventDefault();
    if (
      // if any field is empty, will return true, and then formAction will return to stop sending
      checkFormForEmpty(
        [
          adoptedRef,
          waitingRef,
          vaccinatedRef,
          nameRef,
          breedRef,
          sexRef,
          ageRef,
          sizeRef,
          descriptionRef,
          imageRef,
        ],
        messageRef
      ) === true
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

    postNewDog(dogFormObject);
    navigate("/admin", { replace: true });
  };

  return (
    <div className="admin">
      <AdminHeader />
      <AdminForm
        type="create"
        setAdopted={setAdopted}
        setWaiting={setWaiting}
        setVaccinated={setVaccinated}
        setName={setName}
        setAge={setAge}
        setBreed={setBreed}
        setSex={setSex}
        setSize={setSize}
        setDescription={setDescription}
        setImage={setImage}
        image={image}
        formAction={formAction}
        setAdoptedRef={setAdoptedRef}
        setWaitingRef={setWaitingRef}
        setVaccinatedRef={setVaccinatedRef}
        setNameRef={setNameRef}
        setAgeRef={setAgeRef}
        setBreedRef={setBreedRef}
        setSexRef={setSexRef}
        setSizeRef={setSizeRef}
        setDescriptionRef={setDescriptionRef}
        setImageRef={setImageRef}
        setMessageRef={setMessageRef}
      />
    </div>
  );
}

export default AdminCreate;
