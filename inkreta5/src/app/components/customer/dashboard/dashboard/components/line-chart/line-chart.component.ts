import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';
export const  data = [
  {
    "value": 20,
    "date": '2020-05-12T12:19:00+00:00'
  },
  {
    "value": 20,
    "date": "2020-05-12T12:19:00+00:00"
  },
  {
    "value": 50,
    "date": "2020-05-14T12:19:00+00:00"
  },
  {
    "value": 30,
    "date": "2020-05-16T12:19:00+00:00"
  },
  {
    "value": 80,
    "date": "2020-05-18T12:19:00+00:00"
  },
  {
    "value": 55,
    "date": "2020-05-20T12:19:00+00:00"
  },

];
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {

  public title = 'Line Chart';
  data: any[] = [
  {date: new Date('2010-01-01'), value: 40},
  {date: new Date('2010-01-04'), value: 93},
  {date: new Date('2010-01-05'), value: 95},
  {date: new Date('2010-01-06'), value: 130},
  {date: new Date('2010-01-07'), value: 110},
  {date: new Date('2010-01-08'), value: 120},
  {date: new Date('2010-01-09'), value: 129},
  {date: new Date('2010-01-10'), value: 107},
  {date: new Date('2010-01-11'), value: 140},
];

private margin = {top: 20, right: 20, bottom: 30, left: 50};
private width: number;
private height: number;
private x: any;
private y: any;
private svg: any;
 
 // this is line defination

constructor ( 
  ) {
  // configure margins and width/height of the graph
  this.width = 1260 - this.margin.left - this.margin.right;
  this.height = 170 - this.margin.top - this.margin.bottom;
}
public ngOnInit(): void {
  this.buildSvg();
  //console.log(this.svg)

  this.addXandYAxis();
  this.drawLineAndPath();
}

private buildSvg() {
  this.svg = d3.select('#line')
    .append('g')
    .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
    .attr('fill',"#008ecc")
  
  }
private addXandYAxis() {
  // range of data configuring
  this.x = d3Scale.scaleTime().range([0, this.width]);
  this.y = d3Scale.scaleLinear().range([this.height, 0]);
  this.x.domain(d3Array.extent(this.data, (d) => d.date ));
  this.y.domain(d3Array.extent(this.data, (d) => d.value ));
  // Configure the X Axis
  this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
  // Configure the Y Axis
  this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y));
}

private drawLineAndPath() {
  const line:d3Shape.Line<[number, number]> =
  
  
  d3Shape.line()
      .x( (d: any) => this.x(d.date) )
      .y( (d: any) => this.y(d.value) );
  // Configuring line path
  this.svg.append('path')
      .datum(this.data)
      .attr('class', 'line')
      .attr('d', line);
  //console.log(this.svg)
    }
}
