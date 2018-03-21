export interface Column {
  title?: string;
  field?: string;
  width?: string | number;
  checkbox?: boolean;
  sortable?: boolean;
  order?: 'asc' | 'desc';
  formatter?: (v?: string | number, i?: number, r?: any) => string;
  searchable?: boolean;
  isOrder?: boolean;
  isOperate?: boolean;
  event?: any;
}
