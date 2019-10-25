import React from "react";
import { all, parse } from "styluss";

import ReactDOM from "react-dom";

const sets = {
    default: {
        "font-family": "monospace",
        color: "blue"
    }
}



interface TextProps extends all {
    children?: JSX.Element | JSX.Element[] | string // Include elements in the case of <b>, <i>, etc.
}

interface DefaultProps extends all {
    children?: JSX.Element | JSX.Element[]
}

interface ImageProps extends all {
    src?: string,
    alt?: string
}

interface ButtonProps extends DefaultProps {
    onPointerDown?: any,
    onPointerUp?: any,
    onClick?: any,
    onTouchStart?: any,
    onTouchEnd?: any
}

export const Text = (props: TextProps) => (
    <p style={parse(props)}>{props.children}</p>
);

export const View = (props: DefaultProps) => (
    <div style={parse(props)}>{props.children}</div>
);

export const Image = (props: ImageProps) => (
    <img style={parse(props)} src={props.src} alt={props.alt} />
);

export const Button = (props: ButtonProps) => (
    <div
        style={parse(props)}
        onPointerDown={props.onPointerDown}
        onPointerUp={props.onPointerUp}
        onClick={props.onClick}
        onTouchStart={props.onTouchStart}
        onTouchEnd={props.onTouchEnd}>
        {props.children}
    </div>
);

ReactDOM.render(
    <View margin="0 auto" width="100%" max-width="500px">
        <Text font-size="75px" text-align="center" {...sets.default}>Hello world!</Text>
    </View>,
    document.getElementById("root")
);