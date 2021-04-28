import React from 'react';
import './Account.scss';
import { Menu } from 'react-feather';

const Account = (props) => {
    return (
        <div className="account">
            <div className="account__img">
                <img
                    src="https://pic.egybest.net/i/YWxZRWNtam1wYkVjdmN2Y21ibW90d3hs.jpg"
                    alt="Blue Falcon"
                />
            </div>
            {/* <div className="sidebar__account-name">Ayarasdsadasdasdasd</div> */}
            <div className="account__settings" onClick={props.onClick}>
                <Menu />
            </div>
        </div>
    );
};

export default Account;
