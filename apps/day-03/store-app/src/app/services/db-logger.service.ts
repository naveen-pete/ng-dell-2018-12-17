import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbLoggerService {
  log(message: any) {
    console.log('DbLoggerService.log():', message);
  }
}
