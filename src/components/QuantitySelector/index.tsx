import * as React from "react";
import { useLayoutEffect, useRef, useState } from "react";
import IconAdd from "../Icons/IconAdd";
import IconSubtract from "../Icons/IconSubtract";
import {
  ControlButton,
  InputController,
  QuantityContainer,
} from "./index.styled";

interface ButtonStringProps {
  incrementLabel: string;
  decrementLabel: string;
  inputLabel: string;
}

const defaultButtonStringProps = {
  incrementLabel: "increment",
  decrementLabel: "decrement",
  inputLabel: "quantity input",
};

export interface QuantitySelectorProps {
  min?: number;
  initialValue?: number;
  disableInput?: boolean;
  max: number;
  strings?: ButtonStringProps;

  onChange: (quantity: number) => void;
}

export function QuantitySelector({
  min = 1,
  initialValue = 1,
  disableInput = false,
  max,
  strings = defaultButtonStringProps,
  onChange,
}: QuantitySelectorProps) {
  const { incrementLabel, decrementLabel, inputLabel } = strings;
  const getInitialValue = () => {
    if (initialValue > max) {
      return max;
    }
    if (initialValue < min) {
      return min;
    }
    return initialValue;
  };
  const [quantity, setQuantity] = useState(getInitialValue());
  const isMin = quantity <= min;
  const isMax = quantity >= max;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (isNaN(Number(input))) {
      return;
    }
    if (Number(input) >= max) {
      setQuantity(max);
      return;
    }
    setQuantity(Number(input));
  };

  const validateInput = () => {
    if (quantity <= min) {
      setQuantity(min);
    } else if (quantity >= max) {
      setQuantity(max);
    }
  };

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    onChange(quantity);
  }, [quantity]);

  return (
    <QuantityContainer>
      <ControlButton
        aria-label={decrementLabel}
        onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
        disabled={isMin}
      >
        <IconSubtract isMin={isMin} />
      </ControlButton>
      {disableInput ? (
        <div>{quantity}</div>
      ) : (
        <InputController
          type="text"
          inputMode="numeric"
          aria-label={inputLabel}
          value={quantity}
          disabled={disableInput}
          onChange={(e) => onInputChange(e)}
          onBlur={validateInput}
        />
      )}
      <ControlButton
        aria-label={incrementLabel}
        onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
        disabled={isMax}
      >
        <IconAdd isMax={isMax} />
      </ControlButton>
    </QuantityContainer>
  );
}

export default QuantitySelector;
