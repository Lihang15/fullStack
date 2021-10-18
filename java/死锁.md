// 死锁 多个线程抢占资源 造成相互等待的现象(sisuo1等待死锁2释放b,sisuo2等待sisuo1释放a)，没有外力，走不下去
public class Hello {

   static Object a = new Object();
   static Object b = new Object();
   
    public static void main(String[] args) {

        new Thread(() -> {
             synchronized (a){
                 System.out.println(Thread.currentThread().getName()+"我已经占用a对象，我试图占用b");
                 try {
                     Thread.sleep(1000);
                 } catch (InterruptedException e) {
                     e.printStackTrace();
                 }
                 synchronized (b){
                     System.out.println("占用b对象");
                 }
             }

        }, "sisuo1").start();


        new Thread(() -> {
            synchronized (b){
                System.out.println(Thread.currentThread().getName()+"我已经占用b对象，我试图占用a");
                synchronized (a){
                    System.out.println("占用a对象");
                }
            }
        }, "sisuo2").start();

    }
}
    