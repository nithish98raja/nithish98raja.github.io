/****
  * File containing logic to generate content for experience handler
  *
  */

function create_experience_card_header(item){
  // Initialise variable to hold base id
  let base_id = item["organisation"]["name"];
  // Initialise header
  let header = create_element("div", [["id", base_id+"_header"]], ["exp_card_header"]);
  // Initialise heading
  let heading = create_element("h1", [["id", base_id+"_heading"]], ["exp_card_heading"]);
  // Initialise anchor tag to hold org name
  let org_name = create_element("a", [["id", base_id+"_name"], ["href", item["organisation"]["website"]], ["target", "_blank"]], ["exp_card_heading_text"]);
  org_name.textContent = item["organisation"]["name"];
  // Append org_name to heading
  heading.appendChild(org_name);
  // Initialise subheading
  let subheading = create_element("h2", [["id", base_id+"_subheading"]], ["exp_card_subheading"]);
  subheading.textContent = item["organisation"]["location"];
  // Create a heading container
  let heading_container = create_element("div", [["id", base_id+"_heading_container"]], ["exp_card_heading_container"]);
  // Initialise div to hold tag
  let tag = create_element("div", [["id", base_id+"_tag"]], ["exp_card_header_tag"]);
  // Check if start date exists
  if("start" in item["duration"]){
    tag.textContent = "from "+item["duration"]["start"]+" ";
  }
  // Check if end date exists
  if("end" in item["duration"]){
    tag.textContent += "till "+item["duration"]["end"];
  }
  // Append heading and subheading to heading container
  heading_container.appendChild(heading);
  heading_container.appendChild(subheading);
  // Append heading container to header
  header.appendChild(heading_container);
  // Append tag to header
  header.appendChild(tag);
  // Return header
  return header;
}

function create_experience_card_body(item){
  // Initialise variable to hold base id
  let base_id = item["organisation"]["name"];
  // Initialise body
  let body = create_element("ul", [["id", base_id+"_body"]], ["exp_card_body"]);
  // Iterate over entries in accomplishments
  item["accomplishments"].forEach(function(entry, index){
    // Initialise div for current entry
    let element = create_element("li", [["id", base_id+"_entry_"+index]]);
    element.textContent = entry;
    // Add entry to body
    body.appendChild(element);
  });
  // Return body
  return body;
}

// Handler to generate content for experience section
function experience_handler(){
  // Initialise container
  let container = create_element("article", [["id", "experience_container"]]);
  // Iterate over entries in experience_content
  experience_content.forEach(function(item, index){
    // Initialise variable to hold base id
    let base_id = item["organisation"]["name"]+"_"+index;
    // Initialise container for current item
    let card = create_element("div", [["id", base_id+"_card"]], ["experience_card"]);
    // Call function to get header
    let header = create_experience_card_header(item);
    // Call function to get body
    let body = create_experience_card_body(item);
    // Append header to card
    card.appendChild(header);
    // Append body to card
    card.appendChild(body);
    // Append card to container
    container.appendChild(card);
  });
  // Return container
  return container;
}
