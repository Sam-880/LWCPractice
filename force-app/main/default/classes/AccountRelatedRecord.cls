public class AccountRelatedRecord {

    Public static void CreateAccountReleatedOpportunityRecord(){
        Account acc=new Account();
        acc.Name='Ashish Bhute';
        acc.AnnualRevenue= Decimal.valueOf('3263.466');
        acc.Phone='8890366534';
        acc.Active__c='Yes';
        acc.Industry='Banking';
        acc.Rating='Hot';
        
        insert acc;
        
    }
}