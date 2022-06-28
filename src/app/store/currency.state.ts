import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Currencies } from '../models/currency.model';
import { RequestService } from '../services/request.service'
import { GetCurrencies } from '../store/currency.action'

export interface CurrencyStateModel {
  currencies: Currencies[];
}

@State<CurrencyStateModel>({
  name: 'CurrencyState',
  defaults: {
    currencies: []
  }
})

@Injectable()
export class CurrencyState {
  constructor(private _request: RequestService) {

  }
  @Selector()
  static selectStateData(state: CurrencyStateModel): Currencies[] {
    return state.currencies;
  }

  @Action(GetCurrencies)
  GetCurrenciesData(ctx: StateContext<CurrencyStateModel>) {
    return this._request.getCurrency().pipe(
      tap((currencies: Currencies[]) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          currencies: currencies
        })
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
