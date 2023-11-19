import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-selector',
  template: `
  <app-animals>
    <app-cat #animal animal></app-cat>
    <app-mouse #animal animal></app-mouse>
    <app-rock></app-rock>
  </app-animals>
  `,
})
export class ServiceSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
