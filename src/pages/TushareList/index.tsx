//import { Input } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { SorterResult } from 'antd/es/table/interface';
import moment from 'moment';

import { TableListItem } from './data';
import { queryRangeLH } from './service';


const TableList: React.FC<{}> = () => {
  const [sorter, setSorter] = useState<string>('');
  const [date, setDate] = useState<string>(moment().subtract(1, 'day').format("YYYYMMDD"));
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '名称',
      dataIndex: 'name',
      valueType: 'textarea',
    },
    {
      title: 'code',
      dataIndex: 'tsCode',
    },
    {
      title: 'name',
      dataIndex: 'tsName',
    },
    {
      title: 'netBuy',
      dataIndex: 'netBuy',
    },
    {
      title: '数量',
      dataIndex: 'count15',
    },
    {
      title: '2To3',
      dataIndex: 'win15To23',
    },
    {
      title: '2To4',
      dataIndex: 'win15To24',
    },
    {
      title: '2To5',
      dataIndex: 'win15To25',
    },
    {
      title: '3To4',
      dataIndex: 'win15To34',
    },
    {
      title: '3To5',
      dataIndex: 'win15To35',
    },
    {
      title: '4To5',
      dataIndex: 'win15To45',
    },
  ];

  return (
    <PageHeaderWrapper>
      <ProTable<TableListItem>
        headerTitle="查询表格"
        actionRef={actionRef}
        rowKey="key"
        onChange={(_, _filter, _sorter) => {
          const sorterResult = _sorter as SorterResult<TableListItem>;
          if (sorterResult.field) {
            setSorter(`${sorterResult.field}_${sorterResult.order}`);
          }
        }}
        params={{
          sorter,
          date,
        }}
        tableAlertRender={({ selectedRowKeys, selectedRows }) => (
          <div>
            已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;
            <span>
              总计 {selectedRows.reduce((pre, item) => pre + item.netBuy, 0)} 万
            </span>
          </div>
        )}
        request={(params) => queryRangeLH(params)}
        columns={columns}
        rowSelection={{}}
      />
    </PageHeaderWrapper>
  );
};

export default TableList;
