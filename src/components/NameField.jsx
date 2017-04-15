var React = require('react');

class NameField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valid: true,
            value: ""
        }
    }
    onChange(e){
       this.setState({value: e.target.value})
    }
    render() {
        return (
            <input type="text" className="form-control" placeholder={this.props.type} onChange={this.onChange.bind(this)} value={this.state.value}/>
        )
    }
};

module.exports = NameField;
