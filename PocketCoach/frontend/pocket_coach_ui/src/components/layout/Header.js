import React from 'react'
import {AppBar, Toolbar, Typography, IconButton, Link,InputBase,Tooltip} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MessageIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import StudentStore from "../../stores/students/StudentStore";

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  navBar: {
    background: theme.palette.navBlack,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.4),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 400,
      '&:focus': {
        width: 400,
      },
    },
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes, match} = this.props;
    const studentId = parseInt(match.params.studentId);
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navBar}>
          <Toolbar color="secondary">
            <Typography className={classes.title} variant="h4" color="primary" style={{flex: 1}}>
              <Link href="/" underline="none">
                PocketCoach
              </Link>
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <Tooltip title="Messages" aria-label="Messages">
              <IconButton color="inherit">
                <MessageIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications" aria-label="Notifications">
              <IconButton color="inherit">
                <NotificationsIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Profile Settings" aria-label="Profile Settings">
              <IconButton color="inherit">
                {StudentStore.getAvatarById(studentId)}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
};

export default withStyles(styles)(Header);