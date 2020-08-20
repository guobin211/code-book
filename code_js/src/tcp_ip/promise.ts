interface APromise {
  then(onFulfilled: CallBack, onRejected?: CallBack): APromise,
  catch(onRejected: CallBack): APromise,
  finally(onFinally: CallBack): APromise
}

type Executor = (resolve: CallBack, reject: CallBack) => void
type CallBack = (value: any) => void
type State = "pending" | "fulfilled" | "rejected"
interface HandlerOption {
  onResolved: CallBack,
  onRejected?: CallBack,
  resolve: CallBack,
  reject: CallBack
}

export class MyPromise implements APromise {
  value: any;
  state: State;
  deferred: any;
  constructor(executor: Executor) {
    this.state = "pending";
    const resolve = (value: any) => {
      if (value && typeof value.then === "function") {
        value.then(resolve, reject);
        return;
      }
      this.value = value;
      this.state = "fulfilled";
      if (this.deferred) {
        this._handle(this.deferred)
      }
    }
    const reject = (reason: any) => {
      this.value = reason;
      this.state = "rejected";
      if (this.deferred) {
        this._handle(this.deferred)
      }
    }

    executor(resolve, reject)
  }

  private _handle(handler: HandlerOption) {
    if (this.state === "pending") {
      this.deferred = handler;
      return;
    }
    let handlerCallback;
    if (this.state === "rejected") {
      handlerCallback = handler.onResolved;
    } else {
      handlerCallback = handler.onRejected;
    }

    if (!handlerCallback) {
      if (this.state === "fulfilled") {
        handler.resolve(this.value);
      } else {
        handler.reject(this.value);
      }
      return;
    }

    const res = handlerCallback(this.value);
    handler.resolve(res);
  }

  then(onFulfilled: CallBack, onRejected?: CallBack): MyPromise {
    this.deferred = onFulfilled
    return new MyPromise((resolve, reject) => {
      this._handle({
        onResolved: onFulfilled,
        onRejected: onRejected,
        resolve,
        reject
      });
    });
  }

  catch(onRejected: CallBack): MyPromise {
    this.deferred = onRejected
    return new MyPromise(() => { })
  }

  finally(onFinally: CallBack): MyPromise {
    this.deferred = onFinally
    return new MyPromise(() => { })
  }


}
