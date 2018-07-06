import { ReactConfigModule } from './react-config.module';

describe('ReactConfigModule', () => {
  let reactConfigModule: ReactConfigModule;

  beforeEach(() => {
    reactConfigModule = new ReactConfigModule();
  });

  it('should create an instance', () => {
    expect(reactConfigModule).toBeTruthy();
  });
});
