import {
  AfterContentInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../module.service';
import {combineLatest, Subscription} from 'rxjs';

interface Module {
  url: string;
  name: string;
  id?: any;
  selector?: string;
  files?: string[];
}

@Component({
  template: '',
  styleUrls: ['./lazy-loading.component.scss'],
})
export class LazyLoadingComponent implements OnInit, OnDestroy {

  private subscription = Subscription.EMPTY;

  constructor(
    readonly moduleService: ModuleService,
    readonly elementRef: ElementRef,
    readonly activatedRoute: ActivatedRoute,
    readonly viewContainerRef: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    this.subscription = combineLatest([this.moduleService.modules]).subscribe(([modules]) => {
      this.viewContainerRef.clear();
      const module = modules.find(current => current.id === this.activatedRoute.snapshot.data.id);
      this.moduleService.load(module, this.elementRef.nativeElement);
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
