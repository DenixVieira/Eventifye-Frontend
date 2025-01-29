export const normalizeText = (input: string): string => {
	return input
		.normalize("NFD")
		.replace(/\p{Diacritic}/gu, "")
		.toLowerCase();
};

export const formatDateRFC3339 = (date: Date) => {
	const isoString = date.toISOString(); // Retorna a data no formato ISO 8601
	return isoString.slice(0, 19) + "Z"; // Remove os segundos e milissegundos, deixando só a data e hora
};
