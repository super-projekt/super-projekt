function EventBus() {
  const subscriptions = { };

  this.on = function subscribeCallbackToEvent(eventType, callback) {
    const id = Symbol('id');
    if (!subscriptions[eventType]) subscriptions[eventType] = { };
    subscriptions[eventType][id] = callback;
    return {
      off: function off() {
        delete subscriptions[eventType][id];
        if (Object.getOwnPropertySymbols(subscriptions[eventType]).length === 0) {
          delete subscriptions[eventType];
        }
      },
    };
  };

  this.emit = function publishEventWithArgs(eventType, arg) {
    if (!subscriptions[eventType]) return;

    Object.getOwnPropertySymbols(subscriptions[eventType])
      .forEach(key => subscriptions[eventType][key](arg));
  };
}

export default EventBus;
