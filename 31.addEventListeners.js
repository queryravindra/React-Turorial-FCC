// The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality

// You use componentDidMount when you want to set something up, in your case, an event listener
// You use componentWillUnmount when you need to clear that something, your event listener.

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             message: ""
        };

        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleEnter() {
        this.setState({
            message: this.state.message + "You pressed the enter key! "
        });
    }

    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}