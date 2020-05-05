import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

    // news: {imgUrl: string, newsTitle: string, newsDesc: string, likes: number, comments:number}[] = [];

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService){}
  
  singleNews;
  news = this.newsService.news;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.singleNews = this.news[+params.get('newsId')];
    });
  }

}