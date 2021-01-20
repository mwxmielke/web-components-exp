import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

export interface Element {
  url: string;
  name: string;
  id: string;
  tag: string;
}

@Injectable({
  providedIn: 'root'
})
export class ElementConfigService {

  private elements: Element[];

  constructor(private http: HttpClient) {}

  load(): Promise<any>  {

    const promise = this.http.get(`${environment.config.elements}`)
      .toPromise()
      .then(data => {
        Object.assign(this, data);
        return data;
      });

    return promise;
  }

  findElementById(id: string): Element {
    return this.elements.find(el => el.id === id);
  }
}
