onload = function() 
{
	loadworks();
	
}


function loadworks()
{
	var count=1;
var ref2 = firebase.database().ref('daily_work');
 
 ref2.on("value", function(snapshot) 
  {
	   var rowCounts = customers.rows.length;
        for (var i = rowCounts - 1; i > 0; i--) 
		{
            customers.deleteRow(i);
        }
		count=1;
		
   snapshot.forEach(userSnapshot => 
	  {
	   var C1 =userSnapshot.val().ASSIGNED_ON;
	   var C2 =userSnapshot.val().ASSIGNED_TO;
	   var C3 =userSnapshot.val().PRIORITY;
	   var C4 =userSnapshot.val().TAT;
	   var C5 =userSnapshot.val().TS;
	   var C6 =userSnapshot.val().WORK;
	   var key=userSnapshot.key;
	   
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
	   
	    tabCell.innerHTML = C4;
	   tabCell = tr.insertCell(-1);
	   
	    tabCell.innerHTML = C5;
	   tabCell = tr.insertCell(-1);
	   
	   								var btn=document.createElement("INPUT");
	   								btn.setAttribute("type","Button");
									btn.setAttribute("onclick","Edit(this)");
									btn.setAttribute("id",key);	
									btn.className = 'buttonclass2';			
									//btn.setAttribute("value",""+rowcc+"");
									btn.setAttribute("value","Edit");
									tabCell.appendChild(btn);
									var tabCell = tr.insertCell(-1);
									
									var btn=document.createElement("INPUT");
	   								btn.setAttribute("type","Button");
									btn.setAttribute("onclick","Remove(this)");
									btn.setAttribute("id",key);	
									btn.className = 'buttonclass2';			
									//btn.setAttribute("value",""+rowcc+"");
									btn.setAttribute("value","Remove");
									tabCell.appendChild(btn);
									
	   
	   
	   
	   
	   
	   
	   
	   
	  });
	
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
}

function closeit() 
{
	var modal = document.getElementById("myModal");
  modal.style.display = "none";
}



function Edit(x)
{

  
  var ref2 = firebase.database().ref('daily_work');
	 ref2.on("value", function(snapshot) 
  {
   snapshot.forEach(userSnapshot => 
	  {
	   var a1 =userSnapshot.val().ASSIGNED_ON;
	    var a2 =userSnapshot.val().ASSIGNED_TO;
		var a3 =userSnapshot.val().TS;
		var a5 =userSnapshot.val().PRIORITY;
		var a7 =userSnapshot.val().TAT;
	    var a8 =userSnapshot.val().WORK;
		var key =userSnapshot.key;
	   
	
	   
			   if(key==x.id)
			   {
				 document.getElementById('assigned_to').value=a2;
				  document.getElementById('assigned_on').value=a1;
				    document.getElementById('work').value=a8;
					 document.getElementById('priority_level').value=a5;
					  document.getElementById('tat').value=a7;
					   document.getElementById('current_status').value=a3;
					   document.getElementById('work_id').value=key;
					   
						  //console.log(key);
			
				
			   }
	   
	  });
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
	  
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
  
}

function updateData()
{
	 var a1=document.getElementById('assigned_to').value;
	  var a2= document.getElementById('assigned_on').value;
	     var a4=document.getElementById('work').value;
		  var a5=document.getElementById('priority_level').value;
		  var a6= document.getElementById('tat').value;
		   var a7= document.getElementById('current_status').value;
			 var a10= document.getElementById('work_id').value;
			 
			  var playersRef = firebase.database().ref("daily_work");
				   firebase.database().ref('daily_work/' + a10).set({
				   ASSIGNED_ON: a2,
				   ASSIGNED_TO: a1,
				   PRIORITY: a5,
				   TS: a7,
				   TAT: a6,
				   WORK: a4,
				  });
				  
				   console.log("Data Updated");
				   closeit() ;
	
}

function Remove(x)
{
	var taskid=x.id
	
	if(taskid!="")
	{
		 var r = confirm("Are you shure to delete the work!");
			  if (r == true) 
			  {
				var userRef = firebase.database().ref('daily_work/' + taskid);
   		 		userRef.remove()
				
			  } 
			  else 
			  {
				
			  }
		
		
	}
}

