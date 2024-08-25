console.log("before")
fetchingData()
console.log("after")


// result 

// before 
// after
// data 


async function fetchingData() {
    const res = (await fetch("url")).json()
    console.log(res.data)
} 