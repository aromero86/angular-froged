import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FrogedService {

    constructor() { }

    private Froged(method: string, param1?: any, param2?: any): any {
        try { 
            return (<any>window[(<any>'Froged')])(method, param1, param2);
        } catch (error) {
            return null;
        }
    }

    set(atts: any): void {
        this.Froged('set', atts);
    }

    track(eventName: string, meta: any = {}): void {
        this.Froged('track', eventName, meta);
    }

    logout(): void {
        this.Froged('logout');
    }

}
