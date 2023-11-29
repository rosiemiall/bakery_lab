const Cake = ({ cake, onButtonClick, earnings }) => {
  // const array = []
  // ingredients.forEach(element => {
  //     array.push(element)
  // });

  const buyCake = () => {
    onButtonClick(earnings + cake.price);
  };

  return (
    <>
      <box>
        <hr />
        <h3 id="names">{cake.cakeName}</h3>
        <ul>Ingredients:</ul>

        <li> {cake.ingredients[0]}</li>
        <li> {cake.ingredients[1]}</li>
        <li> {cake.ingredients[2]}</li>
        <li> {cake.ingredients[3]}</li>
        <li> {cake.ingredients[4]}</li>
        <li> {cake.ingredients[5]}</li>

        <p>Price: {cake.price} </p>
        <p>Rating: {cake.rating}</p>
        <button id="button" onClick={buyCake}>
          Sell Cake
        </button>
        <hr />
      </box>
    </>
  );
};

export default Cake;
