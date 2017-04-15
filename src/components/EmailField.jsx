var React = require('react');
var validator = require('email-validator');
class EmailField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valid: true,
            value: ""
        }
    }
    onChange(e) {
        if(!validator.validate(e.target.value)){
            this.setState({valid: false,value: e.target.value});
        }
        else{
            this.setState({valid: true,value: e.target.value})
        }
    }
    render() {
        var formClass = this.state.valid ? "form-group" : "form-group has-error";
        return (
            <div className={formClass}>
                <input type="text" className="form-control email" onChange={this.onChange.bind(this)} placeholder="email" value={this.state.value}/>
            </div>
        );
    }
};

module.exports = EmailField;