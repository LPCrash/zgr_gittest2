sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zgr.gitzgr_gittest2.controller.App", {
		onButtonPress: function(oEvent) {
			sap.m.MessageToast.show("Hello World!");
		}
	});
});