import React, { useState, useEffect } from "react";
import DogSearch from "../dogSeach/DogSearch";
import pawIcon from "../../icons/paw.png";
import data from "../../data/data.json";

function SearchPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [dogs, setDogs] = useState([]);

  // FOR FUTURE API USE ONCE BACKEND IS DONE
  // const fetchDogs = async (amount) => {
  //   try {
  //     let response = await fetch(
  //       `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=RANDOM&limit=${amount}`,
  //       {
  //         method: "GET",
  //         mode: "cors",
  //         headers: { "x-api-key": "27de5e48-de76-4181-b9da-03d9fa9d13ec" },
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((response) => {
  //         setDogs(response);
  //         setIsDogFound(true);
  //         setIsLoading(false);
  //       });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // useEffect(() => {
  //   if (dogs.length == 0) {
  //     fetchDogs(6);
  //     console.log(data[0].dog.img.profileImg);
  //   }
  // }, []);

  const Loading = () => {
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    setTimeout(Loading, 1250);
  }, []);

  return (
    <section className="searchPage">
      {isLoading && (
        <div className="searchPage-loading">
          {" "}
          <h3 className="searchPage-title"> Searching for pups </h3>
          <img src={pawIcon} alt="paw icon" className="searchPage-paw-icon" />
        </div>
      )}
      {!isLoading && <DogSearch dogList={data} />}
    </section>
  );
}

export default SearchPage;
