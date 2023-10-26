import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Quote {
  sentence: string;
  character: {
    name: string;
  };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  apiQuotes: any[] = [];
  num: number = 0;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }
  fetchQuotes(numQuotes: number) {
    this.http.get(`https://api.gameofthronesquotes.xyz/v1/random/${numQuotes}`).subscribe((data: any) => {
      this.apiQuotes = data;
      console.log(data);
    });
  }

}
