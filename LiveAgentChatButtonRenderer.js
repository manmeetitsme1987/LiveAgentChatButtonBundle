({
	// Manmeet : Your renderer method overrides go here
	afterRender: function (component, helper) {
        this.superAfterRender();
        // interact with the DOM here
        if (!window._laq) { 
        window._laq = []; 
        console.log('0000 - !window._laq');    
        }
        
        window._laq.push(function(){
        console.log('in push function');    
        liveagent.showWhenOnline('57390000000fxVt', component.find('liveagent_button_online_57390000000fxVt').elements[0]);
        liveagent.showWhenOffline('57390000000fxVt', component.find('liveagent_button_offline_57390000000fxVt').elements[0]);
        console.log('0000 - window._laq.push');
        });
            
        liveagent.init('https://d.la1t1.salesforceliveagent.com/chat', '57290000000fxUl', '00D90000000nchf');
        console.log('0000 - Live Agent Initialized');
        liveagent.enableLogging();
    },
})