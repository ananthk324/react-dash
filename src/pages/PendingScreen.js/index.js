import React from 'react';
import { Link } from 'react-router-dom';
import './PendingScreen.css';

const PendingScreen = (props) => {
    if (props.links.length !== 0) {
        return (
            <div className="pending-screen">
                <div>{props.title ? props.title : "Pending Screen"}</div>
                <div className="navigation-links">
                    {props.link.map(link => {
                        return (
                            <Link to={`${link.path}`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div className="pending-screen">Nothing Here</div>
        )
    }
}

export default PendingScreen;