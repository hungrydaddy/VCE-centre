//navigation bar controller

var getURLParameter = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}






var goToSubject = function(subjectType, subjectId) {
    if (getURLParameter("language") == "CN") {
        window.location = "/subject-detail/cn" + "?subjectType=" + subjectType + "&subjectId=" + subjectId + "&language=CN";
    } else {
        window.location = "/subject-detail" + "?subjectType=" + subjectType + "&subjectId=" + subjectId;
    }
}

var goToCourseCategory = function(subjectType) {
    if (getURLParameter("language") == "CN") {
        window.location = "/course-category/cn" + "?subjectType=" + subjectType  + "&language=CN";
    } else {
        window.location = "/course-category" + "?subjectType=" + subjectType;
    }
}

var goToNewsFeed = function() {
    if (getURLParameter("language") == "CN") {
        window.location = "/newsFeed.html/cn" + "?language=CN";
    } else {
        window.location = "/newsFeed.html";
    }
}

var goToShop = function() {
    if (getURLParameter("language") == "CN") {
        window.location = "/shop.html/cn" + "?language=CN";
    } else {
        window.location = "/shop.html";
    }
}

var goToIndexPage = function() {
    if (getURLParameter("language") == "CN") {
        window.location = "/cn/" + "?language=CN";
    } else {
        window.location = "/";
    }
}

var scrollToContactUs = function() {
    var elem = document.getElementById("contactUs");
    elem.scrollIntoView();
}


var scrollToReasons = function() {
    var elem = document.getElementsByClassName("hmh_reasons")[0];
    elem.scrollIntoView();
}


// menu bar setup
var setMenuBar = function() {

    setVCEMenu();
    setIBMenu();
}


var setVCEMenu = function() {
    $.getJSON("../../assets/base/json/subjects-vce.json", function(data) {

        if (data == null) {
            return;
        }
        var newChild = "";
        $.each(data, function(key, value) {
            newChild = "<li><a href=\"#\" onclick=\"goToSubject('VCE', '" + value.subjectId + "');\">" + value.subjectName + "</a></li>";
            $(".hmh_VCEMenu").append(newChild);
        });
    });
}

var setIBMenu = function() {
    $.getJSON("../../assets/base/json/subjects-ib.json", function(data) {

        if (data == null) {
            return;
        }
        var newChild = "";
        $.each(data, function(key, value) {
            newChild = "<li><a href=\"#\" onclick=\"goToSubject('IB', '" + value.subjectId + "');\">" + value.subjectName + "</a></li>";
            $(".hmh_IBMenu").append(newChild);
        });
    });
}
