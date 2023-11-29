import {useState} from 'react';
import Cake from '../components/Cake';

const BakeryContainer = () => {
    // const [vicSponge, setVicSponge] = useState({
    //     // cake info
    // })

    const [vicRating] = useState(5);
    const [teaRating] = useState(3);
    const [carrotRating] = useState(5);
    const [totalEarnt, setTotalEarnt] = useState(0);
    const earnings = totalEarnt;

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
                    onButtonClick={setTotalEarnt}
                    earnings={earnings}
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
                    onButtonClick={setTotalEarnt}
                    earnings={earnings}
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
                    onButtonClick={setTotalEarnt}
                    earnings={earnings}
                />
                <p>Average Rating: {(vicRating + teaRating + carrotRating)/3}</p>
                <p>Total Earnt: {totalEarnt}</p>
        </>
     );
}
 
export default BakeryContainer;