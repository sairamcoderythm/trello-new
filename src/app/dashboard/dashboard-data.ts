import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Dashboard } from './models/dashboard';

export class DashboardData implements InMemoryDbService {

  createDb() {
    const dashboards: Dashboard[] = [
      {
        id: 1,
        name: 'Leaf Rake',
        taskList: [ {
          id:1,
          name: 'sai',
          noteList: [ {
            id: 1,
            name: 'sai'
          }]
        } ]
      },
      {
        id: 2,
        name: 'Leaf Rake',
        taskList: [ {
          id:1,
          name: 'sai',
          noteList: [ {
            id: 1,
            name: 'sai'
          }]
        } ]
      },
      {
        id: 3,
        name: 'Leaf Rake',
        taskList: [ {
          id:1,
          name: 'sai',
          noteList: [ {
            id: 1,
            name: 'sai'
          }]
        } ]
      }
    ];
    return { dashboards };
  }
}
