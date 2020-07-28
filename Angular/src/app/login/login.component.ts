import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router:Router,
  ) { }

  ngOnInit() {
   
  }
  
  data:any={};
  masuk(data)
  {
    if(data.username == 'beniwahyono@gmail.com')
    {
      this.router.navigate(['/buku-alamat']);
    }
    if(data.username == 'karyawan')
    {
      this.router.navigate(['/karyawan']);
    }
  }
  
}   