import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      // { matcher: startsWith('wc1'), component: WrapperComponent, data: { importName: 'wc1', elementName: 'wc1-element' }},
      // { matcher: startsWith('wc2'), component: WrapperComponent, data: { importName: 'wc2', elementName: 'wc2-element' }},
      { matcher: startsWith('webcomp1'), component: LazyLoadingComponent, data: { id: 'wc1' }},
      { matcher: startsWith('webcomp2'), component: LazyLoadingComponent, data: { id: 'wc2'}},
    ])
  ],
  declarations: [
    AppComponent,
    WrapperComponent,
    LazyLoadingComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
