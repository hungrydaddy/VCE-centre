$(document).ready(function() {
    App.init(); // init core
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






var hmh_setup = function() {
    setMenuBar();
    prepare();
}




var prepare = function() {
    var subjectType = detectSubjectType();
    switch (subjectType) {
        case "VCE":
            fetchVCEContent();
            break;
        case "IB":
            fetchIBContent();
            break;
    }
}


var fetchVCEContent = function() {
    var subjectId = getURLParameter("subjectId");
    if (subjectId == null) {
        return;
    }
    $.getJSON("../../assets/base/json/subjects-vce.json", function(data) {
        if (data == null) {return;}

        var thisSubject = data[subjectId];
        setTitleAndDescription(thisSubject);
        setSubjectDescMenuAndBox(thisSubject);
        setContentMenuAndBox(thisSubject);
        setOtherSubjectsBar(data, thisSubject);

        //after loading, show content
        $("body").removeAttr("hidden");
    });
}



var fetchIBContent = function() {
    var subjectId = getURLParameter("subjectId");
    if (subjectId == null) {
        return;
    }
    $.getJSON("../../assets/base/json/subjects-ib.json", function(data) {
        if (data == null) {return;}

        var thisSubject = data[subjectId];
        setTitleAndDescription(thisSubject);
        setSubjectDescMenuAndBox(thisSubject);
        setContentMenuAndBox(thisSubject);
        setOtherSubjectsBar(data, thisSubject);

        //after loading, show content
        $("body").removeAttr("hidden");
    });
}


/* MARK: SET VCE CONTENTS */
var setTitleAndDescription = function(subject) {
    var title = subject["subjectName"];
    var desc = subject["subjectDesc"];
    var courseName = detectSubjectType();
    $(".hmh_subjectName").html(title);
    $(".hmh_subjectDesc").html(desc);
    $(".hmh_courseName").html(desc);
    $(".hmh_courseCategoryButton").attr("onclick", "goToCourseCategory('" + detectSubjectType() + "')");

}

var setSubjectDescMenuAndBox = function(subject) {
    var intros = subject["subjectIntros"];
    var outcome = subject["outcome"];
    var assessment = subject["assessment"];
    $(".hmh_subjectDescBox_item0").html(intros);
    $(".hmh_subjectDescBox_item1").html(outcome);
    $(".hmh_subjectDescBox_item2").html(assessment);
}

var setContentMenuAndBox = function(subject) {
    // set the menu of the content box and the box itself
    var tagName = "";
    for (var i = 0; i < subject["content"]["tags"].length; i++) {
        tagName = subject["content"]["tags"][i];
        $(".hmh_subjectContentMenu_item" + i.toString()).html(tagName);
        $(".hmh_subjectContentBox_item" + i.toString()).html(subject["content"][tagName]);
    }
    if (subject["content"]["tags"].length < 4) {
        for (var i = subject["content"]["tags"].length; i < 4; i++) {
            $(".hmh_subjectContentMenu_item" + i.toString()).remove();
        }
    }
}

var setOtherSubjectsBar = function(data, thisSubject) {
    var otherSubjectsIds = [];
    var otherSubjectsNames = [];
    $.each(data, function(key, value) {
        if (value.subjectId != thisSubject.subjectId) {
            otherSubjectsIds.push(value.subjectId);
            otherSubjectsNames.push(value.subjectName);
        }
    });
    // appending items into list
    for (var i = 0;i < otherSubjectsIds.length;i++) {
        var newChild = "<li><a href=\"#\" onclick=\"goToSubject('" + detectSubjectType() + "', '" + otherSubjectsIds[i] + "');\" class=\"hmh_otherSubjectsBar_item" + i.toString() + "\">" + otherSubjectsNames[i] + "</a></li>";
        $(".hmh_otherSubjectsBar").append(newChild);
    }
}
