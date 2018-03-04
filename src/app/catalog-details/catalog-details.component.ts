import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-catalog-details',
  templateUrl: './catalog-details.component.html',
  styleUrls: ['./catalog-details.component.css']
})
export class CatalogDetailsComponent implements OnInit {
  public idMovie;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id  = this.route.snapshot.params['id'];
    this.idMovie = id;
  }

}
