import { Component } from '@angular/core';
import { ViewEncapsulation, OnInit } from '@angular/core';

declare const require: any;
@Component({
  template: `
  <div id="widget">
    <div class="card">
        <div class="header">
          <h1>Widget Webcomponent 1
            <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="30">
          </h1>
        </div>
        <p>
          Angular Version: {{ngVersion}}
        </p>
    </div>
  </div>
  `,
  styles: [`
        #widget { padding:10px; border: 2px darkred dashed }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class Wc1WidgetComponent implements OnInit {
    ngVersion = require('../../../package.json').dependencies['@angular/core'];
    ngOnInit(): void {
    }
}
