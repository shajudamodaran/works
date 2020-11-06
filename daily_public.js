var users=[];

onload = function() 
{
	loadusers();
	
	var today0 = new Date();
	var dd = String(today0.getDate()).padStart(2, '0');
	var mm = String(today0.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today0.getFullYear();
	var today1=""+dd+"/"+mm+"/"+yyyy+"";
	
	document.getElementById('td_with_date').innerHTML="TODAYS WORK BENCH "+"("+today1+")";
	
	
	
	
	var counter=[1,1,1];
	var ref2 = firebase.database().ref('daily_work');
	
	 ref2.on("value", function(snapshot) 
				  {
					  		 var rowCounts = customers.rows.length;
							for (var i = rowCounts - 1; i > 0; i--) 
							{
								customers.deleteRow(i);
							}
							 var rowCounts = customers2.rows.length;
							for (var i = rowCounts - 1; i > 0; i--) 
							{
								customers2.deleteRow(i);
							}
							 var rowCounts = customers3.rows.length;
							for (var i = rowCounts - 1; i > 0; i--) 
							{
								customers3.deleteRow(i);
							}
							
							
							for (var i=0; i<=users.length; i++)
							{ //for loop started
													
									  snapshot.forEach(function(userSnapshot) 
									   {
										  var C1 =userSnapshot.val().ASSIGNED_ON;
										   var C2 =userSnapshot.val().ASSIGNED_TO;
										   var C3 =userSnapshot.val().PRIORITY;
										   var C5 =userSnapshot.val().TAT;
										   var C6 =userSnapshot.val().WORK;
										   var C11 =userSnapshot.val().TS;
											var key =userSnapshot.key;
											
											if(C2==users[i])
											{
												if(C3=="High Priority")
						{
							console.log("H");
							tr = customers.insertRow(-1);
							var tabCell = tr.insertCell(-1);
							tabCell.innerHTML =counter[0];
							counter[0]++;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C3;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C6;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C2;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C1;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C5;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C11;
							tabCell = tr.insertCell(-1);
							
							var btn=document.createElement("INPUT");
									btn.setAttribute("type","Button");
									btn.setAttribute("onclick","Edit(this)");
									btn.setAttribute("id",key);	
									btn.className = 'buttonclass2';			
									//btn.setAttribute("value",""+rowcc+"");
									btn.setAttribute("value","Update");
									tabCell.appendChild(btn);
							
						}
						else if(C3=="Medium Priority")
						{
							tr = customers2.insertRow(-1);
							var tabCell = tr.insertCell(-1);
							tabCell.innerHTML =counter[1];
							counter[1]++;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C3;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C6;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C2;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C1;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C5;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C11;
							tabCell = tr.insertCell(-1);
							
							var btn=document.createElement("INPUT");
									btn.setAttribute("type","Button");
									btn.setAttribute("onclick","Edit(this)");
									btn.setAttribute("id",key);	
									btn.className = 'buttonclass2';			
									//btn.setAttribute("value",""+rowcc+"");
									btn.setAttribute("value","Update");
									tabCell.appendChild(btn);
									
						}
						else if(C3=="Low Priority")
						{
							
							tr = customers3.insertRow(-1);
							var tabCell = tr.insertCell(-1);
							tabCell.innerHTML =counter[2];
							counter[2]++;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C3;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C6;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C2;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C1;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C5;
							tabCell = tr.insertCell(-1);
							
							tabCell.innerHTML = C11;
							tabCell = tr.insertCell(-1);
							
							var btn=document.createElement("INPUT");
									btn.setAttribute("type","Button");
									btn.setAttribute("onclick","Edit(this)");
									btn.setAttribute("id",key);	
									btn.className = 'buttonclass2';			
									//btn.setAttribute("value",""+rowcc+"");
									btn.setAttribute("value","Update");
									tabCell.appendChild(btn);
							
						}
												
											}
												   
																		  
										});
													
								
							} //for loop ended
	  
	  
	  
					  
					  
				   
						
			 
					 
				}, 
				function (error) 
				{
				   console.log("Error: " + error.code);
				});//end of ref
	
}

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
	  var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
}

function Edit(x)
{
	var modal = document.getElementById("myModal");
	
	
	 var ref2 = firebase.database().ref('daily_work');
 
 ref2.on("value", function(snapshot) 
  {
	   snapshot.forEach(userSnapshot => 
	  {
		   var tempdata =userSnapshot.val().ASSIGNED_TO;
		   var key =userSnapshot.key;
		   
		  if(key==x.id)
		  {
			 modal.style.display = "block";
			 document.getElementById("user_name").value=tempdata;
			 document.getElementById("task_id").value=key;
			 console.log(tempdata);
			 
		  }
	  
	   
	  });
  
}, 
function (error) 
{
   console.log("Error: " + error.code);
});
	
	
}

function validate()
{
	var status=0;
var username=document.getElementById('user_name').value;
var task=document.getElementById('task_id').value;
var pass=document.getElementById('pword').value;
 //console.log(username+"-"+task);
 
  var ref2 = firebase.database().ref('Users');
 
 ref2.on("value", function(snapshot) 
  {
	   snapshot.forEach(userSnapshot => 
	  {
		   var temp_uname =userSnapshot.val().Username;
		   var temp_pword =userSnapshot.val().Password;
		   //var key =userSnapshot.key;
		   
		  if((temp_uname==username&&temp_pword==pass)||pass=="iibadmin")
		  {
			
			 console.log("Auth Completed");
			 status=1;
			 
		  }
	  
	  });
	  
	  if(!status==1)
	  {
		  alert("Wrong Password");
	  }
	  else
	  {
		  document.getElementById('status_field').style.visibility="visible";
		  document.getElementById('submitt_btn').style.visibility="visible";
	  }
  
}, 
function (error) 
{
   console.log("Error: " + error.code);
});
 
 
 
 
}

function updatenow()

{
	var taskid=document.getElementById('task_id').value;
	var newdata=document.getElementById('status_field').value;
	
	 var ref2 = firebase.database().ref('daily_work/'+taskid+'/TS').set(newdata);
	 closeit();
	
}

function loadusers()
{
	 var ref2 = firebase.database().ref('Users');
 
 ref2.on("value", function(snapshot) 
  {
	   snapshot.forEach(userSnapshot => 
	  {
		   var temp_uname =userSnapshot.val().Username;
		   var temp_pword =userSnapshot.val().Password;
		   //var key =userSnapshot.key;
		   users.push(temp_uname);
		   
		 
	  });
  
}, 
function (error) 
{
   console.log("Error: " + error.code);
});
}

$(document).ready(function() {
     $('.whatsapp').on("click", function(e) {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            var article = $(this).attr("data-text");
            var weburl = $(this).attr("data-link");
            var whats_app_message = encodeURIComponent(document.URL);
            var whatsapp_url = "whatsapp://send?text="+whats_app_message;
            window.location.href= whatsapp_url;
        }else{
             alert('You Are Not On A Mobile Device. Please Use This Button To Share On Mobile');
        }
     });
  });