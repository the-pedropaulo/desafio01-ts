import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): number => {
    const balance = this.getBalance();
    if(this.validateStatus()){
      this.setBalance(balance + amount);
    }

    return amount
  }
}