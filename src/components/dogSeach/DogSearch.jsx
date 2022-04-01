import React, { useEffect, useState } from "react";
import SingleDog from "../singleDog/SingleDog";
import DogDisplay from "../dogDisplay/DogDisplay";

function DogSearch({ dogList }) {
  return (
    <>
      <section className="dogSearch">
        <h2 className="dogSearch-title"> List of available dogs</h2>
        <label for="dogBreeds">Breeds:</label>
        <select name="dogBreeds" id="dogBreeds">
          <option>Will have breeds</option>
        </select>
        <label for="dogSex">Sex:</label>
        <select name="dogSex" id="dogSex">
          <option>Male</option>
          <option>Female</option>
        </select>
        {/* 
        {dogList &&
          dogList.map((dog, i) => (
            <SingleDog
              key={i}
              url={dog.url}
              temperament={dog.breeds[0].temperament}
              breed={dog.breeds[0].name}
            />
          ))} */}
        {dogList &&
          dogList.map((dog, i) => {
            let gender;
            console.log(i);
            if (i === 0 || i % 2 === 0) gender = "M";
            else gender = "F";
            return <DogDisplay key={i} url={dog.url} sex={gender} />;
          })}
      </section>
    </>
  );
}

export default DogSearch;
