var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var list6=[];
var list7=[];
var list8=[];
          
var n=1;
var x=0;

	
function checkEmail(str1)
{
    var posat=str1.indexOf("@");
    var posdot=str1.indexOf(".");
    
    if(posat!=-1 && posdot!=-1)
    {
        if(posat>=1 && (posdot-posat)>=2 && (str1.length-1-posdot)>=2 && (str1.length-1-posdot)<=5)
        {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

const validateForm = (ev) =>{
ev.preventDefault();
    var nam=document.form.name1.value;
    var a=document.form.r.value;
    var id=document.form.email1.value;
    var ages=document.form.age1.value;
    var no=document.form.mobile1.value;
    var st=document.form.state1.value;
    var tr=document.form.term1.checked;
    

    if(nam=="" || nam==null)
    {
        document.getElementById("nam1").innerHTML="Name should not be blank";
        return false; 
    }
    else if(nam.length<3)
    {
        document.getElementById("nam1").innerHTML="Name length should be 3-30";
        return false; 
    }
    else if(nam.length>30)
    {
        document.getElementById("nam1").innerHTML="Name length should be 3-30";
        return false; 
    }
    else if(isNaN(nam)==false)
    {
        document.getElementById("nam1").innerHTML="Name should not be numeric";
        return false; 
    }
    else if(a=="" || a==null)
    {
        document.getElementById("gen1").innerHTML="should not be empty";
        return false;
    }
    
    else if(id=="" || id==null)
    {
        document.getElementById("mail").innerHTML="Email should not be empty";
        return false;
    }
    else if(!checkEmail(id))
    {
        document.getElementById("mail").innerHTML="Email not valid";
        return false;
    }
    else if(ages < 18 )
    {
        document.getElementById("ag").innerHTML="You are not eligible";
        return false;
    }
    else if(ages > 30 )
    {
        document.getElementById("ag").innerHTML="You are not eligible";
        return false;
    }
    else if(no=="" || no==null)
    {
        document.getElementById("mob").innerHTML="Mobile no. should not be empty";
        return false;
    }
    else if(no.length!=10)
    {
        document.getElementById("mob").innerHTML="Please enter 10 digit mobile no.";
        return false;
    }
    
   else if(st==0)
    {
        document.getElementById("stat").innerHTML="Please select State";
        return false;
    }
    else if(tr==false)
    {
        document.getElementById("ter").innerHTML="Please agree terms and condition";
        return false;
    }
   else
	 {
                  
                  var AddRown=document.getElementById('display');
                  var NewRow=AddRown.insertRow(n);
                  
                  list1[x]=document.form.name.value;
                  list2[x]=document.form.gender.value;
                  list3[x]=document.form.email.value;
                  list4[x]=document.form.age.value;
                  list5[x]=document.form.mobile.value;
                  list6[x]=document.form.state.value;
                  list7[x]=document.form.comment.value;
                  list8[x]= new Date();
                  
                  
                  var cel1=NewRow.insertCell(0);
                  var cel2=NewRow.insertCell(1);
                  var cel3=NewRow.insertCell(2);
                  var cel4=NewRow.insertCell(3);
                  var cel5=NewRow.insertCell(4);
                  var cel6=NewRow.insertCell(5);
                  var cel7=NewRow.insertCell(6);
                  var cel8=NewRow.insertCell(7);
                  
                  
                  cel1.innerHTML=list1[x];
                  cel2.innerHTML=list2[x];
                  cel3.innerHTML=list3[x];
                  cel4.innerHTML=list4[x];
                  cel5.innerHTML=list5[x];
                  cel6.innerHTML=list6[x];
                  cel7.innerHTML=list7[x];
                  cel8.innerHTML=list8[x];
                  
                  
                  n++;
                  x++;
                 
                  alert("successfully registered");
                  document.querySelector("form1").reset();
               }
}
          document.addEventListener("DOMContentLoaded", ()=>{
              document.getElementById("register").addEventListener("click", validateForm);
});
         

