import { PhoneContext } from "@/context/PhoneBookContext";
import { Phone } from "@/interfaces/phone";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Form() {
  const {
    isShowForm,
    closeForm,
    handleAddPhone,
    handleUpdatePhone,
    handleDeletePhone,
    editingPhone,
  } = useContext(PhoneContext);

  const [phone, setPhone] = useState<Phone>({
    fullName: "",
    phone: "",
    email: "",
  });

  // Khi bấm edit thì fill dữ liệu vào form
  useEffect(() => {
    if (editingPhone) {
      setPhone(editingPhone);
    } else {
      setPhone({ fullName: "", phone: "", email: "" });
    }
  }, [editingPhone]);

  const handleSubmit = () => {
    if (!phone.fullName || !phone.phone) return;
    if (editingPhone) {
      handleUpdatePhone?.(phone);
      Alert.alert("Thành công", "Cập nhật liên hệ thành công");
    } else {
      handleAddPhone?.(phone);
      Alert.alert("Thành công", "Thêm liên hệ thành công");
    }
  };

  const handleDelete = () => {
    if (editingPhone) {
      Alert.alert(
        "Xác nhận",
        "Bạn có chắc chắn muốn xóa liên hệ này không?",
        [
          {
            text: "Hủy",
            style: "cancel",
          },
          {
            text: "Có",
            onPress: () => {
              handleDeletePhone?.(editingPhone);
              Alert.alert("Thành công", "Xóa liên hệ thành công");
            },
            style: "destructive",
          },
        ],
        { cancelable: true }
      );
    }
  };

  return (
    isShowForm && (
      <View style={styles.overlay}>
        <View style={styles.form}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>
              {editingPhone ? "Cập nhật liên hệ" : "Thêm mới liên hệ"}
            </Text>
            <Button title="Đóng" onPress={closeForm} />
          </View>

          <View style={styles.formBody}>
            <TextInput
              style={styles.input}
              value={phone.fullName}
              onChangeText={(value) => setPhone({ ...phone, fullName: value })}
              placeholder="Tên"
            />
            <TextInput
              style={styles.input}
              value={phone.phone}
              onChangeText={(value) => setPhone({ ...phone, phone: value })}
              placeholder="Số điện thoại"
            />
            <TextInput
              style={styles.input}
              value={phone.email}
              onChangeText={(value) => setPhone({ ...phone, email: value })}
              placeholder="Email (Không bắt buộc)"
            />
          </View>

          <View style={styles.formFooter}>
            <Button
              title={editingPhone ? "Cập nhật" : "Thêm"}
              onPress={handleSubmit}
            />
            {editingPhone && (
              <Button title="Xóa liên hệ" color="red" onPress={handleDelete} />
            )}
          </View>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  form: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  formHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingBottom: 16,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  formBody: {
    marginVertical: 16,
    flexDirection: "column",
    gap: 20,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  formFooter: {
    gap: 16,
  }
});
