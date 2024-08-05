document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", function (e) {
    cursor.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
  });
  document.addEventListener("mousedown", function () {
    cursor.classList.add("expand");
    if (
      document.addEventListener("mouseup", function () {
        cursor.classList.remove("expand");
      })
    );
  });
});
