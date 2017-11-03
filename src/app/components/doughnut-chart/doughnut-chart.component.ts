import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  public doughnutChartLabels:string[] = ['Calle 85', 'Salitre plaza', 'Parque 93', "Calle 80", "Centro"];
  public doughnutChartData:number[] = [10, 8.5, 15, 13.5, 9];
  public doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  private refreshChart(){
    let data = [
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100)];
    
    this.doughnutChartData = data;

  }

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
