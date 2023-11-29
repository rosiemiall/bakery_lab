const Cake = ({name, ingredients, price, rating}) => {
    return ( 
        <>
        <h3>{name}</h3>
        <ul>Ingredients:</ul>
        <li> {ingredients}</li>
        <p>Price: {price} </p>
        <p>Rating: {rating}</p>
        </>

     );
}
 
export default Cake;