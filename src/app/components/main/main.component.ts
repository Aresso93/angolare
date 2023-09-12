import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  mockData: Student[] = [

    {
      name: 'Ares',
      surname: 'Fiumicelli',
    },

    {
      name: 'Isabella',
      surname: 'Ottonello',
    },

    {
      name: 'Francesca',
      surname: 'Ercolani',
    },

    {
      name: 'Damiano',
      surname: 'Di Lionardo',
    },

    {
      name: 'Luca',
      surname: 'Verduci',
    },

    {
      name: 'Stefania',
      surname: 'Ghergut',
    },

    {
      name: 'Cesare',
      surname: 'Falzone',
    },

    {
      name: 'Manuela',
      surname: 'Ariotti',
    },

    {
      name: 'Bryan',
      surname: 'Rojas',
    },

    {
      name: 'Stefano',
      surname: 'Florio',
    }


  ]

  shuffleStudents(){
    const tempArray = [];
    const originalLength = this.mockData.length
    for (let i = 0; i < originalLength; i++) {
        
        const randomIndex = Math.floor(Math.random()*this.mockData.length);
        const student = this.mockData[randomIndex];
        tempArray.push(student);
        this.mockData.splice(randomIndex,1);
        
    }
    this.mockData=tempArray;
    console.log(this.mockData=tempArray);
    
}

getSquads(members:number){
  let acc = '';
  for (let i = 0; i < this.mockData.length; i++) {
      const student = this.mockData[i];
      if (i % members === 0) {
          acc += 'Squadra '+ (i/members+1) + ': ';
      }
      acc += student.toString();
      if (i % members === members-1) {
          acc += '\n';
      }
      else {
          acc += ' e ';
      }

      
  }
  return acc;
}


}