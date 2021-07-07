package test;
import java.utils.HashMap;
import java.utils.ArrayList;
import java.utils.List;
import java.utils.Collections;
public class Aa{
  
  public String generatorSortStr(HashMap<String,String> data,String timestamp){
       //存ascll和属性对应映射
        HashMap<Integer,String> mapAscllToProps  = new HashMap<Integer, String>();
        List<Integer> list=new ArrayList<Integer>();

       
        for (Entry<String, String> entry : data.entrySet()) {
            int asc=Integer.valueOf(entry.getKey());
            list.add(asc);
            mapAscllToProps.set(asc,entry.getKey());
        }
        Collections.sort(list);
      
        String result ="";
        for(int i =0;i<list.size();i++){
            String ascllToStr = mapAscllToProps.get(list.get(i));
            result+=ascllToStr+':'+data.get(ascllToStr)+'&';
        }
        return result +="timestamp:"+timestamp;
  }

  public static void main(String[] args) {
    HashMap<String,String> data  = new HashMap();
    data.set("a","aaaa");
    data.set("b","bbbb");
    data.set("v","vvvv");
    Aa test = new Aa();
    System.out.println(test.generatorSortStr(data));
   }


}