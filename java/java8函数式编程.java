

import java.util.*;


public class Hello {
    public static void main(String[] args) {
        //list 流
        List<String> list = new ArrayList();
        list.add("b");
        list.add("a");
        list.add("c");
        list.add("d");
        list.stream().forEach(item ->{
            System.out.println(item);
        });
        list.stream().filter(str -> !"a".equals(str)).forEach(str -> {
            System.out.println(str);
        });


        //遍历map
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        map.put(1, 2);
        // 1. entrySet遍历，在键和值都需要时使用（最常用）
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            System.out.println("key = " + entry.getKey() + ", value = " + entry.getValue());
        }
        // 2. 通过keySet或values来实现遍历,性能略低于第一种方式
        // 遍历map中的键
        for (Integer key : map.keySet()) {
            System.out.println("key = " + key);
        }
        // 遍历map中的值
        for (Integer value : map.values()) {
            System.out.println("key = " + value);
        }

        // 4. java8 Lambda
        // java8提供了Lambda表达式支持，语法看起来更简洁，可以同时拿到key和value，
        // 不过，经测试，性能低于entrySet,所以更推荐用entrySet的方式
        map.forEach((key, value) -> {
            System.out.println(key + ":" + value);
        });
        
    }
    
}
