import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactVisibilitySensor from 'react-visibility-sensor';

import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Card from 'grommet/components/Card';

import './Splash.scss';

const space = String.fromCharCode(160);

const addHeading = title => (<Headline margin="none">{title}</Headline>);

const buildLabel = () => `Photos by John${space}Davenport, Ray${space}Whitehouse, Kin${space}Man${space}Hui, Billy${space}Calzada & Bob${space}Owen`;

const Splash = props => {
  return (
    <Section>
      <Box
        full={true}
        direction="row"
        justify="center"
        align="center"
        className="text-box"
      >
        <ReactVisibilitySensor onChange={props.textIsVisible.bind(this, 0)} />
        <Card 
          label={buildLabel()}
          heading={addHeading(props.photo.title)}
          description={props.photo.caption}
          justify="end"
          align="start"
          pad="medium"
          basis="1/2"
          className='card'
        />
        <Box basis="1/2"></Box>
      </Box>
    </Section>
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