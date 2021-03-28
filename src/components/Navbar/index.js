import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Spacer,
  Text
} from "@chakra-ui/react";
import logo from "../../images/logo/Asset 52@150x.png";
import menuItems from "./menuitems";
import { useHistory } from 'react-router';
import SignUpDialog from "../SignUpDialog";

const Navbar = () => {

  const history = useHistory();
  const [menuOpen, updateMenuOpen] = useState(menuItems.map((item) => {
    return { ...item, isOpen: false }
  }));

  function openMenu(menuIdx, isOpen) {
    console.log(menuOpen);
    updateMenuOpen((previousMenuOpen) => {
      let newMenuOpen = previousMenuOpen;
      newMenuOpen[menuIdx] = {
        ...newMenuOpen[menuIdx],
        isOpen: isOpen
      }
      console.log(newMenuOpen);
      return newMenuOpen;
    });
  }

  return (
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
      {menuOpen.map((item, itemIdx) => (
        <Box flex={item.isButton ? 0.65 : 1}>
          <Popover trigger="hover">
            <PopoverTrigger>
              {
                item.isButton ?
                  <Button
                    h="40px"
                    p={4}
                    borderRadius={18}
                    backgroundColor={"secondary"}
                    _hover={{ opacity: 0.7 }}
                    onClick={() => { history.replace(`/${item.route}`) }}
                    onMouseEnter={() => { openMenu(itemIdx, true) }}
                    onMouseLeave={() => { openMenu(itemIdx, false) }}
                  >
                    <Text
                      fontSize="15px"
                      fontWeight={600}
                      color={"white"}
                    >
                      {item.label.toString().toUpperCase()}
                    </Text>
                  </Button>
                  :
                  <Box
                    h="40px"
                    p={1}
                    borderRadius={12}
                    backgroundColor={"transparent"}
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => { history.replace(`/${item.route}`) }}
                    onMouseEnter={() => { openMenu(itemIdx, true) }}
                    onMouseLeave={() => { openMenu(itemIdx, false) }}>
                    <Text
                      fontSize="15px"
                      fontWeight={500}
                      color={"black"}
                    >
                      {item.label.toString().toUpperCase()}
                    </Text>
                  </Box>
              }
            </PopoverTrigger>
            {
              item.options.length > 0 &&
              <PopoverContent
                backgroundColor="rgba(255,255,255,0.2)"
                border="none"
                _focus={{ border: "none" }}
              >
                <PopoverArrow />
                <PopoverBody key={item.key}>
                  {item.options.map(opt => (
                    <Button
                      w="100%"
                      my={1}
                      bg="white"
                      fontWeight="400"
                      _hover={{ bg: "secondary" }}
                      _focus={{ border: "none" }}
                      onClick={() => { history.replace(`/${item.route}`) }}
                    >{opt}</Button>
                  ))}
                </PopoverBody>
              </PopoverContent>
            }
          </Popover>
          {/* <Menu isOpen={item.isOpen}>
            <MenuButton
              as={item.isButton ? Button : Box}
              key={item.key}
              h="40px"
              p={item.isButton ? 4 : 1}
              borderRadius={item.isButton ? 18 : 12}
              backgroundColor={item.isButton ? "secondary" : "transparent"}
              _hover={item.isButton ? { opacity: 0.7 } : { cursor: "pointer", textDecoration: "underline" }}
              onClick={() => { history.replace(`/${item.route}`) }}
              onMouseEnter={() => { openMenu(itemIdx, true) }}
              onMouseLeave={() => { openMenu(itemIdx, false) }}
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
              item.options.length > 0 && <MenuList key={item.key}>
                {item.options.map(opt => (
                  <MenuItem>{opt}</MenuItem>
                ))}
              </MenuList>
            }
          </Menu> */}
        </Box>
      ))}
      <SignUpDialog />
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
  );
};

export default Navbar;