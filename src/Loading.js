import React from 'react';
import './style/Loading.css'


const Loading = props=>{
    return(
            <div className="ui active dimmer">
                <div className="ui massive text loader">{props.loading_data}</div>
            </div>
    );
};
export default Loading
