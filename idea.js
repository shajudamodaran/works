// JavaScript Documentonload

onload = function() 
{
	
		
read_levels();								
		
}


function read_levels()
{
	
		
		
	 var ref2 = firebase.database().ref('Levels');
 
 ref2.on("value", function(snapshot) 
  {
	  var rowCounts = customers2.rows.length;
        for (var i = rowCounts - 1; i > 0; i--) 
		{
            customers.deleteRow(i);
        }
	   
	 
       
    
  
 			    var flagsl=1;
				var table = document.getElementById("myTableData");
				var count=0;
  
   snapshot.forEach(userSnapshot => 
	  {
	   var C1 =userSnapshot.val().name;
	   var C2 =userSnapshot.val().id;
	   
	 	
	  							   
						     tr = customers2.insertRow(-1);
									var tabCell = tr.insertCell(-1);
	  								
									var btn=document.createElement("INPUT");
									btn.setAttribute("type","Button");
									btn.setAttribute("onclick","Approve(this)");
									btn.setAttribute("id",C1);	
									btn.className = 'buttonclass';			
									//btn.setAttribute("value",""+rowcc+"");
									btn.setAttribute("value",C1);
									tabCell.appendChild(btn);
									  tr = customers2.insertRow(-1);
									  var tabCell = tr.insertCell(-1);			
	   
	 
	  });
 
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
}

function Approve(x) 
     {
		
		 // console.log();
		  loadworks(x.id);
	 }
	 

function loadworks(id_para)
{
	
	count=1;
	flag=0;
	
	
	 var ref2 = firebase.database().ref('Works');
 
 ref2.on("value", function(snapshot) 
  {
	   var rowCounts = customers.rows.length;
        for (var i = rowCounts - 1; i > 0; i--) 
		{
            customers.deleteRow(i);
        }
	   
  
   snapshot.forEach(userSnapshot => 
	  {
	   var C1 =userSnapshot.val().ASSIGNED_ON;
	   var C2 =userSnapshot.val().ASSIGNED_TO;
	   var C3 =userSnapshot.val().PRIORITY;
	   var C4 =userSnapshot.val().REMARKS;
	   var C5 =userSnapshot.val().TAT;
	   var C6 =userSnapshot.val().WORK;
	   var C7 =userSnapshot.val().WORK_FINISHED_ON;
	   var C11 =userSnapshot.val().CS;
	   
	   var condition =userSnapshot.val().PHASE;
	   
	   console.log(id_para);
	   
	   if(condition==id_para)
	   {
		   
		   flag=1;
									tr = customers.insertRow(-1);
									var tabCell = tr.insertCell(-1);
									tabCell.innerHTML =count;
									count++;
									tabCell = tr.insertCell(-1);
									

									tabCell.innerHTML = C3;
									tabCell = tr.insertCell(-1);
									
									tabCell.innerHTML = C6;
									tabCell = tr.insertCell(-1);
									
									
									tabCell.innerHTML = C2;
									tabCell = tr.insertCell(-1);
									
									
									tabCell.innerHTML = C1;
									tabCell = tr.insertCell(-1);
									
									tabCell.innerHTML = C11;
									tabCell = tr.insertCell(-1);
									
									tabCell.innerHTML = C5;
									tabCell = tr.insertCell(-1);
									
									tabCell.innerHTML = "Aging";
									tabCell = tr.insertCell(-1);
									
									tabCell.innerHTML = C7;
									tabCell = tr.insertCell(-1);
									
									tabCell.innerHTML = C4;
	   }
	   
	  		if(flag==0)
			{
				alert("No scheduled work for :"+id_para+"");
			}
									
	   
	   
	 	
	 
	  });
 
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
	
}