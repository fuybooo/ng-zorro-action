import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Column} from './table.model';
import {TableService} from './table.service';

/**
 * app-table组件
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  providers: [TableService]
})
export class TableComponent implements OnInit {
  @Input() url;
  @Input() params: any = {};
  @Input() columns: Column[] = [];
  @Input() dataSet = [];
  @Input() isCheckbox = true;
  @Input() key = 'id';
  @Input() tableSize = 'middle';
  @Output() refreshStatusChange = new EventEmitter();
  constructor(
    public tableService: TableService
  ) {}

  ngOnInit() {
    this.tableService.initTable({
      url: this.url,
      params: this.params,
      columns: this.columns,
      dataSet: this.dataSet,
      isCheckbox: this.isCheckbox,
      key: this.key,
      tableSize: this.tableSize,
      refreshStatusChange: this.refreshStatusChange,
    });
  }

}
