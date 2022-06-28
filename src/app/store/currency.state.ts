import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Currencies } from '../models/currency.model';
import { RequestService } from '../services/request.service'
import { GetCurrencies, SetCurrency } from '../store/currency.action'

export interface CurrencyStateModel {
  currencies: Currencies[];
}

@State<CurrencyStateModel>({
  name: 'currencyState',
  defaults: {
    currencies: []
  }
})

@Injectable()
export class CurrencyState {
  constructor(private _requestService: RequestService) {

  }
  @Selector()
  static selectStateData(state: CurrencyStateModel) {
    return state.currencies;
  }

  @Action(GetCurrencies)
  GetCurrenciesData({ patchState }: StateContext<CurrencyStateModel>) {
    return this._requestService.getCurrency().pipe(
      tap((currencies: any[]) => {
        patchState({ currencies });
      })
    );
  }

  // @Action(SetCurrency)
  // SetCurrencyData(
  //   { patchState }: StateContext<CurrencyStateModel>,
  //   payload: SetCurrency
  // ) {
  //   patchState({ currency: payload.currency });
  //   localStorage.setItem('currency', payload.currency);
  // }
}
