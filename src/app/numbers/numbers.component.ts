import { Component, OnInit } from '@angular/core';

import { NumberService } from '../number.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  result = 0;

  constructor(private numberService: NumberService) { }

  ngOnInit(): void {
  }

  getSum(num_1: string, num_2: string): void {
    if (isNaN(Number(num_1)) || isNaN(Number(num_2))) { return; }

    this.numberService.getSum(num_1, num_2)
      .subscribe(ret => {
        this.result = ret;
      });
  }

}
