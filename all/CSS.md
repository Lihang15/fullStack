### CSS的盒模型
   包含了一下几个内容margin,padding,border,content 
   宽度 高=padding+content+border 
   css3 提供了box-sizing:border-box  内边距不会撑开盒子
### CSS常用选择器，选择器权重问题
   !important > style > id > class > elemnet > 伪类和属性
### CSS盒子如何水平垂直居中
   1.子盒子 margin 0 auto
   2.父盒子 dispaly：flex；
           justify-content：center；
   3.父盒子 position ：relative
     子盒子 position：absolute
           top：0；left：50%
           transform:translate(-50%,0%)
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
    