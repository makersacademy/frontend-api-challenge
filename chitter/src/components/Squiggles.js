import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import piccy from '../images/squiggle_default.jpeg'

class Squiggles extends React.Component {

  state = {
		squiggles: []
	};

	componentDidMount() {
		axios
			.get('https://chitter-backend-api.herokuapp.com/peeps')
			.then((res) => this.setState({ squiggles: res.data }));
	}


  render () {
    const squiggles = this.state.squiggles
    return (
      <Grid container spacing={4}>
        {squiggles.map((squiggle)=>(
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

                          <Typography variant="subtitle1" color="primary">
                            Liked by {squiggle.likes.map((like)=>(
                              <span key={like.user.id}>{like.user.handle} 🌰 </span>
                            ))}


                        </Typography>
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

        ))}
      </Grid>

    )

  }
}

export default Squiggles;
