import React, { createContext, useReducer } from 'react';
import RoutesForNoAuth from './routes/RoutesForNoAuth';
import Reducer from './reducers';
import Dashboard from './pages/Dashboard';

// Context for Authentication values
export const AuthContext = createContext();

const initialState = {
    isAuthenticated: null,
    email: "",
    token: ""
};

const App = () => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <AuthContext.Provider 
            value={{
            state,
            dispatch
            }}>
            <div className="App">
                {!state.isAuthenticated ?           
                <RoutesForNoAuth /> :
                <Dashboard /> }

                {/* Remove this dashboard component when authentication is ready */}
                <Dashboard />
            </div>
        </AuthContext.Provider>
    );
}

export default App;