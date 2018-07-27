import React from 'react';
import { withFormik, Form } from 'formik';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
                    if (respItem.label === responseArr[1] && respItem["line-order"].toString() === responseArr[2]) {
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
        let itemKey = `${props.question}-${item.label}-${item["line-order"]}`;
        let responseBreak;

        if (idx === 0) {
            lineNum = item["line-order"];
        } else {
            if (lineNum !== item["line-order"]) {
                lineNum = item["line-order"];
                responseBreak = <br/>;
            }
        }

        return (
            <div key={itemKey}>
                {responseBreak}
                {item.label}
                <br/>
                <SingleSelect 
                    question={props.question}
                    label={item.label}
                    responses={item.responses}
                    selected={item.selected}
                    selectKey={itemKey}
                    onChangeEvent={props.onChangeEvent}
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

function SingleSelect(props) {
    let firstItem;

    let selectItems = props.responses.map((item, idx) => {
        let menuKey = `${item.selectKey}-${idx}`;

        if (idx === 0) {
            firstItem = item;
        }

        return <MenuItem key={menuKey} value={item}>{item}</MenuItem>;
    });

    let selectedVal = ((props.selected !== null) ? props.selected : firstItem);

    return (<Select
                inputProps={{
                    name: props.selectKey,
                    id: props.id,
                    autoWidth: true,
                    value: selectedVal,
                    onChange: props.onChangeEvent
                }}
            >
            {selectItems}
        </Select>
    );
} // end of Component

export const QuestionForm = withFormik({
    handleSubmit: (values, {props, setSubmitting, setErrors}) => {
        setSubmitting(false);
        console.log(values);
    },
    displayName: "Questionable Form"
})(MyForm);