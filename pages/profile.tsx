import { createStyles, Card, Avatar, Text, Group, Button, Container, Grid, ScrollArea } from '@mantine/core';
import Codeet from '../components/codeet';

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
  job: string;
  stats: { label: string; value: string }[];
}

function UserCardImage({ image, avatar, name, job, stats }: UserCardImageProps) {
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
    <Card withBorder p="xl" radius="md" className={classes.card}>
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
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        color={theme.colorScheme === 'dark' ? undefined : 'dark'}
      >
        Edit Profile    
      </Button>
    </Card>
  );
}

export default function Profile(){
    return (
        <Grid align="top">
            <Grid.Col span={3} mr={20}>
                <UserCardImage image={'https://thumbs.dreamstime.com/b/modern-web-development-background-abstract-pieces-php-code-modern-web-development-background-abstract-pieces-php-code-138136042.jpg'} avatar={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} name={'@manudithur'} job={'Fullstack dev'} stats={[{label: 'Followers', value: '222'}, {label: 'Following', value: '523'}, {label: 'Codeets', value: '24'}]} ></UserCardImage>
            </Grid.Col>
            <Grid.Col span={8}>
                <ScrollArea style={{height: 800}} type={'never'}>
                  <Codeet postedAt={'10 minutes ago'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla nisl, porta eget enim quis, porttitor ultricies tortor. Morbi eleifend augue leo, et dictum justo viverra vel. Donec magna sapien, semper quis malesuada at, hendrerit vitae nibh. Nam facilisis id ante id faucibus. Sed pretium pharetra elit, quis faucibus arcu.'} author={{
                      name: '@manudithur',
                      image: ''
                  }}></Codeet>
                  <Codeet postedAt={'10 minutes ago'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla nisl, porta eget enim quis, porttitor ultricies tortor. Morbi eleifend augue leo, et dictum justo viverra vel. Donec magna sapien, semper quis malesuada at, hendrerit vitae nibh. Nam facilisis id ante id faucibus. Sed pretium pharetra elit, quis faucibus arcu.'} author={{
                      name: '@manudithur',
                      image: ''
                  }}></Codeet>
                  <Codeet postedAt={'10 minutes ago'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla nisl, porta eget enim quis, porttitor ultricies tortor. Morbi eleifend augue leo, et dictum justo viverra vel. Donec magna sapien, semper quis malesuada at, hendrerit vitae nibh. Nam facilisis id ante id faucibus. Sed pretium pharetra elit, quis faucibus arcu.'} author={{
                      name: '@manudithur',
                      image: ''
                  }}></Codeet>
                  <Codeet postedAt={'10 minutes ago'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla nisl, porta eget enim quis, porttitor ultricies tortor. Morbi eleifend augue leo, et dictum justo viverra vel. Donec magna sapien, semper quis malesuada at, hendrerit vitae nibh. Nam facilisis id ante id faucibus. Sed pretium pharetra elit, quis faucibus arcu.'} author={{
                      name: '@manudithur',
                      image: ''
                  }}></Codeet>
                  <Codeet postedAt={'10 minutes ago'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla nisl, porta eget enim quis, porttitor ultricies tortor. Morbi eleifend augue leo, et dictum justo viverra vel. Donec magna sapien, semper quis malesuada at, hendrerit vitae nibh. Nam facilisis id ante id faucibus. Sed pretium pharetra elit, quis faucibus arcu.'} author={{
                      name: '@@manudithur',
                      image: ''
                  }}></Codeet>
                </ScrollArea>
            </Grid.Col>
        </Grid>
    )
}