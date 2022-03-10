import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface SelectProps {
    options: Array<string>,
    helperText: string,
    label: string,
    callbackOnSelect: any
}

export const CustomSelect: React.FC<SelectProps> = (props) => {

    console.log("options", props.options)
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.label}
                    label={props.label}
                    onChange={props.callbackOnSelect}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {props.options && props.options.map((option:string, index) => (
                        <MenuItem value={index}>{option}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>{props.helperText}</FormHelperText>
            </FormControl>
        </div>
    );
}