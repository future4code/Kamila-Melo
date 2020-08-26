import moment from 'moment'

moment.locale("pt-br")

type event = {
    name: string,
    description: string,
    dateInit: moment.Moment,
    dateEnd: moment.Moment
}

const allEvents: event[] = [
	{
		name: "Reunião",
		description: "Reunião muito importante",
		dateInit: moment("25/09/2020 15:00", "DD/MM/YYYY HH:mm"),
        dateEnd: moment("25/09/2020 16:00", "DD/MM/YYYY HH:mm")
	},
	{
		name: "Reuniãozinha",
		description: "Reunião não muito importante",
		dateInit: moment("26/10/2020 17:00", "DD/MM/YYYY HH:mm"),
        dateEnd: moment("26/10/2020 18:00", "DD/MM/YYYY HH:mm")
	}
]

function information () {
    allEvents.map ((event: event) => {
        const duration = event.dateEnd.diff(event.dateInit, "minutes")
        const today = moment();
        const daysUntilEvent = event.dateEnd.diff(today, "days")
        return (
            console.log("Nome: ", event.name),
            console.log("Horário de início: ", event.dateInit.format("DD [de] MMMM [de] YYYY[, ] HH:mm")),
            console.log("Horário de fim: ", event.dateEnd.format("DD [de] MMMM [de] YYYY[, ] HH:mm")),
            console.log("Descrição: ", event.description),
            console.log("Duração: ", duration, " minutos"),
            console.log("Dias até o evento: ", daysUntilEvent)
        )
    })
}

information()