import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit {

  @Input('server-elements') server;
  constructor() { }

  ngOnInit(): void {
    console.log(this.server);
  }

}
