import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import Explore from "./Explore/Explore.jsx";
import Items from "./Items/Items";
import RestaurantList from "./Restaurant/RestaurantList.jsx";
import RestsOnlineList from "./Restaurant/RestsOnlineList.jsx";
import './body.css'

function Body() {

    console.log(useOnlineStatus());

    return  (
    <section id="body-main">
            <div id="menu">
                <Items />
                <hr />
                <RestaurantList />
                <hr />
                <RestsOnlineList />
                <hr />
                <Explore />
                <hr />
            </div>
        </section>
    )
}

export default Body;