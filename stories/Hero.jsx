import React from 'react';

import PropTypes from 'prop-types';

export const Hero = ({ size, headline, ...props }) => {
    return (
        <section className={[`hero-${size}`]}>
            <div class="uk-container">
                <div className={[`hero-${size}__quad`]}>
                    <h1 className={[`hero-${size}__title`]}>{headline}</h1>
                </div>
            </div>
        </section>
    )
};

Hero.PropTypes = {
    headline: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg' ]),
};


Hero.defaultProps = {
    headline: "Lorem Ipsum",
    size: 'md',
  };