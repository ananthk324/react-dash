import React from 'react'
import './Menu.css';
import { TiArrowSortedDown } from 'react-icons/ti';
import DishItem from './DishItem';
import { Link } from 'react-router-dom';

function Menu({ dishes }) {
    const count = dishes.length

    return (
        <div className="Menu">
            <div className="content">
                <div>
                    <button className="menuButton">MENUS <TiArrowSortedDown style={{ width: "20px", height: "20px" }}></TiArrowSortedDown> </button>
                    <button className="viewAllButton">
                    <Link to="/chefs/menu">
                            View all
                    </Link></button>
                </div>
                <div className="dishes">
                    {dishes.slice(0, 14).map((dish) => (

                        <div className="dish">
                            <DishItem dish={dish} count={count}></DishItem>
                        </div>
                    ))}
                    <div style = {{position: "relative"}}>
                        <img src={dishes[14].dishImage} className="lastDish"></img>
                        <p className = "extras">+5 More</p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Menu;