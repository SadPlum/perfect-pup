import React, { useEffect, useState } from "react";

function AdminDogListSelect({ setDog, dogList }) {
  useEffect(() => {
    setDog(dogList[0]);
  }, [setDog, dogList]);
  return (
    <div>
      <label htmlFor="dogSelect">Select a dog</label>
      <select
        name="dogSelect"
        id="dogSelect"
        onChange={(e) => {
          const currentDog = dogList[e.target.value];

          setDog(currentDog);
        }}
      >
        {dogList.map((dog) => {
          return (
            <option key={dog._id} value={dog.id}>
              {dog.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default AdminDogListSelect;
