import RestaurantCard from './RestaurantCard';
import { ShimmerPostList } from "react-shimmer-effects";
import { useEffect, useState } from 'react';

export default function RestaurantList() {

    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        // setRestaurantList(rests)
        if (restaurantList.length == 0) {
            getRestaurantList();
            console.log('effect rendered');
        }
    }, [restaurantList]);

    async function getRestaurantList() {
        const uri = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const response = await fetch(uri);
        const json = await response.json();
        // console.log(json);   

        setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        console.log(restaurantList);
    }


    console.log(restaurantList);

    return restaurantList < 1 ? (
        <>
            <h2 className='rest-heading'>Top Restaurants</h2 >

                <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={1} gap={30} />
        </>
    ) : (
        <>
            <h2 className='rest-heading'>Top Restaurants</h2 >

            <div className='restaurant-list scrollbar' id='style-1'>

                {restaurantList.map((rest, index) => {
                    return <RestaurantCard rest={rest} key={index + 34} />;
                })}
            </div>
        </>
    );

}