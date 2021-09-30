/****
  * File containing logic to generate content for education tab
  *
  */

function create_row_1(item){
  // Initialise variable to hold base id
  let base_id = item["institute"]["name"];
  // Create table row
  let table_row_1 = create_element("tr", [["id", base_id+"_row_1"]]);
  // Create td element
  let image_cell = create_element("td", [["id", base_id+"_image_cell"], ["rowspan", 3]], ["image_cell"]);
  // Create image element
  let image = create_element("img", [["id", base_id+"_image_cell"], ["src", item["institute"]["logo"]], ["alt", item["institute"]["name"]]]);
  // Add image to image cell
  image_cell.appendChild(image);
  // Create td element
  let header = create_element("td", [["id", base_id+"_header"]], ["table_header"]);
  // Create headings
  let title = create_element("h1", [["id", base_id+"_title"]], ["education_card_title"]);
  title.textContent = item["institute"]["name"];
  let subtitle = create_element("h2", [["id", base_id+"_subtitle"]], ["education_card_subtitle"]);
  subtitle.textContent = item["institute"]["location"];
  // Add title and subtitle to header
  header.appendChild(title);
  header.appendChild(subtitle);
  // Add Image and header to row
  table_row_1.appendChild(image_cell);
  table_row_1.appendChild(header);
  // Return table row
  return table_row_1;
}

function create_row_2(item){
  // Initialise variable to hold base id
  let base_id = item["institute"]["name"];
  // Create table row
  let table_row_2 = create_element("tr", [["id", base_id+"_row_2"]]);
  // Create td element
  let main = create_element("td", [["id", base_id+"_main"]], ["table_main"]);
  // Create text
  let degree = create_element("p", [["id", base_id+"_degree"]], ["education_card_text"]);
  degree.textContent = item["degree"];
  let duration = create_element("p", [["id", base_id+"_degree"]], ["education_card_text"]);
  duration.textContent = "";
  if("start" in item["duration"]){
    duration.textContent += "from "+item["duration"]["start"];
  }
  if("end" in item["duration"]){
    duration.textContent += " till "+item["duration"]["end"];
  }
  // Add degree and duration to cell
  main.appendChild(degree);
  main.appendChild(duration);
  // Add cell to row
  table_row_2.appendChild(main);
  // Return table row
  return table_row_2;
}

function create_row_3(item){
  // Initialise variable to hold base id
  let base_id = item["institute"]["name"];
  // Create table row
  let table_row_3 = create_element("tr", [["id", base_id+"_row_3"]]);
  // Create td element
  let footer = create_element("td", [["id", base_id+"_footer"]], ["table_footer"]);
  // Create text
  let footer_text = create_element("p", [["id", base_id+"_footer_text"]], ["education_card_footer_text"]);
  footer_text.textContent = "visit institute ";
  // Create hyper link
  let hlink = create_element("a", [["id", base_id+"_link"], ["target", "_blank"], ["href", item["institute"]["website"]]]);
  hlink.textContent = "website";
  // Add link to footer text
  footer_text.appendChild(hlink);
  // Add footer text to footer
  footer.appendChild(footer_text);
  // Add footer to row
  table_row_3.appendChild(footer);
  // Return table row
  return table_row_3;
}

// Handler to generate content for education section
function education_handler(){
  // Create container
  let container = create_element("div", [["id", "education_container"]]);
  // Iterate over entries in education
  education_content.forEach(function(item, index){
    // Initialise variable to hold base id
    let base_id = item["institute"]["name"]+"_"+index;
    // Create table
    let table = create_element("table", [["id", base_id]], ["education_card"]);
    // Call function to get row 1
    let table_row_1 = create_row_1(item);
    // Call function to get row 2
    let table_row_2 = create_row_2(item);
    // Call function to get row 3
    let table_row_3 = create_row_3(item);
    // Add row 1 to table
    table.append(table_row_1);
    // Add row 2 to table
    table.append(table_row_2);
    // Add row 3 to table
    table.append(table_row_3);
    // Add table to container
    container.appendChild(table);
  });
  return container;
}
