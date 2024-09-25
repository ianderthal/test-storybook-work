import React from 'react';

import PropTypes from 'prop-types';

export const Hero = ({ size, headline, label, ...props }) => {
    return (
        <section className={[`hero-${size}`]}>
            <div class="uk-container">
                <div className={[`hero-${size}__quad`]}>
                    <h1 className={[`hero-${size}__title`]}>{label} {headline}</h1>
                </div>
            </div>
        </section>
    )
};

Hero.PropTypes = {
    label: PropTypes.string,
    headline: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg' ]),
};


Hero.defaultProps = {
    headline: "Lorem Ipsum",
    label: "Areas to Support",
    size: 'md',
  };