import React from "react";

function Themes() {
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

export default Themes;