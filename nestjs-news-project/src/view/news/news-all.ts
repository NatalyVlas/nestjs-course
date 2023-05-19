import { News } from "src/news/news.service";

export function renderNewsAll(news: News[]) {
    let newsListHtml = '';
    for (const newsItem of news) {
        newsListHtml += renderNewsBlock(newsItem)
    }
    return `<h1>Список новостей</h1>;
        <div class="row">
        ${newsListHtml}  
        </div>
    `;
}

export function renderNewsBlock(news: News) {
    return `
    <div class="col-lg-4 mb-2">
        <div class="card" style="width: 100%;">
        ${news.cover
            ?  `<img src="${news.cover}"
            style="height: 300px;
            object-fit: cover;
            class="card-img-top"
            alt="img">`
            : ''}
            <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${news.author}</h6>
                <p class="card-text">${news.description}</p>
                <a href="#" class="btn btn-primary">Lets read</a>
            </div>
        </div>
    </div>
    `;
}