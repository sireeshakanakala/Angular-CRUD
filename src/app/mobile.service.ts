import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }
  
  url = "http://localhost:5050/mobiles"

  fetchMobiles(){
    return this.http.get(this.url)
  }

  deleteMobile(id){
    return this.http.delete(this.url+"/"+id)
  }

  postMobile(body){
    return this.http.post(this.url,body)
  }

  putMobile(body){
    return this.http.put(this.url,body)
  }

  


}
