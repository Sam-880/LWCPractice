public class BulkLeadRecord {
    Public Static void CreateBulkRecords(){
        List<Lead> lstLeads = new List<Lead>();
        for(integer counter=0; counter<=250; counter++){
            // Prepare the Record..
            lead ld= new lead();
           ld.LastName='Mehta -' + counter;
            ld.Title='Develope-' +counter;
            ld.Company='Forsys - '+counter;
            ld.Phone='8806488054';
            ld.MobilePhone='8807366534';
            ld.Status='Open - Not Contacted';
           lstLeads.Add(ld);
        }
        if(!lstLeads.IsEmpty()){
            insert lstLeads;
        }
    }
}