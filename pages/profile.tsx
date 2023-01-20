import { Grid, ScrollArea } from '@mantine/core';
import Codeet from '../components/codeet';
import { UserCardImage } from '../components/userProfile';

export default function Profile(){
    return (
        <Grid align="top" mt={40}>
            <Grid.Col span={3} mr={20} mt={-10}>
                <UserCardImage image={'https://thumbs.dreamstime.com/b/modern-web-development-background-abstract-pieces-php-code-modern-web-development-background-abstract-pieces-php-code-138136042.jpg'} avatar={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} buttonLabel={'Edit Profile'} name={'@manudithur'} job={'Fullstack dev'} stats={[{label: 'Followers', value: '222'}, {label: 'Following', value: '523'}, {label: 'Codeets', value: '24'}]} ></UserCardImage>
            </Grid.Col>
            <Grid.Col span={8}>
                <ScrollArea style={{height: '90vh'}} type={'never'}>
                  <Codeet postedAt={'10 minutes ago'} body={'Wassup. Look at the great code I have done!!!'} author={{
                      name: '@manudithur',
                      image: ''
                  }}></Codeet>
                  <Codeet postedAt={'10 minutes ago'} body={'Wassup. Look at the great code I have done!!!'} author={{
                      name: '@manudithur',
                      image: ''
                  }}></Codeet>
                  <Codeet postedAt={'10 minutes ago'} body={'Wassup. Look at the great code I have done!!!'} author={{
                      name: '@manudithur',
                      image: ''
                  }}></Codeet>
                  <Codeet postedAt={'10 minutes ago'} body={'Wassup. Look at the great code I have done!!!'} author={{
                      name: '@manudithur',
                      image: ''
                  }}></Codeet>
                  <Codeet postedAt={'10 minutes ago'} body={'Wassup. Look at the great code I have done!!!'} author={{
                      name: '@@manudithur',
                      image: ''
                  }}></Codeet>
                </ScrollArea>
            </Grid.Col>
        </Grid>
    )
}