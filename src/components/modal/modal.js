import { Modal as ModalBase } from "@material-ui/core"
import React from "react"
import { useDispatch } from "react-redux"
import { addConversation } from "../../store"
import styles from "./modal.module.css"



const contacts = Array.from({ length: 50 }, (_, i) => `room${i}`);


export const AddContactModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const handleContactClick = (contact) => {
    dispatch(addConversation(contact));
    onClose();
  };

  return (
    <ModalBase open={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Добавить учасников</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact} onClick={() => handleContactClick(contact)}>{contact}</li>
          ))}
        </ul>
      </div>
    </ModalBase>
  )
};
