export const employeeImages: { [key: string]: string } = {
  'Giovana L. Arruda': '/imagens/Female-1.svg',
  'Vanessa Machado': '/imagens/Female-2.svg',
  'Juliana Borba': '/imagens/Female-3.svg',
  'Josiane Dias': '/imagens/Female-4.svg',
  'Caroline Rocha da Silva': '/imagens/Female-5.svg',
  'João Pedro Farias': '/imagens/Male-1.svg',
  'Reginaldo Felipe': '/imagens/Male-2.svg',
  'Gabriel D.': '/imagens/Male-3.svg',
  'Silvio de Carvalho': '/imagens/Male-4.svg',
  'Ormar A. Amaral': '/imagens/Male-5.svg'
};

export const getEmployeeImage = (name: string): string => {
  return employeeImages[name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0500FF&color=fff&size=150`;
};