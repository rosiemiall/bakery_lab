import {useState} from 'react';
import Cake from '../components/Cake';

const BakeryContainer = () => {
    // const [vicSponge, setVicSponge] = useState({
    //     // cake info
    // })

    const [vicRating] = useState(5);
    const [teaRating] = useState(3);
    const [carrotRating] = useState(5);

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
                    rating = {vicRating}
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
                    price = {2}
                    rating = {teaRating}
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
                    price = {8}
                    rating = {carrotRating}
                />
                <p>Average Rating: {(vicRating + teaRating + carrotRating)/3}</p>
        </>
     );
}
 
export default BakeryContainer;