import { Box, Image, Text } from "@chakra-ui/react";

export default function PageBanner(props) {
    return (
        <Box position="relative" textAlign="center">
            <Image width="100%" src={props.image} alt="page-banner" />
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                padding="18px 8%"
                w="100%">
                <Box
                    backgroundColor="rgba(255,255,255,0.6)"
                    borderRadius={48}
                    p={2}
                    textAlign="center"
                >
                    <Text fontSize="24px" fontWeight={500}>{props.text}</Text>
                </Box>
            </Box>
        </Box>
    );
}