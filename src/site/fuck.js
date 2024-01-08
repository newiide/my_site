import React, { Component } from 'react';
import Carousel, { CarouselItem } from 'react-bootstrap/Carousel';
import pic1 from './images/d7307596991754fa6a6d299e24071e16.jpg';
import pic2 from './images/f5849cbb3fdd462ec2d075eaf2048683.jpg';
import pic3 from './images/6263136925ab9fe1f3b46814a7610ab1.jpg';

function autoSwitchImages() {
    const sliderItemNodes = document.getElementsByClassName('slider-item');
    const [selectedNode] = document.getElementsByClassName('selected');
  
    let nextIndex = 0; 
  
    for (let i = 0; i < sliderItemNodes.length; i++) {
      if (sliderItemNodes[i] === selectedNode) {
        nextIndex = (i + 1) % sliderItemNodes.length; 
        break;
      }
    }
  
    selectedNode.classList.toggle('selected');
    sliderItemNodes[nextIndex].classList.toggle('selected');
  }
  
  
  setInterval(autoSwitchImages, 2000); 