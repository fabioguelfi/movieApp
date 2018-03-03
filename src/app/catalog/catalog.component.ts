import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  // movies: any[] = [
  //   {
  //     id: "cinquenta tons",
  //     name: "rating",
  //     category: "suspense",
  //     year: "1996",
  //     imagePath: "xxx.jpg"
  //   },{
  //     id: "sherek",
  //     name: "fiona",
  //     category: "suspense",
  //     year: "1977",
  //     imagePath: "xaaxx.jpg"
  //   }
  // ]

  movies: Observable<any>

  readonly ROOT_URL_GENRE = 'https://api.themoviedb.org/3/genre/'
  readonly API_KEY = '?api_key=33092a849275dfe342ef839a9f14ddb9&'
  readonly GENRE_NUMBER = '28/movies'
  readonly LANGUAGE = 'language=pt-br'

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  getMovies() {
    this.movies = this.http.get(`${this.ROOT_URL_GENRE}${this.GENRE_NUMBER}${this.API_KEY}${this.LANGUAGE}`)
  }

}
