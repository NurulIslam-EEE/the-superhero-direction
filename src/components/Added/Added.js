import React from 'react';
import './Added.css'

const Added = (props) => {
    const { img, firstName, lastName } = props;
    return (
        <div>
            <div className="user-added">
                <img className="img" src={img} alt="" />
                <h5>{firstName} {lastName}</h5>
                <button>X</button>
            </div>

        </div>
    );
};

export default Added;