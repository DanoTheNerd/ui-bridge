export const MainBridge = (worker: Worker) => {

    worker.onmessage = (event: MessageEvent<unknown>) => {
        console.log('Bridge message', event);
    }

    worker.postMessage('CONNECT');
}