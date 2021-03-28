import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CustomCircularProgress(props) {

    const [progress, updateProgress] = useState(0);

    useEffect(() => {
        const ticker2 = setTimeout(() => {
            updateProgress((previousProgress) => {
                return previousProgress + 1;
            });
        }, 18);
        if (progress >= props.total) {
            clearTimeout(ticker2);
        }
        return () => clearTimeout(ticker2);
    });

    return (
        <CircularProgress
            size={props.size}
            value={progress}
            color="primary"
            fontWeight="bold"
            thickness="8px"
        >
            <CircularProgressLabel>{progress} +</CircularProgressLabel>
        </CircularProgress>
    );
}