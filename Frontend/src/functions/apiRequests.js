const url = "https://ec2-18-205-188-36.compute-1.amazonaws.com/api/v1/dogs/";

export const getAllDogs = async () => {
  try {
    const response = await fetch(`${url}search/`, {
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
    const response = await fetch(`${url}search/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    });
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

  try {
    const response = await fetch(`${url}admin/create`, {
      method: "POST",
      body: formData,
    });
    const dog = await response.json();
    console.log(dog);
  } catch (err) {
    console.log(err);
  }
};

export const patchDog = async (data, _id) => {
  console.log(data);

  try {
    const response = await fetch(`${url}admin/update/${_id}`, {
      headers: {
        "content-type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(data),
    });
    const dog = await response.json();
    console.log(dog);
  } catch (err) {
    console.log(err);
  }
};
