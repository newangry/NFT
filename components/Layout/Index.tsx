
import {
    Box,
    AppShell,
    Navbar,
    Text,
    Flex,
    Button,
    Avatar
} from "@mantine/core"
import { useRouter } from "next/router";
import { IconBox, IconCardboards, IconDashboard, IconHome, IconUsers, IconUsersGroup, IconWallet } from "@tabler/icons-react";
import React, { FC, useEffect, useState } from "react";
interface Props {
    children: React.ReactElement
}
const PAGES = [
    { icon: <IconHome color="black" size={14} />, name: 'Dashboard', url: '/dashboard' },
    { icon: <IconUsers color="black" size={14} />, name: 'My Referrals', url: '/referrals' },
]

const Layout: FC<Props> = ({ children }) => {
    const router = useRouter();
    const [opened, setOpened] = useState(false);
    const [page, setPage] = useState<string>('');

    useEffect(() => {
        const path = window.location.pathname;
        setPage(path.replace("/", ""));
    }, [router])

    return (
        <Box>
            {
                page =="" ? children:
                <AppShell
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                navbar={
                    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 200 }}>
                        <Flex
                            direction={'column'}
                            gap={20}
                        >
                            {
                                PAGES.map((item, key) =>
                                    <Button
                                        key={key}
                                        className="sigin-button"
                                        style={{
                                            background: item.name.toUpperCase().indexOf(page.toUpperCase()) > -1 ? '#05FF05' : 'linear-gradient(180deg,#f9f293 42.4%,#a17336 87.71%,#f9f293 94.48%)'
                                        }}
                                        onClick={() => {
                                            router.push(item.url)
                                        }}
                                    >
                                        <Flex gap={'10px'} align={'center'}>
                                            {item.icon}
                                            <Text size={12} weight={'bold'} style={{ color: 'black' }}>
                                                {item.name}
                                            </Text>
                                        </Flex>
                                    </Button>
                                )
                            }
                            <Box>
                                <Text>
                                    Xcelerator
                                </Text><samp></samp>
                                <Button
                                    className="sigin-button"
                                    mt={10}
                                    style={{
                                        background: "Xcelerator Packs".toUpperCase().indexOf(page.toUpperCase()) > -1 ? '#05FF05' : 'linear-gradient(180deg,#f9f293 42.4%,#a17336 87.71%,#f9f293 94.48%)'
                                    }}
                                    onClick={() => {
                                        router.push("/packs")
                                    }}
                                >
                                    <Flex gap={'10px'} align={'center'}>
                                        <IconBox size={12} color="black" />
                                        <Text size={12} weight={'bold'} style={{ color: 'black' }}>
                                            Xcelerator Packs
                                        </Text>
                                    </Flex>
                                </Button>
                            </Box>

                        </Flex>
                    </Navbar>
                }
            >
                <Flex
                    direction={'column'}
                    gap={15}
                    pl={15}
                >
                    <Flex
                        sx={(theme) => ({
                            height: '100px',
                            borderRadius: '5px',
                            width: '100%',
                            padding: '10px',
                            paddingRight: '30px',
                            border: '2px solid #70d8f366',
                            background: '#001438'
                        })}
                        justify={'flex-end'}
                        gap={20}
                        align={'center'}
                       
                    >
                        <Flex
                            gap={10}
                        >
                            <IconWallet color="#1fe5fb" size={45} />
                            <Box>
                                <Text size={14}>
                                    Connected Wallet
                                </Text>
                                <Text size={14} style={{ color: '#03f503' }} weight={700}>
                                    0xDed...6ae
                                </Text>
                            </Box>
                        </Flex>
                        <Flex
                            gap={10}
                        >
                            <Avatar color="#1fe5fb" size={45} />
                            <Box>
                                <Text size={14}>
                                    User ID
                                </Text>
                                <Text size={14}>
                                    17541
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex
                        h={'120px'}
                        w={'100%'}
                        style={{ background: 'url(/dashboard-bg.png) 100% 50% no-repeat ', backgroundSize: 'cover', borderRadius: '10px' }}
                        justify={'space-between'}
                        align={'center'}
                        p={20}
                    >
                        <Flex
                            gap={15}
                            direction={'column'}
                        >
                            <Text size={'1.125rem'} weight={700}>
                                Introducing, New 1.0
                            </Text>
                        </Flex>
                        <Flex
                            direction={'column'}
                            gap={15}
                        >
                            <Text size={'1.125rem'} weight={700}>
                                Purchase Packs Now
                            </Text>
                            <Button color="yellow">
                                VIEW COMPLAN
                            </Button>
                        </Flex>
                    </Flex>
                    <Box
                        sx={(theme) => ({
                            borderRadius: '5px',
                            width: '100%',
                            padding: '1.5rem',
                            border: '2px solid #70d8f366',
                            background: '#001438'
                        })}
                    >
                        {children}
                    </Box>
                </Flex>
            </AppShell>
            }

        </Box>
    )
}

export default Layout;