import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Users from '../Users/Users';
import './Main.css'

const Main = () => {
    const [users, setUser] = useState([]);
    const [selected, setSelcted] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    let total = 0;
    const addToCartHandler = (props) => {

        props.clicked = true;
        const added = [...selected, props];

        setSelcted(added);

        total = total + props.salaryRange;
    }

    return (
        <div>
            <div className="row">

                <div className="user-container">
                    {
                        users.map(user => <Users
                            key={user.id}

                            addToCartHandler={addToCartHandler}
                            user={user}></Users>)
                    }
                </div>


                <div className="cart-container">

                    <Cart selected={selected}></Cart>
                </div>
            </div>


        </div>
    );
};

export default Main;