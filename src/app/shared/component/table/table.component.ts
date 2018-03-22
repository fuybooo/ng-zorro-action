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
  @Input() tableSize = 'middle';
  @Input() enableNormalEdit = false;
  @Input() enableNormalDelete = false;
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
      tableSize: this.tableSize,
      enableNormalEdit: this.enableNormalEdit,
      enableNormalDelete: this.enableNormalDelete,
      refreshStatusChange: this.refreshStatusChange,
    });
  }

}
