import React from 'react';
import chefIcon from '../../assets/icons/chef.png';
import mailIcon from '../../assets/icons/mail.png';
import locationIcon from '../../assets/icons/location.png';
import { FiPhone } from 'react-icons/fi';
import './ChefAbout.css';

function chefAbout({ personalDetails, updatePersonalDetails }) {

    return (
        <div className="chefAbout">
            <span className="pageName">Manage Chefs ></span>
            <span className="profileName"> {personalDetails.name}</span>
            <div className="About">
                <div style={{ marginTop: "20px" }}>
                    <div>
                        <img src={personalDetails.profilepicture} className="profileImage"></img>
                        <p className="chefName">{personalDetails.name}</p>
                        <span className="chefId" style={{ display: "flex", margin: "auto" }}>
                            <p style={{ margin: "auto" }}>{personalDetails.id} </p>
                            <img src={chefIcon} style={{ height: "13px", width: "25px", margin: "auto 10px" }}></img>
                        </span>
                    </div>
                    <p className="chefJoinedOn">{personalDetails.joinedOn}</p>
                    <button className="blockButton" onClick = {updatePersonalDetails}>{personalDetails.blockedStatus? 'Unblock': 'Block'}</button>
                    <hr className="borderLine"></hr>
                    <div className="contactDetails">
                        <span style={{ display: "flex", margin: "20px" }}>
                            <FiPhone style={{ height: "14px", width: "13px", margin: "auto 10px" }}></FiPhone>
                            <p style={{ margin: "auto 10px" }}>{personalDetails.phoneNo}</p></span>
                        <span style={{ display: "flex", margin: "20px" }}>
                            <img src={mailIcon} style={{ height: "10px", width: "14px", margin: "auto 10px" }}></img>
                            <p style={{ margin: "auto 10px" }}>{personalDetails.mail}</p>
                        </span>
                        <span className="chefLocation" style={{ display: "flex", margin: "20px" }}>
                            <img src={locationIcon} style={{ boxSizing: "border-box", height: "14px", width: "11px", margin: "auto 10px" }}></img>
                            <p style={{ margin: "auto 10px" }}>{personalDetails.location}</p>
                        </span>
                    </div>
                    <div className="zymmoTags">
                        <p >Zymmo Tags </p>
                        <p>{personalDetails.tag}</p>
                    </div>
                    <div className="tagLine"><p >Tagline </p>
                        <p>{personalDetails.tagLine}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default chefAbout;