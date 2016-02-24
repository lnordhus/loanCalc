<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication1.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/2.2.0/jquery-ui.min.js"></script>
    <script src="Scripts/jquery-2.2.0.min.js"></script>
    <script src="Scripts/myScript.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <button id="Button1" >Calculate</button>  
            <label id="Label3" >Number of years:</label>
            <input type="text" id="Years"/>

            <label id="Label4" >Interest:</label>
            <input type="text" id="Interest" />

            <label id="Label2" >Amount</label>
            <input type="text"  id="Amunt" />

            <table id="Results">
               
                </table>
        </div>
    </form>
</body>
</html>
