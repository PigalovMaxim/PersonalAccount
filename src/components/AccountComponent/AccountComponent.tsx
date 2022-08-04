import { useState } from "react";
import cn from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { BUTTON_TYPES, IContact } from "../../other/types";
import { RootState } from "../../store/store";
import {
  addContact,
  changeContact,
  deleteContact,
} from "../../store/slices/contactsSlice";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { InputComponent } from "../InputComponent/InputComponent";
import s from "./AccountComponent.module.scss";
import { ContactComponent } from "../ContactComponent/ContactComponent";

export function AccountComponent() {
  const [createNameValue, setCreateNameValue] = useState<string>("");
  const [createPhoneValue, setCreatePhoneValue] = useState<string>("");
  const [changeNameValue, setChangeNameValue] = useState<string>("");
  const [changePhoneValue, setChangePhoneValue] = useState<string>("");
  const [changeContactId, setChangeContactId] = useState<number>(0);
  const [filterInputValue, setFilterInputValue] = useState<string>("");
  const [changeContactFormClassnames, setChangeContactFormClassnames] =
    useState<string>(s.hide);
  const dispatch = useDispatch();
  const contacts = useSelector(
    (state: RootState) => state.contactsSlice.contacts
  );
  function addContactClickHandler(): void {
    if (createNameValue !== "" && createPhoneValue !== "")
      dispatch(
        addContact({
          id: contacts.length,
          name: createNameValue,
          phone: createPhoneValue,
        })
      );
  }
  function changeContactClickHandlerForm(): void {
    if (changeNameValue !== "" && changePhoneValue !== "") {
      dispatch(
        changeContact({
          id: changeContactId,
          name: changeNameValue,
          phone: changePhoneValue,
        })
      );
      setChangeContactFormClassnames(s.hide);
    }
  }
  function changeContactClickHandlerContact(
    id: number,
    name: string,
    phone: string
  ): void {
    setChangeContactId(id);
    setChangeNameValue(name);
    setChangePhoneValue(phone);
    setChangeContactFormClassnames("");
  }
  function deleteContactClickHandler(id: number): void {
    dispatch(deleteContact(id));
  }
  function filterContacts(): IContact[] {
    return contacts.filter((value) => {
      if (filterInputValue === "") return true;
      if (
        (value.name.toLowerCase().includes(filterInputValue.toLowerCase()) ||
          value.phone.includes(filterInputValue)) &&
        filterInputValue !== ""
      )
        return true;
      return false;
    });
  }
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Аккаунт</h1>
      <InputComponent
        changeEvent={setFilterInputValue}
        text="Фильтр контактов"
        value={filterInputValue}
      />
      <ul className={s.contacts}>
        {filterContacts().map((contact) => (
          <ContactComponent
            key={`id${contact.id}name${contact.name}`}
            contact={contact}
            changeContactClickHandlerContact={changeContactClickHandlerContact}
            deleteContactClickHandler={deleteContactClickHandler}
          />
        ))}
      </ul>
      <div className={s.controls}>
        <InputComponent
          classnames={s.input}
          changeEvent={setCreateNameValue}
          text="Имя"
          value={createNameValue}
        />
        <InputComponent
          classnames={s.input}
          changeEvent={setCreatePhoneValue}
          text="Телефон"
          value={createPhoneValue}
        />
        <ButtonComponent
          clickEvent={addContactClickHandler}
          classnames={s.btn}
          type={BUTTON_TYPES.standart}
          text="Создать"
        />
      </div>
      <div className={cn(s.changeContact, changeContactFormClassnames)}>
        <div className={s.controls}>
          <InputComponent
            classnames={s.input}
            changeEvent={setChangeNameValue}
            text="Имя"
            value={changeNameValue}
          />
          <InputComponent
            classnames={s.input}
            changeEvent={setChangePhoneValue}
            text="Телефон"
            value={changePhoneValue}
          />
          <ButtonComponent
            clickEvent={changeContactClickHandlerForm}
            classnames={s.btn}
            type={BUTTON_TYPES.standart}
            text="Изменить"
          />
        </div>
      </div>
    </div>
  );
}
