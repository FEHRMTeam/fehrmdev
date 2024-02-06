import React, { Component, useRef } from 'react';
class SurveyForm extends Component {
    componentDidMount(){
        const script = document.createElement('script');
        script.src = this.props.scriptSrc;
        script.async = true;
        this.instance.appendChild(script)
    }

    render(){
        return(
            <div ref={el => (this.instance = el)} id={this.props.formId}></div>
        )
    }
}

export default SurveyForm;