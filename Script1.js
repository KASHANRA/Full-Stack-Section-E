let arr = [2, 3, 4, 5]
let arr1 = arr
arr1.push("Hello")
let arr2 = [...arr,...arr1]
let arr3 = arr.concat(arr1)
console.log(arr)
console.log(arr1)
console.log(arr2)
console.log(arr3)
let person = {
    fullname: "Divya P Singh",
    age: "20",
    salary: "50000",
    id: "7",
    projectDetails:{
        projectid: "325",
        projectTitle: "Data Analysis"
    }
}
person.address = "Lucknow"
Object.freeze(person);
person.job = function(){
    console.log("Student")
}
person.greetings = function(){
    console.log("Hello World")
}
console.log(person.projectDetails.projectTitle)
for (let key in person){
    console.log(key)
}
person.job();
person.greetings();
