import React from 'react';
import './User.css'
const Users = (props) => {
    console.log(props);
    const { img, firstName, lastName, gender, salaryRange, designation, email, clicked } = props.user;
    return (
        <div>

            <div className="user-card">
                <div className="user-img">
                    <img src={img} alt="" />
                </div>
                <h6>Name : {firstName} {lastName}</h6>
                <h6>Gender: {gender}</h6>
                <h6>{designation}</h6>
                <h6>{email}</h6>
                <h6></h6>
                <h6>$ {salaryRange}</h6>
                {
                    !clicked ? <button onClick={() => props.addToCartHandler(props.user)}> <i class="fas fa-shopping-cart"></i> add to cart</button> : <button > <i class="fas fa-shopping-cart"></i> added</button>
                }

            </div>
        </div>

    );
};

export default Users;