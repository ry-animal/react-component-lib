import { render } from "../../util/test-utils";
import { MultipleSelect } from "./MultipleSelect";
import { stateReducer } from "./MultipleSelect.reducer";
import * as Styled from "./MultipleSelect.styled";

describe("MultipleSelect", () => {
  it('should render "MultipleSelect"', () => {
    const { getByRole } = render(<MultipleSelect />);
    expect(getByRole("listbox")).toBeInTheDocument();
  });

  it("should render with label prop", () => {
    const tree = render(<MultipleSelect items={[]} label="MultipleSelect" />);
    expect(tree.getByText("MultipleSelect")).toBeDefined();
  });

  it("should render with items prop", () => {
    const tree = render(
      <MultipleSelect
        items={[
          {
            label: "Genesis",
            checked: true,
          },
        ]}
        label="MultipleSelect"
      />
    );
    expect(tree.getByText("Genesis")).toBeDefined();
  });

  it("should render with maxWidth prop", () => {
    const tree = render(
      <MultipleSelect
        items={[
          {
            label: "Genesis",
            checked: true,
          },
        ]}
        label="MultipleSelect"
        maxWidth="300px"
      />
    );
    expect(tree.getByRole("listbox")).toHaveStyleRule("max-width", "300px");
  });

  it("should call onItemSelect prop with correct item when item is checked", () => {
    const onItemSelect = jest.fn();
    const tree = render(
      <MultipleSelect
        items={[
          {
            label: "Core",
            checked: true,
          },
        ]}
        label="MultipleSelect"
        onItemSelect={onItemSelect}
      />
    );
    tree.getByText("Core").click();
    expect(onItemSelect).toHaveBeenCalledTimes(1);
    expect(onItemSelect).toHaveBeenCalledWith({
      label: "Core",
      checked: true,
    });
  });

  it("should call onItemSelect prop with correct item when item is unchecked", async () => {
    const onItemSelect = jest.fn();
    const tree = render(
      <MultipleSelect
        items={[
          {
            label: "Core",
            checked: false,
          },
        ]}
        label="MultipleSelect"
        onItemSelect={onItemSelect}
      />
    );
    await tree.getByText("MultipleSelect").click();
    await tree.getByText("Core").click();
    expect(onItemSelect).toHaveBeenCalledTimes(1);
    expect(onItemSelect).toHaveBeenCalledWith({
      label: "Core",
      checked: false,
    });
  });

  it("should display all items when label is clicked", async () => {
    const tree = render(
      <MultipleSelect
        items={[
          {
            label: "Core",
            checked: false,
          },
          {
            label: "Genesis",
            checked: false,
          },
        ]}
        label="MultipleSelect"
      />
    );

    expect(tree.queryByText("Core")).toBeNull();
    expect(tree.queryByText("Genesis")).toBeNull();

    await tree.getByText("MultipleSelect").click();

    expect(tree.getByText("Core")).toBeDefined();
    expect(tree.getByText("Genesis")).toBeDefined();
  });

  it("dropdown should display correct background color when isOpen is true", () => {
    const tree = render(<Styled.Dropdown isOpen={true} />);
    expect(tree.getByRole("list")).toHaveStyleRule(
      "background-color",
      "#EEEEEE"
    );
  });

  it("dropdown should display correct background color when isOpen is false", () => {
    const tree = render(<Styled.Dropdown isOpen={false} />);
    expect(tree.getByRole("list")).toHaveStyleRule(
      "background-color",
      "#F9F9F9"
    );
  });
});

describe("MultipleSelect stateReducer", () => {
  enum UseSelectStateChangeTypes {
    MenuBlur = "__menu_blur__",
    MenuMouseLeave = "__menu_mouse_leave__",
    ItemClick = "__item_click__",
    ItemMouseMove = "__item_mouse_move__",
  }

  const state = {
    highlightedIndex: 0,
    selectedItem: null,
    isOpen: false,
    inputValue: "",
  };

  it("should return correct changes when type is ItemClick", () => {
    const actionAndChanges = {
      changes: {
        isOpen: false,
      },
      type: UseSelectStateChangeTypes.ItemClick,
    };

    expect(stateReducer({ ...state }, actionAndChanges)).toEqual({
      isOpen: true,
    });
  });

  it("should return correct changes when type is MenuBlur", () => {
    const actionAndChanges = {
      changes: {
        isOpen: false,
      },
      type: UseSelectStateChangeTypes.MenuBlur,
    };
    expect(stateReducer({ ...state }, actionAndChanges)).toEqual({
      isOpen: true,
    });
  });

  it("should return correct changes when type is MenuMouseLeave", () => {
    const actionAndChanges = {
      changes: {
        isOpen: true,
      },
      type: UseSelectStateChangeTypes.MenuMouseLeave,
    };
    expect(stateReducer({ ...state }, actionAndChanges)).toEqual({
      isOpen: false,
    });
  });

  it("should return correct changes when type is not ItemClick, MenuBlur or MenuMouseLeave", () => {
    const actionAndChanges = {
      changes: {
        isOpen: true,
      },
      type: UseSelectStateChangeTypes.ItemMouseMove,
    };

    expect(stateReducer({ ...state }, actionAndChanges)).toEqual(
      actionAndChanges.changes
    );
  });
});
