import { FC, useMemo } from "react";
import { BaseCheckbox, BaseCheckBoxI, OnChangeEvent } from "./BaseCheckbox";
import "./NestedCheckbox.css";

export type OnChangePayload = {
  id: string;
  checked: BaseCheckBoxI["checked"];
  children?: CheckBoxI[];
};
export type OnChangeChildEvent = (data: OnChangePayload) => void;

export interface CheckBoxI extends BaseCheckBoxI {
  children?: CheckBoxI[];
  onChange: (data: OnChangePayload) => void;
}

const recursiveToggleCheck = (checked: boolean, state: OnChangePayload) => {
  state.checked = checked;
  if (!state.children) return;
  for (const child of state.children) {
    recursiveToggleCheck(checked, child);
  }
};

const isIndeterminate = (children: CheckBoxI["children"]) => {
  if (!children?.length) return false;
  const unchecked = children.filter((item) => !item.checked);
  return unchecked.length > 0 && unchecked.length < children.length;
};

export const NestedCheckbox: FC<CheckBoxI> = ({
  id,
  name,
  checked,
  children,
  onChange,
}) => {
  const state: OnChangePayload = { id, checked, children: children?.slice() };
  const indeterminate = useMemo(() => isIndeterminate(children), [children]);

  const handleChange: OnChangeEvent = ({ checked }) => {
    recursiveToggleCheck(checked, state);
    onChange({ ...state, checked });
  };

  const handleChildChange: OnChangeChildEvent = ({ id, checked, children }) => {
    const changedItem = state.children?.find((item) => item.id === id);
    if (changedItem) {
      changedItem.checked = checked;
      if (changedItem.children?.length) {
        changedItem.children = children;
      }

      onChange({
        ...state,
        checked: isIndeterminate(children) ? "indeterminate" : checked,
      });
    }
  };

  const renderChildren = children?.length ? (
    <ul className="checkbox-list">
      {children.map(({ id, name, children, checked }) => (
        <li key={id}>
          <NestedCheckbox
            id={id}
            name={name}
            children={children}
            checked={checked}
            onChange={handleChildChange}
          />
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div>
      <div>
        <BaseCheckbox
          id={id}
          name={name}
          checked={checked}
          indeterminate={indeterminate}
          onChange={handleChange}
        />
      </div>
      {renderChildren}
    </div>
  );
};
