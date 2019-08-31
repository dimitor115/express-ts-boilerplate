import { ErrorCodes } from './errorCodes'
import { Message, MessageType } from './Message'
import { Controller } from 'tsoa';

export class Response<T> {
    readonly body: T
    readonly httpCode: number

    constructor(body: T, httpCode: number = 200) {
        this.body = body
        this.httpCode = httpCode
    }

    unwrap(controler: Controller): T {
        controler.setStatus(this.httpCode)
        return this.body
    }

}
