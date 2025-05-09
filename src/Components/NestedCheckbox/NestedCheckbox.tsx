import { FC, useRef, useState, useEffect } from "react";
import { BaseCheckbox, BaseCheckBoxI, OnChangeEvent } from "./BaseCheckbox";
import "./NestedCheckbox.css";

const recursiveToggleCheck = (checked: boolean, children?: CheckBoxI[]) => {
  if (!children) return;
  for (const cd of children) {
    if (cd.children) {
      recursiveToggleCheck(checked, cd.children);
    } else {
      cd.checked = checked;
    }
  }
};

type OnChangePayload = {
  id: string;
  checked: boolean;
  children?: CheckBoxI[];
};
export type OnChangeChildEvent = (data: OnChangePayload) => void;

export interface CheckBoxI extends BaseCheckBoxI {
  children?: CheckBoxI[];
  onChange: (data: OnChangePayload) => void;
}
export const NestedCheckbox: FC<CheckBoxI> = ({
  id,
  name,
  checked,
  children,
  onChange,
}) => {
  const state = useRef<OnChangePayload>({ id, checked, children });
  const [indeterminate, setIndeterminate] = useState(false);
  useEffect(() => {
    state.current.checked = checked;
    state.current.children = children;
  }, [checked, children]);

  const handleChange: OnChangeEvent = ({ checked }) => {
    recursiveToggleCheck(checked, state.current.children);
    onChange({ ...state.current, checked });
  };
  const handleChildChange: OnChangeChildEvent = ({ id, checked, children }) => {
    if (!state.current.children) {
      return;
    }
    const changedItem = state.current!.children?.find((item) => item.id === id);
    if (changedItem) {
      changedItem.checked = checked;
      if (changedItem.children?.length) {
        changedItem.children = children;
      }
      const itemsCount = state.current.children.length;
      const unchecked = state.current.children.filter((item) => !item.checked);

      setIndeterminate(unchecked.length > 0 && unchecked.length < itemsCount);
        
      onChange({
        ...state.current,
        checked,
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
