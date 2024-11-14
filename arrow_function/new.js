function one(){
    console.log("Kishan patel")
    two()
}
function two(){
    console.log("Hardik patel");
    three()
}
function three(){
    console.log("KP & HP")
    one()
}

one();
two();
three();