const changeSelectedTab = (clickedTab) => {
    const selectedTab = document.getElementsByClassName("selected")[0];

    // selectedTab.removeAttribute("id");
    selectedTab.classList.remove("selected");
    clickedTab.classList.add("selected")
    // clickedTab.setAttribute("id", "selected");
};