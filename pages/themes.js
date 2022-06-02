import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function SwitchLabels() {
    return (
        <container>
            <row>
                <col>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Light Mode" />
                    </FormGroup>
                </col>
            </row>

            <row>
                <col>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode" />
                    </FormGroup>
                </col>
            </row >

            <row>
                <col>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Colorful Mode" />
                    </FormGroup>
                </col>
            </row>

        </container >
    );
};
