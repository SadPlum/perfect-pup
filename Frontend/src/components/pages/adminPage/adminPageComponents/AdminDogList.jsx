import React, { useEffect, useState } from "react";
import { getAllDogs } from "../../../../functions/apiRequests";

function AdminDogList({ setDog }) {
  const [dogList, setDogList] = useState(null);

  useEffect(() => {}, []);

  return <div>AdminDogList</div>;
}

export default AdminDogList;
