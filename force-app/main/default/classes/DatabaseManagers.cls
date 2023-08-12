public class DatabaseManagers 
{
	Public static void GetAccountsByName(string accountRecordName)
    {
        if(accountRecordName != Null && accountRecordName != '')
        {
            List<Account> lstAccounts = [Select id, name, rating, industry, annualrevenue, phone, fax, active__C,
                                         		(Select id, firstname, lastname, email, title, phone, fax from Contacts),
                                         		(Select id, name, closedate, amount, stagename from Opportunities),
                                         		(Select id, status, priority, origin, type, reason, subject from Cases)
                                        			from Account
                                        				Where name =: accountRecordName];
            
            system.debug('Collection Size is...: '+ lstAccounts.size());
            
            System.debug('Number of SOQL Queries has been used...: '+ System.Limits.getQueries());
            
            for(Account acc : lstAccounts)
            {
            	system.debug('Account Record Details...: '+ acc);    
                
                system.debug('--------------------------------------------------');
                system.debug('Related Contacts Count is...:  '+ acc.Contacts.size());
                for(Contact con : acc.Contacts)
                {
                   system.debug('Contact Record is...: '+ con); 
                }                
                
                system.debug('--------------------------------------------------');
                system.debug('Related Opportunities Count is...: '+ acc.Opportunities.size());
                for(Opportunity oppty : acc.Opportunities)
                {
                    system.debug('Opportunity Record is...: '+ oppty);
                }
                
                system.debug('--------------------------------------------------');
                system.debug('Related Cases Count is.....: '+ acc.cases.size());
                for(Case cs : acc.Cases)
                {
                    system.debug('Case Record is....: '+ cs);
                }
            }
        }
    }
}