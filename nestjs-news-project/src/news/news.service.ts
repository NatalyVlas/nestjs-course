import { Injectable } from '@nestjs/common';

export interface News {
    id?: number;
    title: string;
    description: string;
    author: string;
    countView?: number;
}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

@Injectable()
export class NewsService {
    private readonly news: News[] = [
        {
            id: 1,
            title: 'News #1',
            description: 'Its my first news',
            author: 'Nataly',
            countView: 10
        }
    ];

    create(news: News): News {
        const id = getRandomInt(1, 99999);
        const finalNews = {
        ...news,
        id: id,
       }
       this.news.push(finalNews);
       return finalNews;
    }

     getAll(): News[] {
        return this.news
    }

    find(id: News['id']): News | undefined {
        return this.news.find((news: News) => news.id === id);
    }

    remove(id: News['id']): Boolean {
       const indexRemovedNews = this.news.findIndex((news: News) => news.id === id);
       if (indexRemovedNews !== -1) {
        this.news.splice(indexRemovedNews, 1);
        return true;
       }
       return false;
    }

    change(id: News['id'], news: News): News | undefined {
        const indexChangedNews = this.news.findIndex((news: News) => news.id === id);
        if (indexChangedNews !== -1) {
            this.news[indexChangedNews] = {
            ...this.news[indexChangedNews], 
            ...news,
            }
        return this.news[indexChangedNews];
        }
    return undefined;
    }
}