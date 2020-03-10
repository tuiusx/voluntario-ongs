const validateField = (field, massage) => {
    if (!field.value && field.value.trim()  == "") {
        alert(massage)
        return false
    }
    return true
}

const validateNotice = (form) => {
    
    return validateField(form.email, "Email deve ser informado") && 
        validateField(form.descricao, "Descrição deve ser informado") &&
        validateField(form.titulo, "Título deve ser informado") && 
        validateField(form.cidade, "Cidade deve ser informado")
}

const validateSeach = (form) => {
    return validateField(form.key, "Informe o que deseja buscar?")
}