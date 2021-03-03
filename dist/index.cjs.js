'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('semantic-ui-css/semantic.min.css');
var React = require('react');
var PropTypes = require('prop-types');
var semanticUiReact = require('semantic-ui-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "body{margin:0;font-family:Poppins!important}.ap_diagram_1{font-weight:300;font-size:8.438em;line-height:1.25em}.ap_diagram_1,.ap_diagram_2_semibold{font-family:Poppins;font-style:normal;letter-spacing:-.01em}.ap_diagram_2_semibold{font-weight:600;font-size:6.25em;line-height:1.375em}.ap_diagram_3{font-weight:400}.ap_diagram_3,.ap_diagram_3_bold{font-family:Poppins;font-style:normal;font-size:3.75em;line-height:1.125em;letter-spacing:-.01em}.ap_diagram_3_bold{font-weight:700}.ap_header_1{font-size:2.813em;line-height:1.588em}.ap_header_1,.ap_header_2{font-family:Poppins;font-style:normal;font-weight:600}.ap_header_2{font-size:2.188em;line-height:1.25em}.ap_header_3{font-family:Poppins;font-style:normal;font-weight:600;font-size:1.75em;line-height:2.188em}.ap_header_5{font-weight:500}.ap_header_5,.ap_header_5_semibold{font-family:Poppins;font-style:normal;font-size:1.375em;line-height:2.063em}.ap_header_5_semibold{font-weight:600}.ap_subtitle_body_large{font-family:Poppins;font-style:normal;font-weight:400;font-size:1.125em;line-height:1.688em}.ap_subtitle_body_large_semibold{font-family:Poppins;font-style:normal;font-weight:600;font-size:1.125em;line-height:1.563em}.ap_body_16{font-weight:400}.ap_body_16,.ap_body_16_semibold{font-family:Poppins;font-style:normal;font-size:1em;line-height:1.5em}.ap_body_16_semibold{font-weight:600}.ap_body_16_medium{font-family:Poppins;font-style:normal;font-weight:500;font-size:1em;line-height:1.5em}.body_15_regular{font-weight:400}.body_15_medium,.body_15_regular{font-family:Poppins;font-style:normal;font-size:.938em;line-height:1.375em}.body_15_medium{font-weight:500}.body_15_semibold{font-family:Poppins;font-style:normal;font-weight:600;font-size:.938em;line-height:1.438em}.ap_small{font-size:.875em}.ap_extrasmall_medium,.ap_small{font-family:Poppins;font-style:normal;font-weight:500;line-height:1.5em}.ap_extrasmall_medium{font-size:.75em}.ap_button_small{font-family:Poppins;font-style:normal;font-weight:600;font-size:.875em!important;line-height:1.313em;letter-spacing:.01em;text-transform:capitalize}.ap_button_medium{font-size:.938em!important;line-height:1.375em}.ap_button_large,.ap_button_medium{font-family:Poppins;font-style:normal;font-weight:600;letter-spacing:.02em;text-transform:capitalize}.ap_button_large{font-size:1em!important;line-height:1.5em}.main_card_white{box-shadow:.25em .25em .5em rgba(112,136,146,.05)!important}.main_card_color{box-shadow:.625em .625em 3.125em rgba(112,136,146,.2)!important}.pop_up{box-shadow:.313em .313em 6.25em rgba(112,136,146,.08)!important}.dropdown_small{box-shadow:.125em .125em .625em rgba(112,136,146,.2)!important}.dropdown_large{box-shadow:.313em .313em 2.5em rgba(112,136,146,.12)!important}.button{box-shadow:.063em .188em .375em rgba(112,136,146,.16)!important}.side_navi_shadow{box-shadow:.125em 0 .313em rgba(112,136,146,.02)!important}.snackbar{box-shadow:.125em .188em .75em rgba(141,164,173,.4)!important}.grey_form{box-shadow:inset 0 .125em .188em -.063em rgba(112,136,146,.05)!important}.white_form{box-shadow:inset 0 .125em .188em -.063em rgba(112,136,146,.1)!important}.ui.button.ap_darkgreen,.ui.statistic.ap_darkgreen,i.inverted.circular.ap_darkgreen.icon{background-color:#104f56!important;color:#fff!important}i.icon.ap_darkgreen{color:#104f56!important}.ui.button.ap_blue,.ui.statistic.ap_blue,i.inverted.circular.ap_blue.icon{background-color:#38a3cc!important;color:#fff!important}i.icon.ap_blue{color:#38a3cc!important}i.inverted.circular.ap_coolgrey50.icon{background-color:#f0f3f4!important;color:#8ba2ab!important}i.inverted.circular.ap_coolgrey50.icon:hover{background-color:#8ba2ab!important;color:#fff!important}i.inverted.circular.ap_coolgrey50.icon:disabled{background-color:#f0f3f4!important;color:#8ba2ab!important}.ui.button.ap_coolgrey,.ui.statistic.ap_coolgrey,i.inverted.circular.ap_coolgrey.icon{background-color:#8ba2ab!important;color:#fff!important}i.icon.ap_coolgrey{color:#8ba2ab!important}.ui.button.ap_coolgrey:hover,i.inverted.circular.ap_coolgrey.icon:hover{background-color:#708892!important;color:#fff!important}.ui.button.ap_coolgrey:disabled,i.inverted.circular.ap_coolgrey.icon:disabled{background-color:#c5d0d5!important;color:#fff!important}.ap_coolgrey_50,.ui.statistic.ap_coolgrey_50,i.inverted.circular.ap_coolgrey_50.icon{background-color:#f0f3f4!important;color:#fff!important}.ap_warmgrey_100,.ui.statistic.ap_warmgrey_100,i.inverted.circular.ap_warmgrey_100.icon{background-color:#ebebeb!important;color:#fff!important}.ap_warmgrey_50,.ui.statistic.ap_warmgrey_50,i.inverted.circular.ap_warmgrey_50.icon{background-color:#f8f8f8!important;color:#fff!important}.ap_white{background-color:#fff!important}.ui.button.ap_teal,.ui.statistic.ap_teal,i.inverted.circular.ap_teal.icon{background-color:#63c6c0!important;color:#fff!important}i.icon.ap_teal{color:#63c6c0!important}.ui.button.basic{background:transparent!important;color:#63c6c0}.ui.button.ap_teal:hover,i.inverted.circular.ap_teal.icon:hover{background-color:#26a79f!important;color:#fff!important}.ui.button.ap_teal:disabled,i.inverted.circular.ap_teal.icon:disabled{background-color:#b1e3df!important;color:#fff!important}.ui.button.ap_green,.ui.statistic.ap_green,i.inverted.circular.ap_green.icon{background-color:#bed16d!important;color:#fff!important}i.icon.ap_green{color:#63c6c0!important}.ui.button.ap_green:hover,i.inverted.circular.ap_green.icon:hover{background-color:#a7be44!important;color:#fff!important}.ui.button.ap_green:disabled,i.inverted.circular.ap_green.icon:disabled{background-color:#dfe8b6!important;color:#fff!important}.ui.button.ap_red,.ui.statistic.ap_red,i.inverted.circular.ap_red.icon{background-color:#ca1a46!important;color:#fff!important}i.icon.ap_red{color:#ca1a46!important}.ui.button.ap_orange,.ui.statistic.ap_orange,i.inverted.circular.ap_orange.icon{background-color:#f9b132!important;color:#fff!important}i.icon.ap_orange{color:#f9b132!important}.ui.button.ap_lime,.ui.statistic.ap_lime,i.inverted.circular.ap_lime.icon{background-color:#eef784!important;color:#fff!important}i.icon.ap_lime{color:#eef784!important}.ap_red_50,.ui.statistic.ap_red_50,i.inverted.circular.ap_red_50.icon{background-color:#fbedf0!important;color:#fff!important}i.icon.ap_red_50{color:#fbedf0!important}.ui.button.large{height:3.75em;border-radius:.938em!important;color:#fff!important;font-size:1em!important;font-weight:600;line-height:1.5em;align-items:center;text-align:center;letter-spacing:.02em}.ui.button.large div{display:grid;grid-auto-flow:column;grid-column-gap:12px}.ui.button.large div i{font-weight:700}.ui.fluid.button.large{height:3.75em;border-radius:.938em!important;color:#fff!important;font-size:1em!important;font-weight:600;line-height:1.5em;align-items:center;text-align:center;letter-spacing:.02em}.ui.fluid.button.large div{margin:0 auto;display:inline-flex}.ui.fluid.button.large div i{font-size:1.5em;font-weight:700}.ui.fluid.button.medium{height:3.125em;border-radius:.938em!important;color:#fff!important;font-size:.938em!important;font-weight:600;line-height:1.375em;align-items:center;text-align:center;letter-spacing:.02em;width:100%}.ui.fluid.button.medium div{display:grid;grid-auto-flow:column;grid-column-gap:12px}.ui.fluid.button.medium div i{font-weight:700;font-size:1.5em}.ui.button.medium{height:3.125em;border-radius:.938em!important;color:#fff!important;font-size:.938em!important;font-weight:600;line-height:1.375em;align-items:center;text-align:center;letter-spacing:.02em}.ui.button.medium div{display:grid;grid-auto-flow:column;grid-column-gap:12px}.ui.button.medium div i{font-weight:700}.ui.fluid.button.small{height:2.9em;border-radius:.75em!important;color:#fff!important;font-size:.875em!important;font-weight:600!important;line-height:1.313em;align-items:center;text-align:center;letter-spacing:.02em;width:100%}.ui.fluid.button.small div{display:grid;grid-auto-flow:column;grid-column-gap:12px}.ui.fluid.button.small div i{font-weight:700;font-size:1.5em}.ui.button.small{height:2.9em;border-radius:.75em!important;color:#fff!important;font-size:.875em!important;font-weight:600!important;line-height:1.313em;align-items:center;text-align:center;letter-spacing:.02em}.ui.button.small div{display:grid;grid-auto-flow:column;grid-column-gap:12px}.ui.button.small div i{font-weight:700;font-size:1.5em}.ui.basic.ap_coolgrey.button{color:#8ba2ab!important;box-shadow:inset 0 0 0 .125em #8ba2ab!important}.ui.basic.ap_coolgrey.button:hover{color:#708892!important;box-shadow:inset 0 0 0 .125em #708892!important}.ui.basic.ap_coolgrey.button:disabled{color:#c5d0d5!important;box-shadow:inset 0 0 0 .125em #c5d0d5!important}.toggle_on_off_type{width:12.875em;height:2.438em}.toggle_am_pm_tab_type{width:9.75em;height:3.125em}.toggle_date_time_tab_type{width:14.375em;height:3.125em}i.big.icon{font-size:2.5em!important}i.large.icon{font-size:2em!important}i.small.icon{font-size:1.5em!important}.ui.button>.icon:not(.button){padding-left:1em;padding-right:1em}.statistic.medium{position:relative;border-radius:1.25em;height:6.875em;width:10.625em}.statistic.medium .statistic_label{font-family:Poppins;font-style:normal;font-weight:500;font-size:.938!important;line-height:1.375em;color:#fff;margin-left:1.063em!important;margin-top:1em!important}.statistic.medium .statistic_value{font-family:Poppins;position:absolute;font-style:normal;font-weight:600;font-size:2.813em;line-height:1.188em;right:.3em;bottom:.063em}.statistic.small{position:relative;border-radius:1.25em!important;height:4.375em;width:11.875em}.statistic.small .statistic_value{font-family:Poppins;position:absolute;font-style:normal;font-weight:600;font-size:2.813em;line-height:1.188em;right:.3em;bottom:.163em}.statistic.small .statistic_label{font-family:Poppins;font-style:normal;font-weight:500;font-size:.938;line-height:1.375em;color:#fff;margin-left:1.313em!important;margin-top:1.5em!important}.statistic.payroll{position:relative;border-radius:1.25em;height:6.875em;width:12.5em}.statistic.payroll .statistic_label{width:7.5em;color:#fff;margin-top:1.7em!important}.statistic.payroll .statistic_date,.statistic.payroll .statistic_label{font-family:Poppins;font-style:normal;font-weight:500;font-size:.938!important;line-height:0;margin-left:1.063em!important}.statistic.payroll .statistic_date{color:#ca1a46;margin-top:.5em!important}.statistic.payroll .statistic_value{font-family:Poppins;position:absolute;font-style:normal;font-weight:600;font-size:2.813em;line-height:1.188em;right:.3em;bottom:.063em}.statistic.large{position:relative;border-radius:1.25em;height:14.688em;width:16.875em}.statistic.large .statistic_label{font-family:Poppins;font-style:normal;font-weight:500;font-size:1.125em!important;line-height:1.563em;color:#fff;margin-left:1.625em!important;margin-top:2.625em!important}.statistic.large .statistic_value{font-family:Poppins;position:absolute;font-style:normal;font-weight:600;font-size:3.75em;line-height:1.625em;right:.875em;bottom:.093em}.statistic.extralarge{position:relative;border-radius:1.25em;height:16.875em;width:16.875em}.statistic.extralarge .statistic_label{font-family:Poppins;font-style:normal;font-weight:500;font-size:1.125em!important;line-height:1.563em;color:#fff;margin-left:1.625em!important;margin-top:2.625em!important}.statistic.extralarge .statistic_value{font-family:Poppins;position:absolute;font-style:normal;font-weight:600;font-size:3.75em;line-height:1.625em;right:.875em;bottom:.093em}.company_task{height:6.875em;width:34.2em;border-radius:1.25em!important;box-shadow:.313em .313em 2.5em rgba(112,136,146,.12)!important}.company_task i{height:1.688em!important;width:1.688em!important;margin-top:-.5em!important;font-size:1em!important}.company_task .statistic .statistic_icon{display:inline-block;margin-top:.938em!important;margin-left:1.25em!important}.company_task .statistic .statistic_icon div{display:inline-flex;padding-top:10px}.company_task .statistic .statistic_icon div i{margin-top:-.1em!important;margin-right:.1em}.company_task .statistic_value{font-weight:600;font-size:3.75em;line-height:1.625em;right:1.875em;bottom:.093em}.company_task .statistic_value,.metadata{font-family:Poppins;position:absolute;font-style:normal}.metadata{height:1.125em;font-weight:500;font-size:.75em!important;line-height:1.125em;color:#8ba2ab!important;right:1.75em!important;top:-1.4em}.comment.first{width:35.063em;height:8.438em;background-color:#f8f8f8!important;margin-bottom:0!important;border-radius:1.25em}.comment.first .metadata{font-family:Poppins;font-style:normal;height:1.125em;font-weight:500;font-size:.75em!important;line-height:1.125em;color:#8ba2ab!important;right:1.75em!important;position:absolute;top:-1.4em}.comment.first img{margin-top:1.25em!important;margin-left:1.938em!important;border-radius:1.938em!important}.comment.first .content{margin-left:5.375em!important}.comment.first .author{font-weight:600!important;line-height:1.5em;margin-top:1.5em!important;color:#104f56!important}.comment.first .author,.comment.first .text{font-family:Poppins;font-style:normal;font-size:1em!important}.comment.first .text{font-weight:400;line-height:1.375!important;color:#8ba2ab!important}.comment.first .text .browse_img{float:right;margin-top:5.5em;margin-right:2.25em}.comment.first .line{padding-top:2.063em}.comment.reply{position:relative;height:4.375em!important;width:31.938em;background-color:#f8f8f8!important;margin-bottom:0!important;border-radius:1.25em}.comment.reply img{margin-top:.625em!important;border-radius:.938em!important;margin-left:.625em!important}.comment.reply .content{margin-left:4.375em!important}.comment.reply .author{font-family:Poppins;font-style:normal;font-weight:600!important;font-size:1em!important;line-height:1.5em;margin-top:1.563em!important;color:#104f56!important}.comment.reply .text{font-family:Poppins;font-style:normal;font-weight:400;font-size:.938em!important;line-height:1.375em!important;color:#8ba2ab!important}.comment.reply .reply_button{position:absolute;right:1.563em;top:1.135em}.ui.comments{margin:0 0 .5em 2.5em!important}.ui.form .note_1 textarea{width:51.813em;height:6.688em;border-radius:.938em;background-color:#f8f8f8!important}.ui.form .note_1 textarea::placeholder{font-family:Poppins;font-style:normal;font-weight:400;font-size:1em!important;line-height:1.375em;color:#8ba2ab!important}.ui.form .note_2 textarea{width:32.188em;height:7.375em;border-radius:.938em;background-color:#f8f8f8!important}.ui.form .note_2 textarea::placeholder{font-family:Poppins;font-style:normal;font-weight:400;font-size:1.125em!important;line-height:1.563em;color:#8ba2ab!important}.ui.form .field.note_2>label{font-family:Poppins;font-style:normal;font-weight:600;font-size:.938em!important;line-height:1.438em;color:#104f56!important}.ui.form .note_3 textarea{width:29.75em;height:7.438em;border-radius:.938em;background-color:#f8f8f8!important}.ui.form .note_3 textarea::placeholder{font-family:Poppins;font-style:normal;font-weight:400;font-size:1.125em!important;line-height:1.563em;color:#8ba2ab!important}.ui.form .field.note_3>label{font-family:Poppins;font-style:normal;font-weight:600;font-size:.938em!important;line-height:1.438em;color:#8ba2ab!important}.ui.form .note_4 textarea{border-radius:.938em;width:35.313em;height:9.188em;background-color:#f8f8f8!important}.ui.form .field.note_4>label{font-family:Poppins;font-style:normal;font-weight:600;font-size:.938em!important;line-height:1.438em;color:#8ba2ab!important}.ui.form .note_5{position:relative;width:58.5em;height:30.938em;border-radius:1.563em;background-color:#fff!important}.ui.form .field.note_5>label{font-family:Poppins;font-style:normal;font-weight:600;font-size:1.375em!important;line-height:1.875em;color:#63c6c0!important;position:absolute;left:3.125em;top:2.813em}.ui.form .note_5 textarea{border-radius:.938em;width:51.875em;height:14.688em;background-color:#f8f8f8!important;position:absolute;left:3.125em;top:8.25em}.ui.form .note_5_button{position:absolute;bottom:1.875em;right:28.875em}.ap_notification.notification .menu.transition.visible{padding:0;height:396px;overflow-y:scroll}.ap_notification.notification .menu.transition.visible .view_more{font-style:normal;font-weight:600;font-size:15px;line-height:23px;color:#8ba2ab;text-align:center;padding:25px 0}.ap_notification.notification .menu.transition.visible .title{font-style:normal;font-weight:600;font-size:1.125em;line-height:1.5625em;color:#ca1a46;padding:29px 30px 0}.ap_notification.notification .menu.transition.visible .list{border-bottom:1px solid #f0f3f4;padding:22px 31px}.ap_notification.notification .menu.transition.visible .list .date_time{font-style:normal;font-weight:500;font-size:.95em;line-height:140%;color:#bed16d;margin:0}.ap_notification.notification .menu.transition.visible .list .description{color:#8ba2ab;font-size:1.225em}.ap_notification.notification .menu.transition.visible .list .description span{color:#104f56;font-weight:600}.ap_notification.notification .menu.transition.visible .list:last-child,.ap_notification.notification .menu.transition.visible .list :last-child{border-bottom:none!important}.ui.container{width:80%!important;margin:0 auto!important}.ui.grid>.column:not(.row),.ui.grid>.row>.column{padding-left:.6em!important;padding-right:.6em!important}.ap_list{box-shadow:0 0 .838em rgba(0,0,0,.118);border-radius:2em;display:inline-block;width:100%}.ap_list .ap_heading{display:flex;padding:3em 2.2em 1.5em;align-items:center;position:relative}.ap_list .ap_heading h4{color:#63c6c0;margin-bottom:0;font-size:1.2em;font-family:Lato,Helvetica Neue,Arial,Helvetica,sans-serif}.ap_list .ap_heading h5{font-size:.85em;line-height:1.25em;margin:0;color:#8ba2ab;text-align:right;position:absolute;right:3em;width:18%}.ap_list .ap_content{font-family:Lato,Helvetica Neue,Arial,Helvetica,sans-serif}.ap_list .ap_content .ap_body_16_semibold{font-size:1.1em;line-height:1.1em;color:#104f56}.ap_list .ap_content .ap_extrasmall_medium{font-size:.75em;line-height:1.8em;color:#708892;font-weight:700}.ap_list .item{border-bottom:.063em solid #ebebeb;position:relative;padding:.75em 2.2em!important;display:inline-table;width:100%;transition:all .35s ease-in-out;cursor:pointer}.ap_list .item:hover{background:#f8f8f8}.ap_list .item:last-child{margin-bottom:0;padding-bottom:0;border-bottom:0 solid #ebebeb}.ap_list .item .ap_item{display:flex;float:left;height:2.9em;align-items:center}.ap_list .item .ap_item .employeImage{display:inline-block;margin-right:1.6em;flex:none}.ap_list .item .ap_item .employeImage img{width:3em;height:3em;border-radius:100%;border:1px solid #8ba2ab}.ap_list .item .ap_icon{border-radius:100%;position:relative;float:right;right:0;top:2em;transform:translateY(-50%)}.ap_list .item .ap_icon i.icon.right{color:#a7be44}.ap_list .item .ap_icon i.icon,.ap_list .item .ap_icon i.icons{font-size:1.4em;width:1.5em;height:1.8em;margin:0;line-height:.9em;color:#8ba2ab}.ap_list .item .ap_amount{float:right;color:#104f56;line-height:1.6em;font-family:inherit;font-size:1.1em}.ap_list .ap_view{text-align:center;color:#bed16d;font-size:1em;font-weight:700;padding:1.6em 0}.ap_list .imageClass{display:flex;align-items:center;justify-content:center;flex:none;margin-right:1.6em;width:3em;height:3em;border-radius:100%;color:#fff}.ap_list .imageClass i.icon,.ap_list .imageClass i.icons{font-size:1em;margin:0}.ap_list .green{background-color:#a7be44}.ap_list .orange{background-color:#f9b132}.ap_list .dark_green{background-color:#104f56}.ap_list .red{background-color:#ca1a46}-webkit-tap-highlight-color{background:#ccc}.apPagination .p-paginator-first,.apPagination .p-paginator-last{display:none}.apPagination .p-paginator-element span{border:solid #f9b132;border-width:0 .2em .2em 0;display:inline-block;padding:.2em;margin-top:.1em}.apPagination .p-paginator-element .pi-angle-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.apPagination .p-paginator-element .pi-angle-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.apPagination .p-disabled{display:none}.apPagination .p-paginator .p-paginator-pages button.p-paginator-page{color:#708892;background-color:none;background-color:initial;border:none;width:1.6em;height:1.6em;border-radius:10em;padding:0;min-width:1em;min-height:1em;font-size:.8em;transition:all .2s ease-in-out;margin:0 .2em;cursor:pointer}.apPagination .p-paginator .p-paginator-pages button.p-paginator-page:focus{outline:none}.apPagination .p-paginator .p-paginator-pages button.p-paginator-page:hover{background:#f0f3f4}.apPagination .p-paginator .p-paginator-pages .p-paginator-page.p-highlight{background-color:#bed16d;color:#fff;transition:all .5s ease-in-out}.apPagination .p-paginator .p-paginator-pages .p-paginator-page.p-highlight:hover{background:#a7be44;color:#fff}.apPagination .p-paginator .p-paginator-next:hover,.apPagination .p-paginator .p-paginator-prev:hover{background:transparent!important}.apPagination .pi-angle-left:before,.apPagination .pi-angle-right:before{display:none}.apPagination .p-link:focus{box-shadow:none}table{border-collapse:initial;border-spacing:0 10px;margin-top:-10px}td{padding:10px}td:first-child,td:nth-child(2){border-left-style:solid;border-top-left-radius:10px;border-bottom-left-radius:10px}td:last-child{border-right-style:solid;border-bottom-right-radius:10px;border-top-right-radius:10px}.p-datatable{margin-bottom:4em;color:#104f56}.p-datatable .p-datatable-wrapper{border-radius:1.875em;box-shadow:0 0 1em rgba(2,2,2,.10196078431372549);padding:2.5em 2em 5.5em}.p-datatable .table-header-container{display:flex;justify-content:space-between}.p-datatable .p-input-icon-left input{font-size:1rem;display:inline-block;padding:.5rem 3em;border:0 solid #ced4da;border-radius:.188em;width:21.875em;height:3.125em;border-radius:.9em;box-shadow:0 0 1em rgba(2,2,2,.10196078431372549)}.p-datatable .p-input-icon-left i:first-of-type{left:1.5rem}.p-datatable .p-inputtext:enabled:focus{box-shadow:0 0 1em rgba(2,2,2,.10196078431372549);border-color:#ced4da}.p-datatable .p-checkbox .p-checkbox-box{border:2px solid #eef784;background:#eef784;border-radius:20em}.p-datatable .p-checkbox .p-checkbox-box.p-highlight{border-color:#104f56;background:#eef784}.p-datatable .p-checkbox .p-checkbox-box .p-checkbox-icon{transition-duration:.2s;color:#104f56;font-size:.7em;font-weight:700}.p-datatable .p-multiselect{position:relative;-webkit-user-select:none;user-select:none;border-radius:1em;background:#8ba2ab;color:#fff}.p-datatable .p-multiselect:focus{outline:none}.p-datatable .p-multiselect .p-multiselect-label-container{border-right:.05em solid #fff;padding:0 .4em}.p-datatable .p-multiselect .p-multiselect .p-multiselect-label{padding:.7rem .5rem}.p-datatable .p-multiselect .pi-chevron-down:before{color:#fff}.p-datatable .p-multiselect .p-multiselect-panel{border-radius:1.73em;overflow:hidden}.p-datatable .p-multiselect .p-multiselect-items-wrapper{max-height:300px!important}.p-datatable .p-multiselect .p-multiselect-header{display:none}.p-datatable .p-multiselect .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight{color:#104f56;background:none;padding:.5em 1.5em;font-size:.9em;line-height:1em;font-weight:400}.p-datatable .p-multiselect:not(.p-disabled):hover{border-color:transparent}.headingTable{margin:1.5em 0}.headingTable h4{font-size:.9em;line-height:1em;color:#104f56}.ap_table.p-datatable .p-datatable-header,.apPagination.p-datatable .p-datatable-header{background:none;border:none;padding:0;margin-bottom:1.5em}.ap_table.p-datatable .p-datatable-thead>tr>th,.apPagination.p-datatable .p-datatable-thead>tr>th{border:none;background:none;color:#104f56;text-align:center}.ap_table.p-datatable .p-datatable-tbody>tr>td,.apPagination.p-datatable .p-datatable-tbody>tr>td{border:none;color:#104f56;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}.ap_table.p-datatable .p-paginator,.apPagination.p-datatable .p-paginator{border:none;position:absolute;bottom:1em;left:50%;transform:translate(-50%)}.ap_table.p-datatable .p-selection-column .p-column-title,.apPagination.p-datatable .p-selection-column .p-column-title{position:absolute;right:0}.ap_table.p-datatable .p-datatable-tbody>tr.p-highlight,.apPagination.p-datatable .p-datatable-tbody>tr.p-highlight{background:#f8f8f8;color:#104f56;border-radius:20px;position:relative}.ap_table.p-datatable .p-datatable-tbody>tr,.apPagination.p-datatable .p-datatable-tbody>tr{outline-color:transparent;outline:none}.ap_table.p-datatable .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover,.apPagination.p-datatable .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover{border-color:#a7be44;background:#eef883}.p-datatable.p-datatable-hoverable-rows .p-datatable-tbody>tr:not(.p-highlight):hover{background:#f8f8f8!important}.p-datatable.single .p-datatable-tbody>tr>td:first-child,.p-datatable.single .p-datatable-thead>tr>th:first-child{display:none;text-align:center}.ap_table.p-datatable .p-datatable-tbody>tr>td:nth-child(2),.ap_table.p-datatable .p-datatable-tbody>tr>td:nth-child(3),.ap_table.p-datatable .p-datatable-thead>tr>th:nth-child(2),.ap_table.p-datatable .p-datatable-thead>tr>th:nth-child(3){text-align:left}.p-datatable.ap_table .p-datatable-tfoot>tr>td{text-align:center}.p-datatable.ap_table .p-datatable-tfoot>tr>td:first-child,.p-datatable.ap_table .p-datatable-tfoot>tr>td:nth-child(2){text-align:left}.p-datatable.ap_table .p-datatable-tfoot>tr>td{border:none;background:none}.searchShow{display:block}.hide_paginator.p-datatable .p-paginator,.searchHide{display:none}.hide_paginator.p-datatable .p-datatable-wrapper{padding:1.5em 2em}.ap_custom_color_dropdown{border-radius:15px!important;width:152px;height:3.13rem}.ap_custom_color_dropdown,.ap_custom_color_dropdown .ui.button{background:#8ba2ab;box-shadow:1px 3px 6px rgba(112,136,146,.16)!important}.ap_custom_color_dropdown .ui.button{border-radius:.9375em!important;color:#fff}.ap_custom_color_dropdown .ui.floating.dropdown.button.icon{background:#8ba2ab;box-shadow:1px 3px 6px rgba(112,136,146,.16)!important;border-radius:0!important;position:relative!important;border-left:1px solid;border-top-right-radius:.9375em!important;border-bottom-right-radius:.9375em!important}.ap_custom_color_dropdown .ui.button:active,.ap_custom_color_dropdown .ui.button:hover{color:#fff!important}.ap_custom_color_dropdown i.dropdown.icon{position:absolute!important;font-size:1.6em!important;left:-22%;right:0;top:25%;bottom:0}.ap_custom_color_dropdown .ui.floating.dropdown .visible.menu.transition{background:#fff;box-shadow:2px 2px 10px rgba(112,136,146,.2)!important;border-radius:23px!important;width:190px;padding:.625em;height:auto;left:-7.5em!important;right:0;top:2.1em;overflow:auto}.ap_custom_dot_dropdown .dropdown.button.icon{background:none!important;font-size:20px;color:#bed16d;padding:0}.ap_dropdown_color{display:inline;margin:0 .3125em}.ap_dropdown_color .ui.fitted.checkbox label:before{box-sizing:border-box;border-radius:.9375em!important;border:none!important}.ap_dropdown_color_red .ui.fitted.checkbox label:before{background:rgba(230,11,11,.897)!important}.ap_dropdown_color_blue .ui.fitted.checkbox label:before{background:#00f!important}.ap_dropdown_color .ui.checkbox input:checked~.box:after,.ui.checkbox input:checked~label:after{color:#fff;font-size:9px}.ap_form_dropdown .field{width:22.5em}.ap_form_dropdown .ui.dropdown{background:#f8f8f8;border:1px solid #8ba2ab;box-sizing:border-box;box-shadow:inset 0 2px 3px -1px rgba(112,136,146,.05);border-radius:15px!important;position:relative;color:#104f56!important;width:360px!important;height:50px!important;padding:13px}.ap_form_dropdown .divider.text{text-align:left;width:81%}.ap_form_dropdown{font-family:Poppins}.ap_form_dropdown .small{width:12.5em!important}.ap_form_dropdown .medium{width:14.375em!important;height:auto!important}.ap_form_dropdown .large{width:24.5em!important}.ap_form_dropdown label{color:#8ba2ab!important}.ap_form_dropdown .angle.down.icon,.ap_form_dropdown .angle.up.icon{position:absolute;right:.625em;font-size:1.375em;top:.9em}.ap_form_dropdown .ui.floating.dropdown .visible.menu.transition .header{display:inline;background:#f0f3f4;border-radius:.975em;padding:.625em!important;margin:.3em .5em!important;width:136px!important;text-transform:none;cursor:pointer;font-size:.9375em;color:#104f56!important;border-bottom:none;box-shadow:none;white-space:nowrap;overflow:hidden;text-align:center;font-family:Poppins;text-overflow:ellipsis}.ap_form_dropdown .ui.button.medium div{grid-column-gap:1px}.ap_form_dropdown .ui.floating.dropdown .visible.menu.transition .header.active{background:#104f56;border-radius:.95em;color:#fff!important;width:136px!important;height:36px}.ap_form_dropdown .ui.active.button:hover{background-color:#f8f8f8}.ap_form_dropdown .ui.dropdown .menu>.item{color:#104f56;font-weight:500;font-size:16px;line-height:24px}.ap_form_dropdown.color .menu.transition.medium{display:block}.ap_form_dropdown.customform .menu.transition.visible .item i{display:inline}.ap_form_dropdown.color .field.ap_dropdown_color.ap_dropdown_color_red{display:inline;width:10px}.ap_form_dropdown.color .menu.transition{background:#fff;box-shadow:2px 2px 10px rgba(112,136,146,.2)!important;border-radius:23px!important;width:190px;padding:.625em;height:auto;right:0;top:3.1em;overflow:auto}.ap_form_dropdown.color .menu.transition .ui.checkbox input:checked~label:after{color:#fff;font-size:9px}.ap_form_dropdown.form .ap_header{margin-bottom:.6em!important}.ap_form_dropdown.form .item i.icon{display:none}.ap_form_dropdown .dropdown .header.text{color:#104f56}.ap_custom_text_dropdown .menu>.item:hover,.ap_form_dropdown .ui.dropdown .menu>.item:hover{background:#f8f8f8;border-radius:1.875em;font-weight:600}.ap_header{margin-top:1.5625em;margin-bottom:1.875em!important}.ap_form_dropdown i.check.circle.icon:before{content:\"\\f00c\";color:#000!important}.ap_custom_text_dropdown{color:#63c6c0;font-style:normal;font-weight:600;font-size:1.225em;line-height:1.5625em}.ap_custom_search_dropdown{background:#8ba2ab!important}.ap_custom_search_dropdown,.ap_dropdown{box-shadow:1px 3px 6px rgba(112,136,146,.16)!important;border-radius:15px!important;width:152px;height:3.13rem}.ap_dropdown{background:#8ba2ab}.ap_dropdown.active:hover,.ap_dropdown.active:hover .ui.button,.ap_dropdown.active:hover .ui.floating.dropdown.button.icon{background:#708892}.ap_dropdown.disabled,.ap_dropdown.disabled .ui.button,.ap_dropdown.disabled .ui.floating.dropdown.button.icon{pointer-events:none;background:#c5d0d5}.ap_dropdown .ui.button{border-radius:.9375em!important;color:#fff}.ap_dropdown .ui.button,.ap_dropdown .ui.floating.dropdown.button.icon{background:#8ba2ab;box-shadow:1px 3px 6px rgba(112,136,146,.16)!important}.ap_dropdown .ui.floating.dropdown.button.icon{border-radius:0!important;position:relative!important;border-left:1px solid;border-top-right-radius:.9375em!important;border-bottom-right-radius:.9375em!important}.ap_dropdown i.dropdown.icon{position:absolute!important;font-size:1.6em!important;left:-22%;right:0;top:25%;bottom:0}.ap_dropdown .ui.floating.dropdown .visible.menu.transition{background:#fff;box-shadow:2px 2px 10px rgba(112,136,146,.2)!important;border-radius:23px!important;width:190px;padding:.625em;height:auto;left:-10.5em!important;right:0;top:2.1em;overflow:auto}.ap_icon_dropdown.image .ui.dropdown .item img{border-radius:50%;height:30px;width:30px}.ap_icon_dropdown.image.input .menu.transition.visible{height:auto;max-height:300px;overflow-y:auto}.ap_custom_text_dropdown .selected.item,.ap_dropdown .selected.item{background:rgba(0,0,0,.03)!important;color:rgba(0,0,0,.95)!important;border-radius:30px}.ap_icon_dropdown .remove_icon .dropdown.icon,.ap_icon_dropdown .remove_icon i.ellipsis.horizontal.icon{display:none}.ap_icon_dropdown .remove_icon .visible.menu.transition{top:1px;left:1px!important}.ap_custom_text_dropdown i.circle.icon:before,.ap_dropdown i.circle.icon:before,.ap_form_dropdown.customform i.circle.icon:before,.ap_icon_dropdown i.circle.icon:before{background:#eef784!important;border:.125em solid #104f56!important;box-sizing:border-box;border-radius:.9375em!important;color:#eef784!important;font-size:12px;padding:.1875em .4em}.ap_dropdown .ui.button:active,.ap_dropdown .ui.button:hover{color:#fff!important}.ap_form_dropdown.customform.minutes,.ap_form_dropdown.customform.minutes .ui.button.dropdown.icon.medium{width:10.375em!important}.ap_form_dropdown.customform.minutes .divider.text{font-size:35px}.ap_dropdown i.check.circle.icon:before,.ap_form_dropdown.customform i.check.circle.icon:before,.ap_icon_dropdown i.check.circle.icon:before{content:\"\\f00c\";color:#000!important}.ap_form_dropdown.customform.scroll .menu.transition.visible{height:160px!important}.ap_dropdown .ui.dropdown .menu>.item:hover{border-radius:.9375em!important}.ui.buttons.ap_icon_dropdown button{display:none}.ap_icon_dropdown .ui.floating.dropdown.button.icon{background:#8ba2ab!important;color:#fff;width:40px;height:40px;border-radius:50%;position:relative}.ap_icon_dropdown.bg_white .ui.floating.dropdown.button.icon{background:#fff!important;color:#000!important;font-size:20px;padding:.375em}.ap_icon_dropdown.light_green .ui.floating.dropdown.button.icon{color:#bed16d!important;background:#fff!important;box-shadow:none!important;height:30px!important}.ap_icon_dropdown i.dropdown.icon,.ap_icon_dropdown i.ellipsis.horizontal.icon{position:absolute!important;top:.49em;left:.7125em;font-size:20px!important;padding:0!important}.ap_icon_dropdown i.ellipsis.horizontal.icon{top:.775em}.ap_form_dropdown .menu.transition.large,.ap_form_dropdown .menu.transition.medium,.ap_form_dropdown .menu.transition.small{display:none}.ap_form_dropdown .menu.transition.visible.small .item{padding-left:0!important}.ap_form_dropdown .ui.left.icon.input.search input{background:#f8f8f8;box-shadow:inset 0 2px 3px -1px rgba(112,136,146,.05);border-radius:15px!important;width:20.125em;height:3.125em}.ap_form_dropdown.custom{position:relative}.ap_form_dropdown.custom .menu.transition.visible .select_option{font-weight:600;font-size:16px;line-height:24px;color:#bed16d;padding-left:15px}.ap_form_dropdown.custom .menu.transition.visible .item{font-style:normal;font-weight:400;font-size:15px;line-height:22px;color:#104f56;padding-left:15px!important}.ap_form_dropdown.custom .menu.transition.visible .item:hover{border-radius:30px;font-weight:600}.ap_custom_text_dropdown .menu.transition .item{font-style:normal;font-weight:400;font-size:15px;line-height:22px;color:#104f56}.ap_custom_text_dropdown .menu.transition .item:hover{font-weight:600}.ap_form_dropdown.custom .divider.text{width:100%;padding-left:30px}.ap_form_dropdown.custom .divider.text,.ap_form_dropdown.custom .plus{color:#63c6c0;font-style:normal;font-weight:600;font-size:1.225em;line-height:1.5625em}.ap_form_dropdown.custom .plus{position:absolute;left:1px}.ap_custom_dot_dropdown .ui.floating.dropdown .visible.menu.transition,.ap_custom_text_dropdown .ui.floating.dropdown .visible.menu.transition,.ap_form_dropdown .ui.floating.dropdown .visible.menu.transition,.ap_icon_dropdown .ui.floating.dropdown .visible.menu.transition,.ap_notification .ui.floating.dropdown .visible.menu.transition{background:#fff;box-shadow:2px 2px 10px rgba(112,136,146,.2)!important;border-radius:23px!important;width:190px;padding:.625em;height:auto;overflow:auto}.ap_custom_text_dropdown.line{color:#104f56;font-style:normal;font-weight:600;font-size:1.225em;line-height:1.5625em;border-bottom:3px solid #104f56}.ap_custom_text_dropdown.line .divider.text{padding:6px}.ap_custom_dot_dropdown .selected.item,.ap_icon_dropdown .item:hover,.ap_icon_dropdown .selected.item{background:rgba(0,0,0,.03)!important;color:#104f56;background:#f8f8f8;border-radius:30px!important}.ap_custom_dot_dropdown .menu>.item:hover,.ap_custom_text_dropdown .ui.dropdown .menu>.item:hover{border-radius:.9375em!important}.ap_dropdown.medium{height:50px;width:185px}.ap_dropdown.small{height:40px;width:163px}.ap_dropdown.medium button{width:62%}.ap_dropdown.small button{width:65%}.ap_custom_text_dropdown.line span.text,.ap_dropdown .ui.floating.dropdown.button.icon span.text{font-style:normal;font-weight:400;font-size:15px;line-height:22px;color:#104f56}.ap_icon_dropdown .item span.text{font-style:normal!important;font-weight:500!important;font-size:16px!important;line-height:24px!important;color:#104f56!important}.ap_dropdown .selected.item span.text,.ap_icon_dropdown .item span.text:hover,.ap_icon_dropdown .selected.item span.text{font-weight:600!important}.ap_custom_text_dropdown span.text{font-size:.9375em;line-height:1.375em;color:#104f56}.ap_icon_dropdown.medium,.ap_icon_dropdown.medium .ui.floating.dropdown.button.icon{width:50px;height:50px}.ap_icon_dropdown.small,.ap_icon_dropdown.small .ui.floating.dropdown.button.icon{width:40px;height:40px}.ap_icon_dropdown.medium i.dropdown.icon{top:.79em!important;left:.9125em!important}.ui.left.icon.input.search input{border-radius:.9375em!important}.ap_dropdown.calendar{width:185px!important;float:right}.ap_dropdown.calendar button{width:68%}.ap_dropdown.calendar .ui.floating.dropdown .visible.menu.transition{left:-150px!important;width:185px;height:369px;overflow-y:scroll}.ap_dropdown.calendar .ui.floating.dropdown .visible.menu.transition .header{font-style:normal;font-weight:600;font-size:15px;line-height:23px;color:#8ba2ab;mix-blend-mode:normal;opacity:.7;border:none;box-shadow:0 0 #fff}.ap_dropdown.calendar .ui.floating.dropdown .visible.menu.transition .item .text{font-style:normal;font-weight:400;font-size:15px;color:#104f56}.ap_dropdown.calendar .ui.floating.dropdown .visible.menu.transition .item.active{background:rgba(0,0,0,.05);border-radius:15px}.ap_form .selection.dropdown,.ap_form input,.ap_form textarea{display:flex!important;flex-direction:row!important;align-items:flex-start!important;padding:.9375em 1.125em 1em .9375em!important;box-shadow:inset 0 .125em .1875em -.0625em rgba(112,136,146,.1)!important;border-radius:.9375em!important}.ap_form .selection.dropdown:hover,.ap_form input:focus,.ap_form input:hover,.ap_form textarea:focus,.ap_form textarea:hover{border:1px solid #63c6c0!important}.ap_form.grey .selection.dropdown,.ap_form.grey input,.ap_form.grey textarea{background-color:#f8f8f8!important}.ap_form.grey .ui.button,.ap_form.grey .ui.buttons,.ap_form.grey .ui.floating.dropdown.button.icon{background:#f8f8f8!important}.ap_form .ui.buttons{background:#fff;box-shadow:1px 3px 6px rgba(112,136,146,.16)!important;border-radius:15px!important;width:100%;height:3.13rem}.ap_form .ui.button{background:#fff;border-radius:.9375em!important;color:#8ba2ab;width:90%}.ap_form .ui.floating.dropdown.button.icon{background:#fff;box-shadow:1px 3px 6px rgba(112,136,146,.16)!important;border-radius:0!important;position:relative!important;border-left:1px solid;border-top-right-radius:.9375em!important;border-bottom-right-radius:.9375em!important;width:10%}.ap_form i.dropdown.icon{position:absolute!important;font-size:1.6em!important;left:-22%;right:0;top:25%;bottom:0}.ap_form .ui.floating.dropdown .visible.menu.transition{background:#fff;box-shadow:2px 2px 10px rgba(112,136,146,.2)!important;border-radius:23px!important;padding:.625em;height:auto}.ap_form .selected.item{background:rgba(0,0,0,.03)!important;color:rgba(0,0,0,.95)!important;border-radius:30px}.ap_form .ui.dropdown .menu>.item:hover{border-radius:.9375em!important}.ap_form .disabled{opacity:1!important}.ap_form.small input{height:3.125em!important}.ap.form.large input{height:3.75em!important}.ap_form .error input{border:1px solid #ca1a46!important;border-radius:15px!important}.ap_form .helper{color:#63c6c0;font-size:.95em;text-align:left;padding:.3125em}.ap_form .helper.error{color:#ca1a46!important;font-weight:500}.ap_form .error .delete.icon:before{left:20%!important;top:40%!important;color:#ca1a46;border:1px solid #ca1a46;border-radius:50%;width:20px!important;height:20px;margin:0;padding-top:3px}.ap_form.large .error .delete.icon:before{left:28%!important;font-size:13px!important}.ap_form .check.circle.outline.icon:before{font-size:20px;color:#bed16d!important}.ap_form label{font-weight:600!important;font-size:.975em!important;line-height:140%;color:#8ba2ab!important;border:.0625em solid rgba(0,0,0,.0001)}.ap_checkbox.ui.checkbox label:before,.ap_form .checkbox label:before{background:#eef784!important;border:.125em solid #104f56!important;box-sizing:border-box;border-radius:.9375em!important}.ap_checkbox.ui.checkbox input:checked~label:after,.ap_form .checkbox input:checked~label:after{font-size:10px!important;color:#000!important}.ap_checkbox.small.ui.checkbox label:before,.ap_form .small.checkbox label:before{height:20px;width:20px}.ap_checkbox.large.ui.checkbox label:before,.ap_form .large.checkbox label:before{height:30px;width:30px;left:-10px}.ap_checkbox.small.ui.checkbox input:checked~label:after,.ap_form .small.checkbox input:checked~label:after{font-size:12px!important;color:#000!important;top:2px;left:2px}.ap_checkbox.large.ui.checkbox input:checked~label:after,.ap_form .large.checkbox input:checked~label:after{font-size:18px!important;color:#000!important;top:6px;left:-3px}.ap_input.grey input{background-color:#f8f8f8!important}.ap_input .label{position:absolute;background:none;top:-2.3em;color:#104f56!important;font-weight:700!important;left:.7em;padding:0}.ap_input input{border-radius:.9375em!important;border:1px solid rgba(34,36,38,.15)!important;display:flex;flex-direction:row;align-items:flex-start;padding:.9375em 1.125em 1em .9375em;box-shadow:inset 0 .125em .1875em -.0625em rgba(112,136,146,.1);border-radius:.9375em;height:3.125em;width:20em}";
styleInject(css_248z);

function HelloWorld() {
  return /*#__PURE__*/React__default['default'].createElement("h1", null, "Hello World");
}

const Button = ({
  children,
  color,
  size,
  className,
  basic,
  disabled
}) => {
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button, {
    disabled: disabled,
    basic: basic,
    className: `${className} ${`ap_${color}`} ${size}`
  }, children));
};

Button.defaultProps = {
  className: '',
  size: '',
  disabled: false,
  basic: false
};
Button.propTypes = {
  children: PropTypes__default['default'].node.isRequired,
  color: PropTypes__default['default'].string,
  size: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  disabled: PropTypes__default['default'].bool,
  basic: PropTypes__default['default'].bool
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const Dropdown = props => {
  const {
    labelText = "Select",
    options,
    iconType,
    search,
    color,
    calendar,
    openDropdown,
    dropdownHandle,
    inputHandle
  } = props;
  let minutes = [];

  for (let i = 1; i <= 60; i++) {
    minutes.push(i);
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, props.addtask ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    labeled: true,
    text: labelText,
    icon: "plus circle",
    className: "icon ap_form_dropdown custom"
  }, openDropdown ? {
    open: true
  } : {}), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, {
    className: `${props.large ? 'large' : props.medium ? 'medium' : 'small'}`
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Input, {
    icon: "search",
    iconPosition: "left",
    placeholder: "Name Task",
    className: "search",
    onClick: () => inputHandle()
  }), props.title && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ap_header"
  }, props.title.map((titleText, index) => /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Header, {
    key: index,
    content: titleText.content,
    className: `${titleText.class}`
  }))), props.items.map((item, index) => {
    let iconsRender = item.icon ? item.icon : '';
    return /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, {
      key: index,
      text: `${item.text}`,
      icon: iconsRender
    });
  }))) : props.notification ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ui dropdown ap_notification notification"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "menu transition visible"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "title"
  }, "Notifications"), props.data.map(notify => /*#__PURE__*/React__default['default'].createElement("div", {
    className: "list"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    className: "date_time"
  }, notify.date, ", ", notify.time), /*#__PURE__*/React__default['default'].createElement("p", {
    className: "description"
  }, notify.description, " ", /*#__PURE__*/React__default['default'].createElement("span", null, notify.taskname)))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "view_more"
  }, "View More"))) : props.template ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ui dropdown ap_form_dropdown custom"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "alert",
    className: "divider text",
    onClick: () => props.onClickEvent()
  }, props.labelText), /*#__PURE__*/React__default['default'].createElement("i", {
    "aria-hidden": "true",
    className: "plus circle icon"
  }), props.templateOpen && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "menu transition visible small"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ui input ap_input grey"
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    placeholder: "Name Task",
    type: "text",
    value: props.inputText,
    onChange: e => props.inputEvent(e),
    autoFocus: true
  })), props.showButton && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "task_btns"
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "ui button cancel",
    onClick: props.cancelEvent
  }, "Cancel"), /*#__PURE__*/React__default['default'].createElement("button", {
    className: "ui button add",
    onClick: props.addEvent
  }, "Add Task")), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "select_option"
  }, "Or Select Task Template"), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ap_header"
  }, props.title.map((header, index) => /*#__PURE__*/React__default['default'].createElement("div", {
    key: index,
    className: `header ${header.value === props.dropdownHeaderValue ? 'active' : ''}`,
    onClick: () => props.headerTemplateEvent(header.value)
  }, header.content))), props.title.find(item => item.value === props.dropdownHeaderValue).items.map((headerContent, index) => /*#__PURE__*/React__default['default'].createElement("div", {
    role: "option",
    className: "item",
    key: index,
    onClick: () => props.templateValueEvent(headerContent.value)
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "text"
  }, headerContent.text))))) : props.text ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    text: labelText,
    icon: "angle down",
    className: `ap_custom_text_dropdown ${props.line ? 'line' : ''}`
  }, props.line ? {
    options: options
  } : {}, {
    onChange: props.dropdownHandle
  }), !props.line ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, null, options && options.map((item, index) => /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, {
    text: item.text,
    key: index,
    onClick: () => props.itemEvent(item.value)
  }))) : null) : props.color ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ap_form_dropdown color"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    role: "listbox",
    "aria-expanded": "false",
    className: "ui button dropdown icon medium",
    onClick: () => props.openColorMenu()
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "alert",
    className: "divider text"
  }, "Please Select"), /*#__PURE__*/React__default['default'].createElement("i", {
    "aria-hidden": "true",
    className: "angle down icon"
  }), props.openDropdown && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "menu transition"
  }, props.options.map(option => /*#__PURE__*/React__default['default'].createElement("div", {
    className: `field ap_dropdown_color ap_dropdown_color_${option.value} `,
    onClick: () => props.itemEvent(option.value)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ui checked fitted checkbox"
  }, /*#__PURE__*/React__default['default'].createElement("input", _extends({
    className: "hidden",
    type: "checkbox",
    value: ""
  }, option.value === props.selected ? {
    checked: true
  } : {}, {
    onChange: () => props.itemEvent(option.value)
  })), /*#__PURE__*/React__default['default'].createElement("label", null))))))) : props.customform ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Form, {
    className: `ap_form_dropdown customform ${props.scroll ? 'scroll' : ''} ${props.minutes ? 'minutes' : ''}`
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Form.Field, {
    className: `${props.large ? 'large' : props.medium ? 'medium' : 'small'}`
  }, !props.nolabel && props.labelText && /*#__PURE__*/React__default['default'].createElement("label", null, " ", props.labelText, " "), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    text: props.defaultText ? props.defaultText : "Please Select",
    button: true,
    className: `icon ${props.large ? 'large' : props.medium ? 'medium' : 'small'}`,
    icon: "angle down"
  }, props.openDropdownEvent ? {
    open: props.openDropdownEvent
  } : {}), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, {
    className: `${props.large ? 'large' : props.medium ? 'medium' : 'small'}`
  }, props.minutes && minutes.length && minutes.map((minute, index) => /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, {
    key: index,
    text: minute,
    onClick: () => props.itemEvent(minute)
  })), props.options && props.options.map((item, index) => {
    let iconsRender = item.icon ? item.icon : '';
    return /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, {
      key: index,
      text: `${item.text}`,
      icon: iconsRender,
      onClick: () => props.itemEvent(item.value)
    });
  }))))) : props.form ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Form, {
    className: "ap_form_dropdown form"
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Form.Field, {
    className: `${props.large ? 'large' : props.medium ? 'medium' : 'small'}`
  }, props.labelText && /*#__PURE__*/React__default['default'].createElement("label", null, " ", props.labelText, " "), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    text: props.defaultText ? props.defaultText : "Please Select",
    button: true,
    className: `icon ${props.large ? 'large' : props.medium ? 'medium' : 'small'}`,
    icon: "angle down"
  }, props.openDropdownEvent ? {
    open: props.openDropdownEvent
  } : {}), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, {
    className: `${props.large ? 'large' : props.medium ? 'medium' : 'small'}`
  }, props.title && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ap_header"
  }, props.title.map((titleText, index) => /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Header, {
    key: index,
    content: titleText.content,
    className: `${titleText.value === props.dropdownHeaderValue ? 'active' : ''}`,
    onClick: () => props.headerTemplateEvent(titleText.value)
  }))), props.title.find(item => item.value === props.dropdownHeaderValue).items.map((headerContent, index) => {
    return /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, {
      key: index,
      text: `${headerContent.text}`,
      onClick: () => props.templateValueEvent(headerContent.value)
    });
  }))))) : props.image ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button.Group, {
    className: `
                                ${props.active ? 'active' : props.disabled ? 'disabled' : ''}
                                ${props.icon || props.show ? 'ap_icon_dropdown' : props.color ? 'ap_custom_color_dropdown' : 'ap_dropdown'} 
                                ${props.medium ? 'medium' : 'small'} 
                                ${props.bg_white ? 'bg_white' : ''} 
                                ${props.type === 'dots' || props.show ? 'light_green' : ''}    
                                ${calendar ? 'calendar' : ''}
                                ${props.image ? 'image' : props.input ? 'input' : ''}
                            `
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, {
    className: `button icon ${props.show ? 'remove_icon' : ''}`,
    floating: true,
    trigger: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null),
    open: true
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, null, props.input && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Input, {
    icon: "search",
    iconPosition: "left",
    className: "search ap_input grey",
    value: props.inputText,
    onClick: () => props.stayOpenEvent(),
    onChange: e => props.inputEvent(e),
    autoFocus: true
  }), options.map(option => /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, _extends({
    key: option.value
  }, option, {
    onClick: () => props.itemEvent(option.value)
  })))))) : props.custom ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button.Group, {
    className: ` ${props.icon ? 'ap_icon_dropdown' : 'ap_dropdown'} 
                            ${props.active ? 'active' : props.disabled ? 'disabled' : ''}
                            ${props.medium ? 'medium' : 'small'} ${props.filter ? 'sort_dropdown' : ''} `
  }, labelText && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button, null, labelText), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    className: "button icon",
    floating: true,
    trigger: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null)
  }, props.openDropdown ? {
    open: props.openDropdown
  } : {}), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, null, options && options.map((option, index) => {
    return /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, _extends({
      text: option.text,
      key: index,
      value: option.value,
      onClick: props.dropdownHandle
    }, option.icon ? {
      icon: option.icon
    } : {}, {
      className: ` ${option.active ? 'active' : ''}`
    }));
  })))) : props.search ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button.Group, {
    className: `
                            ${props.active ? 'active' : props.disabled ? 'disabled' : ''}
                            ${props.icon || props.show ? 'ap_icon_dropdown' : props.color ? 'ap_custom_color_dropdown' : 'ap_dropdown'} 
                            ${props.medium ? 'medium' : 'small'} 
                        `,
    onClick: props.onClickEvent
  }, labelText && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button, null, labelText), /*#__PURE__*/React__default['default'].createElement("div", {
    role: "listbox",
    "aria-expanded": "true",
    className: "ui active visible floating dropdown button icon remove_icon",
    tabindex: "0"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    "aria-hidden": "true",
    className: "dropdown icon"
  }), openDropdown && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "visible menu transition"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ui left icon input search ap_input grey"
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    type: "text",
    value: props.inputText,
    onChange: e => props.inputEvent(e)
  }), /*#__PURE__*/React__default['default'].createElement("i", {
    "aria-hidden": "true",
    className: "search icon"
  })), props.options.map(option => /*#__PURE__*/React__default['default'].createElement("div", {
    role: "option",
    className: `${option.icon === 'check circle' ? 'selected' : ''} item`,
    onClick: () => props.itemEvent(option.value)
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    "aria-hidden": "true",
    className: `${option.icon} icon`
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "text"
  }, option.text)))))) : /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button.Group, {
    className: `
                            ${props.active ? 'active' : props.disabled ? 'disabled' : ''}
                            ${props.icon || props.show ? 'ap_icon_dropdown' : props.color ? 'ap_custom_color_dropdown' : 'ap_dropdown'} 
                            ${props.medium ? 'medium' : 'small'} 
                            ${props.bg_white ? 'bg_white' : ''} 
                            ${props.type === 'dots' || props.show ? 'light_green' : ''}    
                            ${calendar ? 'calendar' : ''}
                        `
  }, labelText && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button, null, labelText), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    className: `button icon ${props.show ? 'remove_icon' : ''}`,
    floating: true,
    trigger: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null),
    onChange: props.dropdownHandle
  }, search || color || props.image ? {} : {
    options: options
  }, props.type ? {
    icon: "ellipsis horizontal"
  } : {}, openDropdown || props.show ? {
    open: true
  } : {}, props.disabled ? {
    disabled: true
  } : ''), search || calendar ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, null, search && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Input, {
    icon: "search",
    iconPosition: "left",
    className: "search ap_input grey",
    value: props.inputText,
    onClick: () => props.stayOpenEvent(),
    onChange: e => props.inputEvent(e),
    autoFocus: true
  }), options && options.map((option, index) => {
    return option.type !== 'undefined' && option.type === 'label' ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Header, {
      content: option.text
    }) : /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, _extends({
      text: option.text,
      key: index,
      value: option.value,
      onClick: dropdownHandle
    }, option.icon ? {
      icon: option.icon
    } : {}, {
      className: ` ${option.active ? 'active' : ''}`
    }));
  })) : color && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, null, options && options.map(color => {
    let checked1 = color.value === 'red' ? {
      checked: true
    } : '';
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: `field ap_dropdown_color ap_dropdown_color_${color.value}`,
      onClick: () => props.itemEvent(color.value)
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "ui checked fitted checkbox"
    }, /*#__PURE__*/React__default['default'].createElement("input", _extends({
      className: "hidden",
      readonly: "",
      type: "checkbox",
      value: ""
    }, checked1, {
      onChange: () => props.itemEvent(color.value)
    })), /*#__PURE__*/React__default['default'].createElement("label", null)));
  })))));
};

exports.Button = Button;
exports.Dropdown = Dropdown;
exports.HelloWorld = HelloWorld;
