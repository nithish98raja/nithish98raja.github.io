/****
  * File containing logic to generate main content
  *
  */

// Handler to generate content for home section
function home_handler(){
  let para = document.createElement("p");
  para.textContent = "hoooome";
  return para;
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
