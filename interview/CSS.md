### CSS的盒模型
   包含了一下几个内容margin,padding,border,content 
   宽度 高=padding+content+border 
   css3 提供了box-sizing:border-box  内边距不会撑开盒子
### CSS常用选择器，选择器权重问题
   !important > 内联style > id > class > elemnet > 伪类和属性
### CSS盒子如何水平垂直居中
   1.子盒子 margin 0 auto
   2.父盒子 dispaly：flex；
           justify-content：center；
           align-items: center;

   3.父盒子 position ：relative
     子盒子 position：absolute
           top：50%；left：50%
           transform:translate(-50%,50%)
### BFC
    BFC 块级格式化上下文 他是一个独立的块级渲染区域 子盒子不会影响外部盒子布局 bfc可以阻止浮动元素 覆盖bfc元素（给bfc元素overflew：hidden）
    现象 ：父盒子不设置高度 子类盒子浮动导致父类盒子没有高度 这个父盒子没形成bfc
    如何创建BFC (父)
     1.float的值是none
     2.overflow：hidden
     3.display:inline-block
     4.position:absolute
    这四种哪个最好overflow：hidden
    现象：父盒子里面的子盒子设置margin-top：20px 父盒子会被拽下来20px 父盒子margin塌陷 
    让父盒子形成bfc 解决此问题 给父盒子overflow：hidden
### CSS 画三角
 #triangle-up {
     width: 0;
     height: 0;
     border-left: 50px solid transparent;
     border-right: 50px solid transparent;
     border-bottom: 100px solid red;
 }
 ### visibility、display、opacity隐藏区别
 相同点：visibility:hidden,display:none,opacity:0 都能隐藏dom元素
   不同点：
   visibility跟opacity是不会改变dom页面，也就说保存在原有位置只是看不见而已。display会改变dom页面，不会占用原有位置
   事件操作：有visibility、display样试的元素不会触发任何事件，有opacity样试的元素可以触发事件如点击事件

### 画一条高度为0.5px的线
   <div class='div1'><div>  
   .div1{
      width:300px;
      height:1px;
      background-color:red;
      transform:scaleY(0.5)
   }