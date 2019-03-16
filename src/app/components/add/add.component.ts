
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Customer } from '../../connect-serv.model';
import { ConnectServService } from '../../connect-serv.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  createForm: FormGroup;
  constructor(private connectservService: ConnectServService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      age: '',
      email: ''
    });
  }
  addRecord(name, age, email) {
    this.connectservService.addRecord(name, age, email).subscribe(() => {
      this.snackBar.open('Customer added successfully', 'OK', {
        duration: 3000,
      });
      this.router.navigate(['/list']);
    });
  }
  ngOnInit() {
  }
}

