onload = function() 
{	

hide('level_drop');
hide('editdiv');
unhide('level_load')
console.log("Called");
loadlevels();	
loaddrop()					
		
}




function loadlevels()
{
	//document.getElementsByTagName("level_drop").length=0
	 
	 var select = document.getElementById("level_drop");
	// document.getElementById("level_drop").innerHTML = null;
	 var el = document.createElement("option");
		el.textContent = "---Select Level---";
		el.value = "";
		select.appendChild(el);
		
	
	 var ref2 = firebase.database().ref('Levels');
 
 ref2.on("value", function(snapshot) 
  {
   snapshot.forEach(userSnapshot => 
	  {
	   var C1 =userSnapshot.val().name;
	   
	    var el = document.createElement("option");
		el.textContent = C1;
		el.value = C1;
		select.appendChild(el);
	   
	  });
	  
	  unhide('level_drop');
hide('level_load')
 
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
}

function callworks()
{
	var selected_level=document.getElementById("level_drop").value;
	console.log(selected_level);
	
	//document.getElementsByTagName("work_drop").length=0
	 document.getElementById("work_drop").innerHTML = null;
	 var select = document.getElementById("work_drop");
	 var ref2 = firebase.database().ref('Works');
	 
	  var el = document.createElement("option");
		el.textContent = "---Select work---";
		el.value = "";
		select.appendChild(el);
 
 ref2.on("value", function(snapshot) 
  {
   snapshot.forEach(userSnapshot => 
	  {
	   var datas =userSnapshot.val().WORK;
	    var phase2 =userSnapshot.val().PHASE;
	   console.log(datas+"::::::::::"+userSnapshot.key);
	   var C1 = datas.slice(0, 35);
	   
	   if(phase2==selected_level)
	   {
		   
	    var el = document.createElement("option");
		el.textContent = C1+"....";
		el.value = datas;
		select.appendChild(el);
	   }
	   
	  });
 
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
}

function alertnow()
{
	var selected= document.getElementById("work_drop").value;
	alert("Selected Work : \n"+selected );
	
	if(selected!="")
	{
		document.getElementById("button").disabled = false;
	}
	
}

function validate()
{
	var selected= document.getElementById("work_drop").value;
	if(selected=="")
	{
		alert("Please Select Work");
	}
	else
	{
		//document.form1.action="editconsole.html";
		//form1.submit();
		document.getElementById('edittable').style.display="block";
		var selected= document.getElementById("work_drop").value;
		loadtoedit(selected);
	}
}

function loadtoedit(selected)
{
	
	 document.getElementById('assigned_to').value="";
	  document.getElementById('assigned_on').value="";
	   document.getElementById('level_name').value="";
	    document.getElementById('work').value="";
		 document.getElementById('priority_level').value="";
		  document.getElementById('tat').value="";
		   document.getElementById('current_status').value="";
		    document.getElementById('remarks').value="";
			 document.getElementById('work_finished').value="";
			 document.getElementById('workid').value="";
			 
			 
	var ref2 = firebase.database().ref('Works');
	 ref2.on("value", function(snapshot) 
  {
   snapshot.forEach(userSnapshot => 
	  {
	   var a1 =userSnapshot.val().ASSIGNED_ON;
	    var a2 =userSnapshot.val().ASSIGNED_TO;
		var a3 =userSnapshot.val().CS;
	    var a4 =userSnapshot.val().PHASE;
		var a5 =userSnapshot.val().PRIORITY;
	    var a6=userSnapshot.val().REMARKS;
		var a7 =userSnapshot.val().TAT;
	    var a8 =userSnapshot.val().WORK;
		var a9 =userSnapshot.val().WORK_FINISHED_ON;
		var key =userSnapshot.key;
	   
	
	   
			   if(a8==selected)
			   {
				 document.getElementById('assigned_to').value=a2;
				  document.getElementById('assigned_on').value=a1;
				   document.getElementById('level_name').value=a4;
				    document.getElementById('work').value=a8;
					 document.getElementById('priority_level').value=a5;
					  document.getElementById('tat').value=a7;
					   document.getElementById('current_status').value=a3;
						document.getElementById('remarks').value=a6;
						 document.getElementById('work_finished').value=a9;
						  document.getElementById('workid').value=key;
						  console.log(key);
						  
						  unhide('editdiv');
				  
				
			   }
	   
	  });
	  
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
}
function loaddrop()
{
	 var select = document.getElementById("level_name"); 
	
	 var ref2 = firebase.database().ref('Levels');
 
 ref2.on("value", function(snapshot) 
  {
	   snapshot.forEach(userSnapshot => 
	  {
	   var tempdata =userSnapshot.val().name;
	   var el = document.createElement("option");
		el.textContent = tempdata;
		el.value = tempdata;
		select.appendChild(el);
	  });
  
}, 
function (error) 
{
   console.log("Error: " + error.code);
});
	
}

function deleteData()
{
	var taskid= document.getElementById('workid').value;
	
	if(taskid!="")
	{
		 var r = confirm("Are you shure to delete the work!");
			  if (r == true) 
			  {
				var userRef = firebase.database().ref('Works/' + taskid);
   		 		userRef.remove()
				 location.reload();
			  } 
			  else 
			  {
				
			  }
		
		
	}
}


function updateData()
{
	var taskid= document.getElementById('workid').value;
	
	 var a1=document.getElementById('assigned_to').value;
	  var a2= document.getElementById('assigned_on').value;
	   var a3= document.getElementById('level_name').value;
	     var a4=document.getElementById('work').value;
		  var a5=document.getElementById('priority_level').value;
		  var a6= document.getElementById('tat').value;
		   var a7= document.getElementById('current_status').value;
		    var a8= document.getElementById('remarks').value;
			 var a9= document.getElementById('work_finished').value;
			 var a10= document.getElementById('workid').value;
			 
	 var playersRef = firebase.database().ref("Works");
				   firebase.database().ref('Works/' + taskid).set({
				   ASSIGNED_ON: a2,
				   ASSIGNED_TO: a1,
				   PHASE: a3,
				   PRIORITY: a5,
				   CS: a7,
				   REMARKS: a8,
				   TAT: a6,
				   WORK: a4,
				   AGING: "Nil",
				   WORK_FINISHED_ON:a9
				  });
				  
				   console.log("Data Added");
				   location.reload();
}

function hide(item)
{
	document.getElementById(item).style.display="none";
}
function unhide(item)
{
	document.getElementById(item).style.display="block";
}