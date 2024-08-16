import { Component, OnInit } from '@angular/core';
import { TrainingCardConfig } from 'src/app/shared/interfaces/training-card-config';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  personalSlides: TrainingCardConfig[] = [];

  programSlides: TrainingCardConfig[] = [];

  constructor() { }

  ngOnInit() {
    this.personalSlides = [
      {
        title: '',
        subtitle: '',
        newTrainingLink: '/trainings/forca',
        image: '../../../../assets/img/workouts1.jpg'
      },
      {
        title: 'YOGA EXPERIENCE',
        subtitle: '',
        newTrainingLink: null,
        image: '../../../../assets/img/workouts1.jpg'
      },
    ]

    this.programSlides = [
      {
        title: 'LEVANTAMENTO DE PESO',
        subtitle: 'Continuar treinando',
        newTrainingLink: null,
        image: '../../../../assets/img/workouts1.jpg'
      },
      {
        title: 'YOGA EXPERIENCE',
        subtitle: '',
        newTrainingLink: null,
        image: '../../../../assets/img/workouts1.jpg'
      },
    ]
  }
}
