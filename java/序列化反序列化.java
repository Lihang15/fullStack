
import com.fasterxml.jackson.databind.ObjectMapper;


public class Hello {
    public static void main(String[] args) {
        Object o =  new Object();

        ObjectMapper objectMapper = new ObjectMapper();
        //序列化 成json串
        String content = objectMapper.writeValueAsString(o);
        //反序列化 成java对象
        ManagerRespEntity resp = objectMapper.readValue(content, o.class);

    }


}