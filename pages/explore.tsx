import { Container, Grid, ScrollArea } from "@mantine/core";
import InputWithButton from "../components/searchbar";
import { UserCardImage } from "../components/userProfile";


export default function Explore(){
    return (
        <Grid mt={10}>
            <Grid.Col span={3}/>
            <Grid.Col span={6}>
                <InputWithButton size={'md'}></InputWithButton>
            </Grid.Col>
            <Grid.Col span={3}/>
            <Grid.Col span={1}/>
            <Grid.Col span={10}>
                <ScrollArea style={{height: '90vh', overflowX: 'hidden'}} type={'never'}>
                    <Grid>
                        <Grid.Col span={3}>
                            <UserCardImage image={'https://thumbs.dreamstime.com/b/modern-web-development-background-abstract-pieces-php-code-modern-web-development-background-abstract-pieces-php-code-138136042.jpg'} avatar={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} buttonLabel={'Following'} name={'@manudithur'} job={'Fullstack dev'} stats={[{label: 'Followers', value: '222'}, {label: 'Following', value: '523'}, {label: 'Codeets', value: '24'}]} ></UserCardImage>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <UserCardImage image={'https://thumbs.dreamstime.com/b/modern-web-development-background-abstract-pieces-php-code-modern-web-development-background-abstract-pieces-php-code-138136042.jpg'} avatar={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} buttonLabel={'Follow'} name={'@manudithur'} job={'Fullstack dev'} stats={[{label: 'Followers', value: '222'}, {label: 'Following', value: '523'}, {label: 'Codeets', value: '24'}]} ></UserCardImage>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <UserCardImage image={'https://thumbs.dreamstime.com/b/modern-web-development-background-abstract-pieces-php-code-modern-web-development-background-abstract-pieces-php-code-138136042.jpg'} avatar={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} buttonLabel={'Follow'} name={'@manudithur'} job={'Fullstack dev'} stats={[{label: 'Followers', value: '222'}, {label: 'Following', value: '523'}, {label: 'Codeets', value: '24'}]} ></UserCardImage>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <UserCardImage image={'https://thumbs.dreamstime.com/b/modern-web-development-background-abstract-pieces-php-code-modern-web-development-background-abstract-pieces-php-code-138136042.jpg'} avatar={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} buttonLabel={'Follow'} name={'@manudithur'} job={'Fullstack dev'} stats={[{label: 'Followers', value: '222'}, {label: 'Following', value: '523'}, {label: 'Codeets', value: '24'}]} ></UserCardImage>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <UserCardImage image={'https://thumbs.dreamstime.com/b/modern-web-development-background-abstract-pieces-php-code-modern-web-development-background-abstract-pieces-php-code-138136042.jpg'} avatar={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} buttonLabel={'Follow'} name={'@manudithur'} job={'Fullstack dev'} stats={[{label: 'Followers', value: '222'}, {label: 'Following', value: '523'}, {label: 'Codeets', value: '24'}]} ></UserCardImage>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <UserCardImage image={'https://thumbs.dreamstime.com/b/modern-web-development-background-abstract-pieces-php-code-modern-web-development-background-abstract-pieces-php-code-138136042.jpg'} avatar={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} buttonLabel={'Follow'} name={'@manudithur'} job={'Fullstack dev'} stats={[{label: 'Followers', value: '222'}, {label: 'Following', value: '523'}, {label: 'Codeets', value: '24'}]} ></UserCardImage>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <UserCardImage image={'https://thumbs.dreamstime.com/b/modern-web-development-background-abstract-pieces-php-code-modern-web-development-background-abstract-pieces-php-code-138136042.jpg'} avatar={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} buttonLabel={'Follow'} name={'@manudithur'} job={'Fullstack dev'} stats={[{label: 'Followers', value: '222'}, {label: 'Following', value: '523'}, {label: 'Codeets', value: '24'}]} ></UserCardImage>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <UserCardImage image={'https://thumbs.dreamstime.com/b/modern-web-development-background-abstract-pieces-php-code-modern-web-development-background-abstract-pieces-php-code-138136042.jpg'} avatar={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} buttonLabel={'Follow'} name={'@manudithur'} job={'Fullstack dev'} stats={[{label: 'Followers', value: '222'}, {label: 'Following', value: '523'}, {label: 'Codeets', value: '24'}]} ></UserCardImage>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <UserCardImage image={'https://thumbs.dreamstime.com/b/modern-web-development-background-abstract-pieces-php-code-modern-web-development-background-abstract-pieces-php-code-138136042.jpg'} avatar={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} buttonLabel={'Follow'} name={'@manudithur'} job={'Fullstack dev'} stats={[{label: 'Followers', value: '222'}, {label: 'Following', value: '523'}, {label: 'Codeets', value: '24'}]} ></UserCardImage>
                        </Grid.Col>
                    </Grid>
                </ScrollArea>    
            </Grid.Col>
            <Grid.Col span={1}/>
        </Grid>
    )
}