import { InputProps } from "../../other/props";
import cn from 'clsx';
import s from "./InputComponent.module.scss";

export function InputComponent(props: InputProps) {
  return (
    <input
      value={props.value}
      onChange={(e) => props.changeEvent(e.target.value)}
      placeholder={props.text}
      className={cn(s.inp, props.classnames)}
    />
  );
}
