export const WorkerBridge = (app: () => any) => {
    self.onmessage = (e) => {
        console.log('WorkerBridge', e);
    };

    self.postMessage(app());
};