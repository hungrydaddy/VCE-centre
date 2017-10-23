var print = console.log;
// image slider setup






$(document).ready(function() {
    setMenuBar();
    //setTutors();
    //setComments();
}); //ready




// setup the tutor box
var setTutors = function() {
    $.getJSON("../../assets/base/json/tutorsInfo-cn.json", function(data) {
        if (data == null) {
            return;
        }
        var newChild = "";
        $.each(data, function(key, value) {
            newChild = "<div class=\"c-content-person-1 c-option-2\"><div class=\"c-caption c-content-overlay\"><div class=\"c-overlay-wrapper\"><div class=\"c-overlay-content\"><a href=\"../../assets/tutor-pics/{{{imgURL}}}\" data-lightbox=\"fancybox\" data-fancybox-group=\"gallery-2\"><i class=\"icon-magnifier\"></i></a></div></div><img src=\"../../assets/tutor-pics/{{{imgURL}}}\" class=\"img-responsive c-overlay-object\" alt=\"\"></div><div class=\"c-body\"><div class=\"c-head\"><div class=\"c-name c-font-uppercase c-font-bold\">{{{name}}}</div><ul class=\"c-socials c-theme-ul\"></ul></div><div class=\"c-position\">{{{title}}}</div><p>{{{intro}}}</p></div></div>";

            newChild = newChild.replace("{{{name}}}", value["name"]);
            newChild = newChild.replace("{{{title}}}", value["title"]);
            newChild = newChild.replace("{{{imgURL}}}", value["imgURL"]);
            newChild = newChild.replace("{{{imgURL}}}", value["imgURL"]);
            newChild = newChild.replace("{{{intro}}}", value["intro"]);

            $(".hmh_tutorBox").append(newChild);
        });

    });
}


var setComments = function() {
    $.getJSON("../../assets/base/json/comments-cn.json", function(data) {
        if (data == null) {
            return;
        }
        var newChild = "";
        $.each(data, function(key, value) {
            newChild = "<div class=\"item\"><div class=\"c-content-testimonial-3 c-option-default\"><div class=\"c-content\">{{{comment}}}</div><div class=\"c-person\"><img src=\"../../assets/comment-pics/{{{imgURL}}}\" class=\"img-responsive\"><div class=\"c-person-detail c-font-uppercase\"><h4 class=\"c-name\">{{{name}}}</h4><p class=\"c-position c-font-bold c-theme-font\">{{{school}}}</p></div></div></div></div>";

            newChild = newChild.replace("{{{name}}}", value["name"]);
            newChild = newChild.replace("{{{school}}}", value["school"]);
            newChild = newChild.replace("{{{comment}}}", value["comment"]);
            newChild = newChild.replace("{{{imgURL}}}", value["imgURL"]);

            $(".hmh_commentBox").append(newChild);
        });
    });
}
