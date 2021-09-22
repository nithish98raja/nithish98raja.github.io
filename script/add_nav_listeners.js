/****
  * Code to add logic for content to update on button click
  *
  */

function add_nav_listeners(){
  // Iterate over keys in main_content
  for(const key in main_content){
    // Get button by id
    let button = document.getElementById(key+"_button");
    // Add click listener to button
    button.addEventListener("click", function(){
      // Get main section
      let section = document.getElementById("main");
      // Get empty main section
      let clone = section.cloneNode(false);
      // Add new content to empty section
      clone.textContent = key;
      // Update main section
      section.parentNode.replaceChild(clone, section);
    });
  }
}

add_nav_listeners();

// Click home for initial content to load
document.getElementById("home_button").click();
