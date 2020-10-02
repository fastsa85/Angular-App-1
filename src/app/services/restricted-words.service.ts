import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
   })
export class RestrictedWordsService {

  getRestrictedWords(): Observable<string[]> {
    return of(RESTRICTED_WORDS);
  }
}

const RESTRICTED_WORDS:string[] = ['foo', 'boo', 'dummy-word'];
