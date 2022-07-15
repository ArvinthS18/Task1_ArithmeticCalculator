var Hist = [];
var dummy=0
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
         //retrieveRecords(operationName,x,y,output);
         //store(operationName,x,y,output);
         retrieveRecords(operationName,x,y,output);   
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
      function store(Operation,x,y,output)
      { 
         var key = Operation;
         const cal = {
             Number1: x,
             Number2: y,
             Result : output,
         }
         const jsonObj = JSON.stringify(cal);
         window.localStorage.setItem(key,jsonObj);   
     }
      
     function retrieveRecords(key,x,y,output)
        { 
         string=""
         if (key=='add'){
           string += +x+ " + " +y+ " = " +output+ "";}
         else if (key=='sub'){
           string += +x+ " - " +y+ " = " +output+ "";}
         else if (key=='mul'){
           string += +x+ " * " +y+ " = " +output+ "";}
         else{
           string += +x+ " / " +y+ " = " +output+ "";}
         Hist.push(string);
      if (window.localStorage.getItem("cal") === null)
            {
              window.localStorage.setItem("cal",JSON.stringify(Hist));
            }
        else{
              var item = JSON.parse(window.localStorage.getItem("cal")); 
              for (var i = 0; i < item.length; i++) 
             { 
               Hist.push(item[i]);
             }
              let NewHist = [...new Set(Hist)];
              window.localStorage.setItem("cal",JSON.stringify(NewHist));
            }
        
              window.movies2 = JSON.parse(window.localStorage.getItem("cal")); 
       }
        function myFunction() {
        
        document.getElementById("history").innerHTML =`<div style="background-color:white;color:black;padding:20px;">
          <h2>History</h2>
          <ol>
          <ul id="List" >
          <li style="list-style-type:none;"></li>
          </ul> 
          </ol>           
          </div>`
          if(typeof(Storage) !== "undefined") {
          if (Hist.length != 0){
          for (var i = 0; i < window.movies2.length; i++) 
             {
           const node = document.createElement("li");
             const textnode = document.createTextNode(window.movies2[i]);
             node.appendChild(textnode);
             document.getElementById("List").appendChild(node); 	     
           }
       }
          }}