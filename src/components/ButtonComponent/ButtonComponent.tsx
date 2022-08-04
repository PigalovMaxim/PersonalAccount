import { ButtonProps } from '../../other/props';
import { BUTTON_TYPES } from '../../other/types';
import cn from 'clsx';
import s from './ButtonComponent.module.scss';

export function ButtonComponent(props: ButtonProps) {
    return (
        <button onClick={props.clickEvent} className={cn(s.btn, props.classnames, props.type === BUTTON_TYPES.withoutBorders ? s.withoutBorders : '')}>
            {props.text}
        </button>
    )
}