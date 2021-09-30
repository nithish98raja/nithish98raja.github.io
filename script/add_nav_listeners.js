/****
  * Code to add logic for content to update on button click
  *
  */

function handle_window_resize(){
  // Check window width
  if(window.innerWidth <= 699){
    // Iterate over keys in main_content
    content_list.forEach(function(key){
      // Get button by id
      let button = document.getElementById(key+"_button");
      // Update display attribute of button
      button.classList.add("hidden_button");
    });
  }
}

function add_nav_listeners(){
  // Iterate over keys in main_content
  content_list.forEach(function(key){
    // Get button by id
    let button = document.getElementById(key+"_button");
    // Add click listener to button
    button.addEventListener("click", function(){
      // Get main section
      let section = document.getElementById("main");
      // Get empty main section
      let clone = section.cloneNode(false);
      // Add new content to empty section
      clone.appendChild(generate_content(key));
      // Update main section
      section.parentNode.replaceChild(clone, section);
    });
  });

  // Add listener for nav toggle button
  let toggle_button = document.getElementById("nav_toggle_button");
  // Add click listener
  toggle_button.addEventListener("click", function(){
    // Update display nav attribute
    if(toggle_button.getAttribute("display_nav") == "false"){
      // Iterate over keys in main_content
      content_list.forEach(function(key){
        // Get button by id
        let button = document.getElementById(key+"_button");
        // Update display attribute of button
        button.classList.remove("hidden_button");
      });
      // Update toggle button text
      toggle_button.textContent = "^^^";
      toggle_button.setAttribute("display_nav", "true");
    }else if(toggle_button.getAttribute("display_nav") == "true"){
      // Iterate over keys in main_content
      content_list.forEach(function(key){
        // Get button by id
        let button = document.getElementById(key+"_button");
        // Update display attribute of button
        button.classList.add("hidden_button");
      });
      // Update toggle button text
      toggle_button.textContent = "vvv";
      toggle_button.setAttribute("display_nav", "false");
    }
  });
}

add_nav_listeners();

// Click home for initial content to load
document.getElementById("home_button").click();

// Add function to handle displaying nav on load
window.onload = handle_window_resize;

// Add function to handle resize of window
window.onresize = handle_window_resize;
