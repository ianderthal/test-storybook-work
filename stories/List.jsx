import React from 'react';

import PropTypes from 'prop-types';

export const List = ({ size }) => {
    return (
        <ul className={[`storybook-list--${size}`]}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
    )
}

List.PropTypes = {
    /** How large should the list be? */
    size: PropTypes.oneOf(['small', 'large']),
};

