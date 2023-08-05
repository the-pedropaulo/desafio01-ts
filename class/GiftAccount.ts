import { DioAccount } from "./DioAccount"

export class GiftAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): number => {
    const amountWithTax = amount += 10;
    const balance = this.getBalance();
    if(this.validateStatus()){
      this.setBalance(balance + amountWithTax);
    }

    return amount
  }
}
