import {Component, ElementRef} from '@angular/core';
import {PreloadService} from './core/services/preload.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(preloadService: PreloadService<any>, elementRef: ElementRef){
    preloadService.data = JSON.parse(elementRef.nativeElement.getAttribute('data-init'));
  }
}
