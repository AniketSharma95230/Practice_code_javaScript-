// let a="1"
// let b=2
// console.log("A+B",a+Number(b))

// let text1 = "Doe";
// let text2 = "joh";
// let text3 = text1 > text2;
// console.log("!!!!!!!!!!",text3)


// let text1 = " What a  ";
// text1 = "nice day" + text1;
// console.log("!!!!!!!!!!",text1)

// let x = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;
// console.log("!!!!!!!!!!",x)
// console.log("!!!!!!!!!!",y)
// console.log("!!!!!!!!!!",z)

let fruitType="Oranges"
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");