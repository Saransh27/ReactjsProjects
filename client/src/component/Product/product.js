import React from 'react';
import classes from './product.css';

const product = (props) => {
    return (
        <div className='row productdiv'>
            <div className={`col-sm-2`}>
            </div>
            <div className={`col-sm-8 col-xs-10 ${classes.productdiv}`}>
                <div className={`col-sm-4 col-xs-4`}>
                    <img  src={props.productImage} alt="Product pic not available"/>
                </div>
                <div className={`col-sm-6 col-xs-offset-2 col-xs-6`}>
                    <p className={classes.title}>{props.title}</p>
                    <p>Price: {props.price}</p>
                    <p>Quantity: {props.quantity}</p>
                </div>
                <div className={`col-sm-2`}>
                </div>
            </div>
            <div className={`col-sm-2 col-xs-1`}></div>
        </div>
    );
}
export default product;