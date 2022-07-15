 var calculation = function(operationName, valueOfX, valueOfY) {
      if(operationName == 'add')
        return valueOfX + valueOfY;
      else if(operationName == 'sub')
        return valueOfX - valueOfY;
      else if(operationName == 'mul')
        return valueOfX * valueOfY;
      else if(operationName == 'div')
        return valueOfX / valueOfY
    } 
    var operation = function(operationName){
      x = document.getElementById("valueOfX").value
      y = document.getElementById("valueOfY").value
      if((x*1 == x) && (y*1 == y))
      {  
         output = calculation(operationName, parseInt(x), parseInt(y));
         document.getElementById("result").innerHTML = output; 
      }
      else if(isNaN(x)==isNaN(y))
      {
        document.getElementById("result").innerHTML = "Plesae enter a Valid Input in both box";
      }
      else if(isNaN(x) || typeof(x)=="symbol"){
       document.getElementById("result").innerHTML = "Given Input is not Valid in first box";
       }
      else if (isNaN(y) || typeof(y)=="symbol"){
       document.getElementById("result").innerHTML = "Given Input is not Valid in second box";
       }
      };
