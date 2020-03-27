import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaganaComponent } from './gagana/gagana.component';
import { GaganaaComponent } from './gaganaa/gaganaa.component';
import { GaganawildComponent } from './gaganawild/gaganawild.component';
import { ChildroutComponent } from './childrout/childrout.component';


const routes: Routes = [ 
  {path:"gaganaa",
    children:[
      {path:"",component:GaganaaComponent},
      {path:"gagana",component:GaganaComponent},
      {path:"childrout",component:ChildroutComponent}
    ]
  
  },
  {path:"**",component:GaganawildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
