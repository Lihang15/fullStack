

//t.join(); 阻塞当前调用线程 等待t线程执行完

// sleep() 和wait()区别 都可以阻塞线程
<!-- 调用 Thread.sleep(5000)  this.wait();
最主要是sleep方法没有释放锁，而wait方法释放了锁，使得其他线程可以使用同步控制块或者方法(锁代码块和方法锁)。
wait，notify和notifyAll只能在同步控制方法或者同步控制块里面使用，而sleep可以在任何地方使用(使用范围)  
sleep必须捕获异常，而wait，notify和notifyAll不需要捕获异常   -->
//notify和notifyAll区别 唤醒wait()的线程 notify()唤醒一个notifyAll()全部唤醒

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


        //Callable的调用方式 需要结合FutureTask<>
        CallableThreadTest ctt = new CallableThreadTest();
        FutureTask<Integer> ft = new FutureTask<>(ctt);
        new Thread(ft,"有返回值的线程").start();
            new Thread(()->{
                try {
                    System.out.println("获取子线程的返回值："+ft.get());
                    System.out.println("没获取子线程返回值之前我是阻塞的");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } catch (ExecutionException e) {
                    e.printStackTrace();
                }
            },"线程2").start();
        //java8
          new Thread(() -> {
            System.out.println(Thread.currentThread().getName());
        }, "线程名字").start();

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

//实现Callable接口 能使线程有返回值
class CallableThreadTest implements Callable<Integer> {
    @Override
    public Integer call() throws Exception
    {
        Thread.sleep(5000);
        return 100;
    }
}