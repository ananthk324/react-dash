const Reducer = (state, action) => {

    switch (action.type) {
        case "SIGNIN":
            return {
                ...state,
                isAuthenticated: true,
                email: action.payload,
                token: action.token
            };

        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                email: "",
                token: ""
            };

        default:
            return state;
    }
};

export default Reducer;