/****
  * File containing code to populate footer based on available footer content
  *
  */

function generate_footer(){
  // Get footer object
  let footer = document.getElementById("footer");
  // Create element for footer heading
  let footer_heading = create_element("h1", [["id", "footer_heading"]], ["footer_heading"]);
  footer_heading.textContent = "Contact me";
  // Create element to hold footer links
  let footer_links = create_element("div", [["id", "footer_links"]]);
  // Append footer heading to footer
  footer.appendChild(footer_heading);
  // Iterate over footer content
  for(const key in footer_content){
    // Create element for icon link
    let icon_link = create_element("a", [["id", key+"_icon_link"], ["target", "_blank"], ["href", footer_content[key].link]], ["footer_icon_link"]);
    // Create element for icon
    let icon = create_element("i", [["id", key+"_icon"], ["aria-hidden", "true"]], ["footer_icon", "fa", "fa-"+footer_content[key].icon]);
    // Create element for text
    let text = create_element("a", [["id", key+"_text"], ["target", "_blank"], ["href", footer_content[key].link]], ["footer_text"]);
    // Add text
    text.textContent = footer_content[key].text;
    // Create div to hold data
    let div = create_element("div", [["id", key]], ["footer_element"]);
    // Append icon to icon link
    icon_link.appendChild(icon);
    // Add icon and text to div
    div.appendChild(icon_link);
    div.appendChild(text);
    // Add div to footer
    footer_links.appendChild(div);
  }
  // Append footer links to footer
  footer.appendChild(footer_links);
}

generate_footer();
