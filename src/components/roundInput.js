import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Select,
  Textarea,
  Center
} from "@chakra-ui/react";

export default function RoundInput(props) {
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
            border="1px solid #888"
            _focus={{ outline: "none" }}
            iconColor="transparent"
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
          >
            {props.options.map((opt) => (
              <option value={opt.value.toString()}>
                {opt.label.toString()}
              </option>
            ))}
          </Select>
        </Box>
      );
    }
    case "multiline": {
      return (
        <Box>
          <Textarea
            w="100%"
            padding="8px 12px"
            type={props.type ?? "text"}
            _focus={{ outline: "none" }}
            border="1px solid #888"
            borderRadius={24}
            bg="transparent"
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
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
              w="100%"
              padding="8px 12px"
              type={props.type ?? "text"}
              _focus={{ outline: "none" }}
              border="1px solid #888"
              borderRadius={64}
              bg="transparent"
              value={props.value}
              placeholder={props.placeholder}
              onChange={props.onChange}
            />
            {props.inputRight !== null && (
              <InputRightElement py="8px" children={props.inputRight} />
            )}
          </InputGroup>
        </Box>
      );
    }
  }
}
