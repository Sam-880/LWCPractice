public class ContactRecordHelper {
    Public Static void CreateBulkContact(){
        List<Contact> lstContact =new List<Contact>();
        for(integer counter=1; counter<=50; counter++){
             //Write the code to create ontact record
             Contact con = new Contact();
         
          	con.FirstName = 'Bulk';
        	con.LastName = 'Test Record'+counter;
        	con.Title = 'Project Manager';
        	con.Email = 'sample@gmail.com';
        	con.Phone = '9900998877';
        	con.Fax = '9900667788';
        	con.LeadSource = 'Web';
        	con.MailingCity = 'Hyderabad';
        	con.MailingState = 'Telangana';
        	con.MailingCountry = 'India';
           
        //Add contact Record to the collection
        	lstContact.Add(con);
        }
       
        //Insert the contact Record
        if(! lstContact.isEmpty())
            insert lstContact;
        for(Contact con:lstContact){
              system.debug('Contact Record Created With Id ....: '+ con);
        }
    }

}