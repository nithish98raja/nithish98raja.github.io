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
    let icon = create_element("i", [["id", key+"_icon"], ["aria-hidden", "true"]], ["footer_icon", "fa", "fa-"+footer_content[key].icon]);
    // Create element for text
    let text = create_element("p", [["id", key+"_text"]], ["footer_text"]);
    // Add text
    text.textContent = footer_content[key].text;
    // Create div to hold data
    let div = create_element("div", [["id", key]], ["footer_element"]);
    // Add icon and text to div
    div.appendChild(icon);
    div.appendChild(text);
    // Add div to footer
    footer.appendChild(div);
  }
}

generate_footer();
