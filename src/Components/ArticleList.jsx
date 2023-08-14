// Importing react framework.
import * as React from 'react';

// Importing MUI components.
import { Divider, List } from '@mui/material';

// Importing our custom components.
import Article from './Article';

// This is the component that will list all of our articles.
function ArticleList({ articles }) {
  return (
    <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
      {articles.map((article, i) => {
        return (
          <>
            <Article
              title={article.title}
              points={article.points}
              author={article.author}
              date={article.created_at}
              url={article.url}
            />
            <Divider />
          </>
        );
      })}
    </List>
  );
}

export default ArticleList;
