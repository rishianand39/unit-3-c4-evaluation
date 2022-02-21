async function storeSearchterm(term) {
    try {
        let res = await fetch(term);
        let data = await res.json();
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

        let des = document.createElement("p");
        des.textContent = element.description;

        div.append(img, title, des);
        main.append(div);
    });
}

export { storeSearchterm, appendArticles };