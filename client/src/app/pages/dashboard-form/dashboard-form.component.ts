import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.css']
})
export class DashboardFormComponent implements OnInit {

  ngOnInit(): void {
  }
  myForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password : new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/)]),
  })
}
