import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Customer } from '../../connect-serv.model';
import { ConnectServService } from '../../connect-serv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customers: Customer[];
  displayedColumns = ['name', 'age', 'email', 'actions'];

  constructor(private connectservService: ConnectServService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetchRecords();
  }

  fetchRecords() {
    this.connectservService
    .getRecords()
    .subscribe((data: Customer[]) => {
      this.customers = data;
      console.log('Data requested ... ');
      console.log(this.customers);
    });
  }

  editRecord(id) {
    this.router.navigate(['/edit/' + id]);
  }
  
  deleteRecord(id) {
    this.connectservService.deleteRecord(id).subscribe(() => {
      this.snackBar.open('Customer deleted successfully', 'OK', {
        duration: 3000,
      });
      this.fetchRecords();
    });
  }
  
}
