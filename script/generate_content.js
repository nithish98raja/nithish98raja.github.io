/****
  * File containing logic to generate main content
  *
  */

// Handler to generate content for home section
function home_handler(){
  // Create element to hold profile image
  let profile_image = document.createElement("img");
  profile_image.setAttribute("id", "profile_image");
  profile_image.setAttribute("alt", main_content["home"]["name"]);
  profile_image.setAttribute("src", main_content["home"]["image"]);
  // Create element to hold description
  let description = document.createElement("p");
  description.setAttribute("id", "description");
  // Add text
  description.textContent = main_content["home"]["description"];
  // Create container for image and description
  let container = document.createElement("article");
  // Add image to container
  container.appendChild(profile_image);
  // Add description to container
  container.appendChild(description);
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
