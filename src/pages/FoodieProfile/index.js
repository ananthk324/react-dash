import React from 'react';
import './FoodieProfile.css';
import TableSortable from '../../components/TableSortable';
import DoughnutChart from '../../components/DoughnutChart';
import data from '../../constants/ordersSampleData';
import columns from './columnsForTableOrders';
import Images from '../../assets/icons';
import { Link } from 'react-router-dom';

const FoodieProfile = () => {
    return (
        <div className="foodie-profile-container">

            <div className="breadcrumbs-container">
                <div>Manage Foodies<i className="fa fa-angle-right"></i></div>
                <div>Marion Rogers</div>
            </div>

            <div className="foodie-details-section">

                <div className="foodie-details">
                    <div className="profile-picture">
                        <img className="foodie-picture" src={Images.user1} />
                        <div className="foodie-name">
                            Marion Rogers
                        </div>
                        <div className="foodie-row">
                            <div className="foodie-username">@marionr</div>
                            <i className="fa fa-circle"></i>
                            <img className="foodie-icon" src={Images.foodie}></img>
                        </div>
                        <div className="joined-on">Joined on 02 January 2020</div>
                        <button className="block-button">Unblock</button>
                    </div>
                    <div className="profile-details">
                        <div className="foodie-contact">
                            <div><i className="fa fa-phone"></i>620-147-7012</div>
                            <div><i className="fa fa-envelope"></i>marione.rogers@gmail.com</div>
                            <div><i className="fa fa-map-marker"></i>438, Collin Pikes Apt, AUS, TX</div>
                        </div>
                        <div className="zymmo-tags">
                            <div>Zymmo Tags</div>
                            <div>Pizza, Dessert, Curry, Sandwiches, Italian, Cafe, Indian, Continental</div>
                        </div>
                        <div className="tagline">
                            <div>Tagline</div>
                            <div>"No rules. Don't be afraid to do whatever you want.
                                Cooking doesn't have any rules. I don't like it that way."</div>
                        </div>
                    </div>
                </div>

                <div className="orders-doughnutchart">
                        <DoughnutChart />
                </div>
            </div>

            <div className="table-selector-header">
                <div>
                    <select className="table-selector">
                        <option defaultValue>PREVIOUS ORDERS</option>
                        <option>UPCOMING ORDERS</option>
                    </select>
                </div>
                <div className="table-view-all">
                    <Link to="/foodies/orders/previous">
                        View all
                    </Link>
                </div>
            </div>
            
            <div className="table-section">
                <TableSortable columns={columns} data={data} />
            </div>
        </div>
    );
}

export default FoodieProfile;