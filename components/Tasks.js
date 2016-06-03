import React, { Component, PropTypes } from 'react'
import { fetchQuote, fetchSecretQuote } from '../actions'

export default class Tasks extends Component {

  onQuoteClick = () => {
     this.props.dispatch(fetchQuote());
  }

  onSecretQuoteClick = () => {
     this.props.dispatch(fetchSecretQuote());
  }

  render() {
  	const { onSecretQuoteClick, isAuthenticated, quote, isSecretQuote } = this.props

  	return (
  	  <div>
  		<div className='col-sm-3'>
  		  <button onClick={this.onQuoteClick} className="btn btn-primary">
  			Get Tasks
  		  </button>
  		</div>

  		{ isAuthenticated &&
  		  <div className='col-sm-3'>
  			<button onClick={this.onSecretQuoteClick} className="btn btn-warning">
  			  Get Secret Quote
  			</button>
  		  </div>
  		}

  		<div className='col-sm-6'>
  		  { quote && !isSecretQuote &&
  			<div>
  			  <blockquote>{quote}</blockquote>
  			</div>
  		  }

  		  { quote && isAuthenticated && isSecretQuote &&
  			<div>
  			  <span className="label label-danger">Secret Quote</span>
  			  <hr/>
  			  <blockquote>
  				{quote}
  			  </blockquote>
  			</div>
  		  }
  		</div>
  	  </div>
  	)
  }

}

Tasks.propTypes = {
  onQuoteClick: PropTypes.func,
  onSecretQuoteClick: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  quote: PropTypes.string,
  isSecretQuote: PropTypes.bool
 }
