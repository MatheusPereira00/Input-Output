import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit{

  valor: number = 0;

  constructor (){}

  ngOnInit(): void {
    
  }


  incrementa(){
    this.valor++;
  }

  decrementa(){
    this.valor--;
  }
}
