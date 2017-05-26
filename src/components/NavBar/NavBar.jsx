import React from 'react';

import './NavBar.scss';

import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import SocialShare from 'grommet/components/SocialShare';
import SocialReddit from 'grommet/components/icons/base/SocialReddit';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Share from 'grommet/components/icons/base/Share';


import ENLogo from './ENLogo';

const buildSocialButton = (href, icon) => {
  const target = '_blank';
  return (
    <Anchor href={href} icon={icon} target={target} />
  );
};

const storyLink = 'http://www.expressnews.com/transgender-life-in-transition/';

const buildAllSocialButtons = () => (
  <div>
    {buildSocialButton(
      'http://www.expressnews.com/',
      (<ENLogo className="en-logo" />)
    )}
    <SocialShare type='twitter' link={storyLink} />
    <SocialShare type='facebook' link={storyLink} />
    {buildSocialButton(
      `//www.reddit.com/submit?url=${storyLink}`,
      (<SocialReddit />)
    )}
  </div>
);

const buildDesktopSocial = () => (
  <Box
    flex={true}
    justify="end"
    align="start"
    direction="row"
    pad={{
      horizontal: 'small'
    }}
    basis="1/2"
  >
    {buildAllSocialButtons()}
  </Box>
);

const buildMobileSocial = () => (
  <Box
    flex={true}
    responsive={false}
    justify="end"
    align="start"
    direction="row"
    basis="1/4"
    pad={{
      horizontal: 'small'
    }}
    className="share-btn-wrap"
  >
    <Menu 
      icon={<Share className="share-btn" />}
      dropAlign={{"right": "right", "top": "top"}}
      colorIndex="grey-1"
      size="small"
    >
      {buildAllSocialButtons()}
    </Menu>
  </Box>
);

export default props => {
  return (
    <Header 
      fixed={false}
      float={false}
      splash={false}
      size="small"
      colorIndex="transparent"
      className="NavBar"
    >
      <Box 
        flex={true}
        responsive={false}
        fill="horizontal"
        justify="start"
        direction="row"
      >
        { props.isSmallScreen && buildMobileSocial() }
        { !props.isSmallScreen && buildDesktopSocial() }
      </Box>
    </Header>
  );
};