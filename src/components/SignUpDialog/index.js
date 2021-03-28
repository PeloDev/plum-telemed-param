import React, { useState } from "react";

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Box,
    Button,
    Center,
    Flex,
    Image,
    Spacer,
    Text
} from "@chakra-ui/react"

import patientIcon from "../../images/icons/Asset 30@150x.png";
import healthcareIcon from "../../images/icons/Asset 92@150x.png";

export default function SignUpDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef();

    return (
        <>
            <Box flex={0.65}>
                <Button
                    h="40px"
                    p={4}
                    borderRadius={18}
                    backgroundColor="secondary"
                    _hover={{ opacity: 0.7 }}
                    _active={{ opacity: 0.7 }}
                    _focus={{}}
                    onClick={() => setIsOpen(true)}
                >
                    <Text
                        fontSize="15px"
                        fontWeight={600}
                        color="white"
                    >
                        SIGN UP
                        </Text>
                </Button>
            </Box>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent borderRadius={12} w="auto">
                        <AlertDialogHeader
                            borderTopRadius={12}
                            bg="secondary"
                            color="white"
                            textAlign="center"
                            fontSize="1.5rem"
                            fontWeight="500">
                            <Box w="40.39px" display="inline-block" />
                            <Text display="inline-block">Are you?</Text>
                            <Button
                                position="relative"
                                bottom="8px"
                                float="right"
                                bg="transparent"
                                color="white"
                                ref={cancelRef}
                                _hover={{ opacity: 1 }}
                                _active={{ opacity: 0.7 }}
                                _focus={{}}
                                onClick={onClose}
                            >
                                x
                            </Button>
                        </AlertDialogHeader>

                        <AlertDialogBody p={0} m={2}>
                            <Flex pb="12px" w="432px">
                                <Box
                                    flex={1}
                                    backgroundColor="#DDD"
                                    _hover={{ backgroundColor: "#E5E5E5", cursor: "pointer" }}
                                    borderRadius={30}
                                    padding="2%"
                                    pb="12px"
                                >
                                    <Center>
                                        <Image my="12px" h="64px" src={patientIcon} />
                                    </Center>
                                    <Center textAlign="center">
                                        <Text fontWeight={600} fontSize="18px">
                                            Patient
                                        </Text>
                                    </Center>
                                    <Center textAlign="center">
                                        <Text fontSize="15px">I am looking for my health & well being</Text>
                                    </Center>
                                </Box>
                                <Box w="6px" />
                                <Box
                                    flex={1}
                                    backgroundColor="#DDD"
                                    _hover={{ backgroundColor: "#E5E5E5", cursor: "pointer" }}
                                    borderRadius={30}
                                    padding="2%"
                                    pb="12px"
                                >
                                    <Center>
                                        <Image my="12px" h="64px" src={healthcareIcon} />
                                    </Center>
                                    <Center textAlign="center">
                                        <Text fontWeight={600} fontSize="18px">
                                            Healthcare Provider
                                        </Text>
                                    </Center>
                                    <Center textAlign="center">
                                        <Text fontSize="15px">
                                            I am looking for the health & well being of others
                                        </Text>
                                    </Center>
                                </Box>
                            </Flex>
                        </AlertDialogBody>

                        {/* <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={onClose} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter> */}
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}