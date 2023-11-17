import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { BowlingService } from './services/bowling.service';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViewsModule, UiModule],
  providers: [BowlingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
