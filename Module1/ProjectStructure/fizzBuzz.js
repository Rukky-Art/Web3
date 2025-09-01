for(let number = 1; number <= 100; number++){
    let special = '';
    if(number % 3 == 0) special += "Fizz";
    if(number % 5 == 0) special += "Buzz";
    console.log(special || number)
}
