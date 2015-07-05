/**
 * Created by 衍晴 on 2015/7/5.
 */

'use strict';
import React from "react";

class Main extends React.Component {

    // 绑定键盘回车事件
    handlerKeyUp(event){
        if(event.keyCode === 13){
            let value = event.target.value;

            if(!value) return false;

            let data = value;

            event.target.value = "";

            this.props.sendEmail(data);
        }
    }
    handleBtnClick(event){
        let value =  event.target.parentNode.firstChild.value;
        if(!value) return false;

        event.target.parentNode.firstChild.value = "";

        this.props.sendEmail(value);
    }


    render(){
        return (
            <div className="panel_footer">
                <input onKeyUp={this.handlerKeyUp.bind(this)} type="text" className="spirit_text" placeholder="Input you email here"/>
                <br/>
                <input onClick={this.handleBtnClick.bind(this)} type="button" className="spirit_btn"  value="Subscribe Now" />
            </div>
        )
    }
}

export default Main;