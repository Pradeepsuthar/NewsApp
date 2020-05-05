import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsContainerComponent } from './news-container/news-container.component';
import { NewsService } from './news.service';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { RouterModule } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
  imports: [ BrowserModule,
   FormsModule,
   RouterModule.forRoot([
      { path: '', component: NewsContainerComponent },
      { path: 'news/:newsId', component: NewsDetailsComponent },
    ])
     ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, NewsContainerComponent, FooterNavComponent, NewsDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NewsService]
})
export class AppModule { }
