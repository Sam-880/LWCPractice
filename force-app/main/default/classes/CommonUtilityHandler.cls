public class CommonUtilityHandler 
{
	Public static integer Addition(integer x, integer y)
    {
        return (x + y);
    }
    
    Public static integer Multiply(integer x, integer y, integer z)
    {
        return (x * y * z);
    }
    
    Public static Boolean CheckEquals(string s1, string s2)
    {
        if(s1 == s2)
            return true;
        else 
            return false;
    }
    
    Public static Boolean CheckEqualsWithCase(string s1, string s2)
    {
        return s1.equals(s2);
    }
    
	Public static string Concatenate(string s1, string s2)    
    {
        return s1 + s2;
    }
}