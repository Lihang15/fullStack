
//lambda表达式
public class Hello {
    public static void main(String[] args) {
        myFunction my = (int a, int b) -> a + b;
        System.out.println(p(my));
    }
    public static int p(myFunction a){
         return a.f(1,2);
    }
}


//定义函数类型
interface myFunction {
    int f(int a, int b);
}