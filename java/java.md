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


