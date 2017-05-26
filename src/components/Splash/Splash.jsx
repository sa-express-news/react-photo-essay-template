import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactVisibilitySensor from 'react-visibility-sensor';

import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Card from 'grommet/components/Card';

import './Splash.scss';

const addHeading = title => (<Headline margin="none">{title}</Headline>);

const Splash = props => {
  return (
    <Box
      full={true}
      direction="row"
      justify="center"
      align="center"
      className="text-box"
    >
      <ReactVisibilitySensor onChange={props.textIsVisible.bind(this, 0)} />
      <Card 
        label='Photos by Photog Name, Photog Name & Photog Name'
        heading={addHeading(props.photo.title)}
        description={props.photo.caption}
        justify="start"
        align="start"
        pad="medium"
        basis="3/4"
      />
      <Box basis="1/4" />
    </Box>
  )
};

Splash.propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
};

export default Splash;