var currentGroupHTML = "";
var currentGroupResult;

function assert(value, testname){
    var result = (value) ? "passed" : "failed";
    currentGroupResult = currentGroupResult && value;

    currentGroupHTML += "<li class='assert " + result + "'>" + testname + "</li>";
}

function test_group(name, test_group_function) {
    currentGroupResult = true;
    currentGroupHTML = "<div class='testGroup #groupClass'>" + name + "<ul>";
    test_group_function();
    currentGroupHTML += "</ul></div>";
    currentGroupHTML = currentGroupHTML.replace("#groupClass", currentGroupResult ? "passed" : "failed");
    document.body.innerHTML += currentGroupHTML;
}

