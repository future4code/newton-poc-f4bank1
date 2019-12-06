import {writeFile} from "fs";



type BankAccount = {
  client: string,
  CPF: string,
  birthDate: string,
  balance: number,
}

type Expense = {
  expenses: Expense[],
}

type deposit = {
  deposits: deposit[],
}

const accountInfo: BankAccount = {
  client: "Amanda Rangel",
  CPF: "07268871619",
  birthDate: "19/10/1987",
  balance: 0
};


function createAccount (data: BankAccount) {
  return new Promise((resolve, reject) => {
    writeFile('bankData.json', JSON.stringify(data), 'utf8', (err: Error) => {
      if(err) {
        console.error("Erro ao criar a conta.");
        reject(err)
      } else {
        resolve("Conta criada com sucesso!")
      }
    })
  })
}
createAccount(accountInfo).then((response) => {
  console.log(response)
});

// function getAllAcounts() {
//
// }