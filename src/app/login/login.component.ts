import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private userService:UserService,private http: Http,private router:Router) { }

  ngOnInit() {
  }
  login():void{

    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/sistema/login',{
      'username': this.username,
      'password': this.password
    }, options).toPromise()
      .then(res => {
        if(res != undefined){
          this.userService.user = res.json().username;
          console.log(this.userService.user);
          this.router.navigateByUrl('/home');
        }else{
          this.userService.user = undefined;
          console.log(res);
        }
      })
      .catch(err=>{this.userService.user = undefined;console.log(err);});
  }
}
