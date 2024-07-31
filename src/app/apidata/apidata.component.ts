import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apidata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apidata.component.html',
  styleUrl: './apidata.component.scss',
})
export class ApidataComponent implements OnInit {
  constructor(private dataService: ApiDataService) {}

  movies: any[] = [];

  ngOnInit(): void {
    this.dataService.getItems().subscribe((data) => {
      this.movies = data.slice(0, 10);
      console.log('Data ==> ', this.movies);
    });
  }
}
