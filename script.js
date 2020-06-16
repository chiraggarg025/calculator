// var cacl="";
var curr = "";
var prev="";
function update(val){
    prev=val;
    curr+=val
    document.getElementById('calc-text').innerText=curr;
}
function calculate(){
    curr=eval(curr);
    // var val=curr.localeCompare("Infinity");
    if(curr=="Infinity" || curr=="NaN"){
        console.log('Error');
        curr="Error";
        document.getElementById('calc-text').innerText=curr;
        curr="";
        prev="";
        // document.getElementById('calc-text').innerText=0;
        return;
    }else if(curr=="0"){
        curr="";
        prev="";
        document.getElementById('calc-text').innerText=0;
    }
    document.getElementById('calc-text').innerText=curr;
}
function negate(){
    calculate();
    curr=0-curr;
    calculate();

}
function percentage(){
    curr=curr/100;
    calculate();
}
function empty(){
    document.getElementById('calc-text').innerText='0';
    curr=''

}
