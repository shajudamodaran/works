// JavaScript Document
var new_k="no";
onload = function() 
{
	loaddrop();
	
	var ref2 = firebase.database().ref('daily_work');
	
	 ref2.on("value", function(snapshot) 
				  {
				   snapshot.forEach(function(childSnapshot) 
				   {
						  
						
						  var key_p =childSnapshot.key;
						   var c = parseInt(childSnapshot.key);
						   new_k=parseInt(c+1);	  
								   
													  
						});
						
						console.log(new_k);
						
						
					 
					 
				}, 
				function (error) 
				{
				   console.log("Error: " + error.code);
				});//end of ref
				
				

}
function adddata()
{
	
	var ato_para=document.getElementById("assignedto").value.trim();			
	var aon_para=document.getElementById("a2").value;			
	var work_para=document.getElementById("a3").value;	
	var prio_para=document.getElementById("a4").value;
	var tat_para=document.getElementById("a5").value;
	var todaystatus_para=document.getElementById("a6").value.trim();
	
	if(ato_para==""||aon_para==""||work_para==""||prio_para==""||tat_para=="")
		{
			alert("Please fill the blanks");
		}
		else
		{
			addtodatabase();
			//location.reload();
		}
	
}

function addtodatabase()
{
	var ato_para=document.getElementById("assignedto").value.trim();			
	var aon_para=document.getElementById("a2").value;			
	var work_para=document.getElementById("a3").value;	
	var prio_para=document.getElementById("a4").value;
	var tat_para=document.getElementById("a5").value;
	var todaystatus_para=document.getElementById("a6").value.trim();
	
	 var playersRef = firebase.database().ref("daily_work");
				   firebase.database().ref('daily_work/' + new_k).set({
				   ASSIGNED_ON: aon_para,
				   ASSIGNED_TO: ato_para,
				   PRIORITY: prio_para,
				   TS: todaystatus_para,
					 TAT: tat_para,
					  WORK: work_para
				  });
				  
				   console.log("Data Added");
				   location.reload();
}

function loaddrop()
{
	 var select = document.getElementById("assignedto"); 
	
	 var ref2 = firebase.database().ref('Users');
 
 ref2.on("value", function(snapshot) 
  {
	   snapshot.forEach(userSnapshot => 
	  {
	   var tempdata =userSnapshot.val().Username;
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

				