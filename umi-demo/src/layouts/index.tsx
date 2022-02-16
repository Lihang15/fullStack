import {Link} from 'umi'


export default (props) => {

    return <div style={{ padding: 20 }}>
       

        <div><ul style={{listStyle:'none',padding:0, margin:0,overflow:'hidden'}}>
        <li style={{float:'left',paddingRight:20}} ><Link to="list">你好</Link></li>
        <li style={{float:'left',paddingRight:20}}><Link to="admin">我好</Link></li>
        <li style={{float:'left',paddingRight:20}}><Link to="admin">大家好</Link></li>
        <li style={{float:'left',paddingRight:20,color:'black'}}><Link to="users">用户列表</Link></li>
        </ul></div>
        { props.children }
        </div>;
  }