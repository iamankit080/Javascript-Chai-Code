//for-in keys uthata hai.

const myObject={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
        console.log(key);
        console.log(myObject[key]);

        console.log(`${key} is for ${myObject[key]}`)
}

// for-in on array

const programming = ["js", "react", "nodejs", "java"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}
