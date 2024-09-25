let arr =[10,20,30]

let result = arr.map((ele,index,arr)=>{
    console.log("Hello");
    //return 0 [0,0,0]
    //return undefine [undefine,undefine,undefine]
    // return ele>10 [false,true,true]
    // return NaN [NaN,NaN,NaN]
    // return Index [0,1,2]
    // return arr [[10,20,30],[10,20,30],[10,20,30]]

})

console.log(result); // Array 

// Apply empty Array Than Return empty 