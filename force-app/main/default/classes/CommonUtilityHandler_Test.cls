@isTest
public class CommonUtilityHandler_Test 
{
  	static testmethod void TestCommonMethods()
    {
        system.assertEquals(550, CommonUtilityHandler.Addition(100, 450));        
        system.assertEquals(20450 , CommonUtilityHandler.Addition(20000, 450));
        
        system.assertEquals(4500,CommonUtilityHandler.Multiply(10, 45, 10));
        
        system.assertEquals(true, CommonUtilityHandler.CheckEquals('Welcome', 'Welcome'));
        system.assertEquals(true, CommonUtilityHandler.CheckEquals('Welcome', 'welcome'));
        system.assertEquals(false, CommonUtilityHandler.CheckEquals('Welcome', 'Welcome1')); // Negative Case;
        
        system.assertEquals(true, CommonUtilityHandler.CheckEqualsWithCase('Welcome','Welcome'));
        system.assertEquals(false, CommonUtilityHandler.CheckEqualsWithCase('Welcome','welcome'));// Negative Case;
        
        system.assertEquals('HelloWelcome', CommonUtilityHandler.Concatenate('Hello','Welcome'));
    }
}