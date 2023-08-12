({
	addMe : function(component, event, helper) {
		var A=component.get("v.aval");
        var B=component.get("v.bval");
        var C=parseInt(A)+parseInt(B);
        console.log(C);
        component.set("v.rval",C);
	},
    subMe : function(component, event, helper) {
		var A=component.get("v.aval");
        var B=component.get("v.bval");
        var C=parseInt(A)-parseInt(B);
        console.log(C);
        component.set("v.rval",C);
	},
    mulMe : function(component, event, helper) {
		var A=component.get("v.aval");
        var B=component.get("v.bval");
        var C=parseInt(A)*parseInt(B);
        console.log(C);
        component.set("v.rval",C);
	}
    
})