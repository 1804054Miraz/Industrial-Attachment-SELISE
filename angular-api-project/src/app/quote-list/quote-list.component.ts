import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
 @Input() quotes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.gameofthronesquotes.xyz/v1/random/5').subscribe((data: any) => {
      this.quotes = data;
      console.log(data);
    });
  }
}
