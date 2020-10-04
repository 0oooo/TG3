const changeSelectedTab = (clickedTab) => {
    const selectedTab = document.getElementById("selected");

    selectedTab.removeAttribute("id");
    clickedTab.setAttribute("id", "selected");
};