import React from 'react'
import './content.css'
export default class Content extends React.Component {
    render() {
        const data =[
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
            {title:'博客一',author:'王立航',ctime:'2021-03-04',content:'这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章这是我的第一篇文章'},
        ]
        const content = data.map((item)=>{
           return <div className='item'>
                <div className='title'>{item.title}</div>
                <div className='con'>{item.content}</div>
                <div className='auther'>{item.author+' '}{item.ctime}</div>
            </div>
        })
        return (
            <div className='content'>
                {content}
            </div>
        )
    }


}