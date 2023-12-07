import { Box, Flex, Text, Button, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { createWeb3Modal, defaultConfig, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { useWeb3Modal } from '@web3modal/ethers/react'
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { IconClick, IconLock, IconLockOpen } from "@tabler/icons-react";
import {useRouter} from 'next/router';

const Index = () => {

    const isMobile = useMediaQuery(`(max-width: 440px)`);
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const projectId = '43d00ccfe696c202ebb4b3a64ef38d85'
    const [password, setPassword] = useState<string>('');
    const [isRegist, setIsRegist] = useState<boolean>(false);
    
    const router = useRouter();
    // 2. Set chains
    const mainnet = {
        chainId: 1,
        name: 'Ethereum',
        currency: 'ETH',
        explorerUrl: 'https://etherscan.io',
        rpcUrl: 'https://eth-mainnet.public.blastapi.io'
    }

    // 3. Create modal
    const metadata = {
        name: 'My Website',
        description: 'My Website description',
        url: 'https://mywebsite.com',
        icons: ['https://avatars.mywebsite.com/']
    }

    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [mainnet],
        projectId
    })
    const { open } = useWeb3Modal()
    const form = useForm({
        initialValues: { name: '', email: '', age: 0 },

        // functions will be used to validate values at corresponding key
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
        },
    });

    return (
        <Box
            w={'100vw'}
            h={'100vh'}
            style={{ background: 'url(/login-bg.png) no-repeat ', backgroundSize: 'cover' }}
        >
            <Flex
                align={isMobile ? 'left' : 'center'} justify={'center'}
                sx={(theme) => ({
                    height: '100%'
                })}
            >
                <Flex
                    direction='column'
                    gap={24}
                    sx={(theme) => ({
                        borderRadius: 10,
                        padding: 50,
                        width: isMobile ? '100%' : 440,
                        boxShadow: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 5px 5px rgba(145, 158, 171, 0.24)'
                    })}
                    align={'center'}
                >
                    <Flex
                        gap={24}
                        align={'left'}
                        direction={'column'}
                        w={'100%'}
                    >
                        <Box>
                            <Text size={'2.25rem'} weight={'bold'}>
                                {
                                    isRegist?'Register':'Login'
                                }
                            </Text>
                            <Text weight={'bold'}>
                                {
                                    isRegist?'Sign message to register':'Connect wallet to login'
                                }
                            </Text>
                        </Box>
                        <form onSubmit={form.onSubmit(console.log)} style={{ width: '100%' }}>
                            <Button 
                                fullWidth 
                                variant="gradient" 
                                gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 80 }}
                                size="lg"
                                onClick={() => open()}
                                className="sigin-button"
                                disabled={address?true:false}
                            >
                                <Flex w={'100%'} justify={'space-between'} align={'center'}>
                                    <Box>
                                        {
                                            address?'Wallet Connected':'Connect Wallet'
                                        }
                                    </Box>
                                    <Box>
                                        <IconClick />
                                    </Box>
                                </Flex>
                            </Button>
                            <Text 
                                onClick={()=> {open()}}
                                size={12} mt={10}
                                weight={500}
                                sx={(theme) =>({
                                    cursor: 'pointer'
                                })}
                            >
                                {
                                    address?
                                        "Connected to : "+address.slice(0,10)+'...'
                                        :
                                        'Connect your BEP-20 wallet'
                                }
                            </Text>
                            {
                                isRegist?
                                    <TextInput 
                                        mt={20}
                                        placeholder="Referrer Username"
                                        value={password}
                                        size="lg"
                                        type="type"
                                        onKeyDown={(event) =>{
                                            if(event.keyCode == 13) {
                                                router.push('/dashboard')
                                            }
                                        }}
                                        onChange={(event) =>{
                                            setPassword(event.currentTarget.value)
                                        }}
                                    />:
                                    <></>
                            }
                            <Button 
                                fullWidth 
                                variant="gradient" 
                                gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
                                size="lg"
                                mt={20}
                                className="sigin-button"
                                disabled={address?false:true}
                                onClick = {() => {
                                    router.push('/dashboard')
                                }}
                            >
                                <Flex w={'100%'} justify={'space-between'} align={'center'}>
                                    <Box>
                                        {
                                            isRegist?'Register Now':'Login Now'
                                        }
                                    </Box>
                                    <Box>
                                        <IconLock />
                                    </Box>
                                </Flex>
                            </Button>
                            <Text size={14} align="center" mt={20} weight={500}>
                                {
                                    isRegist?'Already have an account?':'If you have not an account?'
                                }
                            </Text>
                            <Button 
                                fullWidth 
                                color="green"
                                size="lg"
                                mt={10}
                                className="sigin-button"
                                disabled={address?false:true}
                                onClick = {() => {
                                    setIsRegist(p => !p);
                                }}
                            >
                                <Flex w={'100%'} justify={'space-between'} align={'center'}>
                                    <Box>
                                        {
                                            isRegist?'Login Now':'Register Now'
                                        }
                                    </Box>
                                    <Box>
                                        <IconLockOpen />
                                    </Box>
                                </Flex>
                            </Button>
                        </form>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Index;