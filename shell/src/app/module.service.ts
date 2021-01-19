import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {environment} from '../environments/environment';

declare interface Module {
  url: string;
  name: string;
  id?: any;
  selector?: string;
  files?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  public readonly modules: Observable<Module[]>;

  constructor(readonly httpClient: HttpClient) {
    this.modules = this.httpClient.get<Module[]>(`${environment.config}`).pipe(shareReplay(1));
  }

  public load({ files, url, selector }: Module, element: HTMLElement): void {
    const entryComponent = document.createElement(selector);
    element.appendChild(entryComponent);

    files.forEach(file => {
        const fileUrl = `${url}/${file}`;
        const script = document.createElement('script');
        script.type = 'module';
        script.src = fileUrl;
        element.appendChild(script);
      },
    );
  }
}
