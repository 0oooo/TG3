const subjects = ["football", "uknews", "travel"];
const apiKey = "9wur7sdh84azzazdt3ye54k4";
const mainUrl = "https://content.guardianapis.com/search?";
const articles = {};
const options = "use-date=published&order-by=newest&";

window.addEventListener("load", async () => {
    const selectedTab = document.getElementsByClassName("selected")[0];
    const id = selectedTab.id.replace("header", "");
    document.getElementById(id).style.display = "block";

    try{
        await getLatestNews();
    }catch(e){
        console.log(`Error with fetching the latest news + ${e}`);
    }
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

const formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
};



const getLatestNews = async () => {
    let today = new Date().toISOString();
    today = formatDate(today);

    for(let subject of subjects) {
        let url = mainUrl + options + "to-date=" + today + "&q=" +subject + "&api-key=" + apiKey;
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            let results = json.response.results;
            const currArticle = [];
            for(let result of results){
                const title = result["webTitle"];
                const webUrl = result["webUrl"];
                currArticle.push([title, webUrl]);
            }
            articles[subject] =  currArticle;
        } else {
            alert("HTTP-Error: " + response.status);
        }
    }
    populateCurrHtml();
};

const populateCurrHtml = () => {
    console.log(articles);
    for(let subject of subjects){
        const parent = document.getElementById(subject);
        for(let article of articles[subject]){
            const entry = document.createElement("a");
            entry.innerHTML = article[0];
            entry.setAttribute("href", article[1]);
            parent.appendChild(entry);
            console.log(article);
        }
    }
};



module.exports = formatDate;