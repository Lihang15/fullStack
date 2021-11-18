//简单工厂模式  就是通过一个工厂对象 通过你的传参来给你生成你想要的对象


public interface Car{
    void name();
}
public class wuling implements Car{
    @overrife
    void name(){
        System.out.println("五菱宏光")
    }
}

public class tesila implements Car{
    @overrife
    void name(){
        System.out.println("特斯拉")
    }
}


public class CarFactory{
    public static Car getCar(String car){
          if(car.equals("五菱")){
              return new wuling();
          }
          if(car.equals("特斯拉")){
              return new tesila();
          }
    }
}

//主函数 Car car1 = CarFactory.getCar("五菱")；Car car2 = CarFactory.getCar("特斯拉")；要知道工厂里都有啥，如果有新的车 要去改工厂代码 不满足开闭原则








//工厂方法模式  需要创建多个工厂 可以满足开闭原则

public interface Car{
    void name();
}
public class wuling implements Car{
    @overrife
    void name(){
        System.out.println("五菱宏光")
    }
}

public class tesila implements Car{
    @overrife
    void name(){
        System.out.println("特斯拉")
    }
}

public interface CarFactory{
    Car getCar();
}

class TesilaFactory implements CarFactory{
    Car getCar(){
        return new tesila();
    }
}

class WulingFactory implements CarFactory{
    Car getCar(){
        return new wuling();
    }
}

//new TesilaFactory().getCar()  ; new WulingFactory().getCar()