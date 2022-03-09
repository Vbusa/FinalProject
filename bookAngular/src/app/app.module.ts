import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    BookListComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'book/:bookid',
        component: DetailComponent
      },
      {
        path: 'create',
        component: CreateComponent
      }
    ])
  ],
  providers: [{ provide: APP_BASE_HREF, useValue:'/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
