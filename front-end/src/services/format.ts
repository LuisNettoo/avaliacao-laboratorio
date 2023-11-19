export function formatCPF(cpf: string) {
  cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  return cpf;
}

export function formatPhoneNumber(telefone: string) {
  const numbers = telefone.replace(/\D/g, '');

  const regex = /^(\d{2})(\d{5})(\d{4})$/;
  const formattedNumber  = numbers.replace(regex, '($1) $2-$3');

  return formattedNumber;
}