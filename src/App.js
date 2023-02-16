import React from 'react';
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import './App.css';

export default function App() {
  const breakPoints = [
    { width: 500, itemToShow: 1 },
    { width: 768, itemToShow: 2 },
    { width: 1200, itemToShow: 3 },
    { width: 1500, itemToShow: 4 }
  ];
  


  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Card number="1"/>
        <Card number="2"/>
        <Card number="3"/>
        <Card number="4"/>
        <Card number="5"/>
        <Card number="6"/>
        <Card number="7"/>
        <Card number="8"/> 
      </Carousel>
    </div>
  );
}


