const $save = document.getElementById("formTask"),
  $title = document.getElementById("title"),
  $description = document.getElementById("description");

$save.addEventListener("submit", (e) => {
  const task = {
    title: $title.value,
    description: $description.value,
  };

  e.preventDefault();
});
