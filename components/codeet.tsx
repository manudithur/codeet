import { createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper, Title } from '@mantine/core';
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.min.css';



const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
  },

  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    '& > p:last-child': {
      marginBottom: 0,
    },
  },
}));

interface CommentHtmlProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
}

export default function codeet({ postedAt, body, author }: CommentHtmlProps) {

  function highlightCode(code: string) {
      return `<pre class="language-javascript line-numbers"><code>${Prism.highlight(code, Prism.languages.javascript, 'line-numbers')}</code></pre>`;
  }


  const { classes } = useStyles();  

  const code = 
    `console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");`;
  const highlightedCode = highlightCode(code);

  return (
    <Paper withBorder radius="md" className={classes.comment} mb={15}>
      <Group>
        <Avatar src={author.image} alt={author.name} radius="xl" />
        <div>
          <Text size="sm">{author.name}</Text>
          <Text size="xs" color="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: body }} />
        <br/>
        <div dangerouslySetInnerHTML={{__html: highlightedCode}}/>
      </TypographyStylesProvider>
    </Paper>
  );
}