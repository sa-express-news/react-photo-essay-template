import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Image from 'grommet/components/Image';
import Animate from 'grommet/components/Animate';

import './Photos.scss';

const buildUrl = url => {
	if (url) {
		return require(`../../images/${url}`);
	}
}

const Photos = props => {
	return (
		<div>
			{_.map(props.photos, (photo, idx) => (
				<div key={idx}>
					{props.isCurrPhoto(idx) && (
						<Animate enter={{'animation': 'fade', 'duration': 1500, 'delay': 0}}>
							<Image
							  src={buildUrl(photo.url)}
							  fit="contain"
							  full={true}
							  className="full-page-photo"
							/>
						</Animate>
					)}
					{!props.isCurrPhoto(idx) && (
						<Image
						  src={buildUrl(photo.url)}
						  fit="contain"
						  full={true}
						  className="full-page-photo hide"
						/>
					)}
				</div>
			))}
		</div>
	);
};

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  isCurrPhoto: PropTypes.func.isRequired,
};

export default Photos;
