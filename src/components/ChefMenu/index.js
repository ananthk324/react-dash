import React, { useState } from 'react';
import './ChefMenu.css';
import Images from '../../assets/icons';

export default function ChefMenu({title}) {

    const [menuDetails, setmenuDetails] = useState([{
        name: "Dessert Menu", image_url: Images.dish5, ingre_count: 10
    }, {
        name: "Dessert Menu", image_url: Images.dish5, ingre_count: 12
    }, {
        name: "Thai Menu", image_url: Images.dish5, ingre_count: 10
    },
    {
        name: "Dessert Menu", image_url: Images.dish5, ingre_count: 5
    },
    {
        name: "Thai Menu", image_url: Images.dish5, ingre_count: 10
    },
    {
        name: "Dessert Menu", image_url: Images.dish5, ingre_count: 7
    }, {
        name: "Dessert Menu", image_url: Images.dish5, ingre_count: 10
    }, {
        name: "Thai Menu", image_url: Images.dish5, ingre_count: 8
    },
    {
        name: "Thai Menu", image_url: Images.dish5, ingre_count: 10
    },
    {
        name: "Dessert Menu", image_url: Images.dish5, ingre_count: 10
    }, {
        name: "Thai Menu", image_url: Images.dish5, ingre_count: 11
    }, {
        name: "Dessert Menu", image_url: Images.dish5, ingre_count: 10
    },
    {
        name: "Thai Menu", image_url: Images.dish5, ingre_count: 9
    },
    {
        name: "Dessert Menu", image_url: Images.dish5, ingre_count: 11
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
                                <span className='menuName' style={title==="Menu"?{}:{top:"-53px"}}>{menuDetails.name}</span>
                                <div className='overImage_bottom' style={title==="Menu"?{}:{display:'none'}}>
                                    <img className='ingredientIcon' src={Images.ingredients_icon}></img>
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
