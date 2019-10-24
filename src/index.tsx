import React from "react";
import { all, parse } from "styluss";

interface ImageProps {
    src?: string,
    alt?: string
}

export const Text = (props: { children?: string } & all) => {
    return <p style={parse(props)}>{props.children}</p>
}

export const View = (props: { children?: JSX.Element | JSX.Element[] } & all) => {
    return <div style={parse(props)}>{props.children}</div>
}

export const Image = (props: ImageProps & all) => {
    return <img src={props.src} alt={props.alt} style={parse(props)} />
}

