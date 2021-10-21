
import java.io.*;
import java.lang.reflect.*;
import java.lang.annotation.Target;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Retention;
import java.lang.annotation.ElementType;


public class Test{
     //忽略编译警告
     @SuppressWarnings("unchecked")
    public static void main(String[] args){
        try{
            Class c = Class.forName("UserService");
            //判断UserService类是否用了注解
            boolean b = c.isAnnotationPresent(MyAnnotation.class);
            //获取注解值
           MyAnnotation an = (MyAnnotation)c.getAnnotation(MyAnnotation.class);
           String v = an.name();
           System.out.println(v);
        }catch(Exception e){
              e.printStackTrace();
        }
       
    }
}


@MyAnnotation(name="wanglihang",color="red")
class UserService{
   private String propers = "123";

   @MyAnnotation(name="wanglihang",color="red")
    public void doSomething(){
        
    }
   
}

//自定义注解 @interface 注解类型名字
//怎么用？ 出现在类上，属性上，方法上，变量上 使用 @注解类型名字
//@Override 用这个注解的方法，如果不是重写父类的方法，编译会报错

//出现在注解上的注解成为元注解 标记这个注解能用在什么上

//保存策略，这个注解保存到class原文件中，能通过反射获取到
@Retention(RetentionPolicy.RUNTIME)
// 在哪上面能用注解 
@Target({ElementType.METHOD,ElementType.TYPE}) 
@interface MyAnnotation{
    //注解中有属性必须给属性赋值 在这里属性后面要有()
    //否则要在调用处把值传进来
   String name();
   String color() default "black";
}



//需求  实现一个@Id注解，这个注解只能出现在类上面，要求这个类必须有一个int id属性，否则编译不过
//可以把User通过反射操作
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE) 
@interface Id{

}

@Id
class User{
    int id =1;
}