import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Column} from '../../../shared/component/table/table.model';
import {TableService} from '../../../shared/component/table/table.service';

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.less'],
  providers: [TableService]
})
export class DeviceTableComponent implements OnInit {
  url = 'getDeviceList';
  params: any = {
    deviceGroupId: -1
  };
  isCheckbox = true;
  key = 'id';
  tableSize = 'middle';
  @Output() refreshStatusChange = new EventEmitter();
  columns: Column[] = [
    {
      title: '设备型号',
      field: 'model',
      formatter: v => {
        return `<a>${v}</a>`;
      }
    },
    {
      title: '登录人',
      field: 'account',
    },
    {
      title: '操作',
      isOperate: true
    }
  ];
  constructor(
    public tableService: TableService
  ) { }

  ngOnInit() {
    this.tableService.initTable({
      url: this.url,
      params: this.params,
      isCheckbox: this.isCheckbox,
      key: this.key,
      tableSize: this.tableSize,
      refreshStatusChange: this.refreshStatusChange,
      columns: this.columns
    });
  }
  edit(row) {
    console.log(row);
  }
  del(row) {
    console.log(row);
  }

}
