import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory.service';

export const IN_MEMORY_DB = HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false });
