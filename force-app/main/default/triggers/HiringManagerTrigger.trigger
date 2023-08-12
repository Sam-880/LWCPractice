trigger HiringManagerTrigger on Hiring_Manager__c (before insert,before update, before delete) {
	if(Trigger.isBefore && (Trigger.isInsert || Trigger.isUpdate))
		{
			for(Hiring_Manager__c hrRecord : Trigger.New)
			{
				integer recordsCount =	[Select count() from Hiring_Manager__c
													Where name =: hrRecord.Name and 
															Contact_Number__c =: hrRecord.Contact_Number__c];
				
				if(recordsCount > 0)
				{
					hrRecord.AddError('Duplicate Record Found with the Same Details. Record Cannot be Acceptable.');
				}
			}
		}
    
    if(Trigger.IsBefore && Trigger.IsDelete){
        List<Position__c> lhm=[select id,HR_Contact_Number__c,Hiring_Manager__c 
                               from Position__c where Hiring_Manager__c IN:Trigger.OldMap.KeySet()];
        if(!lhm.IsEmpty()){
            for(Position__c po:lhm){
               delete po; 
            }
        }
    }
}