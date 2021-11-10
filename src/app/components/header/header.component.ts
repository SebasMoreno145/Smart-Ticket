<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
=======
import { Component, Input } from '@angular/core';
>>>>>>> 26fb5e0e36217beae75914b96f60e434d0964919

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
<<<<<<< HEAD
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}
=======
export class HeaderComponent {

  @Input() titulo: string = '';


>>>>>>> 26fb5e0e36217beae75914b96f60e434d0964919

}
