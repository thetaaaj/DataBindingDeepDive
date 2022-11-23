import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';

  @Output() addServerEvent = new EventEmitter();
  @Output() addBluePrintEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  addServer() {
    if (this.newServerName && this.newServerContent) {
      this.addServerEvent.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
    }
  }
  addBlueprint() {
    if (this.newServerName && this.newServerContent) {
      this.addBluePrintEvent.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
    }
  }


}
