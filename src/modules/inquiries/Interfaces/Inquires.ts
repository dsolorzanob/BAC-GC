export interface Report {
  id: number;
  batch: string;
  status: string;
  quantity: string;
  date: string;
  opened: string;
  failed: string;
  spam: string;
  bounced: string;
  unsubscribed: string;
  [key: string]: string | number;
}

export interface BatchDetail {
  email: string;
  status: string;
  count: string;
  os: string;
  browser: string;
  options: string;
  [key: string]: string;
}