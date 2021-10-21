    //java定义完数组 数组长度不可变 可以移位后返回新数组 附值给元素组
    
    static int[] deleteFirst(int[] arr,int index) {
        for(int i=index;i<arr.length;i++){
            if(i==arr.length-1){
                break;
            }
            arr[i]=arr[i+1];
        }
        int[] temp = new int[arr.length - 1];
        System.arraycopy(arr, 0, temp, 0, temp.length);
        return temp;
    }