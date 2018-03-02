import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    static BigInteger factorial(BigInteger n)
    {
        if(n.compareTo(BigInteger.ONE) <= 0)
        {
            return BigInteger.ONE;
        }
        else
        {
            return n.multiply(factorial(n.subtract(BigInteger.ONE)));
        }
    }
    
    static void extraLongFactorials(int n) {
        BigInteger bigN = new BigInteger(Integer.toString(n));
        System.out.println(factorial(bigN));
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        extraLongFactorials(n);
        in.close();
    }
}
