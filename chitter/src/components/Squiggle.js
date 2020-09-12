import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import piccy from '../images/squiggle_default.jpeg'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Like from './Like'
import Delete from './Delete'

class Squiggle extends React.Component {

  state = {
    isMine: false,
    user_id: sessionStorage.getItem('user_id'),
  }

  componentDidMount() {
    if(this.props.squiggle.user.id.toString(10)=== this.state.user_id) {
      this.setState({isMine:true})
    }
  }

  toggleLike = (likeStatus) => {
    this.props.toggleLike(likeStatus)
  }

  prettify = (timestamp) => {
    const date = timestamp.slice(0,10)
    const time = timestamp.slice(11,19)
    const datetime = date + " @ " + time
    return datetime
  }

  deleteSquiggle = () => {
    this.props.deleteSquiggle(this.props.squiggle.id)
  }

  render () {

    const squiggle = this.props.squiggle

    return (

      <Grid item key={squiggle.id} xs={12}>
        <CardActionArea component="a" href="#">
          <Card >

            <Grid container spacing={0}>

              <Grid item xs={8}>

                <div >
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      🌰{squiggle.user.handle}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {this.prettify(squiggle.created_at)}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {squiggle.body}
                    </Typography>

                    <Like squiggle={squiggle} toggleLike={this.toggleLike}/>
                    <Delete isMine={this.state.isMine} deleteSquiggle={this.deleteSquiggle}/>

                  </CardContent>
                </div>
              </Grid>

              <Grid item xs={4}>

                <CardMedia
                  image={piccy}
                  style = {{height:"100%"}}
                  title="Image title"
                />

              </Grid>

            </Grid>
          </Card>


        </CardActionArea>
      </Grid>
    )
  }
}

Squiggle.propTypes = {
  toggleLike: PropTypes.func.isRequired,
  deleteSquiggle: PropTypes.func.isRequired,
}

export default Squiggle ;
