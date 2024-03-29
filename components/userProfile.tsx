import { Avatar, Button, Card, createStyles, Group, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  
    avatar: {
      border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    },
  }));
  
  interface UserCardImageProps {
    image: string;
    avatar: string;
    name: string;
    buttonLabel: string;
    job: string;
    stats: { label: string; value: string }[];
  }
  
export function UserCardImage({ image, avatar, name, job, stats, buttonLabel}: UserCardImageProps) {
const { classes, theme } = useStyles();

const items = stats.map((stat) => (
    <div key={stat.label}>
    <Text align="center" size="lg" weight={500}>
        {stat.value}
    </Text>
    <Text align="center" size="sm" color="dimmed">
        {stat.label}
    </Text>
    </div>
));

return (
    <Card withBorder p="xl" radius="md" style={{margin: '10px'}} className={classes.card}>
        <Card.Section sx={{ backgroundImage: `url(${image})`, height: 140 }} />
        <Avatar src={avatar} size={100} radius={80} mx="auto" mt={-30} className={classes.avatar} />
        <Text align="center" size="lg" weight={500} mt="sm">
            {name}
        </Text>
        <Text align="center" size="sm" color="dimmed">
            {job}
        </Text>
        <Group mt="md" position="center" spacing={30}>
            {items}
        </Group>
        <Button
            style={{ backgroundColor: buttonLabel === 'Following' ? 'white' : 'primary', color: buttonLabel === 'Following' ? 'black' : 'white' }}
            fullWidth
            variant={buttonLabel === 'Following' ? 'outline' : undefined }
            radius="md"
            mt="xl"
            size="md"
            color={theme.colorScheme === 'dark' ? undefined : 'dark'}
        >
            {buttonLabel}    
        </Button>
    </Card>
);
}