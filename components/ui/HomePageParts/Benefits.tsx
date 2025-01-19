import { Box, Flex } from '@chakra-ui/react';

const BenefitItem = () => {
    return (
        <Box bg="bgColor" w="full" h="500px" rounded={20} p={6}>
            BenefitItem
        </Box>
    );
};

export const Benefits = () => {
    return (
        <Box w="full">
            <Box>Benefits</Box>
            <Flex flexDirection="row" gap={4}>
                <BenefitItem />
                <BenefitItem />
                <BenefitItem />
                <BenefitItem />
            </Flex>
        </Box>
    );
};
