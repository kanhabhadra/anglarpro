import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KanhaserviceService {
employe:any[];
  constructor() { 
    this.employe=[
      {name:'kanha',roll:23},
      {name:'kanha',roll:23},
      {name:'kanha',roll:23},      
    ]
  }
  display(){
    return 'this is my Service';
  }
}
