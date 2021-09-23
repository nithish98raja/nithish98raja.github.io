/****
  * File containing helper functions
  *
  */

/*
Function creates a DOM element according to parameters passed and returns it
First parameter should be the name of element to be created
Second parameter should be a list of [key, value]. Key is used as attribute name and value is set as attribute value
Third parameter should be a list of strings to be set as classes of the element
*/
function create_element(name, attributes, classes = []){
  // Create element
  let elem = document.createElement(name);
  // Add attributes to element
  for(const pair of attributes){
    elem.setAttribute(pair[0], pair[1]);
  }
  // Add classes to element
  elem.classList.add(...classes);
  // Return element
  return elem;
}
