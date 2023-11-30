function calculate(){
  var compS =parseInt(document.getElementById("bookOne").value);
  var engS =parseInt(document.getElementById("bookTwo").value);
  var phyS =parseInt(document.getElementById("bookThree").value);
  var chemS =parseInt(document.getElementById("bookFour").value);
  var mathS =parseInt(document.getElementById("bookFive").value);
  var urduS =parseInt(document.getElementById("bookSix").value);
  


  if(compS>101 || engS>=101 || phyS>=101 || chemS>=101 || mathS>=101 || urduS>101 ) {
    alert("Maxmium Value is 100");
  }
  else{
    var obtained = compS + engS + phyS + chemS + mathS + urduS;
    document.getElementById("obtain").innerHTML = obtained;
   
     }

    var perc=(obtained/600)*100
    document.getElementById("pre").innerHTML=perc;

    if(compS>40 && engS>40 && phyS>40 && chemS>40 && mathS>40 && urduS>40) {
        document.getElementById("remarks").innerHTML= "<span style ='color:#292'> Pass </sapn>"
      }
      
      else{
        document.getElementById("remarks").innerHTML="<span style ='color:red'> Fail </sapn>"
      }

      

      if(perc>=80) {
        document.getElementById("grade").textContent="A+1";
      }

    else if (perc>=70){
        document.getElementById("grade").textContent="A";
    }
    else if (perc>=60){
        document.getElementById("grade").textContent="B";
    }
    else if (perc>=50){
        document.getElementById("grade").textContent="C";
    }
    else if (perc>=40){
        document.getElementById("grade").textContent="D";
    }
   
    else{
        document.getElementById("grade").textContent="F";

    }
    
 

 

}