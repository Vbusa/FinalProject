import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pageContent = {
    header: {
      title: "My Books List",
      body: "This are the best selling books"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
