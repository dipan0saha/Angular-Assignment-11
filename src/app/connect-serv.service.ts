import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectServService {

  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) {     
  }

  getRecords() {
    return this.http.get(this.uri + '/customers');
  }

  getRecordById(id) {
    return this.http.get(this.uri + '/customers/' + id);
  }

  addRecord(name, age, email) {
    const customer = {
      name: name,
      age: age,
      email: email
    };
    return this.http.post(this.uri + '/customers/add', customer);
  }

  updateRecord(id, name, age, email) {
    const customer = {
      name: name,
      age: age,
      email: email
    };
    return this.http.post(this.uri + '/customers/update/' + id, customer);
  }

  deleteRecord(id) {
    return this.http.get(this.uri + '/customers/delete/' + id);
  }
}
