import React from 'react'
import Header from './header/header'
import {Route, Redirect, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Footer from './footer/footer'
import Reg from '../pages/Reg'
import Login from '../pages/Login'
import Directory from '../pages/directory/directory'
import about from '../pages/about'
import Web from '../pages/web/web'
import DirectoryDetail from '../pages/directoryDetail'
import Nopage from '../pages/NoPage'
import Detail from '../pages/Detail'
export default class App extends React.Component{
    render(){
        return (
            <div>
                <Header tagData={["animation","sound","apple",4,"lazy style","our"]}></Header>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/reg' component={Reg}/>
                    <Route path="/web" component={Web}></Route>
                    <Route path="/directory" component={Directory}></Route>
                    <Route path="/about" component={about}></Route>
                    <Route path="/detail/:_id" component={Detail}/>
                    <Route path="/directoryDetail/:id" component={DirectoryDetail}></Route>
                    <Redirect from='/' to='/home' exact/>
                    <Route component={Nopage}/>
                </Switch>
                <Footer></Footer>
            </div>
        )
    }
}
                


