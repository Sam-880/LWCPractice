@IsTest
Private class MathOperationsUtility_Test 
{
	static testmethod void TestMathOperations()
		{
			// Invoke the Business Logic Methods..
			MathOperationsUtility.Addition(100,4500,500);
			
			MathOperationsUtility.Multiply(20000, 400);
			
			MathOperationsUtility.Division(4500, 20);
			
			MathOperationsUtility.Modulus(400,6);
		}
}