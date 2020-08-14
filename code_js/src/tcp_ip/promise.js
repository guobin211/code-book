class APromise {

  constructor(execute) {
    this.state = "pending";
    this.value = null;
    this.reason = null;

    try {
      execute((val) => this._resolve(val), (reason) => this._reject(reason))
    } catch (error) {
    }
  }

  then(onFull) {
    if (this.state === "success") {
      onFull(this.value)
    }
    return this;
  }

  catch(onFail) {
    if (this.state === "failed") {
      onFail(this.reason)
    }
    return this;
  }

  finally() {}

  _resolve(val) {
    this.value = val;
    this.state = "success";
  }

  _reject(reason) {
    this.reason = reason;
    this.state = "failed";
  }

}


const p = new APromise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello")
  }, 4)
})

p.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
}).finally(() => {
  console.log("finally");
})
