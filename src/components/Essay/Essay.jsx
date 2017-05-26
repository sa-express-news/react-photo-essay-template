import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactVisibilitySensor from 'react-visibility-sensor';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Card from 'grommet/components/Card';

import './Essay.scss';

const addReadMore = () => {
  return (
    <Heading
      margin="none"
      tag="h4"
    >
      Read More
    </Heading>
  );
};

const Essay = props => {
  return (
    <div>
      {_.map(props.photos, (photo, idx) => (
        <Box
          full={true}
          direction="row"
          justify="center"
          align="center"
          className="text-box"
          key={idx}
        >
          <ReactVisibilitySensor onChange={props.textIsVisible.bind(this, idx + 1)} />
          <Card 
            label={photo.title}
            description={addReadMore()}
            justify="start"
            align="start"
            pad="medium"
            basis="1/3"
          />
          <Box basis="1/3" className="the-caption">
            <Heading tag="h3">{photo.caption}</Heading>
          </Box>
          <Box basis="1/3" />
        </Box>
      ))};
    </div>
  );
};

Essay.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

export default Essay;