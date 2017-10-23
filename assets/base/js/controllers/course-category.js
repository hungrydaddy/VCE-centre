$(document).ready(function() {
    hmh_setup();
});


/* MARK: BASIC FUNCTIONS */
var print = console.log;
// a function that can get any url param
var getURLParameter = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
var detectSubjectType = function() {
    return getURLParameter("subjectType");
}
var shortenString = function(inputString, targetLength) {
    var outputString = inputString;
    if (inputString.length <= targetLength) {
        return outputString;
    } else {
        outputString = outputString.substring(0, targetLength - 1);
        outputString += "...";
        return outputString;
    }
}






var hmh_setup = function() {
    setMenuBar();
    setTitlesAndDesc();
    setSubjectList();

}

var setTitlesAndDesc = function() {
    $(".hmh_courseName").html(detectSubjectType());
    switch (detectSubjectType()) {
        case "VCE":
            $(".hmh_courseDesc").html("Victorian Certificate of Education");
            break;
        case "IB":
            $(".hmh_courseDesc").html("International Baccalaureate");
            break;
    }
}

// the subject list setup
var setSubjectList = function() {
    var newChild = "";
    $.getJSON("../../assets/base/json/subjects-" + detectSubjectType().toLowerCase() + ".json", function(data) {
        if (data == null) {return;}
        $.each(data, function(key, value) {
            newChild = "<div class=\"col-xs-12\"><div class=\"c-content-feature-2 c-option-2 c-theme-bg-parent-hover\" onclick=\"goToSubject('" + detectSubjectType() + "', '" + value.subjectId + "');\"><div class=\"c-icon-wrapper c-theme-bg-on-parent-hover\"><div class=\"c-content-line-icon c-theme c-icon-screen-chart\"></div></div><h3 class=\"c-font-uppercase c-title\">" + value.subjectName + "</h3><p>" + value.subjectIntros + "</p></div></div>";
            $(".hmh_subjectList").append(newChild);
        });
    });
}
