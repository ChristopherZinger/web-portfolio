import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/navbar/Navbar';
import HiddenNavbar from '../Navbar/hiddenNavbar/HiddenNavbar';
import Contact from '../Contact/Contact';
import About from '../About/About/About';
import Projects from '../Projects/Projects';
import { Switch, Route } from 'react-router-dom';
import styles from './styles/MainContainer.module.css';
import ColorToggler from '../Navbar/colorToggler/ColorToggler';
import Blog from '../Blog/Blog';


class MainContainer extends Component {

    handleToggleHiddenNav(style) { document.getElementById('hiddenMenu').classList.toggle(style); }

    render() {
        return (
            <Fragment>
                <HiddenNavbar toggleStyle={this.handleToggleHiddenNav} />

                <div className={styles.container} >
                    < Navbar toggleStyle={this.handleToggleHiddenNav} />
                    <ColorToggler />
                    <Switch>
                        <Route path='/projects' component={Projects} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/blog' component={Blog} />
                        <Route path='/' component={About} />
                    </Switch>
                </div>

            </Fragment>


        )
    }

}


export default MainContainer;