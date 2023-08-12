({
	add : function(component, event, helper) {
		var A = component.get("v.aval");
        var B = component.get("v.bval");
       	var C = parseInt(A)+parseInt(B);
        console.log(C);
        component.set("v.result",C);
	},
    sub : function(component, event, helper) {
		var A = component.get("v.aval");
        var B = component.get("v.bval");
       	var C = parseInt(A)-parseInt(B);
        console.log(C);
        component.set("v.result",C);
	},
    mul : function(component, event, helper) {
		var A = component.get("v.aval");
        var B = component.get("v.bval");
       	var C = parseInt(A)*parseInt(B);
        console.log(C);
        component.set("v.result",C);
	}
})