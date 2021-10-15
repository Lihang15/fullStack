### maven构建的项目 如果不依赖第三方包 可以直接java xxx.class 主函数一般放到java/目录下 不用写包名子 java目录就是跟目录
###   有三方包情况 打成一个jar包去运行    idea不管有没有三方包主函数上 右键都是可以运行的
    
### 打包三方依赖包 成一个jar包  mvn assembly:assembly
    
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    <packaging>jar</packaging>
            <build>
                <finalName>sign-script-1.0-SNAPSHOT</finalName>
                <plugins>
                    <plugin>
                        <artifactId>maven-assembly-plugin</artifactId>
                        <configuration>
                            <archive>
                                <manifest>
                                    <mainClass>org.example.main.Point</mainClass>
                                </manifest>
                            </archive>
                            <descriptorRefs>
                                <descriptorRef>jar-with-dependencies</descriptorRef>
                            </descriptorRefs>
                        </configuration>
                    </plugin>
                </plugins>
            </build>

  java -Dmysql_ip=192.168.176.62 -Dmysql_port=3306 -Dmysql_db=test_wlh -Dusername=root -Dpassword=111111Aa -Dkey=7857847BD5ABD53BD984BD543544BD53 -jar sign-script-1.0-SNAPSHOT-jar
-with-dependencies.jar
