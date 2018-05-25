import React, { Component } from 'react'
import { render } from 'react-dom'

import LazyImg from '../../src/index'

const ImageWrapper = ({ children }) => (
  <div style={{ width: '500px', height: '500px' }}>{children}</div>
)

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>React Lazy Image Demo</h1>
        <ImageWrapper>
          <LazyImg src="https://source.unsplash.com/random/500x500?nature" />
        </ImageWrapper>
        <ImageWrapper>
          <LazyImg src="https://source.unsplash.com/random/500x500?city" />
        </ImageWrapper>
        <ImageWrapper>
          <LazyImg src="https://source.unsplash.com/random/500x500?sky" />
        </ImageWrapper>
        <ImageWrapper>
          <LazyImg src="https://source.unsplash.com/random/500x500?beach" />
        </ImageWrapper>
        <ImageWrapper>
          <LazyImg src="https://source.unsplash.com/random/500x500?night" />
        </ImageWrapper>
        <ImageWrapper>
          <LazyImg src="https://source.unsplash.com/random/500x500?sunset" />
        </ImageWrapper>
        <ImageWrapper>
          <LazyImg src="https://source.unsplash.com/random/500x500?sunrise" />
        </ImageWrapper>
        <ImageWrapper>
          <LazyImg src="https://source.unsplash.com/random/500x500?stars" />
        </ImageWrapper>
        <ImageWrapper>
          <LazyImg src="https://source.unsplash.com/random/500x500?car" />
        </ImageWrapper>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
