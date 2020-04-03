import React from 'react'
import Header from './header/header'
import {Redirect, Route} from 'react-router-dom'
import Banner from '../components/banner'
import Home from '../pages/Home'
import Footer from './footer/footer'
import Detail from '../pages/directory/directory'
export default class App extends React.Component{
    render(){
        return (
            <div>
                <Header tagData={["animation","sound","apple",4,"lazy style","our"]}></Header>
                <Route path="/web"></Route>
                <Route path="/directory" component={Detail}></Route>
                <Route path="/about"></Route>
                <Banner/>
                <Home/>
                <Footer></Footer>
            </div>
        )
    }
}
                


