// The componentWillMount() method is called before the render() method when a component is being mounted to the DOM

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('Component being mounted');
    }

    render() {
        return <div />
    }
};