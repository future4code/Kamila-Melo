###Exercício 1

a) Ele devolve o resultado da query e outras informações


b)

```
async function searchActor(name: string): Promise<any>{
  try {
    const result = await connection
      .select("*")
      .from("Actor")
      .where("name", "like", `%${name}%`)
      console.log(result)
      return result
  } catch (error) {
      console.log(error)
  }
}
```

c) 
```
async function countActor(gender: string): Promise<any>{
  try {
    const result = await connection.raw(`
      select count(*) as count from Actor
      where gender = "${gender}"
    `)
    console.log(result[0][0])
    return result[0][0]
  } catch (error) {
      console.log(error)
  }
}

countActor("female")
```

###Exercício 2

a)
```
const updateSalaryActor = async(salary: number, id: string): Promise<void> => {
  await connection
  .where({id: `${id}`})
  .update ({salary: `${salary}`})
  .table("Actor")
}

updateSalaryActor(500000, "001")
```

b)
```
const deleteActor = async(id: string): Promise<void> => {
  await connection
  .where({id: `${id}`})
  .delete()
  .table("Actor")
}

deleteActor("007")
```

c)
```
const averageActor = async(gender: string): Promise<any> => {
  const result = await connection
  .where({gender: `${gender}`})
  .avg("salary as average")
  .table("Actor")

  console.log(result[0].average)
  return result[0].average
}

averageActor("male")
```

###Exercício 3

a) Pois ele irá pegar o id que será passado na chave id.

b) Do try traz a resposta de sucesso, e do catch traz a resposta de um erro.

c)
```

```