import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  numQuotes: number = 7;
  @Output() fetchQuotesEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  fetchQuotes() {
    this.fetchQuotesEvent.emit(this.numQuotes);
  }
}
