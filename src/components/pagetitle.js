import { Box, Image, Text } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import line from "../images/line/Asset 24@150x.png";


export default function PageTitle(props) {

    return (
        <Box>
            <Row style={{ margin: "36px 0px" }}>
                <Col className={props.align ?? "center"} style={{paddingLeft: 0, paddingRight: 0}}>
                    <Text textAlign={props.align ?? "center"} fontSize={ props.fontSize ?? "1.75rem" }>{props.text.toString().toUpperCase()}</Text>
                    <Image
                        src={line}
                        height="5px"
                        display="block"
                        mx={props.align === "left" ? 0 : "auto"}
                        mt="3px"
                    />
                </Col>
            </Row>
        </Box>
    );
}