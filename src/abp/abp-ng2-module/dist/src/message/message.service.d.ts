export declare class MessageService {
    info(message: string, title?: string, isHtml?: boolean): any;
    success(message: string, title?: string, isHtml?: boolean): any;
    warn(message: string, title?: string, isHtml?: boolean): any;
    error(message: string, title?: string, isHtml?: boolean): any;
    confirm(message: string, callback?: (result: boolean) => void): any;
    confirm(message: string, title?: string, callback?: (result: boolean) => void, isHtml?: boolean): any;
}
