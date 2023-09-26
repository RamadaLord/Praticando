import crypto from 'crypto'
import multer from 'multer'

import { extname, resolve } from 'path'

export default {
    upload (folder:string){
        //Folder pode ser qualquer outro nome
        return{
            //{ Bloco de codigos }
            storage: multer.diskStorage({
                destination: resolve(__dirname,'..','..', folder),
                filename:(request, file,callback) => {
                    const filehash = crypto.randomBytes(16).toString('hex')
                    const fileName = `${filehash}-${file.originalname}`

                    return callback(null , fileName)
                }
            })
        }
            
    }
}