import React, { forwardRef } from "react";
import { all, parse } from "styluss";

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

export const Text = forwardRef((props: TextProps, ref: any) => (
    <p ref={ref} style={parse(props)}>{props.children}</p>
));

export const View = forwardRef((props: DefaultProps, ref: any) => (
    <div ref={ref} style={parse(props)}>{props.children}</div>
));

export const Image = forwardRef((props: ImageProps, ref: any) => (
    <img ref={ref} style={parse(props)} src={props.src} alt={props.alt} />
));

export const Button = forwardRef((props: ButtonProps, ref: any) => (
    <div
        ref={ref}
        style={parse(props)}
        onPointerDown={props.onPointerDown}
        onPointerUp={props.onPointerUp}
        onClick={props.onClick}
        onTouchStart={props.onTouchStart}
        onTouchEnd={props.onTouchEnd}>
        {props.children}
    </div>
));