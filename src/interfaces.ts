export interface TableItem {
    id: string;
    fatherId: string;
    name?: string;
    jobTitle?: string;
    phone?: string;
    email?: string;
    address?: string;
    type: string;
  }
  
  export interface TableData {
    items: TableItem[];
  }