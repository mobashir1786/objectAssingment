// Complete the function in the editor. 
// In which you are given an object as a parameter. 
// You have to return "false" if there is no parameter in the object 
// otherwise return "true".

function Check(obj1) {
    let arr = Object.keys(obj1);
        if (arr.length === 0){
          return 'false';
        }
        else {
        return 'true';
    }  
}
