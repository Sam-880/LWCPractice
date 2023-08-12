public class MathOperationsUtility 
{
  Public static void Addition(integer x, integer y, integer z)
    {
        system.debug('Addition Result : '+ (x + y + z));
    }
    
    Public static void Multiply(integer x, integer y)
    {
        system.debug('Multiply Result is....: '+ (x * y));
    }
    
    Public static void Division(integer x, integer y)
    {
        system.debug('Division Result is....: '+ (x / y));
    }
    
    Public static void Modulus(integer x, integer y)
    {
        system.debug('Reminder Value is....: '+ Math.mod(x, y));
    }
}