export interface TableListItem {
  name: string;
  tsCode: string;
  tsName: string;
  netBuy: number;
  count15: number;
  win15To23: number;
  win15To24: number;
  win15To25: number;
  win15To34: number;
  win15To35: number;
  win15To45: number;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  date?: string;
  code?: string;
  // pageSize?: number;
  // currentPage?: number;
}
