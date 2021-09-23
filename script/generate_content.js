/****
  * File containing logic to generate main content
  *
  */

// Handler to generate content for home section
function home_handler(){
  // Create element to hold profile image
  let profile_image = create_element("img", [["id", "profile_image"], ["alt", main_content["home"]["name"]], ["src", main_content["home"]["image"]]]);
  // Create element to hold description
  let description = create_element("p", [["id", "description"]]);
  // Add description text
  description.textContent = main_content["home"]["description"];
  // Add profile image to image container
  let image_container = create_element("div", [["id", "image_container"]]);
  image_container.appendChild(profile_image);
  // Add description to description container
  let description_container = create_element("div", [["id", "description_container"]]);
  description_container.appendChild(description);
  // Create container for image and description
  let container = create_element("article", [["id", "home_container"]]);
  // Add image to container
  container.appendChild(image_container);
  // Add description to container
  container.appendChild(description_container);
  // Return container
  return container;
}

// Handler to generate content for education section
function education_handler(){
  let para = document.createElement("p");
  para.textContent = "eddd-waard";
  return para;
}

// Handler to generate content for experience section
function experience_handler(){
  let para = document.createElement("p");
  para.textContent = "exp";
  return para;
}


const content_map = {
  "home": home_handler,
  "education": education_handler,
  "experience": experience_handler
}

function generate_content(key){
  return content_map[key]();
}
