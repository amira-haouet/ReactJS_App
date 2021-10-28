import React from 'react';
class DemoClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: "Bienvenu"
        }
    }
    handleClick() {
        this.setState(
            {
                text: 'Bienvenu a djerba'
            }
        )
    }
    render() {
        return (<h1> hello </h1>);

    }
}

export default DemoClass;