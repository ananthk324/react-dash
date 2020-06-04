import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ManageChef_menu from "../pages/ManageChef_menu";
import FoodieUpcomingOrders from "../pages/FoodieUpcomingOrders";
import FoodiePreviousOrders from "../pages/FoodiePreviousOrders";
import ChefTransactions from "../pages/ChefTransactions";
import ViewFoodieProfile from "../pages/ViewFoodieProfile";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/dashboard" component={ Home } />
            <Route exact path="/" component={ Home } />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/chefs/menu" component={()=> <ManageChef_menu title={'Menu'}/> } />
            <Route exact path="/chefs/dishes" component={()=> <ManageChef_menu title={'Dishes'}/> } />
            <Route exact path="/chefs/transactions" component={ ChefTransactions } />
            <Route exact path="/foodies/view/" component={ ViewFoodieProfile } />
            <Route exact path="/foodies/orders/upcoming" component={ FoodieUpcomingOrders } />
            <Route exact path="/foodies/orders/previous" component={ FoodiePreviousOrders } />
        </Switch>
    );
}

export default Routes;