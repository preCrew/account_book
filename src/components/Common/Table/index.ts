export { default } from './Table';
export interface TTableData {
  id: string;
  columns: TTableColumns[];
}

export interface TTableColumns {
  render: React.ReactNode;
  key: string;
}
