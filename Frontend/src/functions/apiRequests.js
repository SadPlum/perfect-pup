export const getAllDogs = async () => {
  try {
    const response = await fetch("http://127.0.0.1:3004/api/v1/dogs/search/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    });
    const dogs = await response.json();
    return dogs.data;
  } catch (err) {
    console.log(err);
  }
};

export const getDog = async (id) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:3004/api/v1/dogs/search/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      }
    );
    const dog = await response.json();
    console.log(dog);
    return dog.data;
  } catch (err) {
    console.log(err);
  }
};

export const postNewDog = async (data) => {
  let formData = new FormData();
  Object.keys(data).forEach((key) => formData.append(key, data[key]));

  console.log(formData);
  try {
    const response = await fetch("http://127.0.0.1:3004/api/v1/dogs/admin", {
      method: "POST",
      body: formData,
    });
    const dog = await response.json();
    console.log(dog);
  } catch (err) {
    console.log(err);
  }
};
