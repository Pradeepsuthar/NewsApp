import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {

  news: {imgUrl: string, newsTitle: string, newsDesc: string, likes: number, comments:number}[] = [];

  constructor(private newsService: NewsService){}
  
  ngOnInit() {
    this.news = this.newsService.news;
  }
}