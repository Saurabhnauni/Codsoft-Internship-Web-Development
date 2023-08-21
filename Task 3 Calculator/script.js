var buttons=document.getElementsByClassName("bt");
var display=document.getElementById("display");
var op1=0;
var op2=null;
var opt=null;
var result=null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
var value=this.getAttribute('data-value');
// operator
if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%')
{
op1=parseFloat(display.textContent);
opt=value;
display.innerText=value;
}

// delete
else if(value=='AC')
{
    op1=0;
    op2=null;
    opt=null;
    display.innerText=" ";
}
// equal
else if(value=='=')
{
    op2=parseFloat(display.textContent);
    result=eval (op1+" "+opt+" "+op2);
    display.innerText=result;
}

//number
else
{
    if(display.innerText=='+'||display.innerText=='-'||display.innerText=='*'||display.innerText=='/'||display.innerText=='%')
    {
    display.innerText=value;

    }
    else{
    display.innerText+=value;
    }
}
    });

}
