﻿/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openCourseSidebar() {
    //document.getElementById("mainContent").style.opacity = "0";

    document.getElementById("instructorSidebar").style.visibility = "hidden";
    document.getElementById("courseSidebar").style.visibility = "visible";

    document.getElementById("courseSidebar").style.width = "250px";
    document.getElementById("instructorSidebar").style.width = "0px"
    document.getElementById("main").style.marginLeft = "250px";
}

function openInstructorSidebar() {
    //document.getElementById("mainContent").style.opacity = "0";

    document.getElementById("instructorSidebar").style.visibility = "visible";
    document.getElementById("courseSidebar").style.visibility = "hidden";

    document.getElementById("instructorSidebar").style.width = "250px";
    document.getElementById("courseSidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeCourseSidebar() {
    //document.getElementById("mainContent").style.opacity = "1";

    document.getElementById("courseSidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

function closeInstructorSidebar() {
    //document.getElementById("mainContent").style.opacity = "1";

    document.getElementById("instructorSidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}