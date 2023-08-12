({
	show : function(component, event, helper) {
       // alert('Hi....This is My First Component In');
		component.set('v.empName','Samir Dhapke');
        component.set('v.salary',10000);
	},
    invoke : function(component, event, helper) {
		component.set('v.empName','');
        component.set('v.salary','');
	}
})