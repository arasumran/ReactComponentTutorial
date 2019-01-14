import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';


// Class based Example keeps state so this dynamic method to manage data
class App extends React.Component {
    constructor(props) {
        super(props);
    };
    state = {lat: null, errorMessage: ''};

    componentDidMount()
    {


        window.navigator.geolocation
            .getCurrentPosition(
                position => {
                    this.setState({lat: position.coords.latitude});

                },
                err => {
                    this.setState({errorMessage: err.message});
                },
            )

        console.log("ben constructorun icindema");

    };
    render() {


        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;


        }
        if (!this.state.errorMessage && this.state.lat) {
            //with component rendering
            return <SeasonDisplay lat = {this.state.lat}/>
            // without component
           // return <div> Latitude : {this.state.lat}</div>;
        }
        return <Loading loading_data = "Loading..."/>    }
}

console.log("wbeter")
/* This is func based exampe
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


*/
ReactDOM.render(<App/>, document.querySelector('#root'));
