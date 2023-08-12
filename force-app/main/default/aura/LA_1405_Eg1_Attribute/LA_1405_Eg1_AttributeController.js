({
	callMe : function(component, event, helper) {
		alert('Hi....This is My First Component Invocation');
        component.set("v.empname","Samir Dhapke");
        component.set("v.age",27);
        component.set("v.salary",50000.400);
	},
   
    clearMe : function(component, event, helper) {
		component.set("v.empname","");
        component.set("v.age","");
        component.set("v.salary","");
	}
})