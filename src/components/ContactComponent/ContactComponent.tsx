import { ContactProps } from "../../other/props";
import { BUTTON_TYPES } from "../../other/types";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import s from "./ContactComponent.module.scss";

export function ContactComponent(props: ContactProps) {
  const { changeContactClickHandlerContact, contact, deleteContactClickHandler} = props
  return (
    <li key={`id_${contact.id}_name_${contact.name}`} className={s.contact}>
      <label className={s.name}>Имя: {contact.name}</label>
      <label className={s.phone}>Номер: {contact.phone}</label>
      <div className={s.contactControls}>
        <ButtonComponent
          clickEvent={() =>
            changeContactClickHandlerContact(
              contact.id,
              contact.name,
              contact.phone
            )
          }
          classnames={s.btn}
          type={BUTTON_TYPES.standart}
          text="Изменить"
        />
        <ButtonComponent
          clickEvent={() => deleteContactClickHandler(contact.id)}
          classnames={s.btn}
          type={BUTTON_TYPES.standart}
          text="Удалить"
        />
      </div>
    </li>
  );
}
