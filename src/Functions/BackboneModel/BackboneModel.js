// You are free to use alternative approaches of
// defining BackboneModel as long as the
// default export can be instantiated.
export default class BackboneModel {
    /**
     * @param {Object} initialValues
     * @returns BackboneModel
     */
    constructor(initialValues = {}) {
        this.values = initialValues;
        this.events = {
            change: {},
            unset: {}
        };
    }

    /**
     * Get the value of a specific attribute.
     * @param {string} attribute - The attribute name.
     * @returns {any | undefined} The value of the attribute.
     */
    get(attribute) {
        return this.values[attribute];
    }

    /**
     * Set the value of a specific attribute.
     * @param {string} attribute - The attribute name.
     * @param {any} value - The value to set for the attribute.
     */
    set(attribute, value) {
        if (this.values[attribute] === value) return;

        const isChanging = Object.hasOwn(this.values, attribute);
        const previousValue = this.values[attribute];
        this.values[attribute] = value;

        if (isChanging) {
            const eventListeners = this.events.change[attribute];
            eventListeners?.forEach(([fn, context]) => {
                fn.call(context, attribute, value, previousValue)
            });
        }
    }

    /**
     * Check if the model has a specific attribute.
     * @param {string} attribute - The attribute name.
     * @returns {boolean} `true` if the model has the attribute, `false` otherwise.
     */
    has(attribute) {
        return Object.hasOwn(this.values, attribute)
    }

    /**
     * Unset a specific attribute.
     * @param {string} attribute - The attribute name to unset.
     */
    unset(attribute) {
        delete this.values[attribute];
        delete this.events.change[attribute];
        this.events.unset[attribute]?.forEach(([fn, context]) => {
            fn.call(context, attribute)
        });
    }

    /**
     * Register an event listener for changes to a specific attribute.
     * @param {string} eventName - The event name.
     * @param {string} attribute - The attribute name to listen for changes.
     * @param {Function} callback - The callback function to be executed on the event.
     * @param {any} [context] - The context in which to execute the callback.
     */
    on(eventName, attribute, callback, context) {
        if (!this.events[eventName]) {
            throw new Error('Event:' + eventName + 'Not supported')
        }
        if (!this.events[eventName][attribute]) {
            this.events[eventName][attribute] = []
        }
        this.events[eventName][attribute].push([callback, context])
    }

    /**
     * Remove an event listener for changes to a specific attribute.
     * @param {string} eventName - The event name.
     * @param {string} attribute - The attribute name to stop listening for changes.
     * @param {Function} callback - The callback function to remove.
     */
    off(eventName, attribute, callback) {
        if (!this.events[eventName]?.[attribute]) {
            return;
        }
        this.events[eventName][attribute] = this.events[eventName][attribute].filter(([fn]) => fn !== callback);
    }
}