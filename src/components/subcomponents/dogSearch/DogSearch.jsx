import React, { useEffect, useState } from "react";

import DogDisplay from "../dogDisplay/DogDisplay";

function DogSearch({ dogList }) {
  const [sexValue, setSexValue] = useState("");
  const [vaccinatedValue, setVaccinatedValue] = useState("");
  const [dogArr, setDogArr] = useState(dogList);

  // SETS FILTER TO SEARCH DOG BY SEX
  const handleChangeSex = (value) => {
    setSexValue(value);
  };
  // SETS FILTER TO SEARCH DOG BY VACCINATION STATUS
  const handleChangeVaccinated = (value) => {
    setVaccinatedValue(value);
  };

  // Filters
  useEffect(() => {
    // If sex === both and vaccinations === either, reset
    if (sexValue === "" && vaccinatedValue === "") setDogArr(dogList);
    // Else, filter accordingly
    else {
      let tempDogList = dogList;
      if (sexValue !== "")
        tempDogList = tempDogList.filter((dog) => dog.dog.sex === sexValue);
      if (vaccinatedValue !== "")
        vaccinatedValue === "yes"
          ? (tempDogList = tempDogList.filter((dog) => dog.vaccinated === true))
          : (tempDogList = tempDogList.filter(
              (dog) => dog.vaccinated === false
            ));

      setDogArr(tempDogList);
    }
  }, [sexValue, vaccinatedValue, dogList]);

  return (
    <>
      <section className="dogSearch">
        <div className="dogSearch-head">
          <h2 className="dogSearch-title"> List of available dogs</h2>
          <section className="searchBars">
            <div className="searchOption">
              <label className="label">Sex:</label>
              <select
                className="select"
                value={sexValue}
                onChange={(e) => handleChangeSex(e.target.value)}
              >
                <option value="">Both</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
            <div className="searchOption searchOption-last">
              <label className="label">Vaccinated:</label>
              <select
                className="select"
                value={vaccinatedValue}
                onChange={(e) => handleChangeVaccinated(e.target.value)}
              >
                <option value="">Either</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </section>
        </div>
        {/* 

        {/* IF DOG IS NOT ADOPTED, RETURN PROFILES */}

        {dogArr.map((dog, i) => {
          if (dog.adopted === false) {
            return (
              <div className="dogListings">
                <DogDisplay
                  key={dog.id}
                  id={dog.id}
                  name={dog.dog.name}
                  breed={dog.dog.breed}
                  sex={dog.dog.sex}
                  img={dog.dog.img}
                  age={dog.dog.age}
                  temperament={dog.dog.temperament}
                />
              </div>
            );
          }
        })}
      </section>
    </>
  );
}

export default DogSearch;
