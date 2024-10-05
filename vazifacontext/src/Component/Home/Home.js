import React, { Component } from 'react';
import Section from '../Section/Section';
import Header from '../Header/Header';
import ThemeContext from '../../Context/ThemeContext';

export default class Home extends Component {
  static contextType =ThemeContext;
  render() {
    const theme=this.context;
    return (
      <div className={`${theme}`} id='Home'>
        <Header />
        <Section/>
        
      </div>
    )
  }
}

