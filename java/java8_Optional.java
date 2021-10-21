import java.util.Optional;

public class Hello {
    public static void main(String[] args) {
        //处理空指针异常
        Optional<Integer> a = Optional.ofNullable(null);
        //Optional<Integer> a = Optional.ofNullable(123);
        Integer b =  a.orElse(null); //如果a的初始值是null 执行orElse()  a是123直接返回
        System.out.println(b);
    }
}
