import React from 'react';
import './User.css'
const Users = (props) => {
    const { img, firstName, lastName, gender, salaryRange, designation, email, clicked, experience } = props.user;
    return (
        <div>
            {/* ----------------showing user pic and details------------- */}
            <div className="user-card">
                <div className="user-img">
                    <img src={img} alt="" />
                </div>
                <p>Name : {firstName} {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Designation: {designation}</p>
                <p>E-mail: {email}</p>
                <p>Experience: {experience}</p>
                <p>Expected Salary: $ {salaryRange}</p>
                {
                    !clicked ? <button onClick={() => props.addToCartHandler(props.user)}> <i className="fas fa-shopping-cart"></i> add to cart</button> : <button > <i className="fas fa-shopping-cart"></i> added</button>
                }

            </div>
        </div>

    );
};

export default Users;