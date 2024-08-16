import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TrainingCardComponent } from './components/training-card/training-card.component';
import { ContentCardComponent } from './components/content-card/content-card.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    UserCardComponent,
    TrainingCardComponent,
    ContentCardComponent
  ],
  exports: [
    HeaderComponent, 
    UserCardComponent,
    TrainingCardComponent,
    ContentCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class SharedModule { }
