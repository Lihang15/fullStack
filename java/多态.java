
public class Test{
    public static void main(String[] args){
        //多态就是同一接口，不同实例执行不同的操作
        Print p = new ordinaryPrint();
        p.print();
    }
}
interface Print{
    public void print();
} 
class ColorPrint implements Print{
    public void print(){
          System.out.println("colorPrint");
    }
}
class ordinaryPrint implements Print{
    public void print(){
          System.out.println("ordinaryPrint");
    }
}
//多态的好处  增加程序的可扩展性 
// 这个使用类 可以根据传入实例 执行是普通打印 还是彩色打印  而不用写死和指定类型
class Use{
    void usePrint(Print p){
        p.print()
    }
}
