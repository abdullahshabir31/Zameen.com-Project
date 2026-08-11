const toolsLink = document.getElementById("top-left-tool");
const toolsDropdown = document.getElementById("tools-dropdown");

toolsLink.addEventListener("click", (e) => {
  e.preventDefault();
  toolsDropdown.style.display =
    toolsDropdown.style.display === "block" ? "none" : "block";
  moreDropdown.style.display = "none";
});

const moreLink = document.getElementById("top-left-more");
const moreDropdown = document.getElementById("more-dropdown");

moreLink.addEventListener("click", (e) => {
  e.preventDefault();
  moreDropdown.style.display =
    moreDropdown.style.display === "block" ? "none" : "block";
  toolsDropdown.style.display = "none";
});

document.addEventListener("click", function (event) {
  if (
    !toolsLink.contains(event.target) &&
    !toolsDropdown.contains(event.target)
  ) {
    toolsDropdown.style.display = "none";
  }
  if (
    !moreLink.contains(event.target) &&
    !moreDropdown.contains(event.target)
  ) {
    moreDropdown.style.display = "none";
  }
});
