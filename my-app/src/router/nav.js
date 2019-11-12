import React from 'react';
import Title from '../components/title';
import Contact from '../components/contact';
import Music from '../components/music'
import Portfolios from '../components/portfolios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import '../App.css'
import Acordion from '../components/acordion';
export default function Nav(){
    return(
    <Router>
    <nav className="nav_body">
        <ul className="ul_nav">
            <li className="li_nav">
                <Link to='/home' className="a_nav">home</Link>
            </li>
        </ul>
        <ul className="ul_nav">
            <li className="li_nav">
                <Link to='/contact' className="a_nav">contact</Link>
            </li>
        </ul>
        <ul className="ul_nav">
            <li className="li_nav">
                <Link to='/portfolios' className="a_nav">portfolios</Link>
            </li>
        </ul>
        <ul className="ul_nav">
            <li className="li_nav">
                <Link to='/music' className="a_nav">music</Link>
            </li>
        </ul>
    </nav>
        
      <Switch>
          
            <Route path='/home'>  <div className="main_div_tag">
                <img className="img_main" src="34015570_2168708860017732_7975657739282022400_n.jpg" alt=""/>
                <p className="p_main_div">
                    Darius-Daniel Cristurean <br/>
                    <span className="github">GitHub: </span><span>
                    <a className="a_main" href="https://github.com/dadadarius79">
                        https://github.com/dadadarius79
                    </a></span>
                </p>
            </div>
            
            <Title 
            name="What I do"
            text="I am a React Developer who likes connections A lot, in the future I would like to attend many Tech events knowing as many events that can I attend to. "
            />
            <Title
            name="About me"
            text="I got a bachelor's degree in Music from university of 'S. Toduta', moved in canada in 2017, then studied a Web Technology because of my interest in IT.
            The first coding classes triggered my passion for coding when I started at this College. 
            In the future I would like to be a public person on Twitter, Instagram or on Youtube vlog.
            "
            style="font-size: 24px;"
            />
            <Title name=""/>
            <Acordion/>
             </Route>    
        
        <Route path='/contact'>
            <Contact />    
        </Route>    
        <Route path="/portfolios">
            <Portfolios />
        </Route>
        <Route path='/music'>
            <Music />    
        </Route>

      </Switch>  

    </Router>
    )
}