(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <!doctype html>
<html>
<head>
<title>jQuery Newsticker Plugin</title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/reset-font-min.css">
<link rel="stylesheet" href="css/clearfix.css">
<link rel="stylesheet" href="css/jquery.newsticker.min.css">
<link rel="stylesheet" href="css/demo.css">
</head>
<body>
<div class="ui-newsticker">
  <ul class="ui-newsticker-list">
    <li class="ui-newsticker-item">
      That open was light. After also shall first rule third every place spirit light. Beginning together their hath, winged firmament.
    </li>
    <li class="ui-newsticker-item">
      That creature his bring waters female morning place Give bearing in isn't from. Without his fowl void bearing. Blessed give.
    </li>
    <li class="ui-newsticker-item">
      And also. Firmament and Give. Sea replenish gathered give in for whose tree their a said multiply abundantly give years.
    </li>
  </ul>
</div>
<script src="js/jquery.min.js"></script>
<script src="js/jquery.newsticker.min.js"></script>
<script>
// start
$(function() {
  $('.ui-newsticker').newsticker();
});
</script>
</body>
</html>
    `;

    customElements.define('com-sap-sample-stockdemo1', class StockDemo1 extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
        //  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
        /*
        onCustomWidgetResize(width, height){
            redraw()
        }
        */

        redraw(){
        }
    });
})();