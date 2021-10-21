
### 字节流和字符流

- 字节流通常用于处理二进制数据，实际上它可以处理任意类型的数据，1个字节一个字节得读
- 字符流一般只能处理文本文件，不常用  一个字符一个字符得读
<!-- - read读出来的东西是字节，可以用字节数组接收 -->

import java.io.*;


public class Test{
    
    public static void main(String[] args) throws Exception {
        FileInputStream fis = null;
        FileOutputStream fos = null;
        try{
            //读文件 读出来的是二进制的值
            fis = new FileInputStream("./testa.js");
            //一次读一个字节 如果读没了就返回-1
            // int result = fis.read();
            // System.out.print(result);

            //读到字节数组中
            byte[] b = new byte[18];
            int result = fis.read(b);
            //new String（b）字节数组转化String 
            System.out.print(new String(new String(b,0,result)));

            //写文件
           fos = new FileOutputStream("./testb.js",true);
           byte[] b1 = {97,98}; //字节数组的写入 在文件里二进制数据会被转化成对应的字符
           String str ="我是可以写入的字符串，我先转成byte数组";
           fos.write(str.getBytes());
           fos.flush();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if(fis!=null){
                try{
                    fis.close();
                }catch(Exception e){
                    e.printStackTrace();
                }  
            } 
        }
    }
}
