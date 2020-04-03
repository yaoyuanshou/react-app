import React from 'react'
import Header from './header/header'
import {Route, Redirect} from 'react-router-dom'
import Home from '../pages/Home'
import Footer from './footer/footer'
import Reg from '../pages/Reg'
import Login from '../pages/Login'
export default class App extends React.Component{
    render(){
        return (
            <div>
                <Header tagData={["animation","sound","apple",4,"lazy style","our"]}></Header>
                <Route path='/home' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/reg' component={Reg}/>
                <Redirect from='/' to='/home' exact/>
                <Footer></Footer>
            </div>
        )
    }
}
                


