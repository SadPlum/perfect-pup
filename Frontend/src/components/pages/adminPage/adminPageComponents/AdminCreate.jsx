import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import TrueFalseSelect from "./TrueFalseSelect";
import TextInput from "./TextInput";
import VariableSelect from "./VariableSelect";
import NumberSelect from "./NumberSelect";
import ImageInput from "./ImageInput";

import { checkForm } from "../adminPageFunctions/checkForm";
import { postNewDog } from "../../../../functions/apiRequests";

function AdminCreate() {
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
  const navigate = useNavigate(null);

  const formAction = (e) => {
    e.preventDefault();
    if (checkForm() === true) return;

    let dogFormObject = {
      adopted: adopted,
      waiting: waiting,
      vaccinated: vaccinated,
      name: name,
      breed: breed,
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
      <section className="form-box">
        <h3 className="admin-sub-title">Create Dog:</h3>
        <div className="form">
          <div className="form-left">
            <form method="post" enctype="multipart/form-data">
              <div className="inputs">
                <TrueFalseSelect
                  identifier="adopted"
                  label="Is this dog adopted?"
                  setState={setAdopted}
                />
                <TrueFalseSelect
                  identifier="waiting"
                  label="Is this dog awaiting pickup?"
                  setState={setWaiting}
                />
                <TrueFalseSelect
                  identifier="vaccinated"
                  label="Is this dog vaccinated?"
                  setState={setVaccinated}
                />

                <TextInput idenfier="name" label="name" setState={setName} />

                <TextInput idenfier="breed" label="breed" setState={setBreed} />

                <VariableSelect
                  identifier="sex"
                  label="sex"
                  variables={["female", "male"]}
                  setState={setSex}
                />

                <NumberSelect identifier="age" label="age" setState={setAge} />

                <VariableSelect
                  identifier="size"
                  label="size"
                  variables={["small", "medium", "large"]}
                  setState={setSize}
                />
                <TextInput
                  identifier="description"
                  label="description"
                  setState={setDescription}
                  descriptionBox={true}
                />
                <ImageInput
                  identifier="image"
                  label="image"
                  setState={setImage}
                />
              </div>

              <button className="admin-button" onClick={formAction}>
                Submit
              </button>
              <h5 className="admin-warning disabled">
                Please enter the information
              </h5>
            </form>
          </div>
          <div className="form-right">
            {image && (
              <img
                className="admin-image"
                src={URL.createObjectURL(image)}
                alt="dog"
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminCreate;
