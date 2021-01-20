import { Component, OnInit } from '@angular/core';
import {ElementConfigService, Element} from '../element-config.service';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.css']
})
export class FeatureOneComponent implements OnInit {

  public wc1Element: Element;
  public wc1Widget: Element;

  constructor(private elementConfig: ElementConfigService) {
    this.wc1Element = elementConfig.findElementById('wc1');
    this.wc1Widget = elementConfig.findElementById('wc1-widget');
  }

  ngOnInit(): void {
  }

}
