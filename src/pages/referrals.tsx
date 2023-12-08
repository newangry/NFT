import {
    Box,
    Flex,
    Text,
    Table,
    Button
} from "@mantine/core";
const Referrals = () => {
    return (
        <Flex
            direction={'column'}
            gap={20}
        >
            
            <Text size={'1.5rem'} weight={700}>
                My Referrals
            </Text>
            <Table style={{borderRadius: '10px'}}>
                <thead>
                    <tr style={{ backgroundImage: 'linear-gradient(359deg,rgb(13 229 181) 43.42%, rgb(34 207 13) 97.17%)' }}>
                        <th style={{padding: '15px'}}>
                            <Text style={{color: '#141fb5'}}>User ID</Text>
                        </th>
                        <th>
                            <Text style={{color: '#141fb5'}}>Registered Wallet</Text>
                        </th>
                        <th>
                            <Text style={{color: '#141fb5'}}>Packs Purchased</Text>
                        </th>
                        <th>
                            <Text style={{color: '#141fb5'}}>Registered Date</Text>
                        </th>
                    </tr>
                </thead>
                
                    <tbody>
                        <tr
                            style={{background: '#666'}}
                        >
                            <td style={{padding: '10px'}}>
                                <Flex gap={'10px'} align={'center'}>
                                    <Text weight={600}>
                                        e56cedc80
                                    </Text>
                                    <Box
                                        p={6}
                                        bg={'#109715'}
                                        sx={(theme) =>({
                                            borderRadius: '5px'
                                        })}
                                        
                                    >
                                        <Text size={10} weight={700}>
                                           #17045 
                                        </Text>
                                    </Box>
                                </Flex>
                            </td>
                            <td style={{padding: '10px'}}>
                                <Flex gap={'10px'} align={'center'}>
                                    <Text weight={600}>
                                        e56cedc80
                                    </Text>
                                    <Box
                                        p={6}
                                        bg={'#109715'}
                                        sx={(theme) =>({
                                            borderRadius: '5px'
                                        })}
                                        
                                    >
                                        <Text size={10} weight={700}>
                                           #17045 
                                        </Text>
                                    </Box>
                                </Flex>
                            </td>
                            <td style={{padding: '10px'}}>
                                <Flex gap={'10px'} align={'center'}>
                                    <Text weight={600}>
                                        e56cedc80
                                    </Text>
                                    <Box
                                        p={6}
                                        bg={'#109715'}
                                        sx={(theme) =>({
                                            borderRadius: '5px'
                                        })}
                                        
                                    >
                                        <Text size={10} weight={700}>
                                           #17045 
                                        </Text>
                                    </Box>
                                </Flex>
                            </td>
                            <td style={{padding: '10px'}}>
                                <Flex gap={'10px'} align={'center'}>
                                    <Text weight={600}>
                                        e56cedc80
                                    </Text>
                                    <Box
                                        p={6}
                                        bg={'#109715'}
                                        sx={(theme) =>({
                                            borderRadius: '5px'
                                        })}
                                        
                                    >
                                        <Text size={10} weight={700}>
                                           #17045 
                                        </Text>
                                    </Box>
                                </Flex>
                            </td>
                        </tr>
                    </tbody>
            </Table>
            <Button w={'200px'} color="cyan">
                LOAD MORE
            </Button>
        </Flex>
    )
}

export default Referrals;