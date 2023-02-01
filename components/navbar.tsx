import { SetStateAction, useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack } from '@mantine/core';
import {
  TablerIcon,
  IconHome2,
  IconSettings,
  IconLogout,
  IconSearch,
  IconUser,
} from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';
import { useRouter } from 'next/router';
import { logout } from '../backend/firebase';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
    <div style={{alignItems: 'center'}}>
        <Tooltip label={label} transitionDuration={0}>
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
            <Icon stroke={1.5} size={25}/>
            </UnstyledButton>
        </Tooltip>
    </div>
    );
}
  
const mockdata = [
    { icon: IconUser, label: 'Profile'},  
    { icon: IconHome2, label: 'Home' },
    { icon: IconSearch, label: 'Explore' },
];


export function NavbarMinimal(){
    const router = useRouter()
    const [active, setActive] = useState(2);

    function clickAction(url: string, index: number){
      setActive(index)
      router.push(url)
    }

    const links = mockdata.map((link, index) => (
      <NavbarLink
        {...link}
        key={link.label}
        active={index === active}
        onClick={() => 
          clickAction(link.label.toLowerCase(), index)
        }
      />
    ));

     async function logoutAction(){
      try{
        logout()
      } catch(e){
        console.log(e)
      }
    }
  
    return (
      <Navbar width={{ base: 90, height: '100vh'}} p="md" pt={30} pb={30}>
        <Center>
          <MantineLogo type="mark" size={45}/>
        </Center>
        <Navbar.Section grow mt={50}>
          <Stack align='center' spacing={5}>
            {links}
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack align='center' spacing={15} >
            <NavbarLink icon={IconSettings} label="Settings"  active={active === 5} onClick={() => clickAction('/settings', 5)}/>
            <NavbarLink icon={IconLogout} label="Logout" onClick={() => logoutAction()} />
          </Stack>
        </Navbar.Section>
      </Navbar>
    );
}

export function NavbarMinimal2(){
  const router = useRouter()
  const [active, setActive] = useState(2);

  function clickAction(url: string, index: number){
    setActive(index)
    router.push(url)
  }

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => 
        clickAction(link.label.toLowerCase(), index)
      }
    />
  ));

   async function logoutAction(){
    try{
      logout()
    } catch(e){
      console.log(e)
    }
  }

  return (
    <Navbar width={{ base: 90, height: '100vh'}} p="md" pt={30} pb={30}>
      <Center>
        <MantineLogo type="mark" size={45}/>
      </Center>
      <Navbar.Section grow mt={50}>
      </Navbar.Section>
      <Navbar.Section>
      </Navbar.Section>
    </Navbar>
  );
}
