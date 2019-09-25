import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  // Catch error
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    const { children } = this.props
    const { hasError } = this.state
    if (hasError) {
      return (
        <div className="" style={{ margin: '50px' }}>
          <div>
            <h3>
              <i className="fa fa-warning" /> Oops! Something went wrong
            </h3>
            <p>Reload the page after some time</p>
          </div>
        </div>
      )
    } else {
      return children
    }
  }
}

export default ErrorBoundary
