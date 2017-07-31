import { Injectable } from '@angular/core';
import { Leader } from '../leader';
import storage from '../storage';

@Injectable()
export class LeadersService {

  constructor() { }

  getLeaders(): Promise<Array<Leader>> {
    return Promise.resolve(storage.leaders());
  }

  getLeader(id: number): Promise<Leader> {
    return Promise.resolve(storage.leaders().filter(leader => leader.id === id)[0]);
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(storage.leaders().filter(leader => leader.featured)[0]);
  }
}
