import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apidata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.scss'],
})
export class ApidataComponent implements OnInit {
  constructor(private dataService: ApiDataService) {}

  // Define the appropriate type for your data
  newsList: any[] = [];

  ngOnInit(): void {
    this.dataService.getItems().subscribe(
      (data: any) => {
        console.log('Received data:', data);
        if (Array.isArray(data)) {
          this.newsList = data;
        } else {
          console.error('Expected data to be an array, but received:', data);
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
