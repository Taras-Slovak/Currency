export interface Currencies {
  r030?: number,
  txt?: string,
  rate?: number,
  cc?: string,
  exchangedate?: string
}

export interface Currency {
  name: string,
  price: number | string
}