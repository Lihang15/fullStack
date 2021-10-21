import java.util.Arrays;
import java.util.Comparator;

 //比较器 是给数组里的对象排序的

public class Test{
     //忽略编译警告
    @SuppressWarnings("unchecked")
    public static void main(String[] args){
        String[] strs = new String[]{"cc", "dd", "aa", "ee", "bb"};
        //java7
        Arrays.sort(strs, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.compareTo(o2);
            }
        });
        //java8
        Arrays.sort(strs, (o1,o2)=>{o1.compareTo(o2)});
        System.out.println(Arrays.toString(strs));

        //第二种自定义比较器
        Good[] good = new Good[4];
        good[0] = new Good(30);
        good[1] = new Good(80);
        good[2] = new Good(70);
        good[3] = new Good(20);

        Arrays.sort(good);
        System.out.println(good[1].toString());

}
}

class Good implements Comparable<Good>{
    private int price;
    public Good(int name){
        this.price = name;
    }

    @Override
    public String toString() {
        return "Good{" +
                "price=" + price +
                '}';
    }

    @Override
    public int compareTo(Good o) {
        if(this.price<o.price){
            return -1;
        }
        return 0;
    }
}
