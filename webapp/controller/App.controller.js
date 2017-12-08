sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zgr.gitzgr_gittest2.controller.App", {
		onButtonReloadPress: function(oEvent) {
			this.getView().byId("idInput").setValue("");
			sap.m.MessageToast.show("Data reloaded!");
		},
		
		onButtonEnterPress: function(oEvent) {
			var sText = this.getView().byId("idInput").getValue();
			sap.m.MessageToast.show(sText);
		}
	});
});