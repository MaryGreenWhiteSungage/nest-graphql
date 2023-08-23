import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileService {
  public async saveFile(data: string): Promise<boolean> {
    const filePath: string = path.join(__dirname + `.`, '/scripts');
    const fileName = `${filePath}/output.sql`;
    fs.writeFileSync(fileName, data);
    return true;
  }
  catch(e) {
    console.log(e);
    return false;
  }
}
