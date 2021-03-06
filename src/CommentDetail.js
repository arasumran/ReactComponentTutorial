import React from 'react';
import faker from 'faker';
import Css from  './style/CommentDetail.css';





const CommentDetail =props=>{

    return (

        <div  className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>

            </a>
            <div  className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className="metadata">
                <span className="date">{props.dateData}</span>
            </div>
            <div className="text">
                {props.text}
            </div>
        </div>
    );

};
export default CommentDetail;

