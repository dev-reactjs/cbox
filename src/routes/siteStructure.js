import React, { Component } from 'react'
import HeaderContainer from '../component/header'
import FooterContainer from '../component/footer'

class SiteStructure extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <HeaderContainer {...this.props.children.props} />
        <div className="page_wrapper">{children}</div>
        <FooterContainer {...this.props.children.props} />
      </>
    )
  }
}

export default SiteStructure
