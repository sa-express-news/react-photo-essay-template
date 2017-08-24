import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactVisibilitySensor from 'react-visibility-sensor';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Card from 'grommet/components/Card';

import './Essay.scss';

const addHeading = (text, tag, className, onClickHandle) => {
  return (
    <Heading
      margin="none"
      tag={tag}
      className={className}
      onClick={onClickHandle}
    >
      {text}
    </Heading>
  );
};

const setViewState = (isCaptionOpen, openCaption, isCurrPhoto, photo) => {
  return {
    wrapClass: isCaptionOpen ? 'text-background-opaque chapter' : 'text-background chapter',
    descriptionText: isCaptionOpen && isCurrPhoto ? photo.caption : 'View Caption',
    descriptionClass: isCaptionOpen && isCurrPhoto ? 'caption' : 'read-more',
    descriptionHandle: isCaptionOpen ? null : openCaption,
  };
};

const Essay = props => {
  return (
    <div className={props.getEssayClass()}>
      {_.map(props.photos, (photo, idx) => {
        const view = setViewState(props.isCaptionOpen, props.openCaption, props.isCurrPhoto(idx + 1), photo);
        return (
          <Box 
            full={true} 
            className={view.wrapClass}
            margin="none"
            pad="none"
            key={idx}
          >
            <Box basis="full" />
            <Box
              direction="row"
              justify="end"
              align="end"
              className="text-box"
              key={idx}
              basis="full"
            >
              <Card 
                heading={addHeading(photo.title, 'h2', 'title', null)}
                description={addHeading(view.descriptionText, 'h4', view.descriptionClass, view.descriptionHandle)}
                justify="start"
                align="end"
                pad={{ horizontal: 'medium', vertical: 'none' }}
                basis="1/3"
              >
                <ReactVisibilitySensor onChange={props.textIsVisible.bind(this, idx + 1)} />
              </Card>
            </Box>
          </Box>
        );
      })};
    </div>
  );
};

Essay.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    caption: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  isCurrPhoto: PropTypes.func.isRequired,
};

export default Essay;