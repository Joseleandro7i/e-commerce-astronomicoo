export const validateFormFields = () => {
    const validator = new JustValidate('#formSingup');
    validator.addField('#form__name', [
      { rule: 'required', errorMessage: 'É necessário preencher este campo com o seu nome' },
      { rule: 'minLength', value: 3 },
      { rule: 'customRegexp', value: /^[A-Za-z\sÀ-ÿ]+$/, errorMessage: 'Utilize apenas letras e evite o uso de certos caracteres especiais' },
    ]);
  
    validator.addField('#form__cidade', [
      { rule: 'required', errorMessage: 'Por favor informe sua cidade' },
      { rule: 'minLength', value: 3 },
      { rule: 'customRegexp', value: /^[A-Za-z\sÀ-ÿ]+$/, errorMessage: 'Utilize apenas letras e evite o uso de certos caracteres especiais' },
    ]);
  
    validator.addField('#form__idade', [
      { rule: 'required', errorMessage: 'Por favor informe sua idade' },
      { rule: 'minLength', value: 1 },
      { rule: 'customRegexp', value: /^[0-9]+$/, errorMessage: 'Utilize apenas números e evite o uso de caracteres especiais e letras' },
    ]);
  
    validator.addField('#form__senha', [
      { rule: 'required', errorMessage: 'Por favor crie sua senha' },
      { rule: 'minLength', value: 8 },
      { rule: 'strongPassword' }
    ]);
  
    return validator;
  };
  