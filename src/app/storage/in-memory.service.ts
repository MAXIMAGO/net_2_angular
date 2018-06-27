import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [{ Name: 'WPF', Key: 'wpf' }, { Name: 'Angular', Key: 'angular' }];
    return { projects };
  }
}
