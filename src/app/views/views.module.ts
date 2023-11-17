import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataShowComponent } from './data-show/data-show.component';
import { DataInputComponent } from './data-input/data-input.component';
import { BowlingService } from '../services/bowling.service';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [DataShowComponent, DataInputComponent],
  imports: [CommonModule, UiModule],
  exports: [DataShowComponent, DataInputComponent],
})
export class ViewsModule {}
