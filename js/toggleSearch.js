// JavaScript function to toggle the search bar
function toggleSearch(isMobile) {
    var searchBar = isMobile ? document.getElementById("searchOverlayMobile") : document.getElementById("searchOverlayWeb");
    searchBar.classList.toggle("active");
}

// JavaScript function to close the search bar
function closeSearch(isMobile) {
    var searchBar = isMobile ? document.getElementById("searchOverlayMobile") : document.getElementById("searchOverlayWeb");
    searchBar.classList.remove("active");
}
