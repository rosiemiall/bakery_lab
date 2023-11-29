import {useState} from 'react';
import Cake from '../components/Cake';

const BakeryContainer = () => {
    const [vicSponge, setVicSponge] = useState({
        // cake info
    })



    return ( 
        <>
            <h1>Cakes!</h1>
                <Cake 
                    name={"Victoria Sponge"}
                    ingredients={[
                        "eggs",
                       "butter",
                       "sugar",
                       "self-raising flour",
                       "baking powder",
                       "milk"
                    ]}
                    price = {5}
                    rating = {5}
                />
                <Cake 
                    name={"Tea Loaf"}
                    ingredients={[
                        "eggs",
                       "oil",
                       "dried fruit",
                       "sugar",
                       "self-raising flour",
                       "strong tea",
                    ]}
                    price = {5}
                    rating = {5}
                />
                <Cake 
                    name={"Carrot Cake"}
                    ingredients={[
                        "carrots",
                          "walnuts",
                          "oil",
                          "cream cheese",
                          "flour",
                          "sugar",
                       ]}
                    price = {5}
                    rating = {5}
                />
                <p>Average Rating: {}</p>
        </>
     );
}
 
export default BakeryContainer;