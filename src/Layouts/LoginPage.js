import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Login } from '../Scenes';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		width: '100%'
	},
	item: {
		margin: 'auto',
		minHeight: '48vh',
	},
	info: {
		marginTop: 20,
		color: '#3f51b5',
	},
	container: {
		height: '100vh',
		width: '100%'
	},
	paper: {
	  padding: theme.spacing(2),
	  textAlign: 'center',
	  height: '48vh',
	  color: theme.palette.text.secondary,
	},
}));

const LoginPage = () => {
	const classes = useStyles();
	return(
		<div className={classes.root}>
			<Grid container spacing={3} className={classes.container}>
        		<Grid item xs={4} className={classes.item}>
        			<Paper className={classes.paper}>
						<h1>Splash App</h1>
						<Login />
						<div className={classes.info}>
							<h6>userName - 'Gaurav' | password - '12345'</h6>
							<h6>userName - 'Guest' | password - '12345'</h6>
						</div>
					</Paper>
        		</Grid>
			</Grid>
		</div>
	);
   
}


export default LoginPage;
