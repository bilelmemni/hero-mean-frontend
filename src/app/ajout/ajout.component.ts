import { Component } from '@angular/core';
import { CharedService } from '../chared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {

  constructor(public servise:CharedService, public router:Router){}
  hero={
    name:'',
    power:0,
    image:''
  }
  add(){
  this.servise.createnewhero(this.hero).subscribe(
    res=>{
     this.router.navigate(['/list'])
     console.log(res
      );
     
      
    },err=>{
      console.log(err );
      
    }
  )
  }
}
