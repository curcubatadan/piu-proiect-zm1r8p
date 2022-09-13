import { InMemoryDbService } from 'angular-in-memory-web-api'; 
import {Injectable} from '@angular/core';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let employees=[
      {
        id: 1, 
        name: 'Marian', 
        location:'Brasov', 
        email: 'Marian@gmail.com',
        mobile:'0756325845'   
      },
      {
        id: 2, 
        name: 'Andrei',
        location:'Iasi', 
        email: 'Andrei@mail.com', 
        mobile: '0786753452'  
      },
      { 
        id: 3, 
        name: 'Anca',
        location:'Timisoara', 
        email: 'Anca@mail.com', 
        mobile: '0775287450'  
      }

    ];
    return {employees};
  }
}
