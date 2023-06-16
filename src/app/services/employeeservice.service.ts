import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../interfaces/Employee';


@Injectable({
  providedIn: 'root'


})
export class EmployeeserviceService {

  // private serverBaseUrl=environment.apiUrl

 private serverBaseUrl=environment.apiUrl
 private newsEndpoint=environment.newsUrl

  constructor(private httpClient:HttpClient) {

  }


  getNews():Observable<void>{
    return this.httpClient.get<void>(this.newsEndpoint)
  }

  getEmployees():Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(`${this.serverBaseUrl}/employee`);
  }

  getEmployeeByID(id:number):Observable<void>{
    return this.httpClient.get<void>(`${this.serverBaseUrl}/employee/${id}`)
  }

  addEmployee(employee:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.serverBaseUrl}/employee`,employee);
  }

  updateEmployee(employee:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.serverBaseUrl}/employee`,employee)
  }

  deleteEmployee(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.serverBaseUrl}/employee/${id}`)
  }

}
