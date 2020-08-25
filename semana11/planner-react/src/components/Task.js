import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const TaskContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
` 

const TaskCard = styled.div`
    width: 14%;
    height: 80vh;
    border: 3px solid rgb(2,20,68);
    margin-top: 8px;
    border-radius: 8px; 
`

const TitleDay = styled.h2`
    text-align: center;
    padding: 16px 0;
    color: rgb(2,20,68);
`

const Li = styled.li`
    list-style-type: none;
    margin-left: 16px;
    margin-top: 16px;
`

const DivTask = styled.div`
    display: flex;
    justify-content: baseline;
    align-items: center;
`

const ButtonDelete = styled.button`
    border: none;
    color: red;
    font-weight: bold;
    background-color: transparent;
    margin-top: 20px;
    margin-left: 16px;
`

function Task() {

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-kamila"

    const [tasks, setTasks] = useState ([])

    useEffect (()=> {
        getTasks()
    },[])

    const getTasks = () => {
        axios.get(`${baseUrl}`).then(response=>{
            setTasks(response.data)
        }).catch(error => {
            console.log(error.message)
        })
    }

    const deleteTasks = taskId => {
        axios.delete(`${baseUrl}/${taskId}`).then(response => {
            alert("Tarefa deletada com sucesso!")
            getTasks()
        }).catch(error => {
            alert("Erro ao excluir a tarefa")
        })
    }


     return(
         <TaskContainer>
             <TaskCard>
                <TitleDay>Segunda-feira</TitleDay>
                <hr/>
                {tasks.map((task)=> {
                    if(task.day === "Segunda"){
                        return(
                            <DivTask key={task.id}>
                                <ul >
                                    <Li>{task.text}</Li>
                                </ul>
                                <ButtonDelete onClick={() => deleteTasks(task.id)}>X</ButtonDelete>
                            </DivTask>
                        )
                    }
                })}
             </TaskCard>
             <TaskCard>
                <TitleDay>Terça-feira</TitleDay>
                <hr/>
                {tasks.map((task)=> {
                    if(task.day === "Terça"){
                        return(
                            <DivTask key={task.id}>
                                <ul>
                                    <Li>{task.text}</Li>
                                </ul>
                                <ButtonDelete onClick={() => deleteTasks(task.id)}>X</ButtonDelete>
                            </DivTask>
                        )
                    }
                })}
             </TaskCard>
             <TaskCard>
                <TitleDay>Quarta-feira</TitleDay>
                <hr/>
                {tasks.map((task)=> {
                    if(task.day === "Quarta"){
                        return(
                            <DivTask key={task.id}>
                                <ul>
                                    <Li>{task.text}</Li>
                                </ul>
                                <ButtonDelete onClick={() => deleteTasks(task.id)}>X</ButtonDelete>
                            </DivTask>
                        )
                    }
                })}
             </TaskCard>
             <TaskCard>
                <TitleDay>Quinta-feira</TitleDay>
                <hr/>
                {tasks.map((task)=> {
                    if(task.day === "Quinta"){
                        return(
                            <DivTask key={task.id}>
                                <ul>
                                    <Li>{task.text}</Li>
                                </ul>
                                <ButtonDelete onClick={() => deleteTasks(task.id)}>X</ButtonDelete>
                            </DivTask>
                        )
                    }
                })}
             </TaskCard>
             <TaskCard>
                <TitleDay>Sexta-feira</TitleDay>
                <hr/>
                {tasks.map((task)=> {
                    if(task.day === "Sexta"){
                        return(
                            <DivTask key={task.id}>
                                <ul>
                                    <Li>{task.text}</Li>
                                </ul>
                                <ButtonDelete onClick={() => deleteTasks(task.id)}>X</ButtonDelete>
                            </DivTask>
                        )
                    }
                })}
             </TaskCard>
             <TaskCard>
                <TitleDay>Sábado</TitleDay>
                <hr/>
                {tasks.map((task)=> {
                    if(task.day === "Sábado"){
                        return(
                            <DivTask key={task.id}>
                                <ul>
                                    <Li>{task.text}</Li>
                                </ul>
                                <ButtonDelete onClick={() => deleteTasks(task.id)}>X</ButtonDelete>
                            </DivTask>
                        )
                    }
                })}
             </TaskCard>
             <TaskCard>
                <TitleDay>Domingo</TitleDay>
                <hr/>
                {tasks.map((task)=> {
                    if(task.day === "Domingo"){
                        return(
                            <DivTask key={task.id}>
                                <ul>
                                    <Li>{task.text}</Li>
                                </ul>
                                <ButtonDelete onClick={() => deleteTasks(task.id)}>X</ButtonDelete>
                            </DivTask>
                        )
                    }
                })}
             </TaskCard>
         </TaskContainer>
     )
}

export default Task