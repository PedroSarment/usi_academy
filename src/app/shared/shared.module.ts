import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { UserCardComponent } from './components/user-card/user-card.component';




@NgModule({
  declarations: [
    HeaderComponent, 
    UserCardComponent],
  exports: [
    HeaderComponent, 
    UserCardComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class SharedModule { }
