import React from 'react';
import './styles.css';
import { TextAreaComponent, TextAreaComponentOutput } from '../../components/TextArea/index';

type PromptComponentInput = {

}

export class PromptComponent extends React.Component<PromptComponentInput> {

    constructor(props: PromptComponentInput) {
        super(props);
        this.state = {
            prompt: null,
        }
    }

    handleChange(event: TextAreaComponentOutput) {
        this.setState({
            ...this.state,
            [event.name]: event.value,
        })
    }

    render() {
        return (
            <TextAreaComponent name="prompt" id="prompt" onChange={this.handleChange} />
        )
    }
}