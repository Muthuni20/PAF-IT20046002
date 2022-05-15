<%@page import="com.Notify"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Notification Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/Notify.js"></script>
</head>
<body> 
<div class="container"><div class="row"><div class="col-6"> 
<h1>Notification  Management V10.1</h1>
<form id="formNotification" name="formNotification" method="post" action="Notify.jsp">
 Notification code: 
 <input id="NotificationCode" name="NotificationCode" type="text" 
 class="form-control form-control-sm">
 <br> Notification name: 
 <input id="NotificationName" name="NotificationName" type="text" 
 class="form-control form-control-sm">
 
 <br> Notification description: 
 <input id="NotificationDesc" name="NotificationDesc" type="text" 
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
 class="btn btn-primary">
 <input type="hidden" id="hidNotificationIDSave" 
 name="hidNotificationIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divNotificationGrid">
 <%
 Notify NotificationObj = new Notify(); 
  out.print(NotificationObj.readNotify());
 %>
</div>
</div> </div> </div> 
</body>
</html>