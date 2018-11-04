import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Http } from '@angular/http'

import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {

  constructor(private _httpService: Http) { }

  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  title = 'HighChart Angular Demo!';

  //ngOnInit() {
  ngAfterViewInit() {
    const options: Highcharts.Options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Panty',
        data: [1, 0, 4]
      }, {
        name: 'Cafeteria',
        data: [5, 7, 3]
      }]
    };

    this.chart = chart(this.chartTarget.nativeElement, options);
  }
  public captureScreen() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('htmltoPDF.pdf'); // Generated PDF
    });
  }
}
