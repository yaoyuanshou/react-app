import React from 'react'
import Banner from '../components/banner'
import Home from '../pages/Home'

export default class App extends React.Component{
    render(){
        return (
            <div className="app">
                <Banner/>
                <Home/>
            </div>
        )
    }
}