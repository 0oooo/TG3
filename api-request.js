window.addEventListener("load", () => {
    const selectedTab = document.getElementsByClassName("selected")[0];
    const id = selectedTab.id.replace("header", "");
    document.getElementById(id).style.display = "block";
});

const changeSelectedTab = (clickedTab) => {
    const selectedTab = document.getElementsByClassName("selected")[0];

    selectedTab.classList.remove("selected");
    clickedTab.classList.add("selected");

    const oldId = selectedTab.id.replace("header", "");
    const currId = clickedTab.id.replace("header", "");

    document.getElementById(oldId).style.display = "none";
    document.getElementById(currId).style.display = "block";
};