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


// let fruitType="Oranges"
// switch (fruitType) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Apples":
//     console.log("Apples are $0.32 a pound.");
//     break;
//   case "Bananas":
//     console.log("Bananas are $0.48 a pound.");
//     break;
//   case "Cherries":
//     console.log("Cherries are $3.00 a pound.");
//     break;
//   case "Mangoes":
//     console.log("Mangoes are $0.56 a pound.");
//     break;
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     break;
//   default:
//     console.log(`Sorry, we are out of ${fruitType}.`);
// }
// console.log("Is there anything else you'd like?");


// const gameName=new String("Aniket")
// console.log(gameName.charAt(2),"@@@@@@@@@@@@@@@")
// console.log(gameName.indexOf("i"),"@@@@@@@@@@@@@@@")
// console.log(gameName.slice(0,1),"@@@@@@@@@@@@@@@")


// const newString=new  gameName.substring(4)
// console.log("!!!!!!!!!!",newString)
// const num1=new  gameName.slice(4)
// // console.log("!!!!!!!!!!",num1)


// const gameName = "Aniket"; // Use a primitive string
// const num1 = gameName.slice(4);
// console.log("!!!!!!!!!!", num1);


// arr=[1,2,3,4,5,6,7]
// console.log("@@@@",arr.includes(1))
// console.log("@@@@",arr.indexOf(3))
// newarr=arr.join()
// console.log(newarr)
// console.log(arr)

// myn1=arr.slice(1,3)
// console.log("myn1",myn1)
// myn2=arr.splice(1,3)
// console.log("myn2",myn2)




marvel_Heros=[1,2,3,3,4,5,6]
dc_Heros=[1,2,3,3,4,5,6]
// // newAyy=marvel_Heros.push(dc_Heros)
// newAyy=marvel_Heros.concat(dc_Heros)
// console.log(newAyy)

// Spread Operator

newarray=[...marvel_Heros,...dc_Heros]
console.log(newarray)