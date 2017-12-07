/*
	Jacqueline Lee
	Portfolio
	Created November 2017
	portfolioJS.js
*/

/**
	Functions needed to show further description of work experience when
	button is clicked.
	Based on W3schools.com tutorial: 
		https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
**/
function showAmazonInfo() {
	var amaInfo = document.getElementById("AmazonDescrip");
    if (amaInfo.style.display === "none") {
        amaInfo.style.display = "block";
        document.getElementById("AmazonButton").innerHTML = "Hide Description";
    } else {
        amaInfo.style.display = "none";
        document.getElementById("AmazonButton").innerHTML = "Show Description";
    }
}

function showEvisionsInfo() {
	var evisionsInfo = document.getElementById("EvisionsDescrip");
    if (evisionsInfo.style.display === "none") {
        evisionsInfo.style.display = "block";
        document.getElementById("EvisionsButton").innerHTML = "Hide Description";
    } else {
        evisionsInfo.style.display = "none";
        document.getElementById("EvisionsButton").innerHTML = "Show Description";
    }
}

/**
    Author of pulsating effect: jsfiddle author AlienWebguy.
    http://jsfiddle.net/AlienWebguy/bSWMC/.
    Originally found answer at https://stackoverflow.com/questions/7223503/jquery-pulsate-times.
**/
$(function() {
    (function pulse() {
        $('#toggleUnderscore').delay(50).fadeOut('slow').delay(0).fadeIn('fast',pulse);
    })();
});

