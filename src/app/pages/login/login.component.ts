import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginData={

    username:'',
    password:''
  };
  
  constructor(private snack:MatSnackBar,private login:LoginService ,private router:Router){}
  
  ngOnInit(): void {
    
  }

  formSubmit(){

    console.log('login button click');

    if(this.loginData.username.trim() == "" || this.loginData.username==null){
    
      this.snack.open('username is required','',{
        duration:3000,
      });
     return;

    }

    if(this.loginData.password.trim()=="" || this.loginData.password==null){
    
      this.snack.open('password is required','',{
        duration:3000
      });
     return;

    }

    this.login.generateToken(this.loginData).subscribe(

      (data:any)=>{
       console.log('success');
       console.log(data);

      this.login.LoginUser(data.token);
    
      
       this.getCurrent();
    },
        (error:any)=>{
        console.log('Error !');
        console.log(error);
                    
        this.snack.open("Invailid Details !! Try Again",'',{
          duration:3000,
        })
      }
    );
  }

  getCurrent(){
   
    this.login.getCurrentUser().subscribe((user:any)=>{
        this.login.setUser(user);
        console.log(user.authorities[0].authority);

        
        
      if(this.login.getUserRole()=="ADMIN"){
        // window.location.href='/admin';
             this.router.navigate(['admin']);
            // this.login.loginStatusSubject.next(true);

      }else if(this.login.getUserRole()=="Normal"){

        // window.location.href='/user';
        this.router.navigate(['user']);

        // this.login.loginStatusSubject.next(true)
      }else {
        this.login.logout();
      }
      
      });
    
    }
}
