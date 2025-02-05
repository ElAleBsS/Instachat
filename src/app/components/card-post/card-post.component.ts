import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  standalone:false
})
export class CardPostComponent  implements OnInit {

  @Input() username: string='';
  @Input() text: string='';
  @Input() img:string='';
  constructor() { }

  ngOnInit() {}

}
