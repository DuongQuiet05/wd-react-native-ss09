import { Phone } from "@/interfaces/phone";
import React, { useState } from "react";
import PhoneBook from "@/components/PhoneBook";

interface InitialContext {
  isShowForm: boolean;
  openForm?: () => void;
  closeForm?: () => void;
  handleAddPhone?: (phone: Phone) => void;
  handleUpdatePhone?: (phone: Phone) => void;
  handleDeletePhone?: (phone: Phone) => void;
  editPhone?: (phone: Phone) => void;
  phones: Phone[];
  editingPhone: Phone | null;
}

const PhoneContext = React.createContext<InitialContext>({
  isShowForm: false,
  phones: [],
  editingPhone: null,
});

const PhoneBookProvider = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [editingPhone, setEditingPhone] = useState<Phone | null>(null);

  const openForm = () => setIsShowForm(true);
  const closeForm = () => {
    setIsShowForm(false);
    setEditingPhone(null);
  };

  const handleAddPhone = (phone: Phone) => {
    setPhones((prev) => [...prev, phone]);
    closeForm();
  };

  const handleUpdatePhone = (phone: Phone) => {
    setPhones((prev) =>
      prev.map((p) =>
        p.phone === editingPhone?.phone ? phone : p
      )
    );
    closeForm();
  };

  const handleDeletePhone = (phone: Phone) => {
    setPhones((prev) => prev.filter((p) => p.phone !== phone.phone));
    closeForm();
  };

  const editPhone = (phone: Phone) => {
    setEditingPhone(phone);
    setIsShowForm(true);
  };

  return (
    <PhoneContext.Provider
      value={{
        isShowForm,
        openForm,
        closeForm,
        handleAddPhone,
        handleUpdatePhone,
        handleDeletePhone,
        editPhone,
        phones,
        editingPhone,
      }}
    >
      <PhoneBook />
    </PhoneContext.Provider>
  );
};

export default PhoneBookProvider;
export { PhoneContext };
