// function callback() {
//   console.log("콜백 함수가 호출됨");
// }

// setTimeout(callback, 5000);
// console.log("작업을 수행함");

// function getUsers(callback) {
//   let users = [];
//   setTimeout(() => {
//     const users = [
//       { name: "Kim", email: "kim@gmail.com" },
//       { name: "Lee", email: "Lee@gmail.com" },
//       { name: "Park", email: "Park@gmail.com" },
//     ];
//     callback(users);
//   }, 1000);
// }

// function findUser(name, callback) {
//   getUsers((users) => {
//     const user = users.find((user) => user.name === name);
//     callback(user);
//   });
// }

// findUser("Kim", (user) => {
//   console.log(user);
// });

// let greeting = document.querySelector("#greeting");
// greeting.addEventListener("click", sayHello);
// function sayHello() {
//   alert("안녕하세요");
// }

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: "Kim", email: "kim@gmail.com" },
//         { name: "Lee", email: "Lee@gmail.com" },
//         { name: "Park", email: "Park@gmail.com" },
//       ]);
//     }, 1000);
//   });
// }
// let promise = getUsers();
// promise.then((users) => console.log(users));

// let success = false;
// function getUsers() {
//   return new Promise((resolve, reject) => {
//     if (success) {
//       setTimeout(() => {
//         resolve([
//           { name: "Kim", email: "kim@gmail.com" },
//           { name: "Lee", email: "Lee@gmail.com" },
//           { name: "Park", email: "Park@gmail.com" },
//         ]);
//       }, 1000);
//     } else reject("실패");
//   });
// }
// let promise = getUsers();
// promise.then(
//   (users) => console.log(users),
//   (error) => console.log(error)
// );

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000));
// let promises = [p1, p2];

// Promise.all(promises).then((results) => {
//   console.log("완료!");
// });

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(5), 1000));
// const p2 = p1.then((value) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value * 10);
//     }, 1500);
//   });
// });

//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function sayHello() {
//   return "안녕";
// }
// sayHello().then(console.log);

// let sayHello2 = async function () {
//   return "안녕2";
// };

// sayHello2().then(console.log);

// let sayHello3 = async () => "안녕3";
// sayHello3().then(console.log);

// class Greeter {
//   async sayHello4() {
//     return "안녕4";
//   }
// }
// const greeter = new Greeter();
// greeter.sayHello4().then(console.log);

// async function sayHello5() {
//   return Promise.resolve("안녕5");
// }
// sayHello5().then(console.log);

// async function sayHello6() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("안녕6"), 1000);
//   });
// }

// async function display() {
//   let result = await sayHello6();
//   console.log(result);
// }
// display();

// async function sayHello7() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("거부"), 1000);
//   });
// }

// async function display2() {
//   try {
//     let result = await sayHello7();
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// }
// display2();

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: "Kim", email: "Kim@gmail.com" },
//         { name: "Lee", email: "Lee@gmail.com" },
//         { name: "Park", email: "Park@gmail.com" },
//       ]);
//     }, 1000);
//   });
// }

// function getEmail(user) {
//   return new Promise((resolve, reject) => {
//     console.log(user);
//     setTimeout(() => {
//       resolve(user.email);
//     }, 3000);
//   });
// }

// function findUser(users, name) {
//   return new Promise((resolve, reject) => {
//     console.log(users);
//     setTimeout(() => {
//       resolve(users.find((user) => user.name === name));
//     }, 1000);
//   });
// }

// async function getUserEmail(name) {
//   let users = await getUsers();
//   let user = await findUser(users, name);
//   let email = await getEmail(user);
//   return email;
// }

// async function displayUserEmail() {
//   let email = await getUserEmail("Kim");
//   console.log(email);
// }

// displayUserEmail();

// const myPromise = () =>
//   new Promise((resolve) => {
//     resolve("VALUE IS....");
//   });

// function* gen() {
//   let result = "";
//   yield myPromise().then((data) => {
//     result = data;
//   });
//   yield result + "2";
// }

// const asyncFunc = gen();
// const val1 = asyncFunc.next();
// console.log(val1);

// val1.value.then(() => {
//   console.log(asyncFunc.next());
// });

// async function asyncSequence (from = 0,to=Infinity,interval =1,timeout =1000){
//     let next = from
//     while(next <= to){
//         yield new Promise((resolve,reject)=>{
//             setTimeout(()=>resolve(next),timeout)
//             netx+=interval
//         })
//     }
// }

// (async()=>{
//     let seq = asyncSequence(2,10,2)
//     for await(let value of seq)
//     console.log(value)
// })()

// function asyncTask(taskNumber) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Task ${taskNumber} completed`);
//     }, 2000);
//   });
// }

// function* taskGenerator() {
//   console.log(yield asyncTask(1));
//   console.log(yield asyncTask(2));
//   console.log(yield asyncTask(3));
// }

// function executeTasks(generator) {
//   const iterator = generator();

//   function handleNextTask(result) {
//     if (result.done) return;
//     result.value.then((res) => {
//       handleNextTask(iterator.next(res));
//     });
//   }

//   handleNextTask(iterator.next());
// }

// // Execute the tasks
// executeTasks(taskGenerator);

// const setTimeoutPromise = (ms) =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve("테스트"), ms);
//   });
// setTimeoutPromise(3000).then(() => {
//   console.log("3초뒤에 실행된 값입니다.");
// });

// const promise = setTimeoutPromise(0);
// promise
//   .then((data) => {
//     console.log(data);
//     return "a";
//   })
//   .then((data) => {
//     console.log(data);
//     return "b";
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const p1 = new Promise((resolve, reject) => {
//   resolve("성공");
// });
// const p2 = new Promise((resolve, reject) => {
//   reject("에러");
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("성공"), 0);
// });
