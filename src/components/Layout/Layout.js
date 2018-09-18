import React , { Component } from 'react';
import css_cls from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    closeSideDrawer = () => {
        this.setState({showSideDrawer: false});
    }

    openSideDrawer = () => {
        this.setState({showSideDrawer: true});
    }

    render() {
        return (<React.Fragment>
            <Toolbar openDrawer={this.openSideDrawer} />
            <SideDrawer show={this.state.showSideDrawer} closeDrawer={this.closeSideDrawer} />
            <main className={css_cls.BurgerLayoutContent}>
                {this.props.children}
            </main>
        </React.Fragment>)
    }
} // wrapped in paranthesis are json components

export default Layout;