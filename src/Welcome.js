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
            //     {
            //     date:new Date()
            // })
            (state,props)=>({date: new Date()}))
        })
        console.log('构造函数初始化')
    }
    componentWillMount(){
        console.log('马上就要render拉')
    }
    componentDidMount(){
        console.log('已经挂载到页面了')
    }
    render() {
        console.log('这里是render')
        return (
            <div>
              <h1>Hello, {this.props.fuck}</h1>
              <h2>{this.state.date.toString()}</h2>
            </div>
        )
    }
}
export default Welcome // 为什么要 export，为什么要加 default