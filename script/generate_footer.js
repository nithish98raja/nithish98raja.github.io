/****
  * File containing code to populate footer based on available footer content
  *
  */

function generate_footer(){
  // Get footer object
  let footer = document.getElementById("footer");

  // Iterate over footer content
  for(const key in footer_content){
    // Create element for icon
    let icon = document.createElement("i");
    icon.setAttribute("id", key+"_icon");
    icon.setAttribute("aria-hidden", "true");
    // Add classes for icon
    icon.classList.add("fa");
    icon.classList.add("fa-"+footer_content[key].icon);
    // Create element for text
    let text = document.createElement("p");
    text.setAttribute("id", key+"_text");
    // Add text
    text.textContent = footer_content[key].text;
    // Create div to hold data
    let div = document.createElement("div");
    div.setAttribute("id", key);
    // Add icon and text to div
    div.appendChild(icon);
    div.appendChild(text);
    // Add div to footer
    footer.appendChild(div);
  }
}

generate_footer();
