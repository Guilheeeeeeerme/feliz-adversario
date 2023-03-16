import React, { useState } from "react";
import './styles.css';

export type TextAreaComponentOutput = { 
    name: string, value: string
}

export type TextAreaComponentInput = {
    name: string,
    id: string,
    cols?: number,
    rows?: number,
    onChange?: (param: TextAreaComponentOutput) => any
}

export function TextAreaComponent(props: TextAreaComponentInput) {
    const { name, id, cols, rows, onChange } = props;

    const [value, setValue] = useState('');

    let displayName = name;
    let displayId = id;
    let displayCols = cols ?? 30;
    let displayRows = rows ?? 10;

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
        onChange && onChange({
            name: displayName,
            value: value
        })
    }

    return (
        <textarea
            value={value}
            onChange={handleInputChange}
            name={displayName}
            id={displayId}
            cols={displayCols}
            rows={displayRows}>
        </textarea>
    )
}