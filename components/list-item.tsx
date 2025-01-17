import { Box, Image, Text } from '@chakra-ui/react';

export type ListItemType = {
    iconAlarm?: string;
    heading?: string;
    text?: string;
};

const ListItem: React.FC<ListItemType> = ({ iconAlarm, heading, text }) => {
    return (
        <Box
            flex="1"
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            gap="4"
            minW="187px"
            textAlign="left"
            fontSize="xl"
        >
            <Image boxSize="12" objectFit="cover" loading="lazy" alt="" src={iconAlarm} />
            <Text as="b" width="full" fontSize={{ base: 'base', md: 'xl' }} lineHeight="140%">
                {heading}
            </Text>
            <Text width="full" lineHeight="150%">
                {text}
            </Text>
        </Box>
    );
};

export default ListItem;
