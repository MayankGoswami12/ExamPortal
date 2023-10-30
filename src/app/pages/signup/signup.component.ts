import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private userService:UserService, private snack:MatSnackBar){}

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',

  };
  ngOnInit(): void {
   
  }

  formSubmit(){
   console.log(this.user)
   
   if(this.user.username == "" || this.user.username == null){

    //alert('user is required !!');
    
    this.snack.open('username is required !!','',{
    duration:3000,
    //verticalPosition:'top',  
    });
    return;
  }

  this.userService.addUser(this.user).subscribe(
    (data:any)=>{
    console.log(data);
    
    // alert('success');
    Swal.fire('success Done !!','user id is'+data.id,'success'); 
  },

    (error)=>{
      console.log(error);
     //alert('something wents wrong')
    this.snack.open('something went wrong !!','',{
     duration:3000,
    });
    }
    );
    
  }
  
}
