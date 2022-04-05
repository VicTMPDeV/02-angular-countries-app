import { Component } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `button {
        margin-right: 10px;
    }`
  ]
})
export class RegionComponent {

  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public activeRegion: string = '';

  constructor() { }

  setActiveRegion(region: string) {
    this.activeRegion = region;
    //TODO -> Call Service
  }

}
