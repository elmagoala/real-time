import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

 @Input() sizeChart:number=0;
 @Input() typeChart:string;

 public chartOptions:any = {
    responsive: true
  };

 public chartLabels:Array<any> = ['January', 'February', 'Mars', 'April'];

 public chartData:Array<any> = [
  { data: [10, 15, 26, 70], label: 'Zona 1' },
  { data: [8.5, 12, 30, 34], label: 'Zona 2' },
  { data: [15, 27, 38, 50], label: 'Zona 3' },
  { data: [13.5, 37, 48, 50], label: 'Zona 4' },
  { data: [9, 17, 28, 50], label: 'Zona 5' }
];

 constructor() { }

  ngOnInit() {
  }

  onChartClick(event) {
    console.log(event);
  }

}
