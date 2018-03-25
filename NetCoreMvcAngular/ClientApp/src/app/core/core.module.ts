import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {throwIfAlreadyLoaded} from './module-import-check';
import {PreloadService} from './services/preload.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PreloadService],

})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
