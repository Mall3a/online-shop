import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Contact from './components/Contact'
import About from './components/About' 
import ItemDetail from './components/ItemDetail'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';

const App = () => {
    return (
        <Router>
           <div>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/shop" exact component={Shop}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/shop/:id" component={ItemDetail}></Route>
                </Switch>
                
           </div>
        </Router>
    )
}

App.propTypes = {

}

export default App
