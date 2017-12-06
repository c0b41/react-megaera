import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class ReactMegaera extends Component {
  static propTypes = {
    template: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      error: null,
      hasError:false
    }

  }

  componentWillUpdate(nextProps, nextState){
    if(this.props.onError){
      this.props.onError(nextState);
    }
  }

  componentWillMount(){

    window.onerror =  (message, filename, lineno, colno, err) => {
    
      let error = { 
        title:err.toString(),
        stack:message,
      }
      this.setState({error, hasError: true});    
    }

  }

  componentDidCatch(error, info) {
    this.setState({error, hasError: true});
  }


  render() {
    const { children, template, ...props } = this.props

    if(this.state.hasError){
      return template
    }

    return <div {...props}>{children}</div>
    
  }
 
}