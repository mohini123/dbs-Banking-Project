import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-holders',
  templateUrl: './account-holders.component.html',
  styleUrls: ['./account-holders.component.scss']
})
export class AccountHoldersComponent implements OnInit {
  accounts = [
    {
      name : "karan kumar(Current Account)",
      accountNumber : 753247864716,
      amount: 67099,
      accountHistory:{
        vendorName : "Real Canadian super Market",
        amount : 678,
        billNumber : 89,
      }
    },
    {
      name : "J M Rathi(Loan Account)",
      accountNumber : 5675865685,
      amount:89890,
      accountHistory:{
        vendorName : "Walmart",
        amount : 678,
        billNumber : 89,
      }
    },
    {
      name : "John Doe(Saving Account)",
      accountNumber : 66765567789,
      amount:8798789,
      accountHistory:{
        vendorName : "Starbucks",
        amount : 678,
        billNumber : 89,
      }
    },
    {
      name : "John Murphy(Saving Account)",
      accountNumber : 66765567789,
      amount:8798789,
      accountHistory:{
        vendorName : "Norstrom Nike Edition",
        amount : 678,
        billNumber : 89,
      }
    },
    {
      name : "Clark G(Saving Account)",
      accountNumber : 66765567789,
      amount:8798789,
      accountHistory:{
        vendorName : "Pacific center Apple store",
        amount : 678,
        billNumber : 89,
      }
    },
    {
      name : "Octivia H(Saving Account)",
      accountNumber : 66765567789,
      amount:8798789,
      accountHistory:{
        vendorName : "Claires Granville st.",
        amount : 678,
        billNumber : 89,
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
