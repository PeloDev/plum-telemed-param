import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Select,
  Text,
  Textarea,
  Center
} from "@chakra-ui/react";

export default function RoundInput(props) {

  const validator = props.validator ?? "";

  switch (props.type) {
    case "select": {
      return (
        <Box w="100%">
          <Select
            style={{
              width: "100%",
              borderRadius: 64,
              backgroundColor: "transparent",
              textAlign: "center",
              padding: "8px 12px"
            }}
            _focus={{ outline: "none" }}
            _hover={{ borderColor: "#000" }}
            border="1px solid #888"
            borderColor="#888"
            iconColor="transparent"
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(event) => props.onChange(event)}
          >
            {props.options.map((opt) => (
              <option value={opt.value.toString()}>
                {opt.label.toString()}
              </option>
            ))}
          </Select>
          { validator.length > 0 && <Text color="primary" fontSize="13px">{validator}</Text>}
        </Box>
      );
    }
    case "multiline": {
      return (
        <Box>
          <Textarea
            _focus={{ outline: "none" }}
            _hover={{ borderColor: "#000" }}
            w="100%"
            padding="8px 12px"
            type={props.type ?? "text"}
            border="1px solid #888"
            borderColor="#888"
            borderRadius={24}
            bg="transparent"
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(event) => props.onChange(event)}
          />
          { validator.length > 0 && <Text color="primary" fontSize="13px">{validator}</Text>}
        </Box>
      );
    }
    default: {
      return (
        <Box>
          <InputGroup>
            {props.inputLeft !== null && (
              <InputLeftElement py="8px" children={props.inputLeft} />
            )}
            <Input
              _focus={{ outline: "none" }}
              _hover={{ borderColor: "#000" }}
              w="100%"
              padding="8px 12px"
              type={props.type ?? "text"}
              border="1px solid #888"
              borderColor="#888"
              borderRadius={64}
              bg="transparent"
              name={props.name}
              value={props.value}
              placeholder={props.placeholder}
              onChange={(event) => props.onChange(event)}
            />
            {props.inputRight !== null && (
              <InputRightElement py="8px" children={props.inputRight} />
            )}
          </InputGroup>
          { validator.length > 0 && <Text color="primary" fontSize="13px">{validator}</Text>}
        </Box>
      );
    }
  }
}
