import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { CurrencyState } from 'src/app/store/currency.state';
import { Currencies } from 'src/app/models/currency.model';
import { GetCurrencies } from 'src/app/store/currency.action';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Select(CurrencyState.selectStateData)
  currencies$: Observable<Currencies[]>;

  filtered: Currencies[] = []

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCurrencies());
    this.currencies$.subscribe((res: Currencies[]) => {

      console.log(res)
    })
  }
}
