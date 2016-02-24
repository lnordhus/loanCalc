$(document).ready(function () {
    $("#Button1").click(function () {
        var years = $("#Years").value
        var interest = $("#Interest").value
        var amunt = $("#Amunt").value

        $.ajax({  
            type: "POST",
            url: "service/service1.svc/GetSerialLoan",
            data: { years: years, interest_percentage: interest, amount: amount },//JSON.stringify({ someParameter: 5 }),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (result) {
                var table = document.getElementById("Results");

                var yearRow = table.insertRow(0);
                var interestRow = table.insertRow(0);
                var paymentRow = table.insertRow(0);
                var sumRow = table.insertRow(0);

                //add vertical headers
                var yearCell = yearRow.insertCell(0);
                yearCell.innerHTML = "Years: ";
                var interestCell = interestRow.insertCell(0);
                interestCell.innerHTML = "Interest: ";
                var downPaymentCell = paymentRow.insertCell(0);
                downPaymentCell.innerHTML = "Downpayment: ";
                var sumCell = sumRow.insertCell(0);
                sumCell.innerHTML = "Sum: "; 

                //add values
                var items = result.d;
                $.each(items, function (index, item) {
                    yearCell = yearRow.insertCell(0);
                    yearCell.innerHTML = item.Year;
                    interestCell = yearRow.insertCell(0);
                    interestCell.innerHTML = itemt.Interest;
                    downPaymentCell = yearRow.insertCell(0);
                    downPaymentCell.innerHTML = item.Payment;
                    sumCell = yearRow.insertCell(0);
                    sumCell.innerHTML = item.Sum;
                })
                }
        });
        return false;
    });
});