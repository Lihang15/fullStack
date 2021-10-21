import java.util.regex.*;


public static void main(String[] args){
      String content = "I am wanglihang" 

 
      String pattern = ".*wanglihang.*";
 
      boolean isMatch = Pattern.matches(pattern, content);
      System.out.println("字符串中是否包含了 'wanglihang' 子字符串? " + isMatch);
   }