import userEvent from "@testing-library/user-event";
import { QuantitySelector } from ".";
import { fireEvent, render, screen, waitFor } from "../../util/test-utils";

describe("<QuantitySelector />", () => {
  const baseProps = {
    max: 10,
    onChange: () => {},
  };

  test("Disabled input doesn't exist when disabled", () => {
    render(<QuantitySelector {...baseProps} disableInput={true} />);

    userEvent.click(screen.getAllByRole("button")[0]);

    expect(screen.queryByRole("input")).toBeNull();
  });

  test("onChange doesn't get called when already at limit", () => {
    const onChange = jest.fn();
    render(
      <QuantitySelector
        initialValue={1}
        min={1}
        {...baseProps}
        onChange={onChange}
      />
    );

    userEvent.click(screen.getAllByRole("button")[0]);
    expect(onChange).not.toBeCalled();
  });

  test("onChange gets called as expected", () => {
    const onChange = jest.fn();
    const expectedIncrement = 2;
    const expectedDecrement = 1;

    render(<QuantitySelector {...baseProps} onChange={onChange} />);

    userEvent.click(screen.getAllByRole("button")[1]);
    expect(onChange).toBeCalledWith(expectedIncrement);

    userEvent.click(screen.getAllByRole("button")[0]);
    expect(onChange).toBeCalledWith(expectedDecrement);
  });

  test("will default to max value", () => {
    render(<QuantitySelector {...baseProps} max={5} initialValue={6} />);
    expect(screen.getByDisplayValue("5")).toBeTruthy();
  });

  test("will default to min value", () => {
    render(<QuantitySelector {...baseProps} initialValue={5} min={8} />);
    expect(screen.getByDisplayValue("8")).toBeTruthy();
  });

  test("onChange works correctly", async () => {
    render(
      <QuantitySelector {...baseProps} initialValue={5} min={8} max={10} />
    );
    const input = screen.getByRole("textbox", { name: /quantity input/u });

    await waitFor(() => {
      expect(screen.getByDisplayValue("8")).toBeTruthy();
    });

    fireEvent.change(input, {
      target: { value: 11 },
    });
    fireEvent.blur(input);
    await waitFor(() => {
      expect(screen.getByDisplayValue("10")).toBeTruthy();
    });

    fireEvent.change(input, {
      target: { value: 2 },
    });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByDisplayValue("8")).toBeTruthy();
    });

    fireEvent.change(input, {
      target: { value: 9 },
    });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByDisplayValue("9")).toBeTruthy();
    });
  });

  test("onChange works correctly", async () => {
    render(<QuantitySelector {...baseProps} initialValue={1} />);
    const input = screen.getByRole("textbox", { name: /quantity input/u });

    await waitFor(() => {
      expect(screen.getByDisplayValue("1")).toBeTruthy();
    });

    fireEvent.change(input, {
      target: { value: "abc" },
    });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByDisplayValue("1")).toBeTruthy();
    });
  });
});
