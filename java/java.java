### java的基本数据类型 byte(1字节 默认0) (一个字节占8位-2^7~2^7-1)byte只能存这么大数字 short(2字节 默认0) 
### int(4字节 默认0) long(8字节 默认0L) char(2字节 默认'') boolean(1字节 默认false) float(4字节 默认0.0f) double(8字节 默认0.0d)


### 各种基本数据类型之间的转换
 byte,short,char—> int —> long—> float —> double
 基本数据类型之间可以运算 比如
 int a = 1; 
 byte b = 15;
 byte c =(byte)(a+b);强制转换 如果放不开 会失去精度
 a+b实际上b先转成了int 再计算  计算出的值是int类型

 容量大的类型转成容量小的类型必须强制转换
 小类型默认可以附值给大类型 byte 可以直接赋值给int 

### 字符串和整数互转
字转整
Intger.parseInt(String)

整转字
String.valueOf(num)
Integer.toString(num)

### 类和类之间的关系
继承  一个类继承一个类
关联(聚合（属性的赋值是通过构造方法传过来的） 组合（属性的赋值是直接new 出来的）) 一个类作为一个类的属性
依赖 一个类作为一个类的方法参数 
耦合性 继承>关联>依赖

### 基本类型和包装类型
1.包装类型可以为 null，而基本类型不可以 一般实体都用Integer 而不用int 数据库查出得实体可能是null，null赋值给int会出空指针
      Integer a = null;相当于db值
      int b = a; 自动拆箱给b
      System.out.print(b);//空指针
2.包装类型可用于泛型，而基本类型不可以
3.基本类型比包装类型更高效  基本类型值存在栈里，包装类型值存在堆里，栈中存的是地址

### Integer类型的自动装箱和拆箱  (基本类型转包装类型装箱，包装类型转基本类型拆箱)
Integer chenmo = new Integer(10);  // 手动装箱

Integer chenmo  = 10  //自动装箱
int wanger = chenmo;  //自动拆箱


当需要进行自动装箱时，如果数字在 -128 至 127 之间时，会直接使用缓存中的对象，而不是重新创建一个对象

// 1）基本类型和包装类型
int a = 180;
Integer b = 180;
Integer c = new Integer(180)
System.out.println(a == b);//true
System.out.println(c == a);//true

// 2）两个包装类型
Integer c = 127;
Integer d = 127;
System.out.println(c == d);//true

// 3）
Integer c = 128;
Integer d = 128;
System.out.println(c == d);//false

String str1 = "123";
String str2 = "123";
str1==str2  =>true

String str3 = new String("123")
str1 ==str3 => false