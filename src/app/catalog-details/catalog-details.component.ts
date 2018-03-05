import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { MovieService } from '../movie.service';

@Component({
  selector: 'mt-catalog-details',
  templateUrl: './catalog-details.component.html',
  styleUrls: ['./catalog-details.component.css']
})
export class CatalogDetailsComponent implements OnInit {
  public idMovie;

  movieDetails: Object;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    let id  = this.route.snapshot.params['id'];
    this.idMovie = id;

    this.movieService.getMovieById(this.idMovie).subscribe(movieListDetails => {
      this.movieDetails = movieListDetails;
    })
  }

}
