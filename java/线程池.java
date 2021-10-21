
        //固定大小线程池
        ExecutorService e = Executors.newFixedThreadPool(1);
        //单一线程池
        ExecutorService e1 = Executors.newSingleThreadExecutor();
         //自动扩容的线程池
        ExecutorService e2 = Executors.newCachedThreadPool();
        //前三种 多线程情况下 可能会OOM 一般用 new ThreadPoolExecutor()
        如何等待线程池的任务都执行完 在执行主线程   执行 shutdown()
        //参数依次 核心线程数 最大线程数(一定大于等于核心线程数) 线程存在时间 线程存在时间的单位(2s) 阻塞队列 线程工厂 拒绝策略
        // 线程池的原理:比如核心线程数为3也就是同一时间只有3条线程可以并发执行 如果来了第四个线程会放到阻塞队列里等待 等到核心线程中的线程释放
        //如果阻塞队列满了，就会用最大线程数里的线程优先处理，如果都满了 执行拒绝策略
        ExecutorService es =  new ThreadPoolExecutor(
               3,
               5,
               2L,
               TimeUnit.SECONDS,
               new ArrayBlockingQueue<>(3),
               Executors.defaultThreadFactory(),
               new ThreadPoolExecutor.AbortPolicy());
      es.execute(()->{
          System.out.println(Thread.currentThread().getName());
      });
    es.execute(()->{
        System.out.println(Thread.currentThread().getName());
    });
    es.shutdown();

        e.submit(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException interruptedException) {
                interruptedException.printStackTrace();
            }
            System.out.println("A");
        });

        e.submit(() -> {
            try {
                Thread.sleep(500);
            } catch (InterruptedException interruptedException) {
                interruptedException.printStackTrace();
            }
            System.out.println("C");
        });

        e.submit(() -> {
            System.out.println("B");
        });