import { Component, OnInit, Input } from '@angular/core';
import { TrainingCardConfig } from '../../interfaces/training-card-config'

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss'],
})
export class TrainingCardComponent  implements OnInit {

  @Input() config!: TrainingCardConfig;

  constructor() { }

  ngOnInit() {
    if (!this.config) {
      throw new Error('Input config is required for TrainingCardComponent');
    }
  }

}
