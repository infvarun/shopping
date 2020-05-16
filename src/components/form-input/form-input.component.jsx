import React from "react";

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" type="text" onChange={handleChange} {...otherProps} />

        {
            // conditionally display label for input if any
            label ? ( 
                <label 
                    className={ `${ otherProps.value.length ? 'shrink' : '' } form-input-label` }>
                        { label }
                </label>
                 ) : null
        }
    </div>
);

export default FormInput;