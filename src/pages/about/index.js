import React from 'react'
import './index.scss'
let about = ()=>{
    return (
        <div className="aboutWrapper">
            <h1 className="about__title">The site is for learning exchange only and is not for any commercial purpose</h1>
            <div className="about__authJ">
                <p>Website author：Jinx</p>
                <p>The main creator of the site, mainly responsible for the registration and website home page</p>
            </div>
            <div className="about__authY">
                <p>Website author：Hades</p>
                <p>The main creator of the site is responsible for the content displayed in the navigation section</p>
            </div>
            <h2 className="about__sub">Questions and Answers</h2>
            <div className="about__content">
                <p className="about__content--title">How can I add my details against a site I designed/developed?</p>
                <p className="about__content--answer">You'll find an "Add Credit" link next to each screenshot. You will be asked to login/register, whereon you can add all your details. Once these have been approved, your name and link will appear alongside the website and in the Directory</p>
                <p className="about__content--title">Some of the sites you feature are really hard to use, or don't work in my browser. Why have you featured it?</p>
                <p className="about__content--answer">Not every site featured is perfect and some might even contain errors, but we hope all are interesting and push the boundaries of visual design and interaction.</p>
                <p className="about__content--title">How can I add my details against a site I designed/developed?</p>
                <p className="about__content--answer">You'll find an "Add Credit" link next to each screenshot. You will be asked to login/register, whereon you can add all your details. Once these have been approved, your name and link will appear alongside the website and in the Directory</p>
                <p className="about__content--title">How do you decide which sites get featured??</p>
                <p className="about__content--answer">We look for cleanliness and simplicity without excessve gimmicks or decoration. Sites that use Flash unnecessarily won't be featured (though appropriate Flash sites are not excluded). Sites that force the browser's size will not be accepted. Sites with broken images or obvious visual errors won't be featured (because we can't take a nice screenshot). Also, sites that feature "award ribbons" are not featured (because award ribbons are a quick way to make a site ugly).</p>
            </div>
        </div>
    )
}

export default about