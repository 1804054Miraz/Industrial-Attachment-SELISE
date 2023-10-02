import { Component } from '@angular/core';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component {
  private currentPlayerIndex: number;
  private currentWinnerIndex: number;
  private playerName : string[];
 public boardContent: number[][];

  constructor(){
    this.playerName = ['', 'X', 'O'];
    this.boardContent =[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];
    this.currentPlayerIndex = 1;
    this.currentWinnerIndex = 0;
  }
  public getPlayerName(col:number, row:number):string{
    return this.playerName[this.boardContent[row][col]];
  }
  public getStyle(col:number, row:number):string{
    if(this.boardContent[row][col] !== 0){
      return 'occupied-${this.getPlayerName(col,row)};'
      // return 'occupied-'+this.getPlayerName(col,row).toLowerCase()+'-cell';
    }
    return '';
  }
  public set(col: number, row:number):void{
    if(this.currentWinnerIndex === 0 && this.boardContent[row][col]===0){
      this.boardContent[row][col] = this.currentPlayerIndex;
      this.currentPlayerIndex = this.currentPlayerIndex === 1? 2:1;
    }
  }
  
}
