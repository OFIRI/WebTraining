var createDivElement = function(className) {
    var div = document.createElement("div");
    div.className = className;

    return div;
};

var createImgElement = function(className, src) {
    var img = new Image();
    img.className = className;
    img.src = src;

    return img;
};

var createParagraphElement = function(className) {
    var p = document.createElement("p");
    p.className = className;

    return p;
};

var createButtonElement = function (className) {
    var button = document.createElement("button");
    button.typeName = "button";
    button.className = className;

    return button;
};