/****
  * File containing code to populate nav bar
  *
  */

function update_clock(){
  // Get clock container
  let clock_container = document.getElementById("clock_container");
  // Get current time
  let date = new Date();
  // Update clock_container
  clock_container.textContent = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

function create_clock(){
  // Create container for clock
  let clock_container = create_element("div", [["id", "clock_container"]]);
  // Get current time
  let date = new Date();
  // Update clock_container
  clock_container.textContent = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  // Return clock container
  return clock_container;
}

function populate_nav(){
  // Get nav element
  let navbar = document.getElementById("nav");
  // Create div to hold button
  let button_list = create_element("div", [["id", "nav_button_list"]]);
  // Iterate over keys in main_content
  content_list.forEach(function(key){
    // Create button for current key
    let button = create_element("button", [["id", key+"_button"], ["type", "button"]], ["nav_button"]);
    // Insert text into button
    button.textContent = key
    // navbar.appendChild(div);
    button_list.appendChild(button);
  });
  // Create button for toggling nav
  let button = create_element("button", [["id", "nav_toggle_button"], ["display_nav", "false"], ["type", "button"]], ["nav_toggle_button"]);
  // Insert text into button
  button.textContent = "vvv";
  // Append toggle button to button list
  button_list.appendChild(button);
  // Create title container
  let title_container = create_element("div", [["id", "nav_title_container"]]);
  // Create title
  let title = create_element("h1", [["id", "nav_title"]]);
  title.textContent = home_content["name"];
  // Append title to title container
  title_container.appendChild(title);
  // Create element to hold top row elements
  let top_row = create_element("div", [["id", "navbar_top_row"]], ["navbar_top_row"]);
  // Append title to top row
  top_row.appendChild(title);
  // Call function to create a clock
  let clock = create_clock();
  // Append clock to top row
  top_row.appendChild(clock);
  // Append top row to navbar
  navbar.appendChild(top_row);
  // Append button list to navbar
  navbar.appendChild(button_list);
}

populate_nav();

setInterval(update_clock, 1000);
