import {EventEmitter, Injectable} from '@angular/core';
import {Column} from './table.model';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {UtilService} from '../../../core/util.service';

@Injectable()
export class TableService {
  allChecked = false;
  indeterminate = false;
  dataSet = [];
  loading = false;
  total = 1;
  current = 1;
  pageSize = 10;
  key = 'id';
  sortMap = {};
  url;
  params: any = {
    pageNumber: 1,
    pageSize: 10,
    sortField: '',
    sortOrder: ''
  };
  columns: Column[] = [];
  isCheckbox = true;
  tableSize = 'middle';
  refreshStatusChange;

  constructor(private http: HttpClient,
              private domSanitizer: DomSanitizer) {
  }

  initTable(props) {
    for (const i in props) {
      if (props.hasOwnProperty(i)) {
        if (i === 'params') {
          Object.assign(this.params, props[i]);
        } else {
          this[i] = props[i];
        }
      }
    }
    for (const col of this.columns) {
      if (col.field) {
        this.sortMap[col.field] = null;
      }
    }
    if (this.url) {
      this.search(true);
    }
  }

  refreshStatus() {
    // 判断是否每一项都被选中
    const allChecked = this.dataSet.every(value => value.checked === true);
    // 判断是否每一项都未被选中
    const allUnChecked = this.dataSet.every(value => !value.checked);
    this.allChecked = allChecked;
    // 非全选且非全不选,即有部分项被选中
    this.indeterminate = (!allChecked) && (!allUnChecked);
    if (this.refreshStatusChange) {
      this.refreshStatusChange.emit(this.dataSet);
    }
  }

  checkAll(value) {
    if (value) {
      // 将每一项设为选中
      this.dataSet.forEach(data => data.checked = true);
    } else {
      // 将每一项设为不选中
      this.dataSet.forEach(data => data.checked = false);
    }
    this.refreshStatus();
  }

  search(reset = false) {
    if (reset) {
      this.current = 1;
    }
    this.loading = true;
    this.params.pageNumber = this.current;
    this.params.pageSize = this.pageSize;
    this.http.get(UtilService.urls[this.url], UtilService.getWholeParams(this.params)).subscribe((res: any) => {
      this.loading = false;
      if (res.code === '200') {
        this.dataSet = res.data.result || [];
        this.total = res.data.total;
      }
    });
  }

  sort(field, value) {
    this.sortMap[field] = value;
    // 本地数据
    if (!this.url) {
      this.dataSet = [...this.dataSet.sort((a, b) => {
        if (a[field] > b[field]) {
          return (value === 'ascend') ? 1 : -1;
        } else if (a[field] < b[field]) {
          return (value === 'ascend') ? -1 : 1;
        } else {
          return 0;
        }
      })];
    } else {
      // 远程数据
      this.params.sortField = field;
      this.params.sortOrder = value;
      this.search(true);
    }
  }

  getSecurityHtml(col, data, i) {
    return this.domSanitizer.bypassSecurityTrustHtml(col.formatter(data[col.field], data, i));
  }

  getTdStyle(col) {
    if (col.width) {
      if (typeof col.width === 'number') {
        return {
          width: `${col.width}px`
        };
      } else if (typeof col.width === 'string') {
        return {
          width: col.width
        };
      }
    } else {
      return {};
    }
  }

}
