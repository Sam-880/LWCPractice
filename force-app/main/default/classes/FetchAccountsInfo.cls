public class FetchAccountsInfo {
    @AuraEnabled(cacheable=true)  //this tatement will make this method to be accesible to the js 
    Public Static List<Account> FetchAccountsInfoIndustry(string IndustryValue){
        List<Account> acc = new List<Account>();
        acc=[select Name,Phone,Industry,Active__c from Account where Industry=:IndustryValue];
        if(!acc.IsEmpty()){
            return acc;
        }else{
            return null;
        }
    }
}