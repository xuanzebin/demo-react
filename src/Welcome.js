import React from 'react'; // 为什么要 import React
class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state={
            date: new Date(),
            frank : 'fuck'
        }
        setInterval(()=>{
            this.setState(
                (state,props)=>({date: new Date()})
            )
        })
        console.log('构造函数初始化')
    }
    componentWillMount(){
        setInterval(()=>{
            this.setState(
                (state,props)=>({date: new Date()})
            )
        })
        console.log('马上就要render拉')
    }
    render() {
        setInterval(()=>{
            this.setState(
                (state,props)=>({date: new Date()})
            )
        })
        console.log('这里是render')
        return (
            <div>
              <h1>Hello, {this.props.fuck}</h1>
              <h2>{this.state.date.toString()}</h2>
            </div>
        )
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState(
                (state,props)=>({date: new Date()})
            )
        })
        console.log('已经挂载到页面了')
    }
    componentWillReceiveProps(){
        setInterval(()=>{
            this.setState(
                (state,props)=>({date: new Date()})
            )
        })
        console.log('我要读取props拉')
    }
    shouldComponentUpdate(){
        setInterval(()=>{
            this.setState(
                (state,props)=>({date: new Date()})
            )
        })
        console.log('请问要更新组件吗？')
    }
    componentWillUpdate(){
        setInterval(()=>{
            this.setState(
                (state,props)=>({date: new Date()})
            )
        })
        console.log('我要更新组件拉')
    }
    componentDidUpdate(){
        setInterval(()=>{
            this.setState(
                (state,props)=>({date: new Date()})
            )
        })
        console.log('组件更新完毕')
    }
    componentWillUnmount(){
        setInterval(()=>{
            this.setState(
                (state,props)=>({date: new Date()})
            )
        })
        console.log('我这个组件要死啦~')
    }
}
export default Welcome // 为什么要 export，为什么要加 default