import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      { Name: 'WPF', Key: 'wpf' },
      { Name: 'Angular', Key: 'angular' },
      { Name: 'React', Key: 'react' },
      { Name: 'Microservice (.NET)', Key: 'service-net' }
    ];
    return { projects };
  }
}
