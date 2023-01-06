import { Component, OnInit } from '@angular/core';
import {  ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>|any;

  @ViewChild("chart1") chart1: ChartComponent;
  public chartOptions1: Partial<ChartOptions>|any;


  constructor() {
    
    this.chartOptions1 = {
      
      series: [
        {
          name: "Net Profit",
          data: [100, 150,400,700,400]
        }
      
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "15%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      colors:['#c7001e'],
      xaxis: {
        categories: [
          // ["New" ,"Requests"],
          "New",

          // ["New", "Requests"],
          "Accepted",
          "Pending",
          "In Progress",
          "Completed",
         
        ],
        labels: {
          rotate: 0,
          hideOverlappingLabels: false,
          rotateAlways: false,
        
        }
        
      }
      ,
     
      // yaxis: {
      //   title: {
      //     text: "$ (thousands)"
      //   }
      // },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val:any) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
    


    this.chartOptions = {
      
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 30, 15]
        },
      
      ],
      colors:['#c7001e'],
      chart: {
        height: 200,
        type: "area"
      },
      grid: {
        show: false
    },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        show: false,
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      // yaxis: {
        
      //     floating: true,
      //     axisTicks: {
      //       show: false
      //     },
      //     axisBorder: {
      //       show: false
      //     },
      //     labels: {
      //       show: false
      //     },
        
      // },
      scales : {
        yAxes : [ {
            gridLines : {
                display : false
            }
        } ]
    },
    
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  ngOnInit(): void {
  }
  public generateData(baseval:any, count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }


}

