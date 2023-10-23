import React, { useState } from "react";
import useStyles from "../../styles/styles";
import Box from "@mui/material/Box";
import Field from "../Field";
import { Button } from "@mui/material";

const FirstTask = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    pib: "",
    group: "",
    faculty: "",
    address: "",
    telegram: "",
  });

  const [errors, setErrors] = useState({
    pib: "",
    group: "",
    faculty: "",
    address: "",
    telegram: "",
  });

  const validatePib = (value: string) => {
    const pibPattern = /^[А-ЯІЇЄҐа-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐа-яіїєґ]\.$/;
    return pibPattern.test(value);
  };
  const validateGroup = (value: string) => {
    const groupPattern = /^[А-ЯІЇЄҐа-яіїєґ]{2}-\d{2}$/;
    return groupPattern.test(value);
  };
  const validateFaculty = (value: string) => {
    const facultyPattern = /^[А-Я]{4}$/;
    return facultyPattern.test(value);
  };
  const validateAddress = (value: string) => {
    const addressPattern = /^м\.\s\d{6}$/;
    return addressPattern.test(value);
  };
  const validateTelegramUsername = (value: string) => {
    const telegramPattern = /^@[A-Za-z]_[A-Za-z]{5}$/;
    return telegramPattern.test(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "pib") {
      const isValid = validatePib(value);
      setErrors({
        ...errors,
        pib: isValid ? "" : "Must be ТТТТТТ Т.Т.",
      });
    } else if (name === "group") {
      const isValid = validateGroup(value);
      setErrors({
        ...errors,
        group: isValid ? "" : "Must be ТТ-ЧЧ",
      });
    } else if (name === "faculty") {
      const isValid = validateFaculty(value);
      setErrors({
        ...errors,
        faculty: isValid ? "" : "Must be ТТТТ",
      });
    } else if (name === "address") {
      const isValid = validateAddress(value);
      setErrors({
        ...errors,
        address: isValid ? "" : "Must be м. ЧЧЧЧЧЧ",
      });
    } else if (name === "telegram") {
      const isValid = validateTelegramUsername(value);
      setErrors({
        ...errors,
        telegram: isValid ? "" : "Must be @Т_ТТТТТ",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePib(formData.pib)) {
      console.log("ПІБ валиден:", formData.pib);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Форма для заповнення</h1>
        <form onSubmit={handleSubmit} className={"box__styles"}>
          <Box className={"box__styles"}>
            <Field
              className={!errors.pib ? classes.root : ""}
              label={"ПІБ"}
              value={formData.pib}
              onChange={handleChange}
              error={!!errors.pib}
              helperText={errors.pib}
              name={"pib"}
            />
            <Field
              className={!errors.group ? classes.root : ""}
              label={"Група"}
              value={formData.group}
              onChange={handleChange}
              error={!!errors.group}
              helperText={errors.group}
              name={"group"}
            />
            <Field
              className={!errors.faculty ? classes.root : ""}
              label={"Факультет"}
              value={formData.faculty}
              onChange={handleChange}
              error={!!errors.faculty}
              helperText={errors.faculty}
              name={"faculty"}
            />
            <Field
              className={!errors.address ? classes.root : ""}
              label={"Адреса"}
              value={formData.address}
              onChange={handleChange}
              error={!!errors.address}
              helperText={errors.address}
              name={"address"}
            />
            <Field
              className={!errors.telegram ? classes.root : ""}
              label={"Telegram"}
              value={formData.telegram}
              onChange={handleChange}
              error={!!errors.telegram}
              helperText={errors.telegram}
              name={"telegram"}
            />
            <Button variant="contained" color="primary" type="submit">
              Підтвердити
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default FirstTask;
