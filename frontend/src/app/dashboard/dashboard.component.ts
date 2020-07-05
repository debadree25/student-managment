import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../models/student.model';
import { RestService } from '../services/rest.service';
import { Chart } from 'node_modules/chart.js';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students: Student[];
  toggle = true;
  years = [1, 2, 3, 4];
  yearsData = [];
  streams = ['IT', 'CSE', 'ECE', 'EE', 'ME'];
  streamsData = [];
  totalStudents = 0;
  chart1: any;
  chart2: any;
  constructor(private rest: RestService) {
    this.fetchData();
  }

  // students:Student[];
  // buttonClickd=false;

  async ngOnInit() {
  }



  async fetchData() {
    const resp = await this.rest.getAllStudents();
    this.students = resp.data;
    this.totalStudents = this.students.length;
    this.streams.forEach(async (stream) => {
      const res = await this.rest.getStudents({ department: stream });
      this.streamsData.push(res.data.length);
    });
    this.years.forEach(async (year) => {
      const res = await this.rest.getStudents({ year });
      this.yearsData.push(res.data.length);
    });
    console.log(this.streamsData);
    console.log(this.yearsData);
    this.chart1 = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: this.streams,
        datasets: [{
          label: 'Division wrt Stream',
          data: this.streamsData,
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
              min:0,
              max:50
            }
          }]
        }
      }
    });

    this.chart2 = new Chart('myPChart', {
      type: 'pie',
      data: {
        labels: ['1', '2', '3', '4'],
        datasets: [{
          label: 'Division By Year',
          backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9'],
          data: this.yearsData
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Division of students wrt year'
        }
      }
    });
    console.log(this.chart1.data.datasets[0]);
    console.log(this.chart2.data.datasets[0]);
  }

  // onClick(){
  //   this.buttonClickd=true;
  //   this.students=this.studentService.getStudents();
  //   console.log(this.students);
  // }

}
