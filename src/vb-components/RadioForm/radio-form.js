import React from 'react';
import { withFormik, Form } from 'formik';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelper from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';


class MyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        };
    }

    handleChange = (event, child) => {
        const responseArr = event.target.name.split("-");

        let updated = this.state.data.map((questItem) => {
            if (questItem.question === responseArr[0]) {
                questItem.responseType.forEach((respItem) => {
                    if (respItem.label === responseArr[1]) {
                        respItem.selected = event.target.value;
                    }
                });
            }

            return questItem;
        });

        this.setState({data: updated});
    }

    render() {
        // deconstructed
        const { 
            values,
            touched,
            dirty,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue,
            setFieldTouched,
            isSubmitting
        } = this.props;

        let questionsUI = this.state.data.map((item) => {
            return (<Question 
                key={item.question}
                question={item.question} 
                responseType={item.responseType}
                onChangeEvent={this.handleChange}
            />);
        });

        return (
            <Form>
                {questionsUI}
                <Button variant="extendedFab" type="submit" disabled={isSubmitting}>Submit</Button>
            </Form>
        );
    }
}

function Question(props) {
    let lineNum;

    let responsesUI = props.responseType.map((item, idx) => {
        let itemKey = `${props.question}-${item.label}`;

        return (
            <div key={itemKey}>
                {item.label}
                <br/>
                <RateInput 
                    question={props.question}
                    selectKey={itemKey}
                    onChangeEvent={props.onChangeEvent}
                    {...item}
                />
            </div>
        );
    });

    return (
        <div>
            {props.question}
            {responsesUI}
        </div>
    )
} // end of Component

function RateInput(props) {
    let inputUI = [];

    // creating radio buttons
    for (let startIdx = props.start, endIdx = props.end;startIdx <= endIdx; startIdx++) {
        inputUI.push((
            <FormControlLabel key={props.selectKey + "-" + startIdx} value={startIdx.toString()} control={<Radio/>} label={startIdx} />
        ));
    } // end of for

    let selectedVal;
    
    if (props.selected !== null) {
        selectedVal = props.selected.toString();
    }
    
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Rate</FormLabel>
            <h6>{props["start-desc"]}</h6>
            <RadioGroup
                aria-label="rate-question"
                name={props.question}
                value={selectedVal}
                onChange={props.onChangeEvent}>
                    {inputUI}
            </RadioGroup>
            <h6>{props["end-desc"]}</h6>
        </FormControl>
    );
}

export const RadioForm = withFormik({
    handleSubmit: (values, {props, setSubmitting, setErrors}) => {
        setSubmitting(false);
        console.log(values);
    },
    displayName: "Radio Form"
})(MyForm);