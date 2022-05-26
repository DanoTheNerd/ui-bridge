import { WorkerBridge } from '@ui-bridge/core';
import { FooComponent } from './foo';

export const app = () => <FooComponent test={true} />;

WorkerBridge(app);
