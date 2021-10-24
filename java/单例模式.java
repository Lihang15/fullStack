public class BSingleton {
    
    private static BSingleton bSingleton;

    private BSingleton() {
    }

    /**
     * 整个方法锁住了，效率较低
     * @return
     */
    public synchronized static BSingleton getbSingleton(){
        if(bSingleton == null){
            bSingleton = new BSingleton();
        }
        return bSingleton;
    }
}

public class ESingleton {

    /**类在加载的时候直接进行初始化*/
    private static final ESingleton ESINGLETON = new ESingleton();

    private ESingleton() {}

    /**对外暴露唯一接口  提供单例对象*/
    public static ESingleton geteSingleton(){
        return ESINGLETON;
    }
}