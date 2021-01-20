import {Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../environments/environment';

declare const require: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit{

  ngVersion = require('../../package.json').dependencies['@angular/core'];
  title = 'wc1';

  @Input('state')
  set state(state: string) {
    console.debug('client-a received state', state);
  }

  @Output() message = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.initialNavigation();

    /*this.router.navigateByUrl(location.pathname.substr(1));
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.substr(1));
    });*/

    // Standalone mode
    if (environment.standalone) {
      // this.router.navigate(['/webcomp1/a']);
      this.router.navigate([{outlets: {elementA: 'a'}}]);
    }

    // just for demonstration!
    setTimeout(() => {
      this.message.next('client a initialized!');
    }, 2000);
  }
}
