import { Component, ViewChild , Input, OnInit} from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';
import { getCSSVariableValue } from './../../_metronic/kt/_utils';
import { LayoutService } from './../../_metronic/layout/core/layout.service';
import {NgbCalendar,NgbDate,NgbDatepickerModule,NgbDateStruct,NgbInputDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';

type Tabs =
  | 'kt_table_widget_7_tab_1'
  | 'kt_table_widget_7_tab_2'
  | 'kt_table_widget_7_tab_3'
  | 'kt_table_widget_7_tab_4';

@Component({
  selector: 'app-dashboard-sales',
  templateUrl: './dashboard-sales.component.html',
  styleUrls: ['./dashboard-sales.component.scss'],
  providers: [NgbInputDatepickerConfig]
})

export class DashboardSalesComponent implements OnInit {
  chartOptions: any = {};


	model: NgbDateStruct;
  
	constructor(config: NgbInputDatepickerConfig, private layout: LayoutService) {
		// customize default values of datepickers used by this component tree
		config.minDate = { year: 1900, month: 1, day: 1 };
		config.maxDate = { year: 2099, month: 12, day: 31 };

		// days that don't belong to current month are not visible
		config.outsideDays = 'hidden';

		// weekends are disabled

		// setting datepicker popup to close only on click outside
		// config.autoClose = 'outside';

		// setting datepicker popup to open above the input
		config.placement = ['top-start', 'top-end'];
	}


  

  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  
  activeTab: Tabs = 'kt_table_widget_7_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }


  async openModal() {
    return await this.modalComponent.open();
  }

// Code For Circle Chart ( Blue, Green ) Widget 


  @Input() cssClass: string = '';
  @Input() chartSize: number = 110;
  @Input() chartLine: number = 17;
  @Input() chartRotate?: number = 145;

  @Input() chartColor: string = '';
  @Input() chartHeight: string;


  ngOnInit(): void {

    setTimeout(() => {
      initChart(this.chartSize, this.chartLine, this.chartRotate);
    }, 10);

    this.chartOptions = getChartOptions(350);


  }

}


export class DateRangePickerOverviewExample {}



const initChart = function (
  chartSize: number = 110,
  chartLine: number = 17,
  chartRotate: number = 145
) {
  const el = document.getElementById('kt_card_widget_17_chart');

  if (!el) {
    return;
  }

  var options = {
    size: chartSize,
    lineWidth: chartLine,
    rotate: chartRotate,
    //percent:  el.getAttribute('data-kt-percent') ,
  };

  const canvas = document.createElement('canvas');
  const span = document.createElement('span');

  // @ts-ignore
  if (typeof G_vmlCanvasManager !== 'undefined') {
    // @ts-ignore
    G_vmlCanvasManager.initElement(canvas);
  }

  const ctx = canvas.getContext('2d');
  canvas.width = canvas.height = options.size;

  el.appendChild(span);
  el.appendChild(canvas);

  // @ts-ignore
  ctx.translate(options.size / 2, options.size / 2); // change center
  // @ts-ignore
  ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

  //imd = ctx.getImageData(0, 0, 240, 240);
  const radius = (options.size - options.lineWidth) / 2;

  const drawCircle = function (
    color: string,
    lineWidth: number,
    percent: number
  ) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    if (!ctx) {
      return;
    }

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round'; // butt, round or square
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  // Init
  drawCircle('#E4E6EF', options.lineWidth, 100 / 100);
  drawCircle(getCSSVariableValue('--bs-primary-active'), options.lineWidth, 100 / 150);
  drawCircle(getCSSVariableValue('--bs-success'), options.lineWidth, 100 / 250);





}

function getChartOptions(height: number) {
  const labelColor = getCSSVariableValue('--bs-gray-600');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const baseColor = getCSSVariableValue('--bs-danger');
  const lightColor = getCSSVariableValue('--bs-danger-light');

  return {
    series: [
      {
        name: 'Net Profit',
        data: [330, 356, 320, 360, 333, 380],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: 280,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['Apr 06','Apr 10','Apr 14','Apr 18','Apr 18','Apr 18'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      categories: ['1','2','3'],
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return '$' + val + ' thousands';
        },
      },
    },
    colors: [lightColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      strokeColors: baseColor,
      strokeWidth: 3,
    },
  };
}

