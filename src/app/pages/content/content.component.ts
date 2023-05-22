import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/mocked-data/mocked-data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    @Input() pic: string = 'https://i.stack.imgur.com/y9DpT.jpg'
    @Input() picAlt: string = 'Content picture'
    @Input() title: string = 'Unavailable content'
    @Input() desc: string = ''
    private id: string = '0'

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id') || '0'
        })

        this.setValuesToComponent(this.id)
    }

    private setValuesToComponent(id: string): void {
        const result = fakeData.find(article => article.id.toString() === id)
        if(result) {
            this.pic = result.pic.src;
            this.picAlt = result.pic.alt;
            this.title = result.title;
            this.desc = result.desc;
        }
    }

}
