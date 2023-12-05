// function toggleSidebar() {
//     var sidebar = document.getElementById("sidebar");
//     if (sidebar.style.right === "0px") {
//         sidebar.style.right = "-300px";
//     } else {
//         sidebar.style.right = "0";
//     }
// }
// document.addEventListener('click', function (event) {
//     var sidebar = document.getElementById("sidebar");
//     var userIcon = document.querySelector(".user-icon");

//     if (!sidebar.contains(event.target) && !userIcon.contains(event.target)) {
//         sidebar.style.right = "-300px";
//     }
// });


// document.getElementById("closeSidebar").addEventListener("click", function () {
//     document.getElementById("sidebar").style.right = "-300px";
// });


function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-300px";
    } else {
        sidebar.style.right = "0";
    }
}

document.addEventListener('click', function (event) {
    var sidebar = document.getElementById("sidebar");
    var userIcon = document.querySelector(".user-icon");
    var userSvg = document.getElementById("userSvg");  // Ajout du bouton userSvg

    if (
        !sidebar.contains(event.target) &&
        !userIcon.contains(event.target) &&
        !userSvg.contains(event.target)  // Vérification pour userSvg
    ) {
        sidebar.style.right = "-300px";
    }
});

document.getElementById("closeSidebar").addEventListener("click", function () {
    document.getElementById("sidebar").style.right = "-300px";
});

// Ajout d'un gestionnaire d'événements pour userSvg
document.getElementById("userSvg").addEventListener("click", function () {
    toggleSidebar();
});



// function toggleSidebar() {
//     var sidebar = document.getElementById("sidebar");
//     sidebar.classList.toggle("active");
// }

// document.addEventListener('click', function (event) {
//     var sidebar = document.getElementById("sidebar");

//     if (!sidebar.contains(event.target)) {
//         sidebar.classList.remove("active");
//     }
// });

// document.getElementById("closeSidebar").addEventListener("click", function () {
//     document.getElementById("sidebar").classList.remove("active");
// });

// document.getElementById("userIcon").addEventListener("click", toggleSidebar);
// document.getElementById("userSvg").addEventListener("click", toggleSidebar);


// function toggleSidebar() {
//     var sidebar = document.getElementById('sidebar');
//     var pageContent = document.getElementById('userIcon');

//     if (sidebar.style.width === '300px') {
//         sidebar.style.width = '0';
//         pageContent.style.marginRight = '0';
//     } else {
//         sidebar.style.width = '3000px';
//         pageContent.style.marginRight = '300px';
//     }
// }







