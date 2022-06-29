import { Currencies } from './../../models/currency.model';
import { Observable } from 'rxjs';
import { CurrencyState } from './../../store/currency.state';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select } from '@ngxs/store';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  @Select(CurrencyState.selectStateData)
  currencies$: Observable<Currencies[]>;

  currencies: Currencies[] = [];
  filteredCurrency: Currencies[] = [];

  ngOnInit(): void {
    this.currencies$.subscribe((res: Currencies[]) => {
      this.currencies = res;
    })
    console.log('Testing', this.filteredCurrency[0].cc)
  }

  onChanges() {
    this.currencies.forEach(c => {
      if (c.cc === 'USD') {
        this.filteredCurrency.push(c)

      }
    })
  }
  currencyControl = new FormControl(this.filteredCurrency);
  form = new FormGroup({
    currency: this.currencyControl,
  });
}
