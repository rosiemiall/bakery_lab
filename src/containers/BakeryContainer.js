import { useState } from "react";
import Cake from "../components/Cake";

const BakeryContainer = () => {
  const [vicSponge] = useState({
    cakeName: "Victoria Sponge",
    ingredients: [
      "eggs",
      "butter",
      "sugar",
      "self-raising flour",
      "baking powder",
      "milk",
    ],
    price: 5,
    rating: 4,
  });

  const [teaLoaf] = useState({
    cakeName: "Tea Loaf",
    ingredients: [
      "eggs",
      "oil",
      "dried fruit",
      "sugar",
      "self-raising flour",
      "strong tea",
    ],
    price: 2,
    rating: 3,
  });
  const [carrotCake] = useState({
    cakeName: "Carrot Cake",
    ingredients: [
      "carrots",
      "walnuts",
      "oil",
      "cream cheese",
      "flour",
      "sugar",
    ],
    price: 8,
    rating: 5,
  });

  const [totalEarnt, setTotalEarnt] = useState(0);
  const earnings = totalEarnt;

  return (
    <>
      <h1 id="title">Cakes!</h1>
      <p className="para">
        Average Rating:{" "}
        {(vicSponge.rating + teaLoaf.rating + carrotCake.rating) / 3}
      </p>
      <p className="para">Total Earnt: £{totalEarnt}</p>
      <section className="cakes">
        <Cake
          cake={vicSponge}
          onButtonClick={setTotalEarnt}
          earnings={earnings}
        />
        <Cake
          cake={teaLoaf}
          onButtonClick={setTotalEarnt}
          earnings={earnings}
        />
        <Cake
          cake={carrotCake}
          onButtonClick={setTotalEarnt}
          earnings={earnings}
        />
      </section>
    </>
  );
};

export default BakeryContainer;
