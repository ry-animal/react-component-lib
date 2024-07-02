/*
 * The `react/eslint` rule has a bug where it fires false positivs when using
 * union types within forward-refs (see: https://github.com/yannickcr/eslint-plugin-react/issues/3140)
 */
/* eslint-disable react/prop-types */

import * as React from "react";
import { InputHTMLAttributes } from "react";
import { Text } from "../../Text";
import * as Styled from "./index.styled";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: string;
  error?: string;
  asTextArea?: boolean;
  annotation?: string;
  onBlur?:
    | React.FocusEventHandler<HTMLInputElement>
    | React.FocusEventHandler<HTMLTextAreaElement>;
}

export const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    {
      label,
      name,
      error,
      asTextArea,
      annotation,
      type,
      onChange,
      ...props
    }: InputProps,
    ref
  ) => {
    const InputComponent: React.ElementType = asTextArea
      ? Styled.TextArea
      : Styled.Input;

    // Treat type 'number' as text input to prevent scrolling numbers
    const inputType = type === "number" ? "text" : type;

    // For number type inputs, call onChange only if valid number
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (type === "number") {
        if (e.target.value.charAt(0) === ".") {
          e.target.value = `0${e.target.value}`;
        }
        if (isNaN(Number(e.target.value))) {
          return;
        }
      }
      onChange?.(e);
    };

    return (
      <Styled.InputContainer>
        <Styled.InputLabel htmlFor={name}>{label}</Styled.InputLabel>
        <Styled.InputWrapper>
          <InputComponent
            {...props}
            ref={ref}
            id={name}
            name={name}
            isError={!!error}
            aria-invalid={error ? "true" : "false"}
            aria-label={label}
            type={inputType}
            onChange={handleOnChange}
          />
          {annotation && (
            <Styled.AnnotationWrapper>
              <Text text={annotation} variant="Body2" weight="700" />
            </Styled.AnnotationWrapper>
          )}
        </Styled.InputWrapper>

        {error && <Styled.InputError role="alert">{error}</Styled.InputError>}
      </Styled.InputContainer>
    );
  }
);
Input.displayName = "Input";
