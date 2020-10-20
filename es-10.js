const array = [[1],[2],[3],[[[4]]],[[[5]]]]

array.flat(4);


const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

console.log(greeting.flatMap(value => value.join(' ')))

console.log(greeting.flatMap(value => value.join(' ')).join(' '))


const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

trapped.flat(50)


const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

console.log(userEmail3)
console.log(userEmail3.trim())


const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArray = Object.entries(users);

usersArray.map((user) => [user[0], user[1] * 2])

Object.fromEntries(usersArray)


const secondArray = [[1],[2],[3],[[[4]]],[[[5]]]]

secondArray.flat(2)