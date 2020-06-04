import React, { useState } from 'react';
import './ChefMenu.css';
import food from '../../assets/food.jpg';
import ingredient_icon from '../../assets/menu_overImage_icon.png';
import ManageChef_menu from '../../pages/ManageChef_menu';

export default function ChefMenu({title}) {

    const [menuDetails, setmenuDetails] = useState([{
        name: "Noodles", image_url: food, ingre_count: 10
    }, {
        name: "Noodles", image_url: food, ingre_count: 10
    }, {
        name: "Noodles", image_url: food, ingre_count: 10
    },
    {
        name: "Noodles", image_url: food, ingre_count: 10
    },
    {
        name: "Noodles", image_url: food, ingre_count: 10
    },
    {
        name: "Noodles", image_url: food, ingre_count: 10
    }, {
        name: "Noodles", image_url: food, ingre_count: 10
    }, {
        name: "Noodles", image_url: food, ingre_count: 10
    },
    {
        name: "Noodles", image_url: food, ingre_count: 10
    },
    {
        name: "Noodles", image_url: food, ingre_count: 10
    }, {
        name: "Noodles", image_url: food, ingre_count: 10
    }, {
        name: "Noodles", image_url: food, ingre_count: 10
    },
    {
        name: "Noodles", image_url: food, ingre_count: 10
    },
    {
        name: "Noodles", image_url: food, ingre_count: 10
    }])
    return (
        <div className='Chefpage'>
            <span className='Breadcrumb'>Manage Chefs > Frederick Simmons > {title}</span>
            <div className='Chefcontainer'>
                <span className='title'>{title.toUpperCase()}<span class="dot"></span> {menuDetails.length}</span>
                <div className='row'>
                    {menuDetails.map((menuDetails,i) => (
                        <>
                            <img className='menu_dish_image' src={menuDetails.image_url} alt="hello"></img>
                            <div className='overImage'>
                                <span className='menuName'>{menuDetails.name}</span>
                                <div className='overImage_bottom'>
                                    <img className='ingredientIcon' src={ingredient_icon}></img>
                                    <span className='ingredientCount'>{menuDetails.ingre_count} </span>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
