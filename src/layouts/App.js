import React from 'react'
import Header from './header/header'
import {BrowserRouter} from 'react-router-dom'
export default class App extends React.Component{
    render(){
        return (
            <div>
                <BrowserRouter>
                <Header tagData={["animation","sound","apple",4,"lazy style","our"]}></Header>
                </BrowserRouter>
                
            </div>
        )
    }
}