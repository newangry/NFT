import { Box, Flex, Text, Grid, UnstyledButton, Button } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Dashboard = () => {
    return (
        <Flex
            direction={'column'}
            gap={20}
        >
            <Flex
                justify={'space-between'}
            >
                <Text size={'1.5rem'} weight={700}>
                    Dashboard
                </Text>
                <Box className="relative bg-[#C52A2A] rounded-[5px] pl-6 pr-3 py-1 ml-auto sm:ml-0 mb-4 sm:mb-0 animate-pulse">
                    <Text className="text-base font-bold text-white">-4 Users Joined after you!</Text>
                    <img className="absolute -left-[28px] top-[0px] -translate-y-1/2 w-14 h-14"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI7SURBVHgB7ZqLUcMwDIYVjgG6AWGDskE7AWxANoANGiYoTNAyAhN0hk6QbABMIGSiXksOt5YfqdLzd6dLk7NzlmPLv60CZDKZTCajC0ScwCVDDq7IpiBkFB1DjXzCDpGDVH5J9gqaoQaWZJ/s4I2gXkXWqP+C3MhfBHV2nVKCZqiBCzxAUM90yjN4UsAAcO83B4/aoihuHeot6fJA9t6ruwZHriExPG82vcdf4MaW7Pvg/pHsAzTB0a/PxuM9Jvo2oAmOfhjqoMpAw41qLA6uBO+Z8Hsq0ASrFRvOC7Ypi9oWeNyrFRu14F26Fnf8q1ZseK9rUq4gPiaAnOp112UimKgO0pdZ0KV0KNrC2OCh6coMBiKKksH/1coxTBAqYf8ljfxqIQFRtCh2mjFG4DBzs+Xr7vdWoj2jg3a1EhPnvWNs546plVg4q54UDq4wLQ2eS3+iLGr6UkEgQUGGG2AOj8wcmbCVcHqhd+GNgktw4Eq2o+ehVfKtud5Dtzt3oSW7IwcHUzzBkMMzwdAsIRIptGgoL6kW/aSg23oZ/UhiyC/ossOYQ2SCHETZZvRU2SRD01tsY6c/TRR2DeXHHFyTc3qOJdAjV0Bl17Z5hwpPy8RHeFR+Y3GwAk2gZ67A4mDyYSmagzzvDOassubfrrmC/nBuyWpIjDTIhOQK+g7OVUsxFOYKekOzBs34BJqUaiUq6JErwP3ecRSZWnGugMpP2cHBTrS9QY9cATt4vrOVIcBL//NPJpPJZMbID1fMgWy9RU2gAAAAAElFTkSuQmCC" alt="lightningDuoton" />
                </Box>
            </Flex>
            <Grid gutter={15}>
                <Grid.Col sm={12} lg={6} md={6}>
                    <Flex
                        style={{
                            backgroundImage: 'linear-gradient(0deg,#f9f293 42.4%,#a17336 87.71%,#f9f293 94.48%)',
                            borderRadius: '10px'
                        }}
                        p={20}
                        gap={15}
                        w={'100%'}
                        align={'center'}
                        direction={'column'}
                    >
                        <Text
                            align='center'
                            size={'1.5rem'}
                            style={{ color: 'black' }}
                            weight={700}
                        >
                            Purchase Pack
                        </Text>
                        <Flex
                            gap={10}
                            align={'center'}

                        >
                            <Text weight={600}
                                style={{ color: 'black' }} size={40}
                            >
                                $25
                            </Text>
                            <Box>
                                <Text size={10} style={{ color: 'black' }}>
                                    Cost
                                </Text>
                                <Text size={10} style={{ color: 'black' }}>
                                    Per Pack
                                </Text>
                            </Box>
                        </Flex>
                        <Flex
                            gap={15}
                            align={'center'}
                            p={10}
                            pl={20}
                            pr={20}
                            style={{
                                borderRadius: '50px',
                                background: 'rgb(34, 34, 34)'
                            }}
                        >
                            <IconMinus color="rgb(251, 146, 61)" fontWeight={400} size={30} cursor={'pointer'} />
                            <UnstyledButton
                                bg={'rgb(68, 68, 68)'}
                                p={15}
                                style={{ borderRadius: '100%' }}
                            >
                                <Text size={20}>
                                    123
                                </Text>
                            </UnstyledButton>
                            <IconPlus color="rgb(251, 146, 61)" fontWeight={400} size={30} cursor={'pointer'} />
                        </Flex>
                        <Box className="animate-bounce">
                            <Button
                                w={'280px'}
                                type="button"
                                variant="gradient"
                                className='sigin-button'
                                style={{ position: "relative", overflow: "hidden", backgroundImage: 'linear-gradient(359deg,#002567 43.42%,#0daecf 97.17%)' }}>
                                <Flex w={'100%'} justify={'space-between'} align={'center'}>
                                    <Text>
                                        Purchase Now
                                    </Text>
                                    <Text>
                                        $75
                                    </Text>
                                </Flex>
                            </Button>
                        </Box>
                    </Flex>
                </Grid.Col>
                <Grid.Col sm={12} lg={6} md={6}>
                    <Box
                        w={'100%'}
                        sx={(theme) => ({
                            borderRadius: '20px'
                        })}
                        style={{borderRadius: '15px'}}
                    >
                        <Flex
                            sx={(theme)=> ({
                                height: '55px',
                                paddingLeft: '15px'
                            })}
                            justify={'center'}
                            direction={'column'}
                            style={{backgroundImage: 'linear-gradient(146deg,#002567,#0daecf)'}}
                        >
                            <Text>
                                User Details
                            </Text>
                        </Flex>
                        <Flex
                            p={15}
                            justify={'space-between'}
                            bg={'#12af12'}
                            sx={(theme)=>({
                                '&hover': {
                                    background: '#11ad11'
                                },
                                borderBottom: '1px solid #0d840d'
                            })}
                        >
                            <Text style={{color: 'black'}}>
                                User ID
                            </Text>
                            <Text weight={'bold'} style={{color: 'black'}}>
                                #7405
                            </Text>
                        </Flex>
                        <Flex
                            p={15}
                            justify={'space-between'}
                            bg={'#12af12'}
                            sx={(theme)=>({
                                '&hover': {
                                    background: '#11ad11'
                                },
                                borderBottom: '1px solid #0d840d'

                            })}
                        >
                            <Text style={{color: 'black'}}>
                                Registered Wallet
                            </Text>
                            <Text weight={'bold'} style={{color: 'black'}}>
                                #7405
                            </Text>
                        </Flex>
                        <Flex
                            p={15}
                            justify={'space-between'}
                            bg={'#12af12'}
                            sx={(theme)=>({
                                '&hover': {
                                    background: '#11ad11'
                                },
                                borderBottom: '1px solid #0d840d'
                            })}
                        >
                            <Text style={{color: 'black'}}>
                                Referrer ID
                            </Text>
                            <Text weight={'bold'} style={{color: 'black'}}>
                                #7405
                            </Text>
                        </Flex>
                        <Flex
                            p={15}
                            justify={'space-between'}
                            bg={'#12af12'}
                            sx={(theme)=>({
                                '&hover': {
                                    background: '#11ad11'
                                }
                            })}
                        >
                            <Text style={{color: 'black'}}>
                            Referrer Wallet
                            </Text>
                            <Text weight={'bold'} style={{color: 'black'}}>
                                #7405
                            </Text>
                        </Flex>
                    </Box>
                    
                </Grid.Col>
            </Grid>
        </Flex>
    )
}

export default Dashboard;