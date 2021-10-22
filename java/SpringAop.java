// Spring AOP 面向切面编程  => 可以在函数执行前和执行后,程序抛出异常时做一些操作

import java.lang.reflect.Method;
import java.util.Arrays;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

//@Aspect:给spring说明这个组件是切面类



//匹配ProductServiceImpl类里面的所有方法
//@Pointcut("within(com.aop.service.impl.ProductServiceImpl)")

//匹配标注有AdminOnly注解的方法
//@Pointcut("@annotation(com.aop.annotation.AdminOnly)")

/*
 * 五个注解：
 * @Before: 前置通知 在目标方法之前运行；
 * @After:  后置通知 如果切入点抛出异常，则在抛出异常前执行
 * @AfterReturing: 返回通知 在目标方法正常返回之后；			  
 * @AfterThrowing:  异常通知 如果切入点抛出异常，则不执行
 * @Around:环绕		环绕通知 集成了上面4个通知，
 /*
 * try{
 * 		@Before  //这个注解可以不写 默认在 result之前就是前置通知
 * 		Result = method.invoke(obj,args);  在调用真实函数 时候自动调这个
 * 		@AfterReturing
 * }catch(e){
 * 		@AfterReturing
 * }finally{
 * 		@After
 * }
 * */
 * */




@Aspect
@Component
public class LogUtils {
	
	@Pointcut("execution(public int com.atguigu.impl.MyMathCalculator.*(int, int))")
	public void myPoint(){}
	@Around(value = "myPoint()")
	public Object myAround(ProceedingJoinPoint pjp) throws Throwable{
		Object[] args = pjp.getArgs();
		String name = pjp.getSignature().getName();
		Object proceed=null;
		try {
			//@Before
			System.out.println("【环绕前置通知】【"+name+"方法开始】");
/*这句相当于method.invoke(obj,args)，通过反射来执行接口中的方法;因此在反射执行完方法后会有一个返回值proceed*/
			proceed = pjp.proceed(); //在调用真实函数 时候自动调这个
			//@AfterReturning
			System.out.println("【环绕返回通知】【"+name+"方法返回，返回值："+proceed+"】");
		} catch (Exception e) {
			//@AfterThrowing
			System.out.println("【环绕异常通知】【"+name+"方法异常，异常信息："+e+"】");
		}finally{
			//@After
			System.out.println("【环绕后置通知】【"+name+"方法结束】");
		}
		return proceed;
	}
}
