import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../../../icons/arrow-left-solid.svg";
import Button from "../Button/Button";

function SingleDog({
  name,
  sex,
  id,
  breed,
  age,

  description,
  image,

  vaccinations,
}) {
  const dogRef = useRef(null);

  return (
    <section className="singleDog" ref={dogRef}>
      <Link to="/search">
        {" "}
        <button className="singleDog-close">
          <LeftArrow className="singleDog-arrow" />
        </button>
      </Link>

      <section className="singleDog-main">
        <div className="singleDog-img-box">
          <img
            src={image}
            className="singleDog-img"
            alt={` ${name} the ${breed}`}
          />
        </div>
        <div className="singleDog-main-text">
          <div className="singleDog-title">
            <h3>
              <span>Hi, my name is </span>
              <span className="dog-name">{`${name}`}</span>
              <span>!</span>
            </h3>
            <h4>{`I'm a ${breed}.`}</h4>
          </div>
          <article className="singleDog-info-box">
            <div className="singleDog-info">
              <span className="singleDog-info-bold"> Sex: </span>
              <span className="singleDog-info-text">{`${sex}`}</span>
            </div>
            <div className="singleDog-info">
              <span className="singleDog-info-bold">Age: </span>
              <span className="singleDog-info-text">{`${age}`}</span>
            </div>
            <div className="singleDog-info">
              <span className="singleDog-info-bold">Vaccinated: </span>
              <span className="singleDog-info-text">
                {vaccinations ? "Yes" : "No"}
              </span>
            </div>
          </article>
        </div>
      </section>
      <section className="singleDog-details">
        <div className="singleDog-content">
          <article className="singleDog-description-box">
            <p className="singleDog-description">{description}</p>
            <p className="singleDog-description">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              deserunt fuga veritatis. Debitis quas quae a vel labore dicta
              atque nesciunt quo. Assumenda quia doloremque nisi maiores natus
              inventore vero voluptate sapiente facere expedita officia ea
              nostrum labore quas molestiae, illum, libero perspiciatis aut.
            </p>
            <p className="singleDog-description">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              deserunt fuga veritatis. Debitis quas quae a vel labore dicta
              atque nesciunt quo. Assumenda quia doloremque nisi maiores natus
              inventore vero voluptate sapiente facere expedita officia ea
              nostrum labore quas molestiae, illum, libero perspiciatis aut.
            </p>
          </article>
          <div>
            <Button to="" text={`Adopt ${name}`} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default SingleDog;
