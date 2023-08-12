public class HRUtilities {

    Public Static Void CreateBulkRecordss(){
        List<Hiring_Manager__c> lstHr = new List<Hiring_Manager__c>();
        for(integer counter=0; counter<=500; counter++){
            Hiring_Manager__c hrm = new Hiring_Manager__c();
            	hrm.Name='Bhagwan Das -' + counter;
                hrm.Location_Name__c='Nagpur';
                hrm.Email_Address__c='Samir'+counter+'@gmail.com';
                hrm.Contact_Number__c='8806488054';
                  lstHr.Add(hrm);  
        }
        if(!lstHr.isEmpty()){
            insert lstHr;
        }
    }
    
    
}