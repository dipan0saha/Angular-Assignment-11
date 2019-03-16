import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Customer } from '../../connect-serv.model';
import { ConnectServService } from '../../connect-serv.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: String;
  customer: any = {};
  updateForm: FormGroup;
  constructor(private connectservService: ConnectServService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.connectservService.getRecordById(this.id).subscribe(res => {
        this.customer = res;
        this.updateForm.get('name').setValue(this.customer.name);
        this.updateForm.get('age').setValue(this.customer.age);
        this.updateForm.get('email').setValue(this.customer.email);
      });
    });
  }
  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required ],
      age: '',
      email: ''
    });
  }
  updateRecord(name, age, email) {
    this.connectservService.updateRecord(this.id, name, age, email).subscribe(() => {
      this.snackBar.open('Customer updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }
}