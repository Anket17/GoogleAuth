import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {SafePipe} from '../Filter/safe.pipe'
import {CheckedOutComponent} from '../checked-out/checked-out.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
  ],
  declarations: [CheckedOutComponent, SafePipe],
  exports:[SafePipe] // <---

  
})
export class HomePageModule {}
