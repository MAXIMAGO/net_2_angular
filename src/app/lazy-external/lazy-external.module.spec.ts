import { LazyExternalModule } from './lazy-external.module';

describe('LazyExternalModule', () => {
  let lazyExternalModule: LazyExternalModule;

  beforeEach(() => {
    lazyExternalModule = new LazyExternalModule();
  });

  it('should create an instance', () => {
    expect(lazyExternalModule).toBeTruthy();
  });
});
