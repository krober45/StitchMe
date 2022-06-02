import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
    return (
        <container>
            <div>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Light Mode" />
                </FormGroup>
            </div>

            <div>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode" />
                </FormGroup>
            </div>

            <div>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Colorful Mode" />
                </FormGroup>
            </div>

        </container>
    );
};
