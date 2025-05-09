import {useState} from 'react';
import { NestedCheckbox , CheckBoxI, OnChangeChildEvent} from "./NestedCheckbox";
import rawData from './data.json'

export const NestedCheckboxExample = ()=>{
    const [data, setData] = useState(rawData as unknown as CheckBoxI[]);
    const onChange: OnChangeChildEvent = ({ id, checked, children }) => {
        setData((prev) =>
          prev.map((d) => (d.id === id ? { ...d, checked, children } : d))
        );
    };
    return (
      <ul className='checkbox-list'>
        {data.map(({ id, name, checked, children }) => (
          <li key={id}>
            <NestedCheckbox
              id={id}
              name={name}
              checked={checked}
              children={children}
              onChange={onChange}
            />
          </li>
        ))}
      </ul>
    );
}