import { Component } from '@angular/core';
import { CharedService } from '../chared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(public servise:CharedService,private router:Router,private act:ActivatedRoute){}
hero:any;
id:any;
ngOnInit():void{
  this.id=this.act.snapshot.paramMap.get('id')
  this.servise.getherobyid(this.id).subscribe(
    res=>{
      this.hero=res
      
    },err=>{console.log(err);
    }
  )
}




update(){
  this.servise.updatehero(this.hero,this.id).subscribe(
    res=>{
      this.router.navigate(['/list'])

    },err=>{
      console.log(err);
      
    }
  )
}


}
