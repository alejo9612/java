function Pluss() 
{
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);
    var result = parseInt(document.getElementById('result').value);
    result= num1 + num2;
    alert("El resultado es: "+result);
}