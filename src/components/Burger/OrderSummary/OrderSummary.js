import React from 'react';
import Button from '../../UI/Reusable/Button'

const orderSummary = (props) => { const textstyle = {textTransform: 'capitalize'};
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey} style={textstyle} >{igKey} : {props.ingredients[igKey]}</li>
    });
    return(
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A Delicious burger with the following ingredients : </p>
            <ul> {ingredientSummary} </ul>
            <p style={{fontWeight: '500'}}>Total Amount is {props.price.toFixed(2)}$ , Continue to Checkout?</p>
            <Button btnType='Danger' clicked={() => props.purchaseDecision(false)}>Cancel</Button>
            <Button btnType='Success' clicked={() => props.purchaseDecision(true)}>Continue</Button>
        </React.Fragment>
    );
};

export default orderSummary;