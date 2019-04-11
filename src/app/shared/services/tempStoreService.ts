import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempStoreService {
private subject = new BehaviorSubject<any>(null);
  constructor() { }
setData(data: any) {
  this.subject.next(data);
}
clearData() {
  this.subject.next(null);
}

getData(): Observable<any> {
  return this.subject.asObservable();
}
}
