import React,{useState} from 'react';
import './Order.css';
import Images from '../../assets/icons';


const Order = () => {

    const [Refund, setRefund] = useState(true)

    return (
        <div className="order-container">
            <div className="breadcrumbs-container">
                <div>Manage Orders<i className="fa fa-angle-right"></i></div>
                <div>ID 41629920853</div>
            </div>
            <div className="order-details-container">
                <div className="order-details-section">
                    <div className="order-details-left">
                        <img className="dish-picture" src={Images.dish5} />
                        <div className="dish-name">
                            Pizza Menu
                        </div>
                        <div className="chef-row">
                            <img className="chef-pic" src={Images.user2} />
                            <div>
                                <div className="chef-name">Federic Simmons</div>
                                <div className="box">
                                    <div className="chef-username">@federic</div>
                                    <i className="fa fa-circle"></i>
                                    <img className="chef-icon" src={Images.chef} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-details-right">
                        <div className="order-items">
                            <div className='item'>
                                <div className="item-left-part">
                                    <img className="item-img" src={Images.dish1}></img>
                                    <div className="item-details">
                                        <div className='item-name'>Sphagethi arabiata</div>
                                        <div className='single-price'>1 x $8.85</div>
                                    </div>
                                </div>
                                <div className="item-right-part">$8.85</div>
                            </div>
                            <div className='item'>
                                <div className="item-left-part">
                                    <img className="item-img" src={Images.dish2}></img>
                                    <div className="item-details">
                                        <div className='item-name'>Mutton melted soup</div>
                                        <div className='single-price'>2 x $8.85</div>
                                    </div>
                                </div>
                                <div className="item-right-part">$11.00</div>
                            </div>
                            <div className='item'>
                                <div className="item-left-part">
                                    <img className="item-img" src={Images.dish3}></img>
                                    <div className="item-details">
                                        <div className='item-name'>Tuna Pasta ravioli</div>
                                        <div className='single-price'>1 x $2.85</div>
                                    </div>
                                </div>
                                <div className="item-right-part">$2.85</div>
                            </div>
                            <div className='item-total'>
                                <div className="text">Item Total</div>
                                <div className="items-price">$21.85</div>
                            </div>
                            <div className='tax-charges'>
                                <div className="text">Tax and charges</div>
                                <div className='items-price'>$2.00</div>
                            </div>
                            <div className='grand-total'>
                                <div className="text">GrandTotal</div>
                                <div className='grand-total-price'>$23.85</div>
                            </div>
                            <div className='refund' style={Refund?{}:{display:'none'}}>
                                <div className="text">
                                    <div className="checkmark">
                                        <span className="tick-mark">
                                            &#10003;
                                        </span>
                                    </div>
                                    Refunded
                                </div>
                                <div className='refund-price'>$23.85</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-info">

                    <div className="order-status">
                        Order Upcoming
                    </div>
                    <div className="foodie-info">
                        <div className="foodie-profile">
                            <img className="profile-pic" src={Images.user1}></img>
                            <div className="foodie-details">
                                <div className="name">Marion Rogers</div>
                                <div className="username">@evarivera</div>
                                <div className="location"><i class="fa fa-map-marker" aria-hidden="true" /> 438 Colin Pike Apt. 804</div>
                            </div>
                        </div>
                        <div className="order-date-info">
                            <div className="order-placed">
                                <div className="status">
                                    <div className="oval"></div>
                                    <div className="line"></div>

                                    <div>
                                        <div className="status-text">Order placed</div>
                                        <div className="date">10:00 am on 27 May 2012</div>
                                    </div>

                                </div>

                            </div>
                            <div className="order-accepted">
                                <div className="status">
                                    <div className="oval"></div>
                                    <div>
                                        <div className="status-text">Order accepted</div>
                                        <div className="date">1:00 am on 28 May 2012</div>
                                    </div>
                                </div>
                            </div>
                            <div className="expected-delivery">
                                <div className="status">
                                    <div className="oval"></div>
                                    <div>
                                        <div className="status-text">Expected delivery</div>
                                        <div className="date">10:00 am on 12 June 2012</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='remark'>
                <div className="text">REMARK</div>
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Start Typing..."></textarea>
                <button type="button">Save</button>
            </div>
        </div>
    );
}

export default Order;