var even = () => {
    var result = parseInt(document.getElementById("input").value)

    if (result % 2 == 0) {
        document.getElementById("value").innerHTML = result + " is Even Number."
    }
    else {
        document.getElementById("value").innerHTML = result + " is Not Even Number."
    }
}

var odd = () => {
    var result = parseInt(document.getElementById("input").value)

    if (result % 2 == 0) {
        document.getElementById("value").innerHTML = result + " is Not ODD Number."
    }
    else {
        document.getElementById("value").innerHTML = result + " is ODD Number."
    }
}

var prime = () => {
    var result = parseInt(document.getElementById("input").value)
    var flag = 0
    for (var i = 2; i < result; i++) {
        if (result % i == 0) {
            document.getElementById("value").innerHTML = result + " is Not  Prime Number."
            flag = 1;
        }
    }
    if (flag == 0) {
        document.getElementById("value").innerHTML = result + " is Prime Number."
    }

}

// ...................................code of second block add,sub,mul and div............................................................>

var add = () => {
    var value1= parseInt(document.getElementById('a').value)
    var value2 = parseInt(document.getElementById('b').value)
    var result = value1 + value2;
    document.getElementById('result').innerHTML = result;
}

var sub = () =>{
    var value1=parseInt(document.getElementById('a').value)
    var value2=parseInt(document.getElementById('b').value)

    var result =value1-value2;
    document.getElementById('result').innerHTML=result;
}

var mul=()=>{
    var value1=parseInt(document.getElementById('a').value)
    var value2=parseInt(document.getElementById('b').value)

    var result=value1*value2;

    document.getElementById('result').innerHTML=result;
}

var div=()=>{
    var value1=parseInt(document.getElementById('a').value)
    var value2=parseInt(document.getElementById('b').value)

    var result=value1/value2;

    document.getElementById('result').innerHTML=result;
}
// ................................................ Block-3 ..............................................................>

var table=()=>{
    let a=parseInt(document.getElementById("input3").value)
    var fact=1;
    var total=0;

    for(var i=1;i<=a;i++)
    {
       fact=fact*i;     
    } 
   document.getElementById('fact').innerHTML=fact;
    
}