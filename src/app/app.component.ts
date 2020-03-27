import { Component } from '@angular/core';
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';
import {KanhaserviceService} from './Kanhaservice.Service';
import{ FormGroup,FormBuilder,NgForm,FormsModule, Validators} from '@angular/forms';
import { GagimModule } from './gagim/gagim.module';
import { valuechange } from './formgroup';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[KanhaserviceService]
})
export class AppComponent {
  title='kanha';
  signupForm:FormGroup;
  FName:string='';
  LName:string='';
  EName:string='';
    constructor(private frmbuilder:FormBuilder){
    this.signupForm=frmbuilder.group({
      fname:["",[Validators.required]],
      lname:["",[Validators.required,Validators.maxLength(10)]],
      ename:["",[Validators.required,Validators.email]]
    });
  }
  ngOnInit(){
    //this.signupForm.get('fname').valueChanges.subscribe(
     // uname=>{
      //  console.log(uname);

     // }
   // )
  // this.signupForm.valueChanges.subscribe((bname:valuechange)=>{
   //   console.log('fst name'+bname.fname);
   //   console.log('lastname'+bname.lname);
    //  console.log('email'+bname.ename);

  // }
  // )
 // this.signupForm.get('fname').statusChanges.subscribe(
  //   uname=>{
     //  console.log(uname);
     //}
 // )
  this.signupForm.statusChanges.subscribe(
    uname=>{
      console.log(uname);
    }
 )
  }

  postData(){
    this.FName=this.signupForm.get('fname').value;
    console.log(this.FName);
    console.log(this.signupForm.value);
  }
reset(){
  this.signupForm.reset({fname:'Gagi',lname:'racer'});
}
filldata(){
  this.signupForm.patchValue({
    fname:'managl',
    lname:'pandey',
    
  })
}
};
