export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true
  

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): number => {
    if(this.validateStatus()){
      this.balance += amount;
    }
    
    return amount;
  }

  withdraw = (amount: number): number => {
    if(this.validateStatus() && this.availableForWithdrawal(amount)){
      this.balance -= amount;
    }

    return amount
  }

  getBalance = (): number => {
    return this.balance;
  }

  setBalance = (amount: number): number => {
    this.balance = amount
    return amount
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  private availableForWithdrawal = (amount: number): boolean => {
    if (this.balance > amount) {
      return true;
    }

    throw new Error('Saldo indisponível no momento. Faça um depósito!')
  }
}
