import React, { Component } from 'react'

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target)
        loadImage(entry.target)
      }
    })
  },
  {
    rootMargin: '0px 0px 100% 0px',
    threshold: 0.1,
  }
)

const fetchImage = url => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = url
    image.onload = resolve
    image.onerror = reject
  })
}

const loadImage = image => {
  const src = image.dataset.src

  fetchImage(src).then(() => {
    image.src = src
  })
}

export default class LazyImg extends React.Component {
  static defaultProps = {
    placeholder:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=',
  }

  componentDidMount() {
    observer.observe(this.img)
  }

  render() {
    const { src, placeholder, ...attributes } = this.props
    return (
      <img
        data-src={src}
        src={placeholder}
        ref={img => (this.img = img)}
        {...attributes}
      />
    )
  }
}
