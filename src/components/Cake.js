const Cake = ({name, ingredients, price, rating}) => {
    // const array = []
    // ingredients.forEach(element => {
    //     array.push(element)
    // });

    return ( 
        <>
        <h3>{name}</h3>
        <ul>Ingredients:</ul>
        
        <li> {ingredients[0]}</li>
        <li> {ingredients[1]}</li>
        <li> {ingredients[2]}</li>
        <li> {ingredients[3]}</li>
        <li> {ingredients[4]}</li>
        <li> {ingredients[5]}</li>

        <p>Price: {price} </p>
        <p>Rating: {rating}</p>
        </>

     );
}
 
export default Cake;