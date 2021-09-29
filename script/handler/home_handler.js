/****
  * File containing logic to generate content for home tab
  *
  */

// Handler to generate content for home section
function home_handler(){
  // Create element to hold profile image
  let profile_image = create_element("img", [["id", "profile_image"], ["alt", home_content["name"]], ["src", home_content["image"]]]);
  // Create element to hold description
  let description = create_element("p", [["id", "description"]]);
  // Add description text
  description.textContent = home_content["description"];
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
