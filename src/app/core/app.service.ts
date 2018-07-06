import { Subject, Observable } from "rxjs";

export class AppService {

    private navMenuSub = new Subject<string>();

    sendNavMenuSub(navItem: string) {
        this.navMenuSub.next(navItem);
    }
    getNavMenuSub(): Observable<string> {
        return this.navMenuSub.asObservable();
    }

}