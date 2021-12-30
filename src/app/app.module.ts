import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPanZoomModule } from 'ngx-panzoom';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RounderPipe } from './rounder.pipe';
import { ToggleFullscreenDirective } from './fullscreen.directive';
import { TileComponent } from './tile';

// Third-party modules
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [BrowserModule, FormsModule, TooltipModule, NgxPanZoomModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TileComponent,
    ToggleFullscreenDirective,
    RounderPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
