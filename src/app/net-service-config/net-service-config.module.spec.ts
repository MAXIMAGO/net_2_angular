import { NetServiceConfigModule } from './net-service-config.module';

describe('NetServiceConfigModule', () => {
  let netServiceConfigModule: NetServiceConfigModule;

  beforeEach(() => {
    netServiceConfigModule = new NetServiceConfigModule();
  });

  it('should create an instance', () => {
    expect(netServiceConfigModule).toBeTruthy();
  });
});
