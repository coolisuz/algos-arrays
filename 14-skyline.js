/*
Skyline Heights

Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say 
you are given an array with heights of consecutive buildings, starting closest 
to you and extending away. Array [-1,7,3] would represent three buildings: 
first is actually out of view below street level, behind it is second at 7 
stories high, third is 3 stories high (hidden behind the 7-story). You are 
situated at street level. Return array containing heights of buildings you can 
see, in order. 

Given [-1,1,1,7,3] return [1,7]. 
Given [0,4] return [4]. 
As always with challenges, don't use built-in array functions such as unshift()


*/

const includes = (arr, val) => {
    for (let i=0; i<arr.length; i++) {
        if(arr[i] === val || arr[i] > val) return true
    }

    return false;
}

const skyline = arr => {
    let visibleBuildings = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < 1) continue;    
        
        if (includes(visibleBuildings, arr[i]) === false) {
            visibleBuildings.push(arr[i]);
        }    
        
    }
    console.log(visibleBuildings)
    return visibleBuildings
}

skyline([0,4])