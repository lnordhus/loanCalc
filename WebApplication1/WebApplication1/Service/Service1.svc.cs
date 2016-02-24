using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;

namespace WebApplication1.Service
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class Service1
    {

        [OperationContract]
        public List<LoanSegmentModel> GetSerialLoan(decimal amount, decimal years, decimal interest_percentage)
        {
            var retun_list = new List<LoanSegmentModel>();
            for (var i = 0; i < years; i++)
            {
                var entry = new LoanSegmentModel();
                entry.Year = i + 1;
                entry.Payment = amount / years;
                var previousDownPayments = entry.Payment * (i);
                entry.Interest = (amount - previousDownPayments) * interest_percentage / 100;
                entry.Sum = entry.Payment + entry.Interest;
                retun_list.Add(entry);
            }

            return retun_list;
        }
    }
}
