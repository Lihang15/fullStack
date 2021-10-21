
import java.io.*;
import java.lang.reflect.*;


public class Test{
    //忽略编译警告
    @SuppressWarnings("unchecked")
    public static void main(String[] args) throws Exception {
        
       Class userClass = Class.forName("UserService");
       //传入类的所有方法
       Method[] methods = userClass.getDeclaredMethods();
       System.out.println(methods[1].getName());
       System.out.println(methods[1].getReturnType().getSimpleName());
       
       //通过反射调用方法
       Object obj = userClass.newInstance();
       Method logout =userClass.getDeclaredMethod("logout",String.class);
       Object result = logout.invoke(obj,"1234");
       System.out.println(result);

       //... 动态参数
       UserService u = new UserService();
       u.args("1","2");
    }
}

class UserService{
   private String propers = "123";

    public boolean login(){
        return true;
    }
    public String logout(String str){
        return str+"success logout";
    }
    public String args(String... args){
        for(String v:args){
            System.out.println(v);
        }
        return "123";
    }
}