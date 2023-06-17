import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DataSource } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/interfaces/Employee';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {

   ELEMENT_DATA: PeriodicElement[] = [
    {fullName:"Saurabh Kanawade",email:"saurabhkanawade30@gmail.com",jobTitle:"Software engineer", phone:8779122363,imageUrl:"saurabh.pngl̥",employeeCode:100211},
    {fullName:"Shankar Kandekar",email:"shankarkandekar@gmail.com",jobTitle:"Software engineer", phone:9373137808,imageUrl:"saurabh.pngl̥",employeeCode:100212},
    {fullName:"Amit Kandekar",email:"shankarkandekar@gmail.com",jobTitle:"Software engineer", phone:9373137808,imageUrl:"saurabh.pngl̥",employeeCode:100212}

  ]

  displayedColumns: string[] = ['Fullname', 'Email', 'JobTitle', 'Phone', 'Image', 'EmployeeCode'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  ngOnInit(): void {
  }

   /** Announce the change in sort state for assistive technology. */
   announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }


}


