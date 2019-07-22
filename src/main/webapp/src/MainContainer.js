import React, {Component} from 'react';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owned: "",
        }
    }


    /*
    // update start to the value returned by the Select component
    handleUpdateStart = (newStart) => {
        this.setState({start: newStart})
    };

    // Update end to the value returned by the Select component
    handleUpdateEnd = (newEnd) => {
        this.setState({end: newEnd})
    };
     */

    // if clear is clicked, resets edges so it can be cleared
    handleClear = () => {
        this.setState({start: "", end: ""});
    };

    render() {
        return (
            <div className="center-text">
                <h1> Sample Text </h1>
            </div>
        );
    }
}

export default MainContainer;