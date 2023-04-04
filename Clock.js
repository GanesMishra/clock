let root = window.getComputedStyle(document.documentElement);
let magnifier_width = root.getPropertyValue("--magnifer-width");
let magnifier_height = root.getPropertyValue("--magnifer-height");

let container = document.querySelector(".container");

var magnifer = document.createElement("div");
container.append(magnifer);

container.addEventListener("mousemove", (e) => {
    magnifer.setAttribute("class", "magnifer");

    var rect = container.getBoundingClientRect();
    var x = e.pageX - rect.left;
    var y = e.pageY - rect.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset

    if (x >= 0 && x <= container.clientWidth - magnifier_width) {
        magnifer.style.left = x + "px";
    }
    if (y >= 0 && y <= container.clientHeight - magnifier_height) {
        magnifer.style.top = y + "px";
    }

    const magnify = 2;
    const imgWidth = 500;
    const imgHeight = 400;

    magnifer.style.backgroundSize = imgWidth * magnify + "px" + imgHeight * magnify + "px";

    var magnify_x = x * magnify + 15;
    var magnify_y = y * magnify + 15;

    if (x <= container.clientWidth - magnifier_width &&
        y <= container.clientHeight - magnifier_height) {
        magnifer.style.backgroundPosition = -magnify_x + "px" + -magnify_y + "px";
    }
});