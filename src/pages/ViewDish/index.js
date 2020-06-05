import React from 'react';
import './ViewDish.css';
import Images from '../../assets/icons';
import DataBox from '../../components/DataBox';

const ViewDish = () => {
    return (
        <div className="dish-view-container">
            <div className="breadcrumbs-container">
                <div>Manage Dishes<i className="fa fa-angle-right"></i></div>
                <div>Neapolitan Pizza</div>
            </div>
            <div className="details-container">
                <div className="dish-details-section">
                    <div className="dish-details-left">
                        <img className="dish-picture" src={Images.dish3} />
                        <div className="dish-name">
                            Neopolitan Pizza
                        </div>
                        <div className="added-on">Added on 05 June 2020</div>
                        <div className="chef-row">
                            <img className="chef-pic" src={Images.user2} />
                            <div>
                                <div className="chef-name">Indiana Jones</div>
                                <div className="box">
                                    <div className="chef-username">@indJones</div>
                                    <i className="fa fa-circle"></i>
                                    <img className="chef-icon" src={Images.chef} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dish-details-right">
                        <div className="zymmo-tags">
                            <div>Zymmo Tags</div>
                            <div>Pizza, Dessert, Curry, Sandwiches, Italian, Cafe, Indian, Continental</div>
                        </div>
                        <div className="dish-ingredients">
                            <div>Ingredients</div>
                            <div className="ingredient-list">{
                                ingredient.map(ing => {
                                    return (
                                        <div className={`ingredient${ing.allerg ? " allergen" : ""}`}>
                                            <i className="fa fa-circle"></i>
                                            {ing.ing}
                                            {ing.allerg ? <i className="fa fa-exclamation-circle"></i> : ``}
                                        </div>
                                    )
                                })
                            }</div>
                        </div>
                        <div className="dish-description">
                            Neopolitan Pizza is a Naples-style pizza made with tomatoes and mozarella cheese.
                        </div>
                    </div>
                </div>  

                <div className="data-box-container">
                    <DataBox name={"Total Amount"} count={"$6.5"} />
                    <DataBox name={"No. of times Ordered"} count={"123"} />
                </div>              
            </div>
        </div>
    );
}

const ingredient = [{ing: "Wheat Flour", allerg: false},
                    {ing: "Mozarella Cheese", allerg: false},
                    {ing: "Sugar", allerg: false},
                    {ing: "Yeast", allerg: false},
                    {ing: "Tomato", allerg: false},
                    {ing: "Pine Nuts", allerg: true}];

export default ViewDish;