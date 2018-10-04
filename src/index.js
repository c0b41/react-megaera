import React, { PureComponent } from 'react'

export default class ReactMegaera extends PureComponent {
  
  static state = {
    error: null,
    hasError: false
  }

  componentWillUpdate(nextProps, nextState){
    if(this.props.onError){
      this.props.onError(nextState);
    }
  }

  componentDidCatch(error, info) {
    this.setState({error, hasError: true});
  }

  render() {
    const { children, template, onError, ...props } = this.props

    if(this.state.hasError){
      return template
    }

    return React.cloneElement(children, { ...props })
    
  } 
}
