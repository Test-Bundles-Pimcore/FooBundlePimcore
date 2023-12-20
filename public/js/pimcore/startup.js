pimcore.registerNS("pimcore.plugin.TestBundlesPimcorePimcoreFooBundle");

pimcore.plugin.TestBundlesPimcorePimcoreFooBundle = Class.create({

    initialize: function () {
        document.addEventListener(pimcore.events.pimcoreReady, this.pimcoreReady.bind(this));
    },

    pimcoreReady: function (e) {
        // alert("TestBundlesPimcorePimcoreFooBundle ready!");
    }
});

var TestBundlesPimcorePimcoreFooBundlePlugin = new pimcore.plugin.TestBundlesPimcorePimcoreFooBundle();
