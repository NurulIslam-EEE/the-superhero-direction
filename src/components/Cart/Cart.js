import React from 'react';
import Added from '../Added/Added';
import './Cart.css'

const Cart = (props) => {



    const totalReducer = (previous, present) => previous + parseFloat(present.salaryRange);
    const total = props.selected.reduce(totalReducer, 0);
    return (
        <div >
            <div className="cart">
                <h3><i class="fas fa-user"></i> Selected :{props.selected.length} </h3>
                <h4>Total Cost:$ {total.toFixed(2)}</h4>
            </div>

            {
                props.selected.map(user => <Added img={user.img} firstName={user.firstName}
                    lastName={user.lastName}></Added>)
            }


        </div>
    );
};

export default Cart;