import React, { useRef, useEffect } from "react";
import TrueFalseSelect from "./TrueFalseSelect";
import TextInput from "./TextInput";
import VariableSelect from "./VariableSelect";
import NumberSelect from "./NumberSelect";
import ImageInput from "./ImageInput";

function AdminForm({
  type,
  setAdopted,
  setWaiting,
  setVaccinated,
  setName,
  setBreed,
  setAge,
  setSize,
  setSex,
  setDescription,
  setImage,
  image,
  formAction,
  setAdoptedRef,
  setWaitingRef,
  setVaccinatedRef,
  setNameRef,
  setBreedRef,
  setAgeRef,
  setSizeRef,
  setSexRef,
  setDescriptionRef,
  setImageRef,
  setMessageRef,
  oldImageUrl,
}) {
  const messageRef = useRef(null);
  useEffect(() => {
    if (type === "create") {
      setMessageRef(messageRef);
    }
  }, []);

  return (
    <section className="form-box">
      <h3 className="admin-sub-title">
        {type === "create" ? "Create a dog:" : "Update a dog"}
      </h3>
      <div className="form">
        <div className="form-left">
          <form method="post" enctype="multipart/form-data">
            <div className="inputs">
              <TrueFalseSelect
                identifier="adopted"
                label="Is this dog adopted?"
                setState={setAdopted}
                setReference={setAdoptedRef}
              />
              <TrueFalseSelect
                identifier="waiting"
                label="Is this dog awaiting pickup?"
                setState={setWaiting}
                setReference={setWaitingRef}
              />
              <TrueFalseSelect
                identifier="vaccinated"
                label="Is this dog vaccinated?"
                setState={setVaccinated}
                setReference={setVaccinatedRef}
              />

              <TextInput
                idenfier="name"
                label="name"
                setState={setName}
                setReference={setNameRef}
              />

              <TextInput
                idenfier="breed"
                label="breed"
                setState={setBreed}
                setReference={setBreedRef}
              />

              <VariableSelect
                identifier="sex"
                label="sex"
                variables={["female", "male"]}
                setState={setSex}
                setReference={setSexRef}
              />

              <NumberSelect
                identifier="age"
                label="age"
                setState={setAge}
                setReference={setAgeRef}
              />

              <VariableSelect
                identifier="size"
                label="size"
                variables={["small", "medium", "large"]}
                setState={setSize}
                setReference={setSizeRef}
              />
              <TextInput
                identifier="description"
                label="description"
                setState={setDescription}
                descriptionBox={true}
                setReference={setDescriptionRef}
              />
              {setImage && (
                <ImageInput
                  identifier="image"
                  label="image"
                  setState={setImage}
                  setReference={setImageRef}
                />
              )}
            </div>

            <button className="admin-button" onClick={formAction}>
              Submit
            </button>
            <h5 className="admin-warning disabled" ref={messageRef}>
              Please enter the information
            </h5>
          </form>
        </div>
        <div className="form-right">
          {/* only display image if new image loaded up */}
          {image && (
            <img
              className="admin-image"
              src={URL.createObjectURL(image)}
              alt="dog"
            />
          )}
          {/* only display old image if new image not loaded up */}
          {!image && (
            <img className="admin-image" src={oldImageUrl} alt="dog" />
          )}
        </div>
      </div>
    </section>
  );
}

export default AdminForm;
