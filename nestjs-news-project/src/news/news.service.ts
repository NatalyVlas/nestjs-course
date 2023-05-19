import { Injectable } from '@nestjs/common';
import { Comment } from './comments/comments.service'

export interface News {
    id?: number;
    title: string;
    description: string;
    author: string;
    countView?: number;
    comments?: Comment[];
    cover?: string;
}

export function getRandomInt(min: number = 1, max: number = 9999): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

@Injectable()
export class NewsService {
    private readonly news: News[] = [
        {
            id: 1,
            title: 'News 1',
            description: 'Its my first news',
            author: 'Nataly',
            countView: 10,
            cover: 'https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg'
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