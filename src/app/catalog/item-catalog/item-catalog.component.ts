import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-item-catalog',
  templateUrl: './item-catalog.component.html',
  styleUrls: ['./item-catalog.component.css']
})
export class ItemCatalogComponent implements OnInit {

  @Input() movie: any

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(movie) {
    this.router.navigate(['/catalogDetails', movie.id]);
  }
}
