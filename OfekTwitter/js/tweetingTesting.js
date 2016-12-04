function onPageLoad() {
    test_group("Selectors", function() {
       assert(checkThereIsOneLogoImage(), "counting one image logo class element");
       assert(checkThereIsFiveTweets(), "counting 5 tweet-username classes under ot-body class");
    });
}

function checkThereIsOneLogoImage() {
    var x = document.querySelectorAll("#logo_pic");
    return x.length == 1;
}

function checkThereIsFiveTweets() {
    var x = document.querySelectorAll("#logo_pic");
    return x.length == 5;
}