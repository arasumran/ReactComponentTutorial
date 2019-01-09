import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Clara" dateData="2:00PM" text="this is text"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" dateData="1:00AM" text="this is second text"/>
            </ApprovalCard>

        </div>
    );

};
ReactDOM.render(<App/>, document.querySelector('#root'));
