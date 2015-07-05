/**
 * Created by 衍晴 on 2015/7/5.
 */
'use strict';
import React from "react";

import Main from "./Main.js";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
        };
    }

    sendEmail(data){
        console.log(data);
        $.ajax({
            type: "Get",
            url: "/subscribe/"+data,
            success: function(data){
                alert(data);
            }
        });
    }

    render(){
        return (
            <div className="panel">
            <Main sendEmail={this.sendEmail.bind(this)}/>
            </div>
        )
    }
}
React.render(<App/>, document.getElementById("app"));