import { ReactConfigModule } from 'm-core';
import { NgModule } from '@angular/core';

/**
 * https://github.com/angular/angular-cli/issues/6373
 * This is currently not the most beautiful thing to do, yet the angular-cli does not support lazy loading from external modules.
 * We do wish to show an example of how to work around this behavior.
 * In detail instead of the unsupported lazyloading with a apath like { path 'some-path', loadChildren: 'someLib#SomeModule'}
 * we enable the same result with a wrapper { path 'some-path', loadChildren: '/myWrapper/myWrapper.module#MyWrapperModule'}
 * The ts compiler can now succesfully compile the loadCgildren string
 */

@NgModule({
  imports: [ReactConfigModule],
  declarations: []
})
export class LazyExternalModule {}
