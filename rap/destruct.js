const arr = [10,20,30,40]

// const a = arr[0]
// const b = arr[1]

const [a,b,...c] = arr

console.log(a)
console.log(b)
console.log(c)

const r = { id:1, title: `Todo 1`, completed: false }

const {title,...o} = r

console.log(title)
console.log(o)


const s = {completed:true,...r}

r.id=2
console.log(s)


function f({id,...o}){
    console.log("dans f")
    console.log(id,o)
}




f(r)