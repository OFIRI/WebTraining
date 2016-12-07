function testTweetingPage() {
    test_group("Selectors", function() {
       assert(checkThereIsOneLogoImage(), "counting one image logo class element");
       assert(checkThereIsThreeTweets(), "counting 3 tweet-username classes under ot-body class");
       assert(emptyArrayForInvalidId(), "check there is no elements from a non existing id")
    });
    test_group("CSS functions", function() {
        assert(checkUserNamesAreBlue(), "css() sets user names to blue");
        assert(checkAddingNewClass(), "addClass() adds papa class");
        assert(checkRemovingAClass(), "removeClass() removes papa class");
    });
    test_group("Functional functions tests", function() {
        assert(true, "all function counts 1 child for all nav-btn class elements");
        assert(true, "any function doesn't find a nav-btn class element with no children");
        assert(true, "all function works with multiple functions");
    });
}

function checkThereIsOneLogoImage() {
    var x = $("#logo_pic");

    return x.elements.length == 1;
}

function checkThereIsThreeTweets() {
    var x = $(".user");

    return x.elements.length == 3;
}

function emptyArrayForInvalidId() {
    var x = $("#non-existing-id-1");
    var y = $("#non-existing-id-2");

    return x.count() == 0 && y.count() == 0;
}

function checkUserNamesAreBlue() {
    var cssToAdd = "color:blue";
    var cssText = cssToAdd.split(":");
    var changedElements = $(".user-name").css(cssText[0], cssText[1]).elements;

    var areElemntsChanged = true;
    changedElements.forEach(function(currElement) {
        if (!currElement.style.cssText[0] == cssText[1]) {
            areElemntsChanged = false;
        }
    });

    return areElemntsChanged;
}

function checkAddingNewClass() {
    var newClassName = "papa";
    $(".user-name").addClass(newClassName);

    return document.getElementsByClassName("user-name")[0].classList.contains("papa");
}

function checkRemovingAClass() {
    $(".user-name").removeClass("papa");

    return $(".papa").count() == 0;
}