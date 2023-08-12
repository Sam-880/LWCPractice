public class Integration_Eg_2SOQL {
    Public Void BringAccount(){
        System.JSONGenerator js = JSON.createGenerator(true);
        js.writeStartObject();
        try{
            List<Account> Acc=[Select Name,Phone from Account];
            for(Account Ac:Acc)
            {
                js.writeStringField('AccountName', Ac.Name);
                if(Ac.Phone!=null){// due to the phone field is empty it showing both the status code from catch also.
                     js.writeStringField('Phone', Ac.Phone);
                }
               
                js.writeStringField('Status', 'Success');
                js.writeNumberField('Code', 800);
            }
        }
        catch(exception e){
            js.writeStringField('Status', 'Failed');
                js.writeNumberField('Code', 600);	
        }
        js.writeEndObject();
        String Op=js.getAsString();
        System.debug(Op);
    }
}