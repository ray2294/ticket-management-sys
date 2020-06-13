import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


const useStyles = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(1.5),
    },
  }));

export default function TablePaginationActions(props) {
    const classes = useStyles()

    const { count, page, rowsPerPage, onChangePage } = props

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0)
    }

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1)
    }

    const handleNextButtonClick = (event) => {
        onChangePage(event, page+1)
    }

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count/rowsPerPage) - 1 ))
    }

    return (
        <div className={classes.root}>
          <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
          >
            <FirstPageIcon />
          </IconButton>
          <IconButton onClick={handleBackButtonClick} disabled={page === 0}>
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          >
            <KeyboardArrowRight />
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          >
            <LastPageIcon />
          </IconButton>
        </div>
      );
}