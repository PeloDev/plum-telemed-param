import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import { Box, Button, Center, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import logo from "../../images/logo/Asset 52@150x.png";
import menuItems from "./menuitems";
import { useHistory } from 'react-router';

const Navbar = () => {

  const history = useHistory();

  return (
    <Menu>
      <Flex
        position="fixed"
        left="0px"
        right="0px"
        top="0px"
        w="100%"
        h="70px"
        zIndex="100"
        bg="white"
        p={4}
        borderBottom="1px solid #eae8e8"
        boxShadow="sm"
      >
        <Box flex={1}>
          <Image
            cursor="pointer"
            mx="24px"
            h="48px"
            w="134.04px"
            src={logo}
            onClick={() => { history.replace("/") }}
          />
        </Box>
        {menuItems.map((item) => (
          <Box flex={item.isButton ? 0.65 : 1}>
            <MenuButton
              key={item.key}
              h="40px"
              p={item.isButton ? 4 : 1}
              borderRadius={item.isButton ? 18 : 12}
              backgroundColor={item.isButton ? "secondary" : "transparent"}
              _hover={item.isButton ? { opacity: 0.7 } : { textDecoration: "underline" }}
              onClick={() => { history.replace(`/${item.route}`) }}
            >
              <Text
                fontSize="15px"
                fontWeight={item.isButton ? 600 : 500}
                color={item.isButton ? "white" : "black"}
                _hover={{ borderBottom: "2px solid #000", cursor: "pointer" }}
              >
                {item.label.toString().toUpperCase()}
              </Text>
            </MenuButton>
            {
              false && item.options.length > 0 && <MenuList key={item.key}>
                {item.options.map(opt => (
                  <MenuItem>{opt}</MenuItem>
                ))}
              </MenuList>
            }
          </Box>
        ))}
        {/* <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button} >
              {isOpen ? "Close" : "Open"}
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem onClick={() => alert("Kagebunshin")}>Create a Copy</MenuItem>
            </MenuList>
          </>
        )}
      </Menu> */}
      </Flex>
    </Menu>
  );
};

export default Navbar;