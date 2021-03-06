import React, {useState} from 'react';
import profileImage from '../../assets/icons/user2.png';
import dish1 from '../../assets/icons/dish1.png';
import dish2 from '../../assets/icons/dish2.png';
import dish3 from '../../assets/icons/dish3.png';
import dish4 from '../../assets/icons/dish4.png';
import dish5 from '../../assets/icons/dish5.png';
import './chefProfile.css';
import ChefAbout from '../../components/ChefAbout';
import DataBox from '../../components/DataBox';
import Menu from '../../components/Menu';
import TableSortable from '../../components/TableSortable';
import Images from '../../assets/icons';
import { Link } from 'react-router-dom';

const ChefProfile = () => {

    const [personalDetails, setPersonalDetails] = useState({
        profilepicture: profileImage,
        name: "Frederick Simmons",
        id: "@fredrick",
        joinedOn: "Joined on 02 January 2020",
        phoneNo: "620-121-8407",
        mail: "kimmy.mclimorie@gmail.com",
        location: "438 Colin Apt. 804",
        tag: "Pizzeria, Dessert, Curry, Sandwiches, Italian, Cafe, Continental",
        tagLine: "No rules. Don't be afraid to do whatever you want. Cooking doesn't have to have rules. I don't like it that way.",
        blockedStatus: false
    })
    
    function updatePersonalDetails(){
        const details = {...personalDetails}
        details.blockedStatus = !details.blockedStatus
        setPersonalDetails(details)
    }

    return (
        <div>
            <div className="chefProfile">

                <div className="chefAbout">
                    <ChefAbout personalDetails={personalDetails} updatePersonalDetails = {updatePersonalDetails}></ChefAbout>
                </div>
                <div>
                    <div style={{ display: "flex", margin: "20px", marginTop: "93px" }}>
                        <div className="menuCount">
                            <DataBox name={menuCount.name} count={menuCount.count}></DataBox>
                        </div>
                        <div className="menuCount" style={{ marginLeft: "20px" }}>
                            <DataBox name={dishCount.name} count={dishCount.count}></DataBox>
                        </div>
                        <div className="orderCount" style={{ marginLeft: "20px" }}>
                            <DataBox name={orderCount.name} count={orderCount.count}></DataBox>
                        </div>
                        <div className="amount" style={{ marginLeft: "20px" }}>
                            <DataBox name={amount.name} count={amount.amount}></DataBox>
                        </div>
                    </div>
                    <div className="menu">
                        <Menu dishes={dishes}></Menu>
                    </div>

                </div>

            </div>
            <div style={{ marginTop: "40px" }}>
                <div>
                    <span className="transactionText">TRANSACTIONS</span>
                    <button className="viewButton">
                        <Link to="/chefs/transactions">
                            View all
                        </Link>
                    </button>
                </div>
                <div className="chefTable">
                    <TableSortable columns={columns} data={data}></TableSortable>
                </div>
            </div>
        </div>
    )
}

export default ChefProfile;



const menuCount = {
    name: "No. of menus", count: "20"
}
const dishCount = {
    name: "No. of dishes", count: "40"
}
const orderCount = {
    name: "Orders completed", count: "21"
}
const amount = {
    name: "Amount earned", amount: "$144"
}

const dishes = [{
    dishImage: dish1, menuType: "Thai Menu", dishCount: "9"
},
{
    dishImage: dish2, menuType: "Soup Menu", dishCount: "25"
},
{
    dishImage: dish3, menuType: "Dessert Menu", dishCount: "13"
},
{
    dishImage: dish4, menuType: "Thai Menu", dishCount: "9"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
},
{
    dishImage: dish5, menuType: "Burger Menu", dishCount: "25"
}
]

const columns = [
    {
        Header: <div>FOODIE<i className="fa fa-sort"></i></div>,
        accessor: 'foodie.name',
        Cell: row => {
            return (
                <div className="cell-container">
                    <img className="cell-data-image" src={row.row.original.foodie.image} />
                    <div>
                        <span className="cell-data-name">{row.row.original.foodie.name}</span>
                        <span className="cell-data-username">{row.row.original.foodie.username}</span>
                    </div>
                </div>
            )
        }
    }, {
        Header: 'DISHES',
        accessor: 'dishes',
        Cell: row => {
            return (
                <div className="cell-container">
                    <img className="cell-data-image" src={row.value.image} />
                    <span className="cell-data-dish">{row.value.dish}</span>
                </div>
            )
        },
        disableSortBy: true
    }, {
        Header: <div>PLACED DATE<i className="fa fa-sort"></i></div>,
        accessor: 'placed_date'
    }, {
        Header: <div>DELIVERY DATE<i className="fa fa-sort"></i></div>,
        accessor: 'delivery_date'
    }, {
        Header: <div>AMOUNT<i className="fa fa-sort"></i></div>,
        accessor: 'amount'
    }

];

const data = [
    {
        foodie: {
            name: 'Marion Rogers',
            username: '@evarivera',
            image: Images.user1
        },
        dishes: {
            dish: 'Sphagethi arabiata',
            image: Images.dish1
        },
        placed_date: '19-04-2020',
        delivery_date: '28-04-2020',
        amount: '$8.85'
    },
    {
        foodie: {
            name: 'Steve Graham',
            username: '@steve',
            image: Images.user2
        },
        dishes: {
            dish: 'Pasta',
            image: Images.dish2
        },
        placed_date: '18-04-2020',
        delivery_date: '28-04-2020',
        amount: '$11.00'
    }
];