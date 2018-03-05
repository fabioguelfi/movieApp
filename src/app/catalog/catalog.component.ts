import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MovieService } from '../movie.service';

@Component({
  selector: 'mt-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {

  movies: any[] = [];
  selectedDay: String = ''

  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getMovies().subscribe(movieList => {
      this.movies = movieList['results'];
    })
  }

  selectChangeHandler (event: any) {
    /*update view*/
    this.selectedDay = event.target.value;
    this.movieService.getMoviesSelected(this.selectedDay).subscribe(movieList => {
      this.movies = movieList['results'];
    })
  }

}
