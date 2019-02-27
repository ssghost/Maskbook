import * as React from 'react'
import Paper from '@material-ui/core/Paper/Paper'
import Typography from '@material-ui/core/Typography/Typography'
import { withStylesTyped } from '../../utils/theme'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import Button from '@material-ui/core/Button/Button'

interface Props {}
export default withStylesTyped((theme: Theme) =>
    createStyles({
        paper: {
            padding: '2rem 1rem 1rem 1rem',
            textAlign: 'center',
            maxWidth: '35rem',
            '& > *': {
                marginBottom: theme.spacing.unit * 3,
            },
        },
        button: {
            minWidth: 180,
        },
    }),
)<{}>(function Welcome({ classes }) {
    return (
        <Paper className={classes.paper}>
            <Typography variant="h5">Keep your backupds carefully</Typography>
            <img src={require('./1a3.jpg')} width="auto" height={160} />
            <Typography variant="caption">maskbook-keystore-backup-20190227.json</Typography>
            <Typography variant="subtitle1">
                The first backup has been put in your Downloads folder.
                <br />
                And export backups frequently!
            </Typography>
            <Button variant="raised" color="primary" className={classes.button}>
                Got it!
            </Button>
        </Paper>
    )
})