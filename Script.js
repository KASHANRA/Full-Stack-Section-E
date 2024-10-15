let a = 10
console.log(typeof(a))
let bool = true
console.log(typeof(bool))
let c = null
console.log(typeof(c))
console.log(typeof(b))
let d = BigInt(123456789123456789)
console.log(typeof(d))
let arr = [1, "ABCDE", true, undefined, []]
arr.push(3)
arr[4].push(30)
arr.pop()
arr.unshift("Divya")
arr.shift()
let narr =  arr.slice(2, 4)
console.log(narr)
let nnarr = arr.splice(2, 4)
console.log(nnarr)
console.log(arr)
let arr1 = [2, 3, 4, 5, 7, 9, 5]
console.log(arr1)
idx = arr1.indexOf(7)
id = arr1.lastIndexOf(5)
console.log(idx)
console.log(id)
for(let i of arr1){
    console.log(i)
}
for(let i in arr1){
    console.log(i)
}