import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

    @Input() pic: string = 'https://cdn.vectorstock.com/i/1000x1000/35/52/placeholder-rgb-color-icon-vector-32173552.webp'
    @Input() picAlt: string = 'Card picture'
    @Input() title: string = 'Title'
    @Input() id: string = '0'
}
