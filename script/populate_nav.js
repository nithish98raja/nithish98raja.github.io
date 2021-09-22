/****
  * File containing code to populate nav bar
  *
  */

function populate_nav(){
  // Get nav element
  let navbar = document.getElementById("nav");
  // Iterate over keys in main_content
  for(const key in main_content){
    // Create button for current key
    let button = document.createElement("button");
    button.setAttribute("id", key+"_button");
    button.setAttribute("type", "button");
    // Insert text into button
    button.textContent = key
    // Create div to hold button
    let div = document.createElement("div");
    div.setAttribute("id", key+"_nav");
    // Add button to div
    div.appendChild(button);
    // Add div to navbar
    navbar.appendChild(div);
  }
}

populate_nav();
