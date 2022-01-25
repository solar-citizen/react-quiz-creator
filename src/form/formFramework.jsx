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
