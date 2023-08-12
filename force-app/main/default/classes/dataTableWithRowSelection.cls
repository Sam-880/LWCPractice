public class dataTableWithRowSelection {
    @AuraEnabled(cacheable=true)
    Public static List<Contact> getContactList(id lwcRecordId, String searchKeys){
       String key = '%' + searchKeys + '%'; //Search Kay
        //if search key is available
        if(searchKeys!= null && searchKeys!=''){
            List<Contact> contactSearchLst = [select id,Name,Phone,AccountId from Contact Where AccountId =: lwcRecordId AND Name Like :key ];
        return contactSearchLst;
        }
        //if Searchkey is not available
        else{
            List<Contact> contactlst = [select id,Name,Phone,AccountId from Contact Where AccountId =: lwcRecordId ];
            //null check
            if(!contactlst.isEmpty()){
                return contactlst;
            }
            return null;
        }
       
        
    }
}