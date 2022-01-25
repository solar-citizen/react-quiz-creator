export function createControl(config, validation) {
  return {
    ...config,
    validation,
    // если передали набор правил валидации, то
    // valid - false, т.к. есть определенный набор правил
    // и изначальное состояние не валидно
    valid: !validation,
    touched: false,
    value: '',
  };
}

export function validate(value, validationRules = null) {
  if (!validationRules) {
    return true;
  }

  let isValid = true;

  if (validationRules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  return isValid;
}

export function validateForm(formControls) {
  let isFormValid = true;

  for (let control in formControls) {
    if (formControls.hasOwnProperty(control)) {
      isFormValid = formControls[control].valid && isFormValid;
    }
  }

  return isFormValid;
}
