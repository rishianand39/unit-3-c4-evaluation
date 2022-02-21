async function apiCall(url) {
    //add api call logic here
    try {
        let res = await fetch(url);
        let data = res.json();
        return data;
    } catch (error) {
        console.log("err", error);
    }
}

function appendArticles(articles, main) {
    //add append logic here
    articles.forEach((element) => {
        let div = document.createElement("div");
        div.addEventListener("click", () => {
            localStorage.setItem("article", JSON.stringify(element));
            window.location.href = "news.html";
        });

        let img = document.createElement("img");
        img.src = element.urlToImage;
        let title = document.createElement("p");
        title.textContent = element.title;
        let publish = document.createElement("p");
        publish.textContent = element.publishedAt;
        let des = document.createElement("p");
        des.textContent = element.description;

        div.append(img, title, des, publish);
        main.append(div);
    });
}

export { apiCall, appendArticles };