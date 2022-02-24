import { Component }       from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FrogedService }   from './froged.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    public currentUser: any = null;

    constructor(
        private frogedService: FrogedService,
    ) { }

    loginAsPedro(): void {
        this.currentUser = { userId: 'user_pedro', name: 'Pedro', email: 'user_pedro@ejemplo.com' };
        this.frogedService.set({ userId: 'user_pedro', name: 'Pedro', email: 'user_pedro@ejemplo.com' });
    }

    loginAsCarmen(): void {
        this.currentUser = { userId: 'user_pedro', name: 'Pedro', email: 'user_pedro@ejemplo.com' };
        this.frogedService.set({ userId: 'user_carmen', name: 'Carmen', email: 'user_carmen@ejemplo.com' });
    }

    logout(): void {
        this.currentUser = null;
        this.frogedService.logout();
    }

}
