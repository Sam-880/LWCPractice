public class wireDemoClass {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecord(){
        List<Account> accRecords = [select Id, Name from Account];
        return accRecords;
    }
}