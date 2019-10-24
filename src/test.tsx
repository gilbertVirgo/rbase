import React from "react";
import ReactDOM from "react-dom";

import { View, Text } from ".";

const sets = {
    default: {
        "font-family": "monospace",
        color: "blue"
    }
}

ReactDOM.render(
    <View margin="0 auto" width="100%" max-width="500px">
        <Text font-size="75px" text-align="center" {...sets.default}>Hello world!</Text>
    </View>,
    document.getElementById("root")
);