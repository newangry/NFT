import {
    Box,
    Flex,
    Text
} from "@mantine/core";
const PacksX = () => {
    return (
        <Box>
            <Flex
                gap={15}
                direction={'column'}
                style={{borderRadius: '10px'}}
            >
                <Text size={'1.5rem'} weight={700}>
                    My Xcelerator Packs
                </Text>
                <Box>
                    <Flex
                        justify={'space-between'}
                        p={15}
                        bg={'#666'}
                        align={'center'}
                    >
                        <Box>
                            <Text weight={600} size={24} style={{ color: 'rgb(34 207 13)' }}>
                                #13459
                            </Text>
                            <Text weight={600} size={14}>
                                Pack Id
                            </Text>
                        </Box>
                        <Box>
                            <Text weight={600} size={24} style={{ color: 'rgb(34 207 13)' }}>
                                Pack35
                            </Text>

                        </Box><Box>
                            <Text weight={600} size={24} style={{ color: 'rgb(34 207 13)' }}>
                                #13459
                            </Text>
                            <Text weight={600} size={14}>
                                Pack Id
                            </Text>
                        </Box>
                        <Box>
                            <Flex gap={3} align={'center'}>
                                <Text style={{ color: 'rgb(34 207 13)' }} size={24}>
                                    0 /
                                </Text>
                                <Text style={{ color: 'rgb(34 207 13)' }} size={12}>
                                    3
                                </Text>
                            </Flex>
                            <Text weight={600} size={14}>
                                Ranks Active
                            </Text>
                        </Box><Box>
                            <Flex gap={0} align={'center'}>
                                <Text weight={600} size={12} style={{ color: 'rgb(34 207 13)' }}>
                                    $
                                </Text>
                                <Text weight={600} size={24} style={{ color: 'rgb(34 207 13)' }}>
                                    0.0000000
                                </Text>
                            </Flex>
                            <Text weight={600} size={14}>
                                Total Claimed
                            </Text>
                        </Box>
                        <Flex
                            p={5}
                            pl={15}
                            pr={15}
                            gap={10}
                            align={'center'}
                            bg={'red'}
                            style={{borderRadius: '10px'}}
                        >
                            <Text size={24} weight={600}>
                                8520
                            </Text>
                            <Text size={10} weight={600}>
                                More legs required to activate
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        align={'center'}
                        direction={'column'}
                        sx={(theme)=>({
                            padding: '3px',
                        })}
                        style={{backgroundImage: 'linear-gradient(359deg,rgb(13 229 181) 43.42%, rgb(34 207 13) 97.17%)'}}
                        w={'100%'}
                    >
                        <Text size={12} weight={600} align="center" style={{color: 'black'}}>1480 Xcelerator Packs Purchased globally after this Pack</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default PacksX;