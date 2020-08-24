import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-holders',
  templateUrl: './account-holders.component.html',
  styleUrls: ['./account-holders.component.scss']
})
export class AccountHoldersComponent implements OnInit {
  accounts = [
    {
      name : "karan k kumar(Current Account)",
      accountNumber : 753247864716,
      amount: 67099
    },
    {
      name : "J M Rathi(Loan Account)",
      accountNumber : 5675865685,
      amount:89890
    },
    {
      name : "John Doe(Saving Account)",
      accountNumber : 66765567789,
      amount:8798789
    },
    {
      name : "John Murphy(Saving Account)",
      accountNumber : 66765567789,
      amount:8798789
    },
    {
      name : "Clark G(Saving Account)",
      accountNumber : 66765567789,
      amount:8798789
    },
    {
      name : "Octivia H(Saving Account)",
      accountNumber : 66765567789,
      amount:8798789
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
