import { Component, OnInit} from '@angular/core';
import { MobileService } from './mobile.service';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private ms:MobileService){

  }

  mobiles=null;

  formHeader ="Add mobile";
  mobileName ="";
  price:Number;
  ram:Number;
  storage:Number;
  showForm= false;
  id= null;

  ngOnInit(): void {
      this.getMobiles()  
  }

  getMobiles(){
    this.ms.fetchMobiles().subscribe(
      (data)=>{
        this.mobiles = data

      },
      (error)=>{
        console.log("error")
      }
    )  
  }

  deleteMobile(id){
    this.ms.deleteMobile(id).subscribe(
      (res)=>{

        this.getMobiles()

      }
    )
  }

  openForm(data=null){
    this.clearForm();
    this.showForm = true;
    if(data){
      this.mobileName = data.name;
      this.price = data.price;
      this.ram = data.ram;
      this.storage = data.storage;
      this.id =data.id;
      this.formHeader = "Edit Mobile"
    }
    else{
      this.id =null;
      this.formHeader ="Add Mobile"

    }
  }

  closeForm(){
    this.showForm = false;
    this.clearForm()
  }

  clearForm(){
    this.mobileName =null;
    this.price = null;
    this.ram = null;
    this.storage = null

  }

  saveMobile(){

    this.showForm =false;

    let  body = {
      name:this.mobileName,
      price:this.price,
      ram:this.ram,
      storage:this.storage
    }

    if(this.id){
      body['id'] =this.id;
      this.ms.putMobile(body).subscribe(
        (res)=>{
          this.getMobiles()
        },
        
      )
    }

    else{
      this.ms.postMobile(body).subscribe(
        (res)=>{
          this.getMobiles()
        },
      )
    }

  }
  
}










