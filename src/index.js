import _ from 'lodash';
import './style.css';
import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    // Lodash is now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.textContent = myName("Robbie");
    element.classList.add('hello');
    
    return element;
  }
  
  document.body.appendChild(component());