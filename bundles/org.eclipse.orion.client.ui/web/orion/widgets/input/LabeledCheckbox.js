/*******************************************************************************
 * @license
 * Copyright (c) 2013 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/
/*global orion window console define localStorage*/
/*jslint browser:true*/

define(['orion/objects', 'orion/webui/littlelib', 'orion/widgets/input/Checkbox'],  function(objects, lib, Checkbox) {

	/**
	 * This is just an orion/widgets/input/Select with a label.
	 */
	function LabeledCheckbox( params, node ){
		Checkbox.apply(this, arguments);
		this.mylabel = lib.$(".setting-label", this.node); //$NON-NLS-0$
	}
	objects.mixin(LabeledCheckbox.prototype, Checkbox.prototype, {
		templateString: '' +  //$NON-NLS-0$
			'<label>' + //$NON-NLS-0$
				'<span class="setting-label"></span>' + //$NON-NLS-2$ //$NON-NLS-0$
				'<input class="setting-control settingsCheckbox" type="checkbox"/>' + //$NON-NLS-0$
			'</label>',  //$NON-NLS-0$

		postCreate: function() {
			Checkbox.prototype.postCreate.call(this);
			this.mylabel.textContent = this.fieldlabel + ':'; //$NON-NLS-0$
		},

		destroy: function() {
			Checkbox.prototype.destroy.call(this);
			if (this.mylabel) {
				this.mylabel = null;
			}
		}
	});

	return LabeledCheckbox;
});