({
    CallMe : function(component, event, helper) 
    {
        var evt = event.getSource();//Capture/get the Source of the event Where it occured in component.
        var aid =evt.getLocalId();//get the local id of that event.
        
		var a1=component.find("aval").get("v.value");
        var b1=component.find("bval").get("v.value");
        
       
        if(aid=="add"){
            var r=parseInt(a1)+parseInt(b1);
        	component.find("result").set("v.value",r);
        }else if(aid=="sub")
        {
            var r=parseInt(a1)-parseInt(b1);
       	    component.find("result").set("v.value",r);
        }else if(aid=="mul")
        {
            var r=parseInt(a1)*parseInt(b1);
        	component.find("result").set("v.value",r);
        }                   
	},
})