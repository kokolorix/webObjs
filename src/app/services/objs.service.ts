import { Injectable } from '@angular/core';
import { Object } from "../base/obj";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjsService {

  private objects: Object[];

  constructor() { 
    this.objects = Array.from({length: 20}, (_, k) => createLObject(k + 1));
  }

  public getAllObjects$(): Observable<Object[]> {
    return of(this.objects);
  }
}

function createLObject(id: number) : Object{
  return {
    id:"",
    name:"",
    properties:[]
  };
}
