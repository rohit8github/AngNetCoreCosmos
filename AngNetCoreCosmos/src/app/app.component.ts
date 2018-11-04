import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular';
  constructor(private _httpService: Http) { }
  apiResponse: string[] = [];

  ngOnInit() {
    this._httpService.get('/api/Values').subscribe(result => {
      this.apiResponse = result.json() as string[];
    });

  }
}
