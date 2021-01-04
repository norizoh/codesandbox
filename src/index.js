/**
 *  const.let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

//const val3 = "const変数";
//console.log(val3);

//val3 = "test";
//const val3 = "test";

// const val4 = {
//   name: "test",
//   age: 35
// };
// val4.name = "test333";
// console.log(val4);

/**
 * テンプレート文字列
 */

// const name = "うるとら";
// const age = 28;

// //｢私の名前はうるとらです。年齢は２８才です。｣

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "才です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}才です。`;
// console.log(message2);

/**
 * アロー関数
 */
// //従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(102, 3));

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 = `名前は、${myProfile.name}です。年齢は、${myProfile.age}才です。`;
// console.log(message1);

// /**
//  * 分割代入
//  */
// const { name, age } = myProfile;
// const message2 = `名前は、${name}です。年齢は、${age}才です。`;
// console.log(message2);

/**
 * 配列
 */
const myProfile = ["じゃけぇ", 28];
const message3 = `名前は、${myProfile[0]}です。年齢は、${myProfile[1]}才です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は、${name}です。年齢は、${age}才です。`;
console.log(message4);
