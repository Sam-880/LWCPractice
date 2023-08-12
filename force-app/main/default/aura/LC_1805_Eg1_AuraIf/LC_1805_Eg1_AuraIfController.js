({
	callme : function(component, event, helper) 
    {
		var amt = component.get("v.Pri");
        var rate = component.get("v.rate");
        var term = component.get("v.term");
        
        var int = (amt*rate*term)/100;
        if(int>10){
             component.set("v.flag",true);
        }else{
            component.set("v.flag",false);
        }
        component.set("v.res",int);
	}
})