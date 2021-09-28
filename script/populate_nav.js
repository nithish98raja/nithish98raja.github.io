/****
  * File containing code to populate nav bar
  *
  */

function populate_nav(){
  // Get nav element
  let navbar = document.getElementById("nav");
  // Iterate over keys in main_content
  content_list.forEach(function(key){
    // Create button for current key
    let button = create_element("button", [["id", key+"_button"], ["type", "button"]], ["nav_button"]);
    // Insert text into button
    button.textContent = key
    // Create div to hold button
    let div = create_element("div", [["id", key+"_nav"]]);
    // Add button to div
    div.appendChild(button);
    // Add div to navbar
    navbar.appendChild(div);
  });
}

populate_nav();
