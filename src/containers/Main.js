import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import Calendar from './Calendar'
import Login from './Login'
import { logOut } from '../modules/index'

class Main extends Component {
  state = {
    logined: false
  }

  componentDidMount() {
      this.setState({ logined: this.props.logged })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.logged != this.props.logged)
      this.setState({ logined: this.props.logged })
    }

  logout = () => this.props.dispatch(logOut())

  render() {
    return (
      <section className="container">
        {
          this.state.logined
          ? <Calendar logout={this.logout}/>
          : <Login />
        }
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    logged: state.main.logged,
  }
}

export default connect(mapStateToProps)(Main)
