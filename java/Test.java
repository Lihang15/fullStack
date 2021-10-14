import java.util.Scanner;
import java.io.*;


public class Test{
    
    private static String CODE = "console.log(\"hello world\")";

    public static void main(String[] args) throws Exception {
        PrintWriter pw = new PrintWriter(new File("testa.js"));
        pw.println(CODE);
        pw.close();
    }

   
}
