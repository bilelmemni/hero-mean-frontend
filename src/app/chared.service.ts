import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CharedService {

  constructor(private http:HttpClient ,public router:Router) { }
  private url='http://127.0.0.1:3000/'
  createnewhero(hero:any){
    return this.http.post(this.url+'hero/create',hero)
  };
  getallhero(){
    return this.http.get(this.url+'hero/getall')
  }
  deletehero(id:any){
    return this.http.delete(this.url+'hero/delete/'+id)
  }
  getherobyid(id:any){
   return this.http.get(this.url+'hero/getbyid/'+id)
  }
  updatehero(data:any,id:any){
    return this.http.put(this.url+'hero/update/'+id,data)
  }

  
}
