import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { CurrencyState } from 'src/app/store/currency.state';
import { Currencies } from 'src/app/models/currency.model';
import { GetCurrencies } from 'src/app/store/currency.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Select(CurrencyState.selectStateData)
  currencies$: Observable<Currencies[]>;

  currencies: Currencies[] = [];
  filteredCurrency: Currencies[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCurrencies());
    this.currencies$.subscribe((res: Currencies[]) => {

      this.currencies = res;
      res.forEach(c => {
        if (c.cc === 'USD' || c.cc === 'EUR') {
          this.filteredCurrency.push(c)
        }
      })
    })
  }
}
