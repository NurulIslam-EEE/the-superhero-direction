import React from 'react';
import './Added.css'
const Added = (props) => {
    const { img, name } = props;
    return (
        <div>
            <div className="user-added">
                <img className="img" src={img} alt="" />
                <h3>{name}</h3>
            </div>

        </div>
    );
};

export default Added;