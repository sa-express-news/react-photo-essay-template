import React, { Component } from 'react';
import { connect } from 'react-redux';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';

import NavBar from '../NavBar/NavBar';
import Photos from '../Photos/Photos';
import Splash from '../Splash/Splash';
import Essay from '../Essay/Essay';

import './App.scss';

import store from '../../store';
import actions from '../../actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmallScreen: true,
      currPhotoIdx: 0,
    };
    this.setIsMobile   = this.setIsMobile.bind(this);
    this.textIsVisible = this.textIsVisible.bind(this);
    this.isCurrPhoto   = this.isCurrPhoto.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.setIsMobile();
    window.addEventListener("resize", this.setIsMobile);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setIsMobile);
  }

  getData() {
    store.dispatch(actions.photo.getPhotos());
  }

  setIsMobile() {
    const isSmallScreen = window.innerWidth < 900;
    if (isSmallScreen !== this.state.isSmallScreen) {
      this.setState({ isSmallScreen });
    }
  }

  textIsVisible(currPhotoIdx, isVisible) {
    if (isVisible && currPhotoIdx !== this.state.currPhotoIdx) {
      this.setState({ currPhotoIdx });
    }
  }

  isCurrPhoto(idx) {
    return idx === this.state.currPhotoIdx;
  }

  render() {
    const { photos } = this.props;
    const { isSmallScreen } = this.state;

    return (
      <div className="App">
        <Article>
          <NavBar className="NavBar" isSmallScreen={isSmallScreen} />
          <Section
            pad="none"
            justify="center"
            align="center"
            colorIndex="grey-1"
            full="horizontal"
            className="Essay"
          >
            <Photos photos={photos} isCurrPhoto={this.isCurrPhoto} />
            <Splash photo={photos[0]} textIsVisible={this.textIsVisible} />
            <Essay photos={photos.slice(1)} textIsVisible={this.textIsVisible} />
          </Section>
        </Article>
      </div>
    );
  }
}

const mapStateToProps = photos => {
  return { photos }
};
export default connect(mapStateToProps)(App);
