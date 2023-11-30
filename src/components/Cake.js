const Cake = ({ cake, onButtonClick, earnings }) => {

  const buyCake = () => {
    onButtonClick(earnings + cake.price);
  };

  return (
    <>
      <box id="box">
        
        <h3 id="names">{cake.cakeName}</h3>
        <hr />
        <ul>Ingredients: {cake.ingredients.map(ingredient=> {return <li>{ingredient}</li>} )}</ul>
      
        <p>Price: £{cake.price} </p>
        <p>Rating: {cake.rating}</p>
        <hr />
        <button id="button" onClick={buyCake}>
          Sell Cake
        </button>
        
      </box>
    </>
  );
};

export default Cake;
