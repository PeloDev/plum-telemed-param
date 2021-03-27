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
                backgroundColor="rgba(255,255,255,0.6)"
                borderRadius={48}
                padding="18px 72px"
            >
                <Text fontSize="1.75rem" fontWeight={500} textAlign="center">{props.text}</Text>
            </Box>
        </Box>
    );
}