import fs from 'fs'
import { readDatabase } from '.'

function getAllAccounts(){
    console.log(readDatabase())
}