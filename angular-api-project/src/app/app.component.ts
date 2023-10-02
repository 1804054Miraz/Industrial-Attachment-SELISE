import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiQuotes: any[] = [];
  ngOnInit(): void {
    // this.fetchQuotes(5);
  }
  fetchQuotes(numQuotes: number) {
    this.http.get(`https://api.gameofthronesquotes.xyz/v1/random/${numQuotes}`).subscribe((data: any) => {
      this.apiQuotes = data;
      // console.log(this.apiQuotes);
    });
  }

  constructor(private http: HttpClient) { }
}
