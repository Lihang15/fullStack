
public class Testa{
     //忽略编译警告
    public static void main(String[] args) throws Exception{
        //继承调用方式
        ThreadExtend et = new ThreadExtend();
        et.start();
        //runnable调用方式
        ThreadRunnable rt = new ThreadRunnable();
        Thread rtt = new Thread(rt);
        rtt.start();
        System.out.println(Thread.currentThread().getName());
    }
}

//继承thread类 这个类的run方法就是多线程的
class ThreadExtend extends Thread{
    @Override
    public void run() {
        Thread.currentThread().getName();
        System.out.println(Thread.currentThread().getName());
    }
}

//实现Runnable接口 
class ThreadRunnable implements Runnable{
    @Override
    public void run() {
        Thread.currentThread().getName();
        System.out.println(Thread.currentThread().getName());
    }
}