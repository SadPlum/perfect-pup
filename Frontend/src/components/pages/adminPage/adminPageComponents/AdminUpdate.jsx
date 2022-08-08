import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminForm from "./AdminForm";
import { checkFormForEmpty } from "../adminPageFunctions/checkFormForEmpty";
import { getAllDogs } from "../../../../functions/apiRequests";
import AdminDogList from "./AdminDogList";
import { patchDog } from "../../../../functions/apiRequests";
// import { formActionUpdate } from "../adminPageFunctions/formActionUpdate";

function AdminUpdate() {
  // dog to be on form
  const [dog, setDog] = useState(null);
  // dogList to be available in the "Select a dog" AdminDogList componenet
  const [dogList, setDogList] = useState(null);

  // fetches all dogs
  useEffect(() => {
    getAllDogs().then((data) => setDogList(data));
  }, []);

  // Once dog is selected within the AdminDogList component, set values based on that dog
  useEffect(() => {
    if (dog) {
      // Set values on states
      setAdopted(dog.adopted);
      setWaiting(dog.waiting);
      setVaccinated(dog.vaccinated);
      setName(dog.name);
      setAge(dog.age);
      setBreed(dog.breed);
      setSex(dog.sex);
      setSize(dog.size);
      setDescription(dog.description);
      // Sets Values on refs
      adoptedRef.current.value = dog.adopted;
      waitingRef.current.value = dog.waiting;
      vaccinatedRef.current.value = dog.vaccinated;
      nameRef.current.value = dog.name;
      ageRef.current.value = dog.age;
      breedRef.current.value = dog.breed;
      sexRef.current.value = dog.sex;
      sizeRef.current.value = dog.size;
      descriptionRef.current.value = dog.description;
      setOldImageUrl(dog.image);
    }
  }, [dog]);

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

  // url for old images
  const [oldImageUrl, setOldImageUrl] = useState(null);

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
      // image: image,
    };

    patchDog(dogFormObject, dog._id);

    navigate("/admin", { replace: true });
  };

  return (
    <div className="admin">
      <AdminHeader />
      {dogList && <AdminDogList dogList={dogList} setDog={setDog} />}

      <AdminForm
        type="update"
        setAdopted={setAdopted}
        setWaiting={setWaiting}
        setVaccinated={setVaccinated}
        setName={setName}
        setAge={setAge}
        setBreed={setBreed}
        setSex={setSex}
        setSize={setSize}
        setDescription={setDescription}
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
        oldImageUrl={oldImageUrl}
      />
    </div>
  );
}

export default AdminUpdate;
