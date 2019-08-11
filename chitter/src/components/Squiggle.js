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

class Squiggle extends React.Component {

  toggleLike = (likeStatus) => {
    this.props.toggleLike(likeStatus)
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
                      {squiggle.user.handle}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {squiggle.created_at}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {squiggle.body}
                    </Typography>

                    <Like squiggle={squiggle} toggleLike={this.toggleLike}/>

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
  toggleLike: PropTypes.func.isRequired
}

export default Squiggle ;
