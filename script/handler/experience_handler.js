/****
  * File containing logic to generate content for experience handler
  *
  */

function create_card_header(item){
  // Initialise header
  let header = create_element("div", [["id", item["organisation"]["name"]+"_header"]]);
  // Initialise heading
  let heading = create_element("h1", [["id", item["organisation"]["name"]+"_heading"]]);
  // Initialise anchor tag to hold org name
  let org_name = create_element("a", [["id", item["organisation"]["name"]+"_name"], ["href", item["organisation"]["website"]], ["target", "_blank"]]);
  org_name.textContent = item["organisation"]["name"];
  // Append org_name to heading
  heading.appendChild(org_name);
  // Initialise subheading
  let subheading = create_element("h2", [["id", item["organisation"]["name"]+"_subheading"]]);
  subheading.textContent = item["organisation"]["location"];
  // Create a heading container
  let heading_container = create_element("div", [["id", item["organisation"]["name"]+"_heading_container"]]);
  // Initialise div to hold tag
  let tag = create_element("div", [["id", item["organisation"]["name"]+"_tag"]]);
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

function create_card_body(item){
  // Initialise body
  let body = create_element("div", [["id", item["organisation"]["name"]+"_body"]]);
  // Iterate over entries in accomplishments
  item["accomplishments"].forEach(function(entry, index){
    // Initialise div for current entry
    let element = create_element("div", [["id", item["organisation"]["name"]+"_entry_"+index]]);
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
  experience_content.forEach(function(item){
    // Initialise container for current item
    let card = create_element("div", [["id", item["organisation"]["name"]+"_card"]]);
    // Call function to get header
    let header = create_card_header(item);
    // Call function to get body
    let body = create_card_body(item);
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
