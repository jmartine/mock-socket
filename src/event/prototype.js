export default class EventPrototype {
  // Noops
  stopPropagation() {}
  stopImmediatePropagation() {}
  preventDefault() {}

  // if no arguments are passed then the type is set to "undefined" on
  // chrome and safari.
  initEvent(type = 'undefined', bubbles = false, cancelable = false) {
    this.type = `${type}`;
    this.bubbles = Boolean(bubbles);
    this.cancelable = Boolean(cancelable);
  }
}
