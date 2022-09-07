import { Component, OnInit } from '@angular/core';
import User from './Entity/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

title="Fill all the Fields below"
user: User = new User();

users: User[] = [];

  save(){
const observable = this.userService.createUser(this.user);
observable.subscribe(
  (response: any) =>{
    console.log(response);
  },
  function(error){
    console.log(error);
    alert("Something is MissFishy please try again")
  }
  )


  //  console.log(this.user.firstname);
  //  console.log(this.user.Gender);
  }


  deleteRow(user, index){
    const observable=this.userService.deleteUser(user);
    observable.subscribe((response:any) =>{
      console.log(response);
      this.users.splice(index,1)
    })
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const promise = this.userService.getUsers();
    promise.subscribe((response)=>{
      console.log(response);
      this.users = response as User[];
    }

    )
  }

}
