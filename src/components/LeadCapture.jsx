var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

class LeadCapture extends React.Component{
    onSubmit(e){
        if(!this.refs.FieldEmail.state.valid){
            alert("u suck");
            console.log(this.refs.FieldEmail.state.valid);
        }else {
            alert("ok");
            console.log(this.refs.FieldEmail.state.valid);

        }
    }
    render(){
        return(
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <NameField type="First" ref="fieldName"/>
                        <EmailField ref="FieldEmail"/>
                        <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>submit</button>
                    </div>
                </div>
            </div>
        )
    }
};

module.exports = LeadCapture;