// Importing MUI components.
import {
  ListItem,
  ListItemText,
  Typography,
  Link
} from "@mui/material";

// This component represents an individual article from the API.
function Article({title, points, date, author, url}) {
  return(
    <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <Link sx={{textDecoration: 'none', color: '#5C5CB5'}} href={url} >{title}</Link>
          }
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {author}
              </Typography>
              ----- {date} -----
              <Typography style = {{color: 'purple', display: "inline"}} variant="body2">
                {points}
              </Typography>
            </>
          }
        />
      </ListItem>
  )
}

export default Article;