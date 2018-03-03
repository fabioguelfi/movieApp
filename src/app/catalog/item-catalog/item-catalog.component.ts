import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-item-catalog',
  templateUrl: './item-catalog.component.html',
  styleUrls: ['./item-catalog.component.css']
})
export class ItemCatalogComponent implements OnInit {

  @Input() movie: any

  constructor() { }

  ngOnInit() {
  }

}
