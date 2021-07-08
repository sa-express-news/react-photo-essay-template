import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Image from 'grommet/components/Image';
import Animate from 'grommet/components/Animate';

import './Photos.scss';

//Use this if you need to load photos from the file system.
//But try not to - it eats up our S3 budget.

// const buildUrl = url => {
// 	if (url) {
// 		return require(`../../images/${url}`);
// 	}
// }

const Photos = props => {
	return (
		<div className="photos">
			{_.map(props.photos, (photo, idx) => (
				<div key={idx}>
					{props.isCurrPhoto(idx) && (
						<Animate enter={{'animation': 'fade', 'duration': 1500, 'delay': 0}}>
							<Image
							  src={photo.url}
							  fit="contain"
							  full={true}
							  className="full-page-photo show"
							/>
						</Animate>
					)}
					{!props.isCurrPhoto(idx) && (
						<Image
						  src={photo.url}
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
