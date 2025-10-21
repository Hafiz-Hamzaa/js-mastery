// Lecture 05 Summary 
// Conversion Operations mtlb aik type ko dosri type me convert krdena lekin JS me kuch quirks bh hai issues bh hai jese 
// "10" + 1 iska result aiga 101

let str = '23'
let convert = Number(str)
console.log(convert) // 23 : isne str ko Number me convert krdia --  ye explicit conversion ka example hai (String → Number).

console.log(true + false) // true convert 1 and false become 0 : 1 + 0 = 1

let str2 = '23bgh'
let con = Number(str2)
console.log(con); // NaN qkai ye koi real numbe nh hai 23bgh ye convert to hojai ga but ye actual value hame dega NaN 

console.log(1 + null); // null become 0 qkai null dev set krta hai islye wo 0 hojata hai
console.log(1 + undefined) // NaN lekn undefined JS deti hai islye ap kisi bh num ko undefined kai sth + kr rahe hoi ye to koi sense nh na to isliye NaN ata hai

console.log('----------')

// String and Boolean Conversion
let isNum = 25
let isStr = String(isNum)
console.log(typeof isStr) // string

let num = 1
console.log(Boolean(num)) // true


// 🔹 Explicit vs Implicit Type Conversion (Type Coercion)

// 🧠 Explicit Conversion (Manual Conversion)
// Jab hum khud apne code me manually kisi value ka type change karte hain using built-in methods.

// ⚙️ Implicit Conversion (Automatic Conversion)
// Jab JavaScript apne aap (automatically) type convert kar leti hai kisi operation ke dauran.