import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies?: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    console.log("MoviesList Component mounted.");
    this.getMovieDetails();
  }


  getMovieDetails() {
    this.movieService.getMovies()
      .subscribe((data: any) => {
        this.movies = data.Search;
      })
      
  }

}
