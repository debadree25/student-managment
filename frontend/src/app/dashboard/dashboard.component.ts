import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../models/student.model';
import { RestService } from '../services/rest.service';
import { Chart } from 'node_modules/chart.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students: Student[];
  toggle=true;
  years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  streams = ['IT', 'CSE', 'ME', 'ECE', 'EE'];

  len = 0;
  constructor(private rest: RestService) {
    this.fetchData();
  }

  // students:Student[];
  // buttonClickd=false;

  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['IT', 'CSE', 'EE', 'ME', 'ECE'],
        datasets: [{
          label: 'Division wrt Stream',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    var chart1=new Chart("myPChart", {
      type: 'pie',
    data: {
      labels: ["1", "2", "3", "4"],
      datasets: [{
        label: "Division By Year",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
        data: [500,300,450,600]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Division of students wrt year'
      }
    }
    });
  }

  

 

  async fetchData() {
    const resp = await this.rest.getAllStudents();
    this.students = resp.data;
    this.len = this.students.length;
  }

  // onClick(){
  //   this.buttonClickd=true;
  //   this.students=this.studentService.getStudents();
  //   console.log(this.students);
  // }

}
