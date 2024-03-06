import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit{

  constructor(private service:UserServiceService){}
  ngOnInit(): void {
    this.getUsersData();
  }
users:any;
SearchData:any;
  getUsersData(){
    this.service.getUsers().subscribe((res:unknown)=>{
      // console.log(res);
      this.users=res;
      
    },(err:unknown)=>{
      console.log(err);
      
    })
  }

FilterData(ev:any){
  if(ev){
    console.log(ev);
    
  }
}

}
