import { mainRound } from '@/components/theme/padding.utils';
import { REFUND_PRICE, WEEK_PRICE } from '@/utils/constants';
import { Box, Flex, Heading, Span, Stack, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { LuCircleCheck, LuCirclePause } from 'react-icons/lu';

const PauseTryItem = ({
    title,
    icon,
    children
}: {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}) => {
    return (
        <Box w="full" rounded={mainRound} p={10} border="2px dashed" borderColor="primary" bg="bgColorWhiteTransparent">
            <Flex align="center" gap={4}>
                {icon}
                <Heading size="4xl" color="fg">
                    {title}
                </Heading>
            </Flex>

            {children}
        </Box>
    );
};

const fontSize = 'md';

export const PauseTry = () => {
    const pauseT = useTranslations('pauseTry.pause');
    const tryT = useTranslations('pauseTry.try');

    return (
        <Box w="full" px={[2, 0]}>
            <Flex flexDirection={['column', 'column', 'row']} gap={4}>
                <PauseTryItem title={pauseT('title')} icon={<LuCirclePause size={40} color="primary" />}>
                    <Stack pt={4}>
                        <Text fontSize={fontSize}>{pauseT('text1')}</Text>
                        <Text fontSize={fontSize}>{pauseT('text2')}</Text>
                        <Text fontSize={fontSize}>{pauseT('benefits')}</Text>
                        <Stack>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">{pauseT('noCommitment.title')}</Span>:{' '}
                                {pauseT('noCommitment.description')}
                            </Text>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">{pauseT('stayOnTrack.title')}</Span>:{' '}
                                {pauseT('stayOnTrack.description')}
                            </Text>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">{pauseT('focusedManagement.title')}</Span>:{' '}
                                {pauseT('focusedManagement.description')}
                            </Text>
                        </Stack>
                    </Stack>
                </PauseTryItem>
                <PauseTryItem title={tryT('title')} icon={<LuCircleCheck size={40} color="primary" />}>
                    <Stack pt={4}>
                        <Text fontSize={fontSize}>{tryT('text1', { weekPrice: WEEK_PRICE })}</Text>
                        <Text fontSize={fontSize}>{tryT('text2')}</Text>
                        <Stack>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">{tryT('fix.title')}</Span> {tryT('fix.description')}
                            </Text>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">{tryT('implement.title')}</Span> {tryT('implement.description')}
                            </Text>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">{tryT('update.title')}</Span> {tryT('update.description')}
                            </Text>
                            <Text fontSize={fontSize}>
                                <Span fontWeight="bold">{tryT('setUp.title')}</Span> {tryT('setUp.description')}
                            </Text>
                        </Stack>
                        <Text fontSize={fontSize}>{tryT('refundText', { refundPrice: REFUND_PRICE })}</Text>
                    </Stack>
                </PauseTryItem>
            </Flex>
        </Box>
    );
};
