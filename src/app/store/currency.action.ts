import { Currencies, Currency } from "../models/currency.model";

export class GetCurrencies {
  static readonly type = '[Currencies] Get';
  constructor(public payload: Currencies) { }
}

export class SetCurrency {
  static readonly type = '[Currency] Set';
  constructor(public payload: Currency) { }
}