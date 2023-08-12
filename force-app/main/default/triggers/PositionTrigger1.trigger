trigger PositionTrigger1 on Position__c (before insert, before Update) {
 if((Trigger.IsInsert || Trigger.IsUpdate) && Trigger.IsBefore){
        for(Position__c pos:Trigger.New){
            
           
            if(pos.HR_Contact_Number__c =='' || pos.HR_Contact_Number__c== null)
            {
                 pos.HR_Contact_Number__c.AddError('Please Enter Contact Number');
            }             
                      
        }   
    }
}