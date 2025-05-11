import { FC, ChangeEvent , useRef, useEffect} from "react";

export type CheckType = boolean | 'indeterminate';
export type OnChangePayload = {
  checked: boolean;
  id: string;
}
export type OnChangeEvent = ({ checked, id }: OnChangePayload) => void;
export interface BaseCheckBoxI {
  id: string;
  name: string;
  checked: CheckType;
  indeterminate?: boolean;
  onChange: OnChangeEvent;
}
export const BaseCheckbox: FC<BaseCheckBoxI> = ({
  id,
  name,
  checked,
  indeterminate ,
  onChange,
}) => {
  const ref= useRef<HTMLInputElement>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.currentTarget.checked;
    onChange({ checked, id });
  };
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate, checked]);

  return (
    <label htmlFor={name}>
      <input
        ref={ref}
        name={name}
        type="checkbox"
        className="partial"
        checked={checked === "indeterminate" ? false : checked}
        onChange={handleChange}
      />
      {name}
    </label>
  );
};
