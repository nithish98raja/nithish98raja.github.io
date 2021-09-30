/****
  * File containing logic to generate content for project handler
  *
  */

function create_project_card_header(item){
  // Initialise base id
  let base_id = item["title"];
  // Create heading container
  let heading_container = create_element("div", [["id", base_id+"_heading_container"]], ["project_card_heading_container"]);
  // Create heading
  let heading = create_element("h1", [["id", base_id+"_heading"]], ["project_card_heading"]);
  heading.textContent = item["title"];
  // Append heading to heading_container
  heading_container.appendChild(heading);
  // Create tag container
  let tag_container = create_element("div", [["id", base_id+"_tags"]], ["project_card_tag_container"]);
  // Iterate over tags
  item["tags"].forEach(function(element, index){
    // Create container for current tag
    let current_tag = create_element("p", [["id", base_id+"_tag_"+index]], ["project_card_tag_text"]);
    current_tag.textContent = element;
    // Append current tag to tag container
    tag_container.appendChild(current_tag);
  });
  // Create header
  let header = create_element("div", [["id", base_id+"_header"]], ["project_card_header"]);
  // Append heading container
  header.appendChild(heading_container);
  // Append tag container
  header.appendChild(tag_container);
  // Return header
  return header;
}

function create_project_card_body(item){
  // Initialise base id
  let base_id = item["title"];
  // Create body
  let body = create_element("ul", [["id", base_id+"_body"]], ["project_card_body"]);
  // Iterate over entries in description
  item["description"].forEach(function(element, index){
    // Create div to hold element
    let element_container = create_element("li", [["id", base_id+"_description_"+index]]);
    element_container.textContent = element;
    // Append element to body
    body.appendChild(element_container);
  });
  // Return body
  return body;
}

function create_project_card_footer(item){
  // Initialise base id
  let base_id = item["title"];
  // Create footer
  let footer = create_element("div", [["id", base_id+"_footer"]], ["project_card_footer"]);
  // Iterate over references
  item["references"].forEach(function(element, index){
    // Create hyperlink for current element
    let link = create_element("a", [["id", base_id+"_link_"+index], ["target", "_blank"], ["href", element["link"]]], ["project_card_footer_link"]);
    link.textContent = element["name"];
    // Append link to footer
    footer.appendChild(link);
  });
  // Return footer
  return footer;
}

// Handler to generate content for project section
function project_handler(){
  // Create container for profile
  let container = create_element("article", [["id", "profile_container"]]);
  // Iterate over projects
  project_content.forEach(function(item, index){
    // Initialise base id
    let base_id = item["title"]+"_"+index;
    // Initialise card
    let card = create_element("div", [["id", base_id+"card"]], ["project_card"]);
    // Call function to get header
    let header = create_project_card_header(item);
    // Call function to get body
    let body = create_project_card_body(item);
    // Call function to get footer
    let footer = create_project_card_footer(item);
    // Append header to card
    card.appendChild(header);
    // Append body to card
    card.appendChild(body);
    // Append footer to card
    card.appendChild(footer);
    // Append card to container
    container.appendChild(card);
  });
  // Return container
  return container;
}
