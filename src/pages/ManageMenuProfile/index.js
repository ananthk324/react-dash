import React from 'react'
import './ManageMenuProfile.css'
import Images from '../../assets/icons';
import data from '../../constants/dishesSampleData';
import columns from '../../constants/columnsForTableDishes';
import Table from '../../components/Table';
import DataBox from '../../components/DataBox';


function ManageMenuProfile() {
    return (
        <div className="menu-profile-container">
            <div className="breadcrumbs-container">
                <div>Manage Menus<i className="fa fa-angle-right"></i></div>
                <div>Asian Cuisine</div>
            </div>
            <div className="menu-details-section">
                <div className="menu-details">
                    <div className="profile-picture">
                        <img className="menu-picture" src={Images.dish5} />
                        <div className="menu-name">
                            Italian Cuisine
                        </div>
                        {/* <div className="menu-row">
                            <div className="menu-username">@marionr</div>
                            <i className="fa fa-circle"></i>
                            <img className="foodie-icon" src={Images.foodie}></img>
                        </div> */}
                        <div className="added-on">Added on 02 January 2020</div>
                    </div>
                    <div className="profile-details">
                        <div className="chef-contact">
                            <img className="profile-pic" src={Images.user2}></img>
                            <div className='profile-name'>
                                <div>Federic Simmons</div>
                                <div className="profile-username">
                                    @federic<i className="fa fa-circle" />
                                    <img className="chef_icon" src={Images.chef} />
                                </div>
                            </div>
                        </div>
                        <div className="zymmo-tags">
                            <div>Zymmo Tags</div>
                            <div>
                                Pizzeria, Dessert, Curry, Cake,
                                Sandwiches, Italian, Cafe,
                                Continental, Asian, Indian, Thai,
                                Dessert, Sweet, Spicy, Healthy,
                                Gluten free
                            </div>
                        </div>
                    </div>
                </div>
                <div className="orders-databox">
                    <DataBox name={"No. of times ordered"} count={"21"} />

                </div>
                <div className="orders-databox">
                    <DataBox name={"Total Amount"} count={"$35"} />
                </div>
            </div>
            <div className="table-selector-header">
                <div className="table-title">
                    DISHES INCLUDED<i className="fa fa-circle" />5
                </div>
            </div>
            <div className="table-section">
                <Table columns={columns} data={data} />
            </div>
        </div>
    )
}
export default ManageMenuProfile;