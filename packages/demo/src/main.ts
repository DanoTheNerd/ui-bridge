import { MainBridge } from '@ui-bridge/core/lib/main';

const worker = new Worker(new URL('./app/test.worker', import.meta.url));

MainBridge(worker);