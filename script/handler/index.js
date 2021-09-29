/****
  * File containing logic to map tab with its corresponding handler function
  *
  */

const content_map = {
  "home": home_handler,
  "education": education_handler,
  "experience": experience_handler,
  "project": project_handler
}

function generate_content(key){
  return content_map[key]();
}
