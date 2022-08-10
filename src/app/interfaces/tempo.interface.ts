export interface Tempo {
  temp: number;
  date: string;
  condition_code: string;
  description: string;
  city: string;
  humidity: number;
  condition_slug: string;
  forecast: Array<{
    date: string;
    weekday: string;
    max: number;
    min: number;
    description: string;
    condition: string;
  }>
}