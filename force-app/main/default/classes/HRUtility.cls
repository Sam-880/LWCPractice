public class HRUtility 
{
	Public static void CreateBulkHRRecords()
    {
        List<Hiring_Manager__c> lstHrRecords = new List<Hiring_Manager__c>();
        
        for(integer counter = 1; counter <= 500; counter++)
        {
            // Prepare the Record..
            Hiring_Manager__C hr = new Hiring_Manager__C();
            
            	hr.Name = 'Apex HR - '+ counter;
            	hr.Location_Name__c = 'Chennai';
            	hr.Contact_Number__c = '9900998877';
            	hr.Email_Address__c = 'apexhr'+counter+'@gmail.com';
            
          	// Add the Record to the Collection..
          	lstHrRecords.Add(hr);
        }
        
        if(! lstHrRecords.isEmpty())
        {
        	insert lstHrRecords;            
        }		
    }
}