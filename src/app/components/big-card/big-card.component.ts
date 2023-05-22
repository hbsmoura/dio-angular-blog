import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

    @Input() pic: string = 'https://seropedica.rj.gov.br/wp-content/uploads/2021/08/placeholder-250-300x200.png'
    @Input() picAlt: string = 'Main card Picture'
    @Input() title: string = 'Title'
    @Input() desc: string = ''
    @Input() id: string = '0'

}
