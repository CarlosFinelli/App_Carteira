const formatterCurta = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});

export function dateToDMY(date: string) {
    let data = new Date(date)
    let formattedDate = formatterCurta.format(data)
    return formattedDate;
}