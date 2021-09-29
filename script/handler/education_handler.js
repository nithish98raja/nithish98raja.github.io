/****
  * File containing logic to generate content for education tab
  *
  */

// Handler to generate content for education section
function education_handler(){
  // Create container
  let container = create_element("div", [["id", "education_container"]]);
  // Iterate over entries in education
  for(item of education_content){
    // Create table
    let table = create_element("table", [["id", item["institute"]["name"]]]);
    // Create table row
    let table_row_1 = create_element("tr", [["id", item["institute"]["name"]+"_row_1"]]);
    // Create td element
    let image_cell = create_element("td", [["id", item["institute"]["name"]+"_image_cell"], ["rowspan", 3]], ["image_cell"]);
    // Create image element
    let image = create_element("img", [["id", item["institute"]["name"]+"_image_cell"], ["src", item["institute"]["logo"]], ["alt", item["institute"]["name"]]]);
    // Add image to image cell
    image_cell.appendChild(image);
    // Create td element
    let header = create_element("td", [["id", item["institute"]["name"]+"_header"]], ["table_header"]);
    // Create headings
    let title = create_element("h1", [["id", item["institute"]["name"]+"_title"]]);
    title.textContent = item["institute"]["name"];
    let subtitle = create_element("h2", [["id", item["institute"]["name"]+"_subtitle"]]);
    subtitle.textContent = item["institute"]["location"];
    // Add title and subtitle to header
    header.appendChild(title);
    header.appendChild(subtitle);
    // Add Image and header to row
    table_row_1.appendChild(image_cell);
    table_row_1.appendChild(header);
    // Create table row
    let table_row_2 = create_element("tr", [["id", item["institute"]["name"]+"_row_2"]]);
    // Create td element
    let main = create_element("td", [["id", item["institute"]["name"]+"_main"]], ["table_main"]);
    // Create text
    let degree = create_element("p", [["id", item["institute"]["name"]+"_degree"]]);
    degree.textContent = item["degree"];
    let duration = create_element("p", [["id", item["institute"]["name"]+"_degree"]]);
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
    // Create table row
    let table_row_3 = create_element("tr", [["id", item["institute"]["name"]+"_row_3"]]);
    // Create td element
    let footer = create_element("td", [["id", item["institute"]["name"]+"_footer"]], ["table_footer"]);
    // Create text
    let footer_text = create_element("p", [["id", item["institute"]["name"]+"_footer_text"]]);
    footer_text.textContent = "visit institute ";
    // Create hyper link
    let hlink = create_element("a", [["id", item["institute"]["name"]+"_link"], ["target", "_blank"], ["href", item["institute"]["website"]]]);
    hlink.textContent = "website";
    // Add link to footer text
    footer_text.appendChild(hlink);
    // Add footer text to footer
    footer.appendChild(footer_text);
    // Add footer to row
    table_row_3.appendChild(footer);
    // Add row 1 to table
    table.append(table_row_1);
    // Add row 2 to table
    table.append(table_row_2);
    // Add row 3 to table
    table.append(table_row_3);
    // Add table to container
    container.appendChild(table);
  }
  return container;
}
