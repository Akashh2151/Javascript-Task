let arr = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    // Check if the current element is already present in uniqueArr
    if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]); // Add the element to uniqueArr
    }
}
console.log("before removeing ele: ",arr);
console.log("after removing ele: ",uniqueArr);
