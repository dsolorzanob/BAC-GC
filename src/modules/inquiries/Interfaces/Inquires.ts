export interface Reporte {
  lote: string;
  estado: string;
  cantidad: string;
  fecha: string;
  abierto: string;
  fallido: string;
  spam: string;
  rebote: string;
  desuscrito: string;
  [key: string]: string;
}

export interface DetalleLote {
  email: string;
  estado: string;
  cantidad: string;
  sistema: string;
  navegador: string;
  opciones: string;
  [key: string]: unknown; 
}