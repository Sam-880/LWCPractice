({
	callMe : function(component, event, helper) {
		var name=component.find("empname").get("v.value");
        var age=component.find("empage").get("v.value");
        var salary=component.find("empsalary").get("v.value");
        
        console.log("Name------------->" +name);
        console.log("Name------------->" +age);
        console.log("Name------------->" +salary);
	}
})