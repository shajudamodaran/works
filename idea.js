// JavaScript Documentonload
var levels=[];
var level_order=[];
var prios=["High Priority","Medium Priority","Low Priority"];
onload = function() 
{
	
		
read_levels();	
loadlevels();							
		
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
	   
	   levels.push(C1);
	   level_order.push(C2);
	 
	  });
	  
	  for(var i=0; i<=levels.length-1; i++)
	  {
		 //console.log(i+1); 
		  for(var j=0; j<=levels.length-1; j++)
			  {
				 if(level_order[j]==i+1)
				 {
					 
					 //console.log(levels[j]);
					     tr = customers2.insertRow(-1);
									var tabCell = tr.insertCell(-1);
	  								
									var btn=document.createElement("INPUT");
									btn.setAttribute("type","Button");
									btn.setAttribute("onclick","Approve(this)");
									btn.setAttribute("id",levels[j]);	
									btn.className = 'buttonclass';			
									//btn.setAttribute("value",""+rowcc+"");
									btn.setAttribute("value",levels[j]);
									tabCell.appendChild(btn);
									tr = customers2.insertRow(-1);
									var tabCell = tr.insertCell(-1);	
				 }
				 
				
			  }
		 
		
	  }
	  
	  document.getElementById('level_load').style.display="none";
 
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
		count=1;
		
		
		for(var i=0; i<=prios.length; i++)
		{//start of for loop
		
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
	    var key =userSnapshot.key;
	   
	   var condition =userSnapshot.val().PHASE;
	   
	   var today0 = new Date();
									var dd = String(today0.getDate()).padStart(2, '0');
									var mm = String(today0.getMonth() + 1).padStart(2, '0'); //January is 0!
									var yyyy = today0.getFullYear();
									var today1=""+mm+"/"+dd+"/"+yyyy+"";
									
									
									var eedate0=C5;
									var eedate1=date = new Date(eedate0);
									year = date.getFullYear();
									month = date.getMonth()+1;
									dt = date.getDate();
									eedatefinal=""+month+"/"+dt+"/"+year+"";
									
									var dateOne = new Date(yyyy, mm, dd); //Year, Month, Date  
      							    var dateTwo = new Date(year, month, dt);
											
									var dateFirst = new Date(today1);
        						 var dateSecond = new Date(eedatefinal);
								  var timeDiff = dateSecond.getTime() - dateFirst.getTime();
								 var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));	
	   
	   console.log(id_para);
	   
	   if(condition==id_para&&C3==prios[i]&&C7=="")
	   {
		   
		   flag=1;
									tr = customers.insertRow(-1);
									var tabCell = tr.insertCell(-1);
									if(C3=="High Priority")
									{
										tabCell.style.color="#000EE6";
									}
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML =count;
									count++;
									tabCell = tr.insertCell(-1);
									//.................................................................
									

									if(C3=="High Priority")
									{
										tabCell.style.color="#000EE6";
									}
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C3;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									if(C3=="High Priority")
									{
										tabCell.style.color="#000EE6";
									}
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C6;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									
									if(C3=="High Priority")
									{
										tabCell.style.color="#000EE6";
									}
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C2;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									
									if(C3=="High Priority")
									{
										tabCell.style.color="#000EE6";
									}
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C1;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									if(C3=="High Priority")
									{
										tabCell.style.color="#000EE6";
									}
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									
									tabCell.innerHTML = C11;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									if(C3=="High Priority")
									{
										tabCell.style.color="#000EE6";
									}
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C5;
									tabCell = tr.insertCell(-1);
									
									
									//..............................................................................
									
									
									if(C3=="High Priority")
									{
										tabCell.style.color="#000EE6";
									}
									if(C7!="")
									{
										if(C3=="High Priority")
										{
										tabCell.style.color="#000EE6";
										}
										if(!C7=="")
										{
										tabCell.style.color="#2A9B02";
										}
										else if(diffDays<0)
										{
											tabCell.style.color="#ff0000";
										}
									tabCell.innerHTML = "0";
									tabCell = tr.insertCell(-1);
									}
									else if(diffDays>0)
									{
										if(C3=="High Priority")
										{
										tabCell.style.color="#000EE6";
										}
										if(!C7=="")
										{
										tabCell.style.color="#2A9B02";
										}
										else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									
									tabCell.innerHTML = diffDays+"-"+"Day remaining";
									tabCell = tr.insertCell(-1);
									}
									else if(diffDays<0)
									{
										
									if(C3=="High Priority")
									{
									tabCell.style.color="#000EE6";
									}
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									
									tabCell.innerHTML = Math.abs(diffDays);
									tabCell = tr.insertCell(-1);
									}
									else if(diffDays==0)
									{
									if(C3=="High Priority")
									{
									tabCell.style.color="#000EE6";
									}
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									
									tabCell.innerHTML = "Today is the last date";
									tabCell = tr.insertCell(-1);
									}
									
									
									
									//.....................................................................................
									
									if(C3=="High Priority")
									{
										tabCell.style.color="#000EE6";
									}
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C7;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									if(C3=="High Priority")
									{
										tabCell.style.color="#000EE6";
									}
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C4;
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
									//.................................................................
									
									var btn=document.createElement("INPUT");
									btn.setAttribute("type","Button");
									btn.setAttribute("onclick","Delete(this)");
									btn.setAttribute("id",key);	
									btn.className = 'buttonclass2';			
									//btn.setAttribute("value",""+rowcc+"");
									btn.setAttribute("value","Remove");
									tabCell.appendChild(btn);
									
	   }
							
 
	  });
			
			
		}//end of for loop
		
		
		// completed works reloading
		
		for(var i=0; i<=prios.length; i++)
		{//start of for loop
		
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
	    var key =userSnapshot.key;
	   
	   var condition =userSnapshot.val().PHASE;
	   
	   var today0 = new Date();
									var dd = String(today0.getDate()).padStart(2, '0');
									var mm = String(today0.getMonth() + 1).padStart(2, '0'); //January is 0!
									var yyyy = today0.getFullYear();
									var today1=""+mm+"/"+dd+"/"+yyyy+"";
									
									
									var eedate0=C5;
									var eedate1=date = new Date(eedate0);
									year = date.getFullYear();
									month = date.getMonth()+1;
									dt = date.getDate();
									eedatefinal=""+month+"/"+dt+"/"+year+"";
									
									var dateOne = new Date(yyyy, mm, dd); //Year, Month, Date  
      							    var dateTwo = new Date(year, month, dt);
											
									var dateFirst = new Date(today1);
        						 var dateSecond = new Date(eedatefinal);
								  var timeDiff = dateSecond.getTime() - dateFirst.getTime();
								 var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));	
	   
	   console.log(id_para);
	   
	   if(condition==id_para&&C3==prios[i]&&!C7=="")
	   {
		   
		   flag=1;
									tr = customers.insertRow(-1);
									var tabCell = tr.insertCell(-1);
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML =count;
									count++;
									tabCell = tr.insertCell(-1);
									//.................................................................
									

									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C3;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C6;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									
									
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C2;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									
									
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C1;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C11;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C5;
									tabCell = tr.insertCell(-1);
									
									
									//..............................................................................
									
									
									
									if(C7!="")
									{
										
										if(!C7=="")
										{
										tabCell.style.color="#2A9B02";
										}
										else if(diffDays<0)
										{
											tabCell.style.color="#ff0000";
										}
									tabCell.innerHTML = "0";
									tabCell = tr.insertCell(-1);
									}
									else if(diffDays>0)
									{
										
										if(!C7=="")
										{
										tabCell.style.color="#2A9B02";
										}
										else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									
									tabCell.innerHTML = diffDays+"-"+"Day remaining";
									tabCell = tr.insertCell(-1);
									}
									else if(diffDays<0)
									{
										
										
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									
									tabCell.innerHTML = Math.abs(diffDays);
									tabCell = tr.insertCell(-1);
									}
									else if(diffDays==0)
									{
										
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									
									tabCell.innerHTML = "Today is the last date";
									tabCell = tr.insertCell(-1);
									}
									
									
									
									//.....................................................................................
									
									
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C7;
									tabCell = tr.insertCell(-1);
									//.................................................................
									
									
									if(!C7=="")
									{
									tabCell.style.color="#2A9B02";
									}
									else if(diffDays<0)
									{
										tabCell.style.color="#ff0000";
									}
									tabCell.innerHTML = C4;
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
									//.................................................................
									
									var btn=document.createElement("INPUT");
									btn.setAttribute("type","Button");
									btn.setAttribute("onclick","Delete(this)");
									btn.setAttribute("id",key);	
									btn.className = 'buttonclass2';			
									//btn.setAttribute("value",""+rowcc+"");
									btn.setAttribute("value","Remove");
									tabCell.appendChild(btn);
									
	   }
							
 
	  });
			
			
		}//end of for loop
		
		
		//..............Completed works reloading completed.....................................................
	   
  
  
 
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
	
}

function Edit(x)
{
	//console.log(x.id);
	loadtoedit(x.id);
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
}

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

  


var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementById("close");



// When the user clicks on <span> (x), close the modal
function closeit() 
{
	var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
  if (event.target == modal) 
  {
    modal.style.display = "none";
  }
}

function loadlevels()
{
	//document.getElementsByTagName("level_drop").length=0
	 
	 var select = document.getElementById("level_name");
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
	  
	
 
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
}

function loadtoedit(selected)
{
	console.log("loading datas of"+"-"+selected);
	 document.getElementById('assigned_to').value="";
	  document.getElementById('assigned_on').value="";
	   document.getElementById('level_name').value="";
	    document.getElementById('work').value="";
		 document.getElementById('priority_level').value="";
		  document.getElementById('tat').value="";
		   document.getElementById('current_status').value="";
		    document.getElementById('remarks').value="";
			 document.getElementById('work_finished').value="";
			 
			 
			 
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
	   
	
	   
			   if(key==selected)
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
			
				
			   }
	   
	  });
	  
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
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
				  
				   console.log("Data Updated");
				   closeit() ;
				  
}

function Delete(x)
{
	var taskid=x.id
	
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



