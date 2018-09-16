import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    updatePurchaseState(ingredients) {
        let sum = 0;
        Object.keys(ingredients).map(igKey => { sum += ingredients[igKey]; return null; });
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount < 1) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceDeduce = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduce;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseDecision = (decision) => {
        if(decision === true) {
            alert('You Decided to Continue...');
        } else {
            this.setState({purchasing: false});
        }
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} closeModal={this.purchaseDecision.bind(this, false)}>
                    <OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice} purchaseDecision={this.purchaseDecision} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientsAd={this.addIngredientHandler} ingredientsRm={this.removeIngredientHandler}
                    disabled={disabledInfo} purchasable={!this.state.purchasable} price={this.state.totalPrice} ordered={this.purchaseHandler}/>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;