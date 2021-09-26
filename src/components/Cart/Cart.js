import React from 'react';
import Added from '../Added/Added';
import './Cart.css'

const Cart = (props) => {
    // ------------------update total and showing selected user-----------
    const { selected } = props;
    console.log(selected);
    const totalReducer = (previous, present) => previous + parseFloat(present.salaryRange);
    const total = selected.reduce(totalReducer, 0);
    return (
        <div >

            <div className="cart">
                <h3><i className="fas fa-user"></i> Selected :{selected.length} </h3>
                <h4>Total Cost:$ {total.toFixed(2)}</h4>
            </div>

            {
                selected.map(user => <Added
                    key={user.id}
                    img={user.img} firstName={user.firstName}
                    lastName={user.lastName}></Added>)
            }


        </div>
    );
};

export default Cart;