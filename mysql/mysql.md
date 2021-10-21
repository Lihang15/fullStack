创建数据库 CREATE DATABASE IF NOT EXISTS tb_users DEFAULT CHARSET utf8mb4;

CREATE TABLE `tb_users`
(
    `id`                  bigint(20) NOT NULL AUTO_INCREMENT,
    `avatar`              bigint(20) NOT NULL DEFAULT '1' COMMENT '头像id',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4  COMMENT='用户表';


CREATE TABLE `tb_role`
(
    `id`                  bigint(20) NOT NULL AUTO_INCREMENT,
    `role_name`              varchar(255) NOT NULL DEFAULT '1' COMMENT '角色名字',
    `ent_date`              datetime(6) DEFAULT NULL,
    `user_id`               
    PRIMARY KEY (`id`)
    CONSTRAINT `外键1` FOREIGN KEY (`user_id`) REFERENCES `tb_users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4  COMMENT='用户表';

创建索引 CREATE INDEX phone_number ON tb_users (phone_number);

增加唯一性约束 ALTER TABLE tb_filestorage ADD UNIQUE KEY `filestorage_UK` (`uuid`);

查看表的结构 show create table 

备份数据表
 CREATE TABLE tb_certified_log_bak3 LIKE tb_certified_log;
 INSERT INTO tb_certified_log_bak3 SELECT * FROM tb_certified_log;

创建存储过程
DROP PROCEDURE IF EXISTS deleteIndexIfExist;

 CREATE PROCEDURE deleteIndexIfExist(IN tableNameIn varchar(200),IN idxNameIn varchar(200),IN columnNameIn varchar(200)) BEGIN
        IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.STATISTICS WHERE TABLE_SCHEMA = (SELECT DATABASE()) AND TABLE_NAME = tableNameIn AND INDEX_NAME=idxNameIn AND  COLUMN_NAME = columnNameIn) THEN
            SET @SQLContent = CONCAT("ALTER TABLE ",tableNameIn," DROP INDEX ",idxNameIn);
            PREPARE STMT FROM @SQLContent;
            EXECUTE  STMT;
        END IF;
    END;
//执行
CALL deleteIndexIfExist('tb_users','indexname','name');

DROP PROCEDURE IF EXISTS deleteIndexIfExist;

union 的用法  合并两个查询的结果集（要求 两个查询必须列数相同，可以不一样，不一样的按照第一个列名显示）
union all 合并结果集不去重，union去重复
select * from table1 union all select * from table2;(合并出来name是table1的列名)

id  name    url         country
1,Google,www.google.com,USA
2,淘宝,www.taobao.com,CN

1,微博app,www.weibo.com,CN
2,淘宝app,www.taobao.com,CN

table1
id  name   url         country
1,Google,www.google.com,USA
2,淘宝,www.taobao.com,CN

table2
id app_name    url      country
2,淘宝app,www.taobao.com,CN
1,微博app,www.weibo.com,CN

group by 的使用

group by  必须和聚合函数一起使用 count(*) 是统计所有数据行数 count(列名)统计这个字段的总行数，排除null
having   一般用于分组 之后的筛选


inner join..on 把两张表连接到一起 取交集
left  join..on 以左表为准，右表没有的数据取空
right join..on 以右表为准，左表没有的数据取空


select * from table1 limit 0,5; 左闭又开

子查询 in    not in  
select * 
from xsb
where 学号 in
	(
		select 学号 from cjb where 课程=206 
	) 

比较查询  all 全比较 some 比较到一个就是true
	select * 
from xsb
where 出生日期<all
(
	select 出生日期
	from xsb
	where 专业='计算机'
)

