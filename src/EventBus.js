const EventBusConstructor = function(options) {
    // Create a DOM EventTarget object
    var target = document.createTextNode(null);

    // Pass EventTarget interface calls to DOM EventTarget object
    this.on = target.addEventListener.bind(target);
    this.off = target.removeEventListener.bind(target);
    this.emit = (eventName) => {
      const event = new Event(eventName)
      console.log(event)
      target.dispatchEvent.bind(event)
    };

    // Room your your constructor code
}
const EventBus = new EventBusConstructor()
export default EventBus
