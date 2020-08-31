import fs from 'fs'

export class JSONFileManager {
    private fileName: string;
  
    constructor(fileName: string) {
      this.fileName = fileName
    }
  
    public writeInJson(data: any): void {
    const dataAsString: string = JSON.stringify(data, null, 2);
    fs.writeFileSync(this.fileName, dataAsString)
    }
  
    public readFromJson(): any {
      try {
        const accountFromJson = fs.readFileSync(this.fileName).toString();
        return JSON.parse(accountFromJson)
      } catch (e) {
        console.log(e);
        return []
      }
    }
  }