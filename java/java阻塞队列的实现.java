//阻塞队列：带锁的生产消费模型

import java.util.*;

public class Test<T>{
    private Queue<T> queue=new LinkedList<>();
    private final int MAX;

    public Test(int limit){
        this.MAX=limit;
    }
    
    public void put(T t) throws InterruptedException{
        synchronized(this){
            if(queue.size()==MAX){
                 this.wait();
            }
            queue.offer(t);
            this.notifyAll();
        }
    }
    public T get() throws InterruptedException{
        T t;
        //同一个对象的实例访问会被锁住，执行完释放
        synchronized(this){
            if(queue.size()==0){
                this.wait();
            }
           t = queue.poll();
           this.notifyAll();
        }
        return t;
    }
    @SuppressWarnings("unchecked")
    public static void main(String[] args) throws Exception{
        Test t = new Test(10);
        new Thread(()->{
            try{
                t.put("123");
            }catch(Exception e){}
             
        },"a").start();

        new Thread(()->{
            try{
                System.out.print(t.get());
            }catch(Exception e){}
           
        },"b").start();
      
    }

}