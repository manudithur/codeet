import { useState } from 'react';
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
    { icon: IconUser, label: 'Profile' },  
    { icon: IconHome2, label: 'Home' },
    { icon: IconSearch, label: 'Explore' },
];

export function NavbarMinimal(){
    const [active, setActive] = useState(2);
  
    const links = mockdata.map((link, index) => (
      <NavbarLink
        {...link}
        key={link.label}
        active={index === active}
        onClick={() => setActive(index)}
      />
    ));
  
    return (
      <Navbar width={{ base: 90 }} p="md" pt={30} pb={30}>
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
            <NavbarLink icon={IconSettings} label="Settings" />
            <NavbarLink icon={IconLogout} label="Logout" />
          </Stack>
        </Navbar.Section>
      </Navbar>
    );
  }
