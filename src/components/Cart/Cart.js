import React from 'react';
import Added from '../Added/Added';

const Cart = (props) => {



    const totalReducer = (previous, present) => previous + parseFloat(present.salaryRange);
    const total = props.selected.reduce(totalReducer, 0);
    return (
        <div>
            <h3>Selected :{props.selected.length} </h3>
            <h3>Total Cost:$ {total.toFixed(2)}</h3>
            {
                props.selected.map(user => <Added img={user.img} name={user.firstName}></Added>)
            }

        </div>
    );
};

export default Cart;