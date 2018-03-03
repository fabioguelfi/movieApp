import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  movies: any[] = [
    {
      id: "cinquenta tons",
      name: "rating",
      category: "suspense",
      year: "1996",
      imagePath: "xxx.jpg"
    },{
      id: "sherek",
      name: "fiona",
      category: "suspense",
      year: "1977",
      imagePath: "xaaxx.jpg"
    }
  ]

  constructor() { }

  ngOnInit() { }



}
