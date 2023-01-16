
var fs = require('fs');
import * as model from "../src/model/model";
export function getRequestFile(folder:string,filename:string) {  
    var requestFile = new model.RequestFile();
    requestFile.name = filename  ;
    var data =fs.readFileSync(folder  + filename);
    requestFile.data = new Buffer(data).toString('base64');
    return requestFile
}

export function getDigitalSignaturFile(folder:string,filename:string,password:string) {  
    var digitalSignaturFile = new model.DigitalSignaturFile();
    digitalSignaturFile.name = filename  ;
    digitalSignaturFile.password = password;
    var data =fs.readFileSync(folder  + filename);
    digitalSignaturFile.data = new Buffer(data).toString('base64');
    return digitalSignaturFile
}
