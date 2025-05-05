export interface Column {
  key: string;
  name: string;
  width?: number;
  filter?: string[]
}

export interface DataEntity {
  [key: string]: string | number;
}
