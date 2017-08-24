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

let fadeTimeout = null;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmallScreen: true,
      currPhotoIdx: 0,
      isCaptionOpen: false,
      isEssayVisible: true,
    };
    this.setIsMobile          = this.setIsMobile.bind(this);
    this.textIsVisible        = this.textIsVisible.bind(this);
    this.isCurrPhoto          = this.isCurrPhoto.bind(this);
    this.setGlobalClickHandle = this.setGlobalClickHandle.bind(this);
    this.openCaption          = this.openCaption.bind(this);
    this.closeCaption         = this.closeCaption.bind(this);
    this.onMove               = this.onMove.bind(this);
    this.setFadeTimeout       = this.setFadeTimeout.bind(this);
    this.hideEssay            = this.hideEssay.bind(this);
    this.showEssay            = this.showEssay.bind(this);
    this.getEssayClass        = this.getEssayClass.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.setIsMobile();
    window.addEventListener("resize", this.setIsMobile);
    window.addEventListener("mousemove", this.onMove);
    window.addEventListener("scroll", this.onMove);
    window.addEventListener("touchmove", this.onMove);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setIsMobile);
  }

  getData() {
    store.dispatch(actions.photo.getPhotos());
    store.dispatch(actions.credit.getCredits());
  }

  setIsMobile() {
    const isSmallScreen = window.innerWidth < 900;
    if (isSmallScreen !== this.state.isSmallScreen) {
      this.setState({ isSmallScreen });
    }
  }

  textIsVisible(currPhotoIdx, isVisible) {
    if (isVisible && currPhotoIdx !== this.state.currPhotoIdx) {
      this.closeCaption();
      this.setState({ currPhotoIdx });
    }
  }

  isCurrPhoto(idx) {
    return idx === this.state.currPhotoIdx;
  }

  setGlobalClickHandle() {
    const { isCaptionOpen } = this.state;
    return isCaptionOpen ? this.closeCaption : null;
  }

  closeCaption() {
    this.setState({ isCaptionOpen: false });
  }

  openCaption() {
    this.setState({ isCaptionOpen: true });
  }

  onMove() {
    this.handleClearTimeout();
    this.setFadeTimeout();
    if (!this.state.isEssayVisible) {
      this.showEssay()
    }
  }

  handleClearTimeout() {
    window.clearTimeout(fadeTimeout);
  }

  setFadeTimeout() {
    fadeTimeout = window.setTimeout(this.hideEssay, 1500);
  }

  showEssay() {
    this.setState({ isEssayVisible: true });
  }

  hideEssay() {
    this.setState({ isEssayVisible: false });
  }

  getEssayClass() {
    const { isEssayVisible, isCaptionOpen } = this.state;
    return isEssayVisible || isCaptionOpen ? 'essay' : 'essay essay-is-hidden';
  }

  render() {
    const { photos, credits } = this.props;
    const { isSmallScreen, isCaptionOpen } = this.state;

    return (
      <div className="App">
        <Article
          onClick={this.setGlobalClickHandle()}
        >
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
            <Splash 
              credits={credits}
              photo={photos[0]}
              textIsVisible={this.textIsVisible}
            />
            <Essay 
              photos={photos.slice(1)}
              textIsVisible={this.textIsVisible}
              isCaptionOpen={isCaptionOpen}
              openCaption={this.openCaption}
              getEssayClass={this.getEssayClass}
              isCurrPhoto={this.isCurrPhoto}
            />
          </Section>
          <Section colorIndex="grey-1" full="horizontal" />
        </Article>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { 
    photos: store.photos,
    credits: store.credits,
  }
};
export default connect(mapStateToProps)(App);