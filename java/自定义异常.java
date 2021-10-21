


public class Testa{
     //忽略编译警告
    public static void main(String[] args) throws Exception{
        
        int a = 1;
        if(a==1){
            throw new Exception("系统异常"); //打印Exception in thread "main" java.lang.Exception: 系统异常  at Testa.main(Testa.java:16)
        }else{
            throw new MyException("我自定义的异常");//打印 Exception in thread "main" MyException: 我自定义的异常
        }
        // System.out.print("11111");
    }
}


class MyException extends RuntimeException{
     public MyException(){

     }
     public MyException(String s){
         super(s);
    }

}