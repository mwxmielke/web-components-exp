import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import {HttpClientModule} from '@angular/common/http';
import {LazyElementsModule} from '@angular-extensions/elements';
import { FeatureTwoComponent } from './feature-two/feature-two.component';
import { FeatureOneComponent } from './feature-one/feature-one.component';
import {ElementConfigService} from './element-config.service';

export function elementInit(elementConfigService: ElementConfigService): () => Promise<any> {
  return () => elementConfigService.load();
}

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    LazyElementsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { matcher: startsWith('webcomp1'), component: FeatureOneComponent },
      { matcher: startsWith('webcomp2'), component: FeatureTwoComponent },
    ])
  ],
  declarations: [
    AppComponent,
    FeatureTwoComponent,
    FeatureOneComponent,
  ],
  providers: [ElementConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: elementInit,
      multi: true,
      deps: [ElementConfigService]
    }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
