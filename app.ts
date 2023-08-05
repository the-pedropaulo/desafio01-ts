import { CompanyAccount } from './class/CompanyAccount'
import { GiftAccount } from './class/GiftAccount'
import { PeopleAccount } from './class/PeopleAccount'

// CONTA 1
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 12123123120)
let deposito1 = peopleAccount.deposit(50)
let saldo1 = peopleAccount.getBalance()
let saque1 = peopleAccount.withdraw(10)
let saldo1Final = peopleAccount.getBalance()

console.log(`Pessoa fez um depósito de ${deposito1} e retornou um saldo de ${saldo1}. Depois ela fez um saque de ${saque1} e o novo saldo dela é ${saldo1Final}`)

// CONTA 2
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 22121321230)
let deposito2 = companyAccount.deposit(50)
let saldo2 = companyAccount.getBalance()
let saque2 = companyAccount.withdraw(10)
let emprestimo2 = companyAccount.getLoan(20)
let saldo2Final = companyAccount.getBalance()

console.log(`Empresa fez um depósito de ${deposito2} e retornou um saldo de ${saldo2}. Depois ela fez um saque de ${saque2} juntamente com um emprestimo de ${emprestimo2} e o novo saldo dela é ${saldo2Final}`)

// CONTA 3
const giftAccount: GiftAccount = new GiftAccount('GIFT', 1231210)
let deposito3 = giftAccount.deposit(50)
let saldo3 = giftAccount.getBalance()
let saque3 = giftAccount.withdraw(10)
let emprestimo3 = giftAccount.getLoan(20)
let saldo3Final = giftAccount.getBalance()

console.log(`Conta Presente fez um depósito de ${deposito3} e retornou um saldo de ${saldo3}. Depois ela fez um saque de ${saque3} juntamente com um emprestimo de ${emprestimo3} e o novo saldo dela é ${saldo3Final}`)

