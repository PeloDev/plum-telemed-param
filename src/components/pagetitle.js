import { Box, Image, Text } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import line from "../images/line/Asset 24@150x.png";


export default function PageTitle(props) {

    return (
        <Box>
            <Row style={{ margin: "36px 0px" }}>
                <Col className="center">
                    <Text textAlign="center" fontSize={ props.fontSize ?? "1.75rem" }>{props.text.toString().toUpperCase()}</Text>
                    <Image
                        src={line}
                        height="5px"
                        display="block"
                        mx="auto"
                        mt="3px"
                    />
                </Col>
            </Row>
        </Box>
    );
}