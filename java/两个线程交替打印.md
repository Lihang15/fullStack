public class Hello {

    public synchronized void Asay() {
        while (true) {
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("Asay");
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            this.notifyAll();
        }
    }

    public synchronized void Bsay() {

        while (true) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("Bsay");
            this.notifyAll();
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {

        Hello h = new Hello();
        new Thread(new Runnable() {
            @Override
            public void run() {
             System.out.println(Thread.currentThread().getName());
                h.Asay();
            }
        }, "A").start();

        new Thread(() -> {

            h.Bsay();
        }, "B").start();

    }
}