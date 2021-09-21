#!/bin/bash
your_name="wanglihang"
str='123'${your_name}
arr=(1 2 3 "xxx")

echo ${#arr[*]}
echo "hello world shell ${your_name:1:4}"

a=1
b=1
if [ $a -eq $b ]
then
    echo "$a,$b"
else 
    echo "else"
fi

for var in 1 2 3 4
do
   echo "$var"
done

int=1
while(($int<5))
do
  echo $int
  ((int++))
done

aNum=2
case $aNum in
    1)  echo '你选择了 1'
    ;;
    2)  echo '你选择了 2'
    ;;
    3)  echo '你选择了 3'
    ;;
    4)  echo '你选择了 4'
    ;;
    *)  echo '你没有输入 1 到 4 之间的数字'
    ;;
esac
function demo(){
    echo "$1"
    echo "$2"
    return 1
}

demo 1 2 
echo $?



function xx(){
    while [ "$1" ]
    do
    echo "xxx$1"
    done
}

xx 1