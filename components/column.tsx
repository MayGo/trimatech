import { Box, Image, Heading, Text } from '@chakra-ui/react';
import type { FC } from 'react';

export type ColumnType = {
    iconCalendar?: string;
    heading?: string;
    text?: string;
};

const Column: FC<ColumnType> = ({ iconCalendar, heading, text }) => {
    return (
        <Box
            flex="1"
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            gap="24px"
            minW="297px"
            maxW="full"
            textAlign="left"
            fontSize="13xl"
        >
            <Image boxSize="48px" objectFit="cover" loading="lazy" alt="" src={iconCalendar} />
            <Heading
                as="h1"
                m="0"
                w="full"
                fontSize="inherit"
                lineHeight="130%"
                fontWeight="bold"
                css={{
                    '@media (max-width: 1050px)': {
                        fontSize: '7xl',
                        lineHeight: '33px'
                    },
                    '@media (max-width: 450px)': {
                        fontSize: 'lgi',
                        lineHeight: '25px'
                    }
                }}
            >
                {heading}
            </Heading>
            <Text w="full" lineHeight="150%">
                {text}
            </Text>
        </Box>
    );
};

export default Column;
