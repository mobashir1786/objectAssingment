// Complete the function in the editor. 
// In which you are given an object and a digit N as a parameter.
// In the object there are two variable id and houseno are defined as a data member. 
// You have to multiply both the data members with a given digit N.

function Check(a,obj1) {

    obj1.id = a* (obj1.id)
    obj1.houseno = a* (obj1.houseno)
    return obj1;
}