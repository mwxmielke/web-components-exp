import { Component, OnInit } from '@angular/core';
import {Element, ElementConfigService} from "../element-config.service";

@Component({
  selector: 'app-feature-two',
  templateUrl: './feature-two.component.html',
  styleUrls: ['./feature-two.component.css']
})
export class FeatureTwoComponent implements OnInit {
  public wc2Element: Element;

  constructor(private elementConfig: ElementConfigService) {
    this.wc2Element = elementConfig.findElementById('wc2');
  }

  ngOnInit(): void {
  }

}
