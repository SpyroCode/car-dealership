import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  populateDB() {
    return { message: 'Populating DB' };
  }
}
