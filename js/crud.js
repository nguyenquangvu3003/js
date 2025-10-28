let a = ["liem", "van", "vu", "diem", "vu", "van", "vu"];
a.push("name");
a.pop();
a[3] = "quang"
// document.writeln(a)

//cach 1
const count = {};
a.forEach(element => {
    count[element] = (count[element] || 0) + 1;
});
console.log(count);


//cach 2
const result = {};
for (let index = 0; index < a.length; index++) {
    const key = a[index];
    if (result[key]) {
        result[key] += 1;
    } else {
        result[key] = 1;
    }
    
}
console.log(result);
