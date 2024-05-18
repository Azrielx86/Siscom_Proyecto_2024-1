import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import type {EChartsOption} from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() title: string = "";
  @Input() dataIn!: Observable<{ date: Date, value: number }[]>;
  data: { date: Date, value: number }[] = [];
  // Charts settings
  options: EChartsOption;
  updateOptions: EChartsOption;

  constructor() {
    this.options = {
      title: {
        text: this.title
      },
      tooltip: {
        trigger: 'axis',
        // formatter: params => {
        //   let args = params as any[];
        //   let d = args[0];
        //   const date = d.data.date as Date;
        //   return `${date.toDateString()} [${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] ${d.data.value}`
        // },
        axisPointer: {
          type: 'line'
        },
      },
      xAxis: {
        type: 'time'
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: `${this.title} data`,
          type: 'line',
          stack: 'counts',
          areaStyle: {},
          data: this.data.map(i => [i.date, i.value])
        }
      ]
    }

    this.updateOptions = {
      series: [
        {
          data: this.data.map(i => [i.date, i.value])
        }
      ]
    }
  }

  ngOnInit(): void {
    this.dataIn.subscribe(changes => {
      this.data = changes
      this.updateOptions = {
        series: [
          {
            data: this.data.map(i => [i.date, i.value])
          }
        ]
      }
    });
  }

}
