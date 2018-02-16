using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {
    
    static string construct(long startVal, int maxLen){
        var newStr = "" + startVal;
        while(newStr.Length < maxLen){
            newStr += ++startVal;
        }
        return newStr;
    }

    static string separateNumbers(string s) {
        var sLen = s.Length;
        var max = ~~(sLen / 2);
        for(int i = 0; i < max; i++){
            var startVal = s.Substring(0, i+1);
            var constructed = construct(long.Parse(startVal), sLen);
            if(constructed == s){
                return $"YES {startVal}";
            }
        }
        return "NO";
    }

    static void Main(String[] args) {
        int q = Convert.ToInt32(Console.ReadLine());
        for(int a0 = 0; a0 < q; a0++){
            string s = Console.ReadLine();
            Console.WriteLine(separateNumbers(s));
        }
    }
}
