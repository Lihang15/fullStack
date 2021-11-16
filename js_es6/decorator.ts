//js es7 @装饰器 通过label 可以解析运行  
//ts可以直接识别@decorator  装饰器模式 类似于AOP 在不改变原代码逻辑上强化其中功能

//类装饰器语法：
@decoratorName
class TestClass{
    @decoratorName
    成员装饰
    public testProp:string
                  参数装饰
    public method(@decoratorName prop:string)
}



