import { Component } from '@angular/core';
import { CharedService } from '../chared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public servise:CharedService, public router:Router){}
heros:any
  ngOnInit():void{
    this.servise.getallhero().subscribe(
      res=>{
        this.heros=res
      },err=>{
        console.log(err);
        
      }
    )
  }
delete(id:any){
  this.servise.deletehero(id).subscribe(
    res=>{
      this.ngOnInit()
    },
    err=>{
      console.log(err);
      
    }
  )
}
}
