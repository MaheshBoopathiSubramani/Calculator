var a="";
 function display(value) 
 {
    a+=value;
    document.getElementById("first").innerHTML=a;
}
 function equale() 
 {
    var p = a;
    var q = eval(p);
    document.getElementById("first").innerHTML=q;
    a=q;
}
function clr() 
{
    a="0";
    var clear=document.getElementById('first').innerHTML=a;
    a='';
}
function back()
{
    if(a.length!=1)
    {
        a=a.slice(0,-1);
        document.getElementById("first").innerHTML=a;
    }
    else{
        a="0";
        document.getElementById("first").innerHTML=a;
    }
}