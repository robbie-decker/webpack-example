import _ from 'lodash';
import './style.css';
import myName from './myName';
import cat from './cat.jpg';
import Data from './data.xml';
import Notes from './data.csv';


function component() {
  const element = document.createElement('div');

  // Lodash is now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.textContent = myName("Robbie");
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = cat;
  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}
  
  document.body.appendChild(component());