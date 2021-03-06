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
		dateInit: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
        dateEnd: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
	},
	{
		name: "Reuniãozinha",
		description: "Reunião não muito importante",
		dateInit: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
        dateEnd: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
	}
]

function information () {
    allEvents.map ((event) => {
        return (
            console.log("Nome: ", event.name),
            console.log("Horário de início: ", event.dateInit.format("DD [de] MMMM [de] YYYY[, ] HH:mm")),
            console.log("Horário de fim: ", event.dateEnd.format("DD [de] MMMM [de] YYYY[, ] HH:mm")),
            console.log("Descrição: ", event.description)
        )
    })
}

information()

//LETRA B

//Trocaria o moment.locale("pt-br") para moment.locale("en")
//Alteraria o formato da data e hora para "DD[th] MMMM YYYY[, ] hh:mm a"