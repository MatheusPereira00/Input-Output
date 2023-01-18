import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() meuSubi: string = '';
  @Input() meuTitulo: string = '';
  @Input() textModal: string = '';
  @Input() btn1: string = '';
  @Input() btn2: string = '';

}
