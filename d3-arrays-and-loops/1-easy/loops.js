/*
declare a variable called task1 and assign the value of an empty array
write a for loop that pushes all from 0 to 10 to task1 
*/
task1 = []
for (let index = 0; index < 11; index++) {
    task1.push(index)
}
/*
declare a variable called task2 and assign the value of an empty array
write a for loop that pushes all from 10 to 0 to task2  (the order counts!)
*/
task2 = []
for (let index = 0; index < 11; index++) {
   task2.push(10-index)
    
}

/*
declare a variable called task3 and assign the value of an empty array
write a for loop that pushes all even numbers from 1 to 20 task3
*/
task3 = []
for (let index = 0; index < 21; index++) {
    if (index%2==0 && index>0) {
        task3.push(index)
    }
    
}

// Test command (in terminal) "npm run test:d3:easy:loops"
module.exports = { task1, task2, task3 };
