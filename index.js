#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta.bold("\n\t Welcome to \'CodeWithSabi\' -TODO-LIST APPLICATION\n"));
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert to: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter amount to convert: "
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log("converted Amount: " + converted_amount.toFixed(2));
/*let convertion={
    "PKR":{
        "USD": 0.0044,
        "GBP":0.0037,
        "PKR":1
    },
    "GBP":{
        "USD": 1.21,
        "GBP":1,
        "PKR":271.79
    },
    "USD":{
        "USD": 1,
        "GBP":0.83,
        "PKR":225.50
    }
}

const answer:{
    from: string,
    to: string,
    amount: number
}= await inquirer.prompt([
    {
        type: "list",
        name: "fromAmount",
        choices:["PKR","GBP","USD"],
        message:"Select your currency: "
    },
    {
        type: "list",
        name: "toAmount",
        choices:["PKR","GBP","USD"],
        message:"Select  currency you want to convert : "
    },
    {
        type: "number",
        name: "amount",
        message:"Enter your amount you want to convert: "
    }

]);


const (From, to, amount)= answer;
if (form && to && amount){
   convertion["PKR"]
}
else{
    console.log("Invalid inputs");
}
*/
