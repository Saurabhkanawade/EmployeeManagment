import { Component } from '@angular/core';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(private empService:EmployeeserviceService){

  }

  getNews(){
    this.empService.getNews().subscribe(data=>{
      console.log(data)
    })
    
  }
}
