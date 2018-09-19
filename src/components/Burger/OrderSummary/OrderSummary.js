import React, { Component } from 'react';
import Button from '../../UI/Reusable/Button'

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('cmponent will update');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('order summary should update');
        return this.props.price !== nextProps.price;
    }

    render() {
        const textstyle = { textTransform: 'capitalize' };
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey} style={textstyle} >{igKey} : {this.props.ingredients[igKey]}</li>
        });
        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>A Delicious burger with the following ingredients : </p>
                <ul> {ingredientSummary} </ul>
                <p style={{ fontWeight: '500' }}>Total Price : {this.props.price.toFixed(2)} $ !! Continue to Checkout?</p>
                <Button btnType='Danger' clicked={() => this.props.purchaseDecision(false)}>Cancel</Button>
                <Button btnType='Success' clicked={() => this.props.purchaseDecision(true)}>Continue</Button>
            </React.Fragment>
        );
    }
}

export default OrderSummary;