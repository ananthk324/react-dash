import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ManageChef_menu from "../pages/ManageChef_menu";
import FoodieUpcomingOrders from "../pages/FoodieUpcomingOrders";
import FoodiePreviousOrders from "../pages/FoodiePreviousOrders";
import ChefTransactions from "../pages/ChefTransactions";
import ViewFoodieProfile from "../pages/ViewFoodieProfile";
import ChefProfile from "../pages/ChefProfile";
import ViewDish from "../pages/ViewDish";
import ManageOrders from "../pages/ManageOrders";
import ManageChefs from "../pages/ManageChefs";
import ManageFoodies from "../pages/ManageFoodies";
import ManageMenus from "../pages/ManageMenus";
import ManageDishes from "../pages/ManageDishes";
import Financials from "../pages/Financials";
import Payouts from "../pages/Payouts";
import ManageMenuProfile from '../pages/ManageMenuProfile';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/dashboard" component={ Home } />
            <Route exact path="/" component={ Home } />
            <Route exact path="/home" component={ Home } />

            <Route exact path="/chefs" component={ ManageChefs } />
            <Route exact path="/chefs/view" component={ ChefProfile } />
            <Route exact path="/chefs/menu" component={()=> <ManageChef_menu title={'Menu'}/> } />
            <Route exact path="/chefs/dishes" component={()=> <ManageChef_menu title={'Dishes'}/> } />
            <Route exact path="/chefs/transactions" component={ ChefTransactions } />
            
            <Route exact path="/orders" component={ ManageOrders } />
            
            <Route exact path="/foodies" component={ ManageFoodies } />
            <Route exact path="/foodies/view/" component={ ViewFoodieProfile } />
            <Route exact path="/foodies/orders/upcoming" component={ FoodieUpcomingOrders } />
            <Route exact path="/foodies/orders/previous" component={ FoodiePreviousOrders } />

            <Route exact path="/menus" component={ ManageMenus } />
            <Route exact path="/menus/view/dish" component={ ViewDish } />
            <Route exact path="/menus/view/menu" component={()=> <ManageMenuProfile/> } />

            <Route exact path="/dishes" component={ ManageDishes } />
            
            <Route exact path="/financials" component={ Financials } />
            <Route exact path="/payouts" component={ Payouts } />
        </Switch>
    );
}

export default Routes;
