export interface Report {
  batch: string;
  status: string;
  quantity: string;
  date: string;
  opened: string;
  failed: string;
  spam: string;
  bounced: string;
  unsubscribed: string;
  [key: string]: string;
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