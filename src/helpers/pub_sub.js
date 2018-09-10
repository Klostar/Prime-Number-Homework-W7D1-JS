const PubSub = {
  publish: function(channel, payload){
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function(channel, callback){
    document.addEventListener(channel,callback);
//subscibe on the channel and execute the callback
//dynamic so can be used anywhere
  }
};

module.exports = PubSub;
