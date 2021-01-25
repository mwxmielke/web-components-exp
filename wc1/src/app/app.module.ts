import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { endsWith } from './router.utils';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import {Wc1WidgetComponent} from './wc1-widget/wc1-widget.component';
import {ElementRoutingModule} from './element-routing/element-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ElementRoutingModule.withRoutes([
      { matcher: endsWith('a'), component: AComponent, outlet: 'elementA'},
      { matcher: endsWith('b'), component: BComponent, outlet: 'elementA'},
    ]),
    /* RouterModule.forRoot([
      { matcher: endsWith('a'), component: AComponent, outlet: 'elementA'},
      { matcher: endsWith('b'), component: BComponent, outlet: 'elementA'},
    ]), */
  ],
  declarations: [
    AComponent,
    BComponent,
    AppComponent,
    Wc1WidgetComponent,
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    AppComponent,
    Wc1WidgetComponent
  ],
  exports: [ElementRoutingModule],
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('wc1-element', ce);

    const widgetElement = createCustomElement(Wc1WidgetComponent, { injector: this.injector});
    customElements.define('wc1-widget', widgetElement);
  }

}
