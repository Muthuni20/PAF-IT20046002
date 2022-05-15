$(document).on("click", "#btnSave", function(event)
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validateNotificationForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#hidNotificationIDSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "NotifyAPI", 
 type : type, 
 data : $("#formNotification").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onNotifySaveComplete(response.responseText, status); 
 } 
 }); 
});

function onNotifySaveComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divNotificationGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 }
$("#hidNotificationIDSave").val(""); 
$("#formNotification")[0].reset(); 
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
		{ 
		$("#hidNotificationIDSave").val($(this).data("Notificationid")); 
		 $("#NotificationCode").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#NotificationName").val($(this).closest("tr").find('td:eq(1)').text()); 
		  
		 $("#NotificationDesc").val($(this).closest("tr").find('td:eq(3)').text()); 
		});




$(document).on("click", ".btnRemove", function(event)
		{ 
		 $.ajax( 
		 { 
		 url : "NotifyAPI", 
		 type : "DELETE", 
		 data : "NotificationID=" + $(this).data("Notificationid"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
		 onNotifyDeleteComplete(response.responseText, status); 
		 } 
		 }); 
		});
		
function onNotifyDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divNotificationGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}


// CLIENT-MODEL================================================================
function validateNotificationForm()
{
	// CODE
	if ($("#NotificationCode").val().trim() == "")
	{
	return "Insert Notification Code.";
	}
	// NAME
	if ($("#NotificationName").val().trim() == "")
	{
	return "Insert Notification Name.";
}



// DESCRIPTION------------------------
if ($("#iNotificationDesc").val().trim() == ""){
	
	return "Insert Notification Description.";
}
	return true;
}