import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

export type Column1Type = {
    quote?: string;
    text?: string;
    text1?: string;

    /** Style props */
    propWidth?: CSSProperties['width'];
    propFlex?: CSSProperties['flex'];
    propMinWidth?: CSSProperties['minWidth'];
    propMinWidth1?: CSSProperties['minWidth'];
    propFlex1?: CSSProperties['flex'];
    propMinWidth2?: CSSProperties['minWidth'];
    propHeight?: CSSProperties['height'];
    propWidth1?: CSSProperties['width'];
    propHeight1?: CSSProperties['height'];
    propFlex2?: CSSProperties['flex'];
    propMaxHeight?: CSSProperties['maxHeight'];
};

const Column1: NextPage<Column1Type> = ({
    quote,
    text,
    text1,
    propWidth,
    propFlex,
    propMinWidth,
    propMinWidth1,
    propFlex1,
    propMinWidth2,
    propHeight,
    propWidth1,
    propHeight1,
    propFlex2,
    propMaxHeight
}) => {
    const avatarStyle: CSSProperties = useMemo(() => {
        return {
            width: propWidth
        };
    }, [propWidth]);

    const frameDivStyle: CSSProperties = useMemo(() => {
        return {
            flex: propFlex,
            minWidth: propMinWidth
        };
    }, [propFlex, propMinWidth]);

    const textStyle: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth1
        };
    }, [propMinWidth1]);

    const frameDiv1Style: CSSProperties = useMemo(() => {
        return {
            flex: propFlex1,
            minWidth: propMinWidth2,
            height: propHeight,
            width: propWidth1
        };
    }, [propFlex1, propMinWidth2, propHeight, propWidth1]);

    const logosIconStyle: CSSProperties = useMemo(() => {
        return {
            height: propHeight1,
            flex: propFlex2,
            maxHeight: propMaxHeight
        };
    }, [propHeight1, propFlex2, propMaxHeight]);

    return (
        <Flex
            flex="1"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            gap={{ base: '16px', md: '32px' }}
            minW={{ base: 'full', md: '395px' }}
            maxW="full"
            textAlign="left"
            fontSize="xl"
        >
            <Flex flexDirection="row" alignItems="start" justifyContent="start" gap="4px">
                {Array(5)
                    .fill('')
                    .map((_, index) => (
                        <Image key={index} h="18.9px" w="5" minH="19px" loading="lazy" alt="" src="/vector.svg" />
                    ))}
            </Flex>
            <Text
                as="b"
                alignSelf="stretch"
                lineHeight={{ base: '22px', md: '140%' }}
                fontSize={{ base: 'base', md: 'inherit' }}
            >
                {quote}
            </Text>
            <Flex
                w="396px"
                flexDirection="row"
                alignItems="start"
                justifyContent="start"
                gap="19.7px"
                maxW="full"
                flexWrap={{ base: 'wrap', md: 'nowrap' }}
                style={avatarStyle}
            >
                <Flex flexDirection="column" alignItems="start" justifyContent="start" pt="2.5px" shrink="0">
                    <Image
                        w="14"
                        h="14"
                        rounded="full"
                        objectFit="cover"
                        loading="lazy"
                        alt=""
                        src="/avatar-image@2x.png"
                    />
                </Flex>
                <Flex
                    flex="1"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"
                    pt="6.5px"
                    boxSizing="border-box"
                    minW="91px"
                    shrink="0"
                    style={frameDivStyle}
                >
                    <Flex flexDirection="column" alignItems="start" justifyContent="start">
                        <Text
                            lineHeight="150%"
                            fontWeight="semibold"
                            display="inline-block"
                            minW="68px"
                            style={textStyle}
                        >
                            {text}
                        </Text>
                        <Text lineHeight="150%">{text1}</Text>
                    </Flex>
                </Flex>
                <Box
                    boxSizing="border-box"
                    borderRight="1px solid"
                    w={{ base: 'full', md: '1px' }}
                    h={{ base: '1px', md: '62px' }}
                />
                <Flex
                    flex="1"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="start"
                    pt="2.5px"
                    boxSizing="border-box"
                    minW="91px"
                    shrink="0"
                    style={frameDiv1Style}
                >
                    <Image
                        alignSelf="stretch"
                        h="14"
                        maxW="full"
                        flexShrink="0"
                        loading="lazy"
                        alt=""
                        src="/logos.svg"
                        style={logosIconStyle}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Column1;
