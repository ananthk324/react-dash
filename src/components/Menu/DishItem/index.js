import React from 'react';
import './DishItem.css';
import dishShape from '../../../assets/icons/Shape.png';


function DishItem({ dish, count }) {
    return (
        <div className="dishItem">
            <div className="menuContent">
                <img src={dish.dishImage} className="dishImage"></img>
                <p className="menuType">{dish.menuType}</p>
                <img src={dishShape} className = "dishIcon"></img>
                <p className="dishCount">{dish.dishCount}</p>
            </div>
        </div>
    )
}

export default DishItem;