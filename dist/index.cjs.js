'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

var css_248z$1 = "body{margin:0;font-family:Poppins!important}.semantic_ui_ap_diagram_1__2Yu3i{font-weight:300;font-size:8.438em;line-height:1.25em}.semantic_ui_ap_diagram_1__2Yu3i,.semantic_ui_ap_diagram_2_semibold__3QMvd{font-family:Poppins;font-style:normal;letter-spacing:-.01em}.semantic_ui_ap_diagram_2_semibold__3QMvd{font-weight:600;font-size:6.25em;line-height:1.375em}.semantic_ui_ap_diagram_3__2Pxs1{font-weight:400}.semantic_ui_ap_diagram_3__2Pxs1,.semantic_ui_ap_diagram_3_bold__2cC_M{font-family:Poppins;font-style:normal;font-size:3.75em;line-height:1.125em;letter-spacing:-.01em}.semantic_ui_ap_diagram_3_bold__2cC_M{font-weight:700}.semantic_ui_ap_header_1__1b2wU{font-size:2.813em;line-height:1.588em}.semantic_ui_ap_header_1__1b2wU,.semantic_ui_ap_header_2__1i6FJ{font-family:Poppins;font-style:normal;font-weight:600}.semantic_ui_ap_header_2__1i6FJ{font-size:2.188em;line-height:1.25em}.semantic_ui_ap_header_3__6L-1q{font-family:Poppins;font-style:normal;font-weight:600;font-size:1.75em;line-height:2.188em}.semantic_ui_ap_header_5__2rPjt{font-weight:500}.semantic_ui_ap_header_5__2rPjt,.semantic_ui_ap_header_5_semibold__iCn0C{font-family:Poppins;font-style:normal;font-size:1.375em;line-height:2.063em}.semantic_ui_ap_header_5_semibold__iCn0C{font-weight:600}.semantic_ui_ap_subtitle_body_large__1U458{font-family:Poppins;font-style:normal;font-weight:400;font-size:1.125em;line-height:1.688em}.semantic_ui_ap_subtitle_body_large_semibold__3tEb7{font-family:Poppins;font-style:normal;font-weight:600;font-size:1.125em;line-height:1.563em}.semantic_ui_ap_body_16__1EmUZ{font-weight:400}.semantic_ui_ap_body_16__1EmUZ,.semantic_ui_ap_body_16_semibold__1lFxj{font-family:Poppins;font-style:normal;font-size:1em;line-height:1.5em}.semantic_ui_ap_body_16_semibold__1lFxj{font-weight:600}.semantic_ui_ap_body_16_medium__vUp__{font-family:Poppins;font-style:normal;font-weight:500;font-size:1em;line-height:1.5em}.semantic_ui_body_15_regular__ocw2a{font-weight:400}.semantic_ui_body_15_medium__3jc2v,.semantic_ui_body_15_regular__ocw2a{font-family:Poppins;font-style:normal;font-size:.938em;line-height:1.375em}.semantic_ui_body_15_medium__3jc2v{font-weight:500}.semantic_ui_body_15_semibold__TcRSu{font-family:Poppins;font-style:normal;font-weight:600;font-size:.938em;line-height:1.438em}.semantic_ui_ap_small__1Sn_z{font-size:.875em}.semantic_ui_ap_extrasmall_medium__b5JRB,.semantic_ui_ap_small__1Sn_z{font-family:Poppins;font-style:normal;font-weight:500;line-height:1.5em}.semantic_ui_ap_extrasmall_medium__b5JRB{font-size:.75em}.semantic_ui_ap_button_small__si9_5{font-family:Poppins;font-style:normal;font-weight:600;font-size:.875em!important;line-height:1.313em;letter-spacing:.01em;text-transform:capitalize}.semantic_ui_ap_button_medium__pS1br{font-size:.938em!important;line-height:1.375em}.semantic_ui_ap_button_large__3cjGh,.semantic_ui_ap_button_medium__pS1br{font-family:Poppins;font-style:normal;font-weight:600;letter-spacing:.02em;text-transform:capitalize}.semantic_ui_ap_button_large__3cjGh{font-size:1em!important;line-height:1.5em}.semantic_ui_main_card_white__3Qx90{box-shadow:.25em .25em .5em rgba(112,136,146,.05)!important}.semantic_ui_main_card_color__1fcbO{box-shadow:.625em .625em 3.125em rgba(112,136,146,.2)!important}.semantic_ui_pop_up__ROaG2{box-shadow:.313em .313em 6.25em rgba(112,136,146,.08)!important}.semantic_ui_dropdown_small__3Z1jZ{box-shadow:.125em .125em .625em rgba(112,136,146,.2)!important}.semantic_ui_dropdown_large__1lOnz{box-shadow:.313em .313em 2.5em rgba(112,136,146,.12)!important}.semantic_ui_button__1nWIV{box-shadow:.063em .188em .375em rgba(112,136,146,.16)!important}.semantic_ui_side_navi_shadow__2Exhw{box-shadow:.125em 0 .313em rgba(112,136,146,.02)!important}.semantic_ui_snackbar__1GZUF{box-shadow:.125em .188em .75em rgba(141,164,173,.4)!important}.semantic_ui_grey_form__1S8jF{box-shadow:inset 0 .125em .188em -.063em rgba(112,136,146,.05)!important}.semantic_ui_white_form__3QaQH{box-shadow:inset 0 .125em .188em -.063em rgba(112,136,146,.1)!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_darkgreen__xyhd9,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_darkgreen__xyhd9,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_darkgreen__xyhd9.semantic_ui_icon__apPuH{background-color:#104f56!important;color:#fff!important}i.semantic_ui_icon__apPuH.semantic_ui_ap_darkgreen__xyhd9{color:#104f56!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_blue__GPkD3,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_blue__GPkD3,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_blue__GPkD3.semantic_ui_icon__apPuH{background-color:#38a3cc!important;color:#fff!important}i.semantic_ui_icon__apPuH.semantic_ui_ap_blue__GPkD3{color:#38a3cc!important}i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_coolgrey50__2Srhy.semantic_ui_icon__apPuH{background-color:#f0f3f4!important;color:#8ba2ab!important}i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_coolgrey50__2Srhy.semantic_ui_icon__apPuH:hover{background-color:#8ba2ab!important;color:#fff!important}i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_coolgrey50__2Srhy.semantic_ui_icon__apPuH:disabled{background-color:#f0f3f4!important;color:#8ba2ab!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_coolgrey__2INLa,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_coolgrey__2INLa,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_coolgrey__2INLa.semantic_ui_icon__apPuH{background-color:#8ba2ab!important;color:#fff!important}i.semantic_ui_icon__apPuH.semantic_ui_ap_coolgrey__2INLa{color:#8ba2ab!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_coolgrey__2INLa:hover,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_coolgrey__2INLa.semantic_ui_icon__apPuH:hover{background-color:#708892!important;color:#fff!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_coolgrey__2INLa:disabled,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_coolgrey__2INLa.semantic_ui_icon__apPuH:disabled{background-color:#c5d0d5!important;color:#fff!important}.semantic_ui_ap_coolgrey_50__1C1IR,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_coolgrey_50__1C1IR,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_coolgrey_50__1C1IR.semantic_ui_icon__apPuH{background-color:#f0f3f4!important;color:#fff!important}.semantic_ui_ap_warmgrey_100__3Cq-B,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_warmgrey_100__3Cq-B,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_warmgrey_100__3Cq-B.semantic_ui_icon__apPuH{background-color:#ebebeb!important;color:#fff!important}.semantic_ui_ap_warmgrey_50__SjyUV,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_warmgrey_50__SjyUV,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_warmgrey_50__SjyUV.semantic_ui_icon__apPuH{background-color:#f8f8f8!important;color:#fff!important}.semantic_ui_ap_white__bMxAb{background-color:#fff!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_teal__3MI2t,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_teal__3MI2t,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_teal__3MI2t.semantic_ui_icon__apPuH{background-color:#63c6c0!important;color:#fff!important}i.semantic_ui_icon__apPuH.semantic_ui_ap_teal__3MI2t{color:#63c6c0!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_basic__33h43{background:transparent!important;color:#63c6c0}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_teal__3MI2t:hover,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_teal__3MI2t.semantic_ui_icon__apPuH:hover{background-color:#26a79f!important;color:#fff!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_teal__3MI2t:disabled,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_teal__3MI2t.semantic_ui_icon__apPuH:disabled{background-color:#b1e3df!important;color:#fff!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_green__1BYB_,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_green__1BYB_,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_green__1BYB_.semantic_ui_icon__apPuH{background-color:#bed16d!important;color:#fff!important}i.semantic_ui_icon__apPuH.semantic_ui_ap_green__1BYB_{color:#63c6c0!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_green__1BYB_:hover,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_green__1BYB_.semantic_ui_icon__apPuH:hover{background-color:#a7be44!important;color:#fff!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_green__1BYB_:disabled,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_green__1BYB_.semantic_ui_icon__apPuH:disabled{background-color:#dfe8b6!important;color:#fff!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_red__2tQtZ,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_red__2tQtZ,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_red__2tQtZ.semantic_ui_icon__apPuH{background-color:#ca1a46!important;color:#fff!important}i.semantic_ui_icon__apPuH.semantic_ui_ap_red__2tQtZ{color:#ca1a46!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_orange__3RP9b,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_orange__3RP9b,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_orange__3RP9b.semantic_ui_icon__apPuH{background-color:#f9b132!important;color:#fff!important}i.semantic_ui_icon__apPuH.semantic_ui_ap_orange__3RP9b{color:#f9b132!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_ap_lime__2coRU,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_lime__2coRU,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_lime__2coRU.semantic_ui_icon__apPuH{background-color:#eef784!important;color:#fff!important}i.semantic_ui_icon__apPuH.semantic_ui_ap_lime__2coRU{color:#eef784!important}.semantic_ui_ap_red_50__3S2bQ,.semantic_ui_ui__3131D.semantic_ui_statistic__2_7oq.semantic_ui_ap_red_50__3S2bQ,i.semantic_ui_inverted__2sPHY.semantic_ui_circular__bEoQ7.semantic_ui_ap_red_50__3S2bQ.semantic_ui_icon__apPuH{background-color:#fbedf0!important;color:#fff!important}i.semantic_ui_icon__apPuH.semantic_ui_ap_red_50__3S2bQ{color:#fbedf0!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_large__2WU1p{height:3.75em;border-radius:.938em!important;color:#fff!important;font-size:1em!important;font-weight:600;line-height:1.5em;align-items:center;text-align:center;letter-spacing:.02em}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_large__2WU1p div{display:grid;grid-auto-flow:column;grid-column-gap:12px}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_large__2WU1p div i{font-weight:700}.semantic_ui_ui__3131D.semantic_ui_fluid__3g--N.semantic_ui_button__1nWIV.semantic_ui_large__2WU1p{height:3.75em;border-radius:.938em!important;color:#fff!important;font-size:1em!important;font-weight:600;line-height:1.5em;align-items:center;text-align:center;letter-spacing:.02em}.semantic_ui_ui__3131D.semantic_ui_fluid__3g--N.semantic_ui_button__1nWIV.semantic_ui_large__2WU1p div{margin:0 auto;display:inline-flex}.semantic_ui_ui__3131D.semantic_ui_fluid__3g--N.semantic_ui_button__1nWIV.semantic_ui_large__2WU1p div i{font-size:1.5em;font-weight:700}.semantic_ui_ui__3131D.semantic_ui_fluid__3g--N.semantic_ui_button__1nWIV.semantic_ui_medium__1O71p{height:3.125em;border-radius:.938em!important;color:#fff!important;font-size:.938em!important;font-weight:600;line-height:1.375em;align-items:center;text-align:center;letter-spacing:.02em;width:100%}.semantic_ui_ui__3131D.semantic_ui_fluid__3g--N.semantic_ui_button__1nWIV.semantic_ui_medium__1O71p div{display:grid;grid-auto-flow:column;grid-column-gap:12px}.semantic_ui_ui__3131D.semantic_ui_fluid__3g--N.semantic_ui_button__1nWIV.semantic_ui_medium__1O71p div i{font-weight:700;font-size:1.5em}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_medium__1O71p{height:3.125em;border-radius:.938em!important;color:#fff!important;font-size:.938em!important;font-weight:600;line-height:1.375em;align-items:center;text-align:center;letter-spacing:.02em}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_medium__1O71p div{display:grid;grid-auto-flow:column;grid-column-gap:12px}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_medium__1O71p div i{font-weight:700}.semantic_ui_ui__3131D.semantic_ui_fluid__3g--N.semantic_ui_button__1nWIV.semantic_ui_small__1L8Tp{height:2.9em;border-radius:.75em!important;color:#fff!important;font-size:.875em!important;font-weight:600!important;line-height:1.313em;align-items:center;text-align:center;letter-spacing:.02em;width:100%}.semantic_ui_ui__3131D.semantic_ui_fluid__3g--N.semantic_ui_button__1nWIV.semantic_ui_small__1L8Tp div{display:grid;grid-auto-flow:column;grid-column-gap:12px}.semantic_ui_ui__3131D.semantic_ui_fluid__3g--N.semantic_ui_button__1nWIV.semantic_ui_small__1L8Tp div i{font-weight:700;font-size:1.5em}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_small__1L8Tp{height:2.9em;border-radius:.75em!important;color:#fff!important;font-size:.875em!important;font-weight:600!important;line-height:1.313em;align-items:center;text-align:center;letter-spacing:.02em}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_small__1L8Tp div{display:grid;grid-auto-flow:column;grid-column-gap:12px}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV.semantic_ui_small__1L8Tp div i{font-weight:700;font-size:1.5em}.semantic_ui_ui__3131D.semantic_ui_basic__33h43.semantic_ui_ap_coolgrey__2INLa.semantic_ui_button__1nWIV{color:#8ba2ab!important;box-shadow:inset 0 0 0 .125em #8ba2ab!important}.semantic_ui_ui__3131D.semantic_ui_basic__33h43.semantic_ui_ap_coolgrey__2INLa.semantic_ui_button__1nWIV:hover{color:#708892!important;box-shadow:inset 0 0 0 .125em #708892!important}.semantic_ui_ui__3131D.semantic_ui_basic__33h43.semantic_ui_ap_coolgrey__2INLa.semantic_ui_button__1nWIV:disabled{color:#c5d0d5!important;box-shadow:inset 0 0 0 .125em #c5d0d5!important}.semantic_ui_toggle_on_off_type__30177{width:12.875em;height:2.438em}.semantic_ui_toggle_am_pm_tab_type__3K-Fb{width:9.75em;height:3.125em}.semantic_ui_toggle_date_time_tab_type__3JYPi{width:14.375em;height:3.125em}i.semantic_ui_big__ot7O4.semantic_ui_icon__apPuH{font-size:2.5em!important}i.semantic_ui_large__2WU1p.semantic_ui_icon__apPuH{font-size:2em!important}i.semantic_ui_small__1L8Tp.semantic_ui_icon__apPuH{font-size:1.5em!important}.semantic_ui_ui__3131D.semantic_ui_button__1nWIV>.semantic_ui_icon__apPuH:not(.semantic_ui_button__1nWIV){padding-left:1em;padding-right:1em}.semantic_ui_statistic__2_7oq.semantic_ui_medium__1O71p{position:relative;border-radius:1.25em;height:6.875em;width:10.625em}.semantic_ui_statistic__2_7oq.semantic_ui_medium__1O71p .semantic_ui_statistic_label__3Xxpo{font-family:Poppins;font-style:normal;font-weight:500;font-size:.938!important;line-height:1.375em;color:#fff;margin-left:1.063em!important;margin-top:1em!important}.semantic_ui_statistic__2_7oq.semantic_ui_medium__1O71p .semantic_ui_statistic_value__2lV8m{font-family:Poppins;position:absolute;font-style:normal;font-weight:600;font-size:2.813em;line-height:1.188em;right:.3em;bottom:.063em}.semantic_ui_statistic__2_7oq.semantic_ui_small__1L8Tp{position:relative;border-radius:1.25em!important;height:4.375em;width:11.875em}.semantic_ui_statistic__2_7oq.semantic_ui_small__1L8Tp .semantic_ui_statistic_value__2lV8m{font-family:Poppins;position:absolute;font-style:normal;font-weight:600;font-size:2.813em;line-height:1.188em;right:.3em;bottom:.163em}.semantic_ui_statistic__2_7oq.semantic_ui_small__1L8Tp .semantic_ui_statistic_label__3Xxpo{font-family:Poppins;font-style:normal;font-weight:500;font-size:.938;line-height:1.375em;color:#fff;margin-left:1.313em!important;margin-top:1.5em!important}.semantic_ui_statistic__2_7oq.semantic_ui_payroll__tWp4V{position:relative;border-radius:1.25em;height:6.875em;width:12.5em}.semantic_ui_statistic__2_7oq.semantic_ui_payroll__tWp4V .semantic_ui_statistic_label__3Xxpo{width:7.5em;color:#fff;margin-top:1.7em!important}.semantic_ui_statistic__2_7oq.semantic_ui_payroll__tWp4V .semantic_ui_statistic_date__1rLkX,.semantic_ui_statistic__2_7oq.semantic_ui_payroll__tWp4V .semantic_ui_statistic_label__3Xxpo{font-family:Poppins;font-style:normal;font-weight:500;font-size:.938!important;line-height:0;margin-left:1.063em!important}.semantic_ui_statistic__2_7oq.semantic_ui_payroll__tWp4V .semantic_ui_statistic_date__1rLkX{color:#ca1a46;margin-top:.5em!important}.semantic_ui_statistic__2_7oq.semantic_ui_payroll__tWp4V .semantic_ui_statistic_value__2lV8m{font-family:Poppins;position:absolute;font-style:normal;font-weight:600;font-size:2.813em;line-height:1.188em;right:.3em;bottom:.063em}.semantic_ui_statistic__2_7oq.semantic_ui_large__2WU1p{position:relative;border-radius:1.25em;height:14.688em;width:16.875em}.semantic_ui_statistic__2_7oq.semantic_ui_large__2WU1p .semantic_ui_statistic_label__3Xxpo{font-family:Poppins;font-style:normal;font-weight:500;font-size:1.125em!important;line-height:1.563em;color:#fff;margin-left:1.625em!important;margin-top:2.625em!important}.semantic_ui_statistic__2_7oq.semantic_ui_large__2WU1p .semantic_ui_statistic_value__2lV8m{font-family:Poppins;position:absolute;font-style:normal;font-weight:600;font-size:3.75em;line-height:1.625em;right:.875em;bottom:.093em}.semantic_ui_statistic__2_7oq.semantic_ui_extralarge__1xzRw{position:relative;border-radius:1.25em;height:16.875em;width:16.875em}.semantic_ui_statistic__2_7oq.semantic_ui_extralarge__1xzRw .semantic_ui_statistic_label__3Xxpo{font-family:Poppins;font-style:normal;font-weight:500;font-size:1.125em!important;line-height:1.563em;color:#fff;margin-left:1.625em!important;margin-top:2.625em!important}.semantic_ui_statistic__2_7oq.semantic_ui_extralarge__1xzRw .semantic_ui_statistic_value__2lV8m{font-family:Poppins;position:absolute;font-style:normal;font-weight:600;font-size:3.75em;line-height:1.625em;right:.875em;bottom:.093em}.semantic_ui_company_task__2zGEy{height:6.875em;width:34.2em;border-radius:1.25em!important;box-shadow:.313em .313em 2.5em rgba(112,136,146,.12)!important}.semantic_ui_company_task__2zGEy i{height:1.688em!important;width:1.688em!important;margin-top:-.5em!important;font-size:1em!important}.semantic_ui_company_task__2zGEy .semantic_ui_statistic__2_7oq .semantic_ui_statistic_icon__2Rz5c{display:inline-block;margin-top:.938em!important;margin-left:1.25em!important}.semantic_ui_company_task__2zGEy .semantic_ui_statistic__2_7oq .semantic_ui_statistic_icon__2Rz5c div{display:inline-flex;padding-top:10px}.semantic_ui_company_task__2zGEy .semantic_ui_statistic__2_7oq .semantic_ui_statistic_icon__2Rz5c div i{margin-top:-.1em!important;margin-right:.1em}.semantic_ui_company_task__2zGEy .semantic_ui_statistic_value__2lV8m{font-weight:600;font-size:3.75em;line-height:1.625em;right:1.875em;bottom:.093em}.semantic_ui_company_task__2zGEy .semantic_ui_statistic_value__2lV8m,.semantic_ui_metadata__2Tjfg{font-family:Poppins;position:absolute;font-style:normal}.semantic_ui_metadata__2Tjfg{height:1.125em;font-weight:500;font-size:.75em!important;line-height:1.125em;color:#8ba2ab!important;right:1.75em!important;top:-1.4em}.semantic_ui_comment__2ryt_.semantic_ui_first__ODamF{width:35.063em;height:8.438em;background-color:#f8f8f8!important;margin-bottom:0!important;border-radius:1.25em}.semantic_ui_comment__2ryt_.semantic_ui_first__ODamF .semantic_ui_metadata__2Tjfg{font-family:Poppins;font-style:normal;height:1.125em;font-weight:500;font-size:.75em!important;line-height:1.125em;color:#8ba2ab!important;right:1.75em!important;position:absolute;top:-1.4em}.semantic_ui_comment__2ryt_.semantic_ui_first__ODamF img{margin-top:1.25em!important;margin-left:1.938em!important;border-radius:1.938em!important}.semantic_ui_comment__2ryt_.semantic_ui_first__ODamF .semantic_ui_content__284d1{margin-left:5.375em!important}.semantic_ui_comment__2ryt_.semantic_ui_first__ODamF .semantic_ui_author__2t2qX{font-weight:600!important;line-height:1.5em;margin-top:1.5em!important;color:#104f56!important}.semantic_ui_comment__2ryt_.semantic_ui_first__ODamF .semantic_ui_author__2t2qX,.semantic_ui_comment__2ryt_.semantic_ui_first__ODamF .semantic_ui_text__2Zcu9{font-family:Poppins;font-style:normal;font-size:1em!important}.semantic_ui_comment__2ryt_.semantic_ui_first__ODamF .semantic_ui_text__2Zcu9{font-weight:400;line-height:1.375!important;color:#8ba2ab!important}.semantic_ui_comment__2ryt_.semantic_ui_first__ODamF .semantic_ui_text__2Zcu9 .semantic_ui_browse_img__319FL{float:right;margin-top:5.5em;margin-right:2.25em}.semantic_ui_comment__2ryt_.semantic_ui_first__ODamF .semantic_ui_line__2pzJ6{padding-top:2.063em}.semantic_ui_comment__2ryt_.semantic_ui_reply__2A-u7{position:relative;height:4.375em!important;width:31.938em;background-color:#f8f8f8!important;margin-bottom:0!important;border-radius:1.25em}.semantic_ui_comment__2ryt_.semantic_ui_reply__2A-u7 img{margin-top:.625em!important;border-radius:.938em!important;margin-left:.625em!important}.semantic_ui_comment__2ryt_.semantic_ui_reply__2A-u7 .semantic_ui_content__284d1{margin-left:4.375em!important}.semantic_ui_comment__2ryt_.semantic_ui_reply__2A-u7 .semantic_ui_author__2t2qX{font-family:Poppins;font-style:normal;font-weight:600!important;font-size:1em!important;line-height:1.5em;margin-top:1.563em!important;color:#104f56!important}.semantic_ui_comment__2ryt_.semantic_ui_reply__2A-u7 .semantic_ui_text__2Zcu9{font-family:Poppins;font-style:normal;font-weight:400;font-size:.938em!important;line-height:1.375em!important;color:#8ba2ab!important}.semantic_ui_comment__2ryt_.semantic_ui_reply__2A-u7 .semantic_ui_reply_button__2OArQ{position:absolute;right:1.563em;top:1.135em}.semantic_ui_ui__3131D.semantic_ui_comments__2Mk_C{margin:0 0 .5em 2.5em!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_note_1__1CdVE textarea{width:51.813em;height:6.688em;border-radius:.938em;background-color:#f8f8f8!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_note_1__1CdVE textarea::placeholder{font-family:Poppins;font-style:normal;font-weight:400;font-size:1em!important;line-height:1.375em;color:#8ba2ab!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_note_2__2aKtS textarea{width:32.188em;height:7.375em;border-radius:.938em;background-color:#f8f8f8!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_note_2__2aKtS textarea::placeholder{font-family:Poppins;font-style:normal;font-weight:400;font-size:1.125em!important;line-height:1.563em;color:#8ba2ab!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_field__1ZftZ.semantic_ui_note_2__2aKtS>label{font-family:Poppins;font-style:normal;font-weight:600;font-size:.938em!important;line-height:1.438em;color:#104f56!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_note_3__2Rs62 textarea{width:29.75em;height:7.438em;border-radius:.938em;background-color:#f8f8f8!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_note_3__2Rs62 textarea::placeholder{font-family:Poppins;font-style:normal;font-weight:400;font-size:1.125em!important;line-height:1.563em;color:#8ba2ab!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_field__1ZftZ.semantic_ui_note_3__2Rs62>label{font-family:Poppins;font-style:normal;font-weight:600;font-size:.938em!important;line-height:1.438em;color:#8ba2ab!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_note_4__3JQMP textarea{border-radius:.938em;width:35.313em;height:9.188em;background-color:#f8f8f8!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_field__1ZftZ.semantic_ui_note_4__3JQMP>label{font-family:Poppins;font-style:normal;font-weight:600;font-size:.938em!important;line-height:1.438em;color:#8ba2ab!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_note_5__1z1Rj{position:relative;width:58.5em;height:30.938em;border-radius:1.563em;background-color:#fff!important}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_field__1ZftZ.semantic_ui_note_5__1z1Rj>label{font-family:Poppins;font-style:normal;font-weight:600;font-size:1.375em!important;line-height:1.875em;color:#63c6c0!important;position:absolute;left:3.125em;top:2.813em}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_note_5__1z1Rj textarea{border-radius:.938em;width:51.875em;height:14.688em;background-color:#f8f8f8!important;position:absolute;left:3.125em;top:8.25em}.semantic_ui_ui__3131D.semantic_ui_form__P0_Uh .semantic_ui_note_5_button__3HrKp{position:absolute;bottom:1.875em;right:28.875em}.semantic_ui_ap_notification__2w7V-.semantic_ui_notification__2YXzU .semantic_ui_menu__2s-i5.semantic_ui_transition__3SLIb.semantic_ui_visible__2oaJb{padding:0;height:396px;overflow-y:scroll}.semantic_ui_ap_notification__2w7V-.semantic_ui_notification__2YXzU .semantic_ui_menu__2s-i5.semantic_ui_transition__3SLIb.semantic_ui_visible__2oaJb .semantic_ui_view_more__1iWPu{font-style:normal;font-weight:600;font-size:15px;line-height:23px;color:#8ba2ab;text-align:center;padding:25px 0}.semantic_ui_ap_notification__2w7V-.semantic_ui_notification__2YXzU .semantic_ui_menu__2s-i5.semantic_ui_transition__3SLIb.semantic_ui_visible__2oaJb .semantic_ui_title__2ywVL{font-style:normal;font-weight:600;font-size:1.125em;line-height:1.5625em;color:#ca1a46;padding:29px 30px 0}.semantic_ui_ap_notification__2w7V-.semantic_ui_notification__2YXzU .semantic_ui_menu__2s-i5.semantic_ui_transition__3SLIb.semantic_ui_visible__2oaJb .semantic_ui_list__1QISI{border-bottom:1px solid #f0f3f4;padding:22px 31px}.semantic_ui_ap_notification__2w7V-.semantic_ui_notification__2YXzU .semantic_ui_menu__2s-i5.semantic_ui_transition__3SLIb.semantic_ui_visible__2oaJb .semantic_ui_list__1QISI .semantic_ui_date_time__2Bzf7{font-style:normal;font-weight:500;font-size:.95em;line-height:140%;color:#bed16d;margin:0}.semantic_ui_ap_notification__2w7V-.semantic_ui_notification__2YXzU .semantic_ui_menu__2s-i5.semantic_ui_transition__3SLIb.semantic_ui_visible__2oaJb .semantic_ui_list__1QISI .semantic_ui_description__2rfA_{color:#8ba2ab;font-size:1.225em}.semantic_ui_ap_notification__2w7V-.semantic_ui_notification__2YXzU .semantic_ui_menu__2s-i5.semantic_ui_transition__3SLIb.semantic_ui_visible__2oaJb .semantic_ui_list__1QISI .semantic_ui_description__2rfA_ span{color:#104f56;font-weight:600}.semantic_ui_ap_notification__2w7V-.semantic_ui_notification__2YXzU .semantic_ui_menu__2s-i5.semantic_ui_transition__3SLIb.semantic_ui_visible__2oaJb .semantic_ui_list__1QISI:last-child,.semantic_ui_ap_notification__2w7V-.semantic_ui_notification__2YXzU .semantic_ui_menu__2s-i5.semantic_ui_transition__3SLIb.semantic_ui_visible__2oaJb .semantic_ui_list__1QISI :last-child{border-bottom:none!important}.semantic_ui_ui__3131D.semantic_ui_container__RnuSw{width:80%!important;margin:0 auto!important}.semantic_ui_ui__3131D.semantic_ui_grid__q3xYq>.semantic_ui_column__Apjop:not(.semantic_ui_row__1Bar3),.semantic_ui_ui__3131D.semantic_ui_grid__q3xYq>.semantic_ui_row__1Bar3>.semantic_ui_column__Apjop{padding-left:.6em!important;padding-right:.6em!important}.semantic_ui_ap_list__36eej{box-shadow:0 0 .838em rgba(0,0,0,.118);border-radius:2em;display:inline-block;width:100%}.semantic_ui_ap_list__36eej .semantic_ui_ap_heading__1qLhi{display:flex;padding:3em 2.2em 1.5em;align-items:center;position:relative}.semantic_ui_ap_list__36eej .semantic_ui_ap_heading__1qLhi h4{color:#63c6c0;margin-bottom:0;font-size:1.2em;font-family:Lato,Helvetica Neue,Arial,Helvetica,sans-serif}.semantic_ui_ap_list__36eej .semantic_ui_ap_heading__1qLhi h5{font-size:.85em;line-height:1.25em;margin:0;color:#8ba2ab;text-align:right;position:absolute;right:3em;width:18%}.semantic_ui_ap_list__36eej .semantic_ui_ap_content__1NaNb{font-family:Lato,Helvetica Neue,Arial,Helvetica,sans-serif}.semantic_ui_ap_list__36eej .semantic_ui_ap_content__1NaNb .semantic_ui_ap_body_16_semibold__1lFxj{font-size:1.1em;line-height:1.1em;color:#104f56}.semantic_ui_ap_list__36eej .semantic_ui_ap_content__1NaNb .semantic_ui_ap_extrasmall_medium__b5JRB{font-size:.75em;line-height:1.8em;color:#708892;font-weight:700}.semantic_ui_ap_list__36eej .semantic_ui_item__1PFye{border-bottom:.063em solid #ebebeb;position:relative;padding:.75em 2.2em!important;display:inline-table;width:100%;transition:all .35s ease-in-out;cursor:pointer}.semantic_ui_ap_list__36eej .semantic_ui_item__1PFye:hover{background:#f8f8f8}.semantic_ui_ap_list__36eej .semantic_ui_item__1PFye:last-child{margin-bottom:0;padding-bottom:0;border-bottom:0 solid #ebebeb}.semantic_ui_ap_list__36eej .semantic_ui_item__1PFye .semantic_ui_ap_item__2NHgl{display:flex;float:left;height:2.9em;align-items:center}.semantic_ui_ap_list__36eej .semantic_ui_item__1PFye .semantic_ui_ap_item__2NHgl .semantic_ui_employeImage__1QAhY{display:inline-block;margin-right:1.6em;flex:none}.semantic_ui_ap_list__36eej .semantic_ui_item__1PFye .semantic_ui_ap_item__2NHgl .semantic_ui_employeImage__1QAhY img{width:3em;height:3em;border-radius:100%;border:1px solid #8ba2ab}.semantic_ui_ap_list__36eej .semantic_ui_item__1PFye .semantic_ui_ap_icon__18md1{border-radius:100%;position:relative;float:right;right:0;top:2em;transform:translateY(-50%)}.semantic_ui_ap_list__36eej .semantic_ui_item__1PFye .semantic_ui_ap_icon__18md1 i.semantic_ui_icon__apPuH.semantic_ui_right__glLhi{color:#a7be44}.semantic_ui_ap_list__36eej .semantic_ui_item__1PFye .semantic_ui_ap_icon__18md1 i.semantic_ui_icon__apPuH,.semantic_ui_ap_list__36eej .semantic_ui_item__1PFye .semantic_ui_ap_icon__18md1 i.semantic_ui_icons__3FbGs{font-size:1.4em;width:1.5em;height:1.8em;margin:0;line-height:.9em;color:#8ba2ab}.semantic_ui_ap_list__36eej .semantic_ui_item__1PFye .semantic_ui_ap_amount__1-CSa{float:right;color:#104f56;line-height:1.6em;font-family:inherit;font-size:1.1em}.semantic_ui_ap_list__36eej .semantic_ui_ap_view__sTt4Z{text-align:center;color:#bed16d;font-size:1em;font-weight:700;padding:1.6em 0}.semantic_ui_ap_list__36eej .semantic_ui_imageClass__2VGEF{display:flex;align-items:center;justify-content:center;flex:none;margin-right:1.6em;width:3em;height:3em;border-radius:100%;color:#fff}.semantic_ui_ap_list__36eej .semantic_ui_imageClass__2VGEF i.semantic_ui_icon__apPuH,.semantic_ui_ap_list__36eej .semantic_ui_imageClass__2VGEF i.semantic_ui_icons__3FbGs{font-size:1em;margin:0}.semantic_ui_ap_list__36eej .semantic_ui_green__1nCXn{background-color:#a7be44}.semantic_ui_ap_list__36eej .semantic_ui_orange__2uQhe{background-color:#f9b132}.semantic_ui_ap_list__36eej .semantic_ui_dark_green__38HZ9{background-color:#104f56}.semantic_ui_ap_list__36eej .semantic_ui_red__1X0XE{background-color:#ca1a46}-webkit-tap-highlight-color{background:#ccc}.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator-first__23Ld8,.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator-last__3YpNo{display:none}.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator-element__1pf7W span{border:solid #f9b132;border-width:0 .2em .2em 0;display:inline-block;padding:.2em;margin-top:.1em}.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator-element__1pf7W .semantic_ui_pi-angle-left__24tFs{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator-element__1pf7W .semantic_ui_pi-angle-right__1XlGe{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.semantic_ui_apPagination__1asBi .semantic_ui_p-disabled__3pShr{display:none}.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator__1-s-Y .semantic_ui_p-paginator-pages__1s4AP button.semantic_ui_p-paginator-page__fkrZc{color:#708892;background-color:none;background-color:initial;border:none;width:1.6em;height:1.6em;border-radius:10em;padding:0;min-width:1em;min-height:1em;font-size:.8em;transition:all .2s ease-in-out;margin:0 .2em;cursor:pointer}.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator__1-s-Y .semantic_ui_p-paginator-pages__1s4AP button.semantic_ui_p-paginator-page__fkrZc:focus{outline:none}.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator__1-s-Y .semantic_ui_p-paginator-pages__1s4AP button.semantic_ui_p-paginator-page__fkrZc:hover{background:#f0f3f4}.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator__1-s-Y .semantic_ui_p-paginator-pages__1s4AP .semantic_ui_p-paginator-page__fkrZc.semantic_ui_p-highlight__3Yy-O{background-color:#bed16d;color:#fff;transition:all .5s ease-in-out}.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator__1-s-Y .semantic_ui_p-paginator-pages__1s4AP .semantic_ui_p-paginator-page__fkrZc.semantic_ui_p-highlight__3Yy-O:hover{background:#a7be44;color:#fff}.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator__1-s-Y .semantic_ui_p-paginator-next__2x81t:hover,.semantic_ui_apPagination__1asBi .semantic_ui_p-paginator__1-s-Y .semantic_ui_p-paginator-prev__1SQvD:hover{background:transparent!important}.semantic_ui_apPagination__1asBi .semantic_ui_pi-angle-left__24tFs:before,.semantic_ui_apPagination__1asBi .semantic_ui_pi-angle-right__1XlGe:before{display:none}.semantic_ui_apPagination__1asBi .semantic_ui_p-link__386e4:focus{box-shadow:none}table{border-collapse:initial;border-spacing:0 10px;margin-top:-10px}td{padding:10px}td:first-child,td:nth-child(2){border-left-style:solid;border-top-left-radius:10px;border-bottom-left-radius:10px}td:last-child{border-right-style:solid;border-bottom-right-radius:10px;border-top-right-radius:10px}.semantic_ui_p-datatable__j6iEX{margin-bottom:4em;color:#104f56}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-wrapper__2epml{border-radius:1.875em;box-shadow:0 0 1em rgba(2,2,2,.10196078431372549);padding:2.5em 2em 5.5em}.semantic_ui_p-datatable__j6iEX .semantic_ui_table-header-container__1Kwud{display:flex;justify-content:space-between}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-input-icon-left__2Krwl input{font-size:1rem;display:inline-block;padding:.5rem 3em;border:0 solid #ced4da;border-radius:.188em;width:21.875em;height:3.125em;border-radius:.9em;box-shadow:0 0 1em rgba(2,2,2,.10196078431372549)}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-input-icon-left__2Krwl i:first-of-type{left:1.5rem}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-inputtext__1Gcpg:enabled:focus{box-shadow:0 0 1em rgba(2,2,2,.10196078431372549);border-color:#ced4da}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-checkbox__156pv .semantic_ui_p-checkbox-box__1diNQ{border:2px solid #eef784;background:#eef784;border-radius:20em}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-checkbox__156pv .semantic_ui_p-checkbox-box__1diNQ.semantic_ui_p-highlight__3Yy-O{border-color:#104f56;background:#eef784}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-checkbox__156pv .semantic_ui_p-checkbox-box__1diNQ .semantic_ui_p-checkbox-icon__j-zeR{transition-duration:.2s;color:#104f56;font-size:.7em;font-weight:700}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-multiselect__2vFRV{position:relative;user-select:none;border-radius:1em;background:#8ba2ab;color:#fff}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-multiselect__2vFRV:focus{outline:none}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-multiselect__2vFRV .semantic_ui_p-multiselect-label-container__-UQna{border-right:.05em solid #fff;padding:0 .4em}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-multiselect__2vFRV .semantic_ui_p-multiselect__2vFRV .semantic_ui_p-multiselect-label__vMZ_R{padding:.7rem .5rem}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-multiselect__2vFRV .semantic_ui_pi-chevron-down__i_NGh:before{color:#fff}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-multiselect__2vFRV .semantic_ui_p-multiselect-panel__UmpKT{border-radius:1.73em;overflow:hidden}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-multiselect__2vFRV .semantic_ui_p-multiselect-items-wrapper__3a2Di{max-height:300px!important}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-multiselect__2vFRV .semantic_ui_p-multiselect-header__1-GLE{display:none}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-multiselect__2vFRV .semantic_ui_p-multiselect-panel__UmpKT .semantic_ui_p-multiselect-items__13Yg4 .semantic_ui_p-multiselect-item__75dQw.semantic_ui_p-highlight__3Yy-O{color:#104f56;background:none;padding:.5em 1.5em;font-size:.9em;line-height:1em;font-weight:400}.semantic_ui_p-datatable__j6iEX .semantic_ui_p-multiselect__2vFRV:not(.semantic_ui_p-disabled__3pShr):hover{border-color:transparent}.semantic_ui_headingTable__2EqnN{margin:1.5em 0}.semantic_ui_headingTable__2EqnN h4{font-size:.9em;line-height:1em;color:#104f56}.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-header__DYBsr,.semantic_ui_apPagination__1asBi.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-header__DYBsr{background:none;border:none;padding:0;margin-bottom:1.5em}.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-thead__tViBp>tr>th,.semantic_ui_apPagination__1asBi.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-thead__tViBp>tr>th{border:none;background:none;color:#104f56;text-align:center}.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-tbody__1gQTj>tr>td,.semantic_ui_apPagination__1asBi.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-tbody__1gQTj>tr>td{border:none;color:#104f56;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-paginator__1-s-Y,.semantic_ui_apPagination__1asBi.semantic_ui_p-datatable__j6iEX .semantic_ui_p-paginator__1-s-Y{border:none;position:absolute;bottom:1em;left:50%;transform:translate(-50%)}.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-selection-column__TMp31 .semantic_ui_p-column-title__1Y8iR,.semantic_ui_apPagination__1asBi.semantic_ui_p-datatable__j6iEX .semantic_ui_p-selection-column__TMp31 .semantic_ui_p-column-title__1Y8iR{position:absolute;right:0}.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-tbody__1gQTj>tr.semantic_ui_p-highlight__3Yy-O,.semantic_ui_apPagination__1asBi.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-tbody__1gQTj>tr.semantic_ui_p-highlight__3Yy-O{background:#f8f8f8;color:#104f56;border-radius:20px;position:relative}.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-tbody__1gQTj>tr,.semantic_ui_apPagination__1asBi.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-tbody__1gQTj>tr{outline-color:transparent;outline:none}.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-checkbox__156pv:not(.semantic_ui_p-checkbox-disabled__1fwJt) .semantic_ui_p-checkbox-box__1diNQ:hover,.semantic_ui_apPagination__1asBi.semantic_ui_p-datatable__j6iEX .semantic_ui_p-checkbox__156pv:not(.semantic_ui_p-checkbox-disabled__1fwJt) .semantic_ui_p-checkbox-box__1diNQ:hover{border-color:#a7be44;background:#eef883}.semantic_ui_p-datatable__j6iEX.semantic_ui_p-datatable-hoverable-rows__3X3NI .semantic_ui_p-datatable-tbody__1gQTj>tr:not(.semantic_ui_p-highlight__3Yy-O):hover{background:#f8f8f8!important}.semantic_ui_p-datatable__j6iEX.semantic_ui_single__SzihK .semantic_ui_p-datatable-tbody__1gQTj>tr>td:first-child,.semantic_ui_p-datatable__j6iEX.semantic_ui_single__SzihK .semantic_ui_p-datatable-thead__tViBp>tr>th:first-child{display:none;text-align:center}.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-tbody__1gQTj>tr>td:nth-child(2),.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-tbody__1gQTj>tr>td:nth-child(3),.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-thead__tViBp>tr>th:nth-child(2),.semantic_ui_ap_table__rj7vv.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-thead__tViBp>tr>th:nth-child(3){text-align:left}.semantic_ui_p-datatable__j6iEX.semantic_ui_ap_table__rj7vv .semantic_ui_p-datatable-tfoot__3QyMn>tr>td{text-align:center}.semantic_ui_p-datatable__j6iEX.semantic_ui_ap_table__rj7vv .semantic_ui_p-datatable-tfoot__3QyMn>tr>td:first-child,.semantic_ui_p-datatable__j6iEX.semantic_ui_ap_table__rj7vv .semantic_ui_p-datatable-tfoot__3QyMn>tr>td:nth-child(2){text-align:left}.semantic_ui_p-datatable__j6iEX.semantic_ui_ap_table__rj7vv .semantic_ui_p-datatable-tfoot__3QyMn>tr>td{border:none;background:none}.semantic_ui_searchShow__2VaJY{display:block}.semantic_ui_hide_paginator__kYTsT.semantic_ui_p-datatable__j6iEX .semantic_ui_p-paginator__1-s-Y,.semantic_ui_searchHide__FacT7{display:none}.semantic_ui_hide_paginator__kYTsT.semantic_ui_p-datatable__j6iEX .semantic_ui_p-datatable-wrapper__2epml{padding:1.5em 2em}";
styleInject(css_248z$1);

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

var css_248z = ".dropdown_ap_custom_color_dropdown__1JMew{border-radius:15px!important;width:152px;height:3.13rem}.dropdown_ap_custom_color_dropdown__1JMew,.dropdown_ap_custom_color_dropdown__1JMew .dropdown_ui__3adU2.dropdown_button__35DRy{background:#8ba2ab;box-shadow:1px 3px 6px rgb(112 136 146/16%)!important}.dropdown_ap_custom_color_dropdown__1JMew .dropdown_ui__3adU2.dropdown_button__35DRy{border-radius:.9375em!important;color:#fff}.dropdown_ap_custom_color_dropdown__1JMew .dropdown_ui__3adU2.dropdown_floating__2xTTT.dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u{background:#8ba2ab;box-shadow:1px 3px 6px rgb(112 136 146/16%)!important;border-radius:0!important;position:relative!important;border-left:1px solid;border-top-right-radius:.9375em!important;border-bottom-right-radius:.9375em!important}.dropdown_ap_custom_color_dropdown__1JMew .dropdown_ui__3adU2.dropdown_button__35DRy:active,.dropdown_ap_custom_color_dropdown__1JMew .dropdown_ui__3adU2.dropdown_button__35DRy:hover{color:#fff!important}.dropdown_ap_custom_color_dropdown__1JMew i.dropdown_dropdown__3d8z9.dropdown_icon__3Kz9u{position:absolute!important;font-size:1.6em!important;left:-22%;right:0;top:25%;bottom:0}.dropdown_ap_custom_color_dropdown__1JMew .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS{background:#fff;box-shadow:2px 2px 10px rgb(112 136 146/20%)!important;border-radius:23px!important;width:190px;padding:.625em;height:auto;left:-7.5em!important;right:0;top:2.1em;overflow:auto}.dropdown_ap_custom_dot_dropdown__2oGhM .dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u{background:none!important;font-size:20px;color:#bed16d;padding:0}.dropdown_ap_dropdown_color__Vp4d7{display:inline;margin:0 .3125em}.dropdown_ap_dropdown_color__Vp4d7 .dropdown_ui__3adU2.dropdown_fitted__3Ge2a.dropdown_checkbox__8Y8-d label:before{box-sizing:border-box;border-radius:.9375em!important;border:none!important}.dropdown_ap_dropdown_color_red__1UV51 .dropdown_ui__3adU2.dropdown_fitted__3Ge2a.dropdown_checkbox__8Y8-d label:before{background:rgba(230,11,11,.897)!important}.dropdown_ap_dropdown_color_blue__3iGuD .dropdown_ui__3adU2.dropdown_fitted__3Ge2a.dropdown_checkbox__8Y8-d label:before{background:#00f!important}.dropdown_ap_dropdown_color__Vp4d7 .dropdown_ui__3adU2.dropdown_checkbox__8Y8-d input:checked~.dropdown_box__1JnEx:after,.dropdown_ui__3adU2.dropdown_checkbox__8Y8-d input:checked~label:after{color:#fff;font-size:9px}.dropdown_ap_form_dropdown__36RpM .dropdown_field__3RnX7{width:22.5em}.dropdown_ap_form_dropdown__36RpM .dropdown_ui__3adU2.dropdown_dropdown__3d8z9{background:#f8f8f8;border:1px solid #8ba2ab;box-sizing:border-box;box-shadow:inset 0 2px 3px -1px rgb(112 136 146/5%);border-radius:15px!important;position:relative;color:#104f56!important;width:360px!important;height:50px!important;padding:13px}.dropdown_ap_form_dropdown__36RpM .dropdown_divider__1uFIA.dropdown_text__1zFIY{text-align:left;width:81%}.dropdown_ap_form_dropdown__36RpM{font-family:Poppins}.dropdown_ap_form_dropdown__36RpM .dropdown_small__3Nq-s{width:12.5em!important}.dropdown_ap_form_dropdown__36RpM .dropdown_medium__23-JC{width:14.375em!important;height:auto!important}.dropdown_ap_form_dropdown__36RpM .dropdown_large__QfKvb{width:24.5em!important}.dropdown_ap_form_dropdown__36RpM label{color:#8ba2ab!important}.dropdown_ap_form_dropdown__36RpM .dropdown_angle__39n7x.dropdown_down__hDZQI.dropdown_icon__3Kz9u,.dropdown_ap_form_dropdown__36RpM .dropdown_angle__39n7x.dropdown_up__OSRG1.dropdown_icon__3Kz9u{position:absolute;right:.625em;font-size:1.375em;top:.9em}.dropdown_ap_form_dropdown__36RpM .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS .dropdown_header__RpVXG{display:inline;background:#f0f3f4;border-radius:.975em;padding:.625em!important;margin:.3em .5em!important;width:136px!important;text-transform:none;cursor:pointer;font-size:.9375em;color:#104f56!important;border-bottom:none;box-shadow:none;white-space:nowrap;overflow:hidden;text-align:center;font-family:Poppins;text-overflow:ellipsis}.dropdown_ap_form_dropdown__36RpM .dropdown_ui__3adU2.dropdown_button__35DRy.dropdown_medium__23-JC div{grid-column-gap:1px}.dropdown_ap_form_dropdown__36RpM .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS .dropdown_header__RpVXG.dropdown_active__1XmVL{background:#104f56;border-radius:.95em;color:#fff!important;width:136px!important;height:36px}.dropdown_ap_form_dropdown__36RpM .dropdown_ui__3adU2.dropdown_active__1XmVL.dropdown_button__35DRy:hover{background-color:#f8f8f8}.dropdown_ap_form_dropdown__36RpM .dropdown_ui__3adU2.dropdown_dropdown__3d8z9 .dropdown_menu__19LHi>.dropdown_item__39hVw{color:#104f56;font-weight:500;font-size:16px;line-height:24px}.dropdown_ap_form_dropdown__36RpM.dropdown_color__2m_EL .dropdown_menu__19LHi.dropdown_transition__2sHrS.dropdown_medium__23-JC{display:block}.dropdown_ap_form_dropdown__36RpM.dropdown_customform__3Z2dr .dropdown_menu__19LHi.dropdown_transition__2sHrS.dropdown_visible__2CqUv .dropdown_item__39hVw i{display:inline}.dropdown_ap_form_dropdown__36RpM.dropdown_color__2m_EL .dropdown_field__3RnX7.dropdown_ap_dropdown_color__Vp4d7.dropdown_ap_dropdown_color_red__1UV51{display:inline;width:10px}.dropdown_ap_form_dropdown__36RpM.dropdown_color__2m_EL .dropdown_menu__19LHi.dropdown_transition__2sHrS{background:#fff;box-shadow:2px 2px 10px rgb(112 136 146/20%)!important;border-radius:23px!important;width:190px;padding:.625em;height:auto;right:0;top:3.1em;overflow:auto}.dropdown_ap_form_dropdown__36RpM.dropdown_color__2m_EL .dropdown_menu__19LHi.dropdown_transition__2sHrS .dropdown_ui__3adU2.dropdown_checkbox__8Y8-d input:checked~label:after{color:#fff;font-size:9px}.dropdown_ap_form_dropdown__36RpM.dropdown_form__3cqJg .dropdown_ap_header__3VKQm{margin-bottom:.6em!important}.dropdown_ap_form_dropdown__36RpM.dropdown_form__3cqJg .dropdown_item__39hVw i.dropdown_icon__3Kz9u{display:none}.dropdown_ap_form_dropdown__36RpM .dropdown_dropdown__3d8z9 .dropdown_header__RpVXG.dropdown_text__1zFIY{color:#104f56}.dropdown_ap_custom_text_dropdown__1pINk .dropdown_menu__19LHi>.dropdown_item__39hVw:hover,.dropdown_ap_form_dropdown__36RpM .dropdown_ui__3adU2.dropdown_dropdown__3d8z9 .dropdown_menu__19LHi>.dropdown_item__39hVw:hover{background:#f8f8f8;border-radius:1.875em;font-weight:600}.dropdown_ap_header__3VKQm{margin-top:1.5625em;margin-bottom:1.875em!important}.dropdown_ap_form_dropdown__36RpM i.dropdown_check__1BWxp.dropdown_circle__1AcC_.dropdown_icon__3Kz9u:before{content:\"\\f00c\";color:#000!important}.dropdown_ap_custom_text_dropdown__1pINk{color:#63c6c0;font-style:normal;font-weight:600;font-size:1.225em;line-height:1.5625em}.dropdown_ap_custom_search_dropdown__1nEzz{background:#8ba2ab!important}.dropdown_ap_custom_search_dropdown__1nEzz,.dropdown_ap_dropdown__2JFK6{box-shadow:1px 3px 6px rgb(112 136 146/16%)!important;border-radius:15px!important;width:152px;height:3.13rem}.dropdown_ap_dropdown__2JFK6{background:#8ba2ab}.dropdown_ap_dropdown__2JFK6.dropdown_active__1XmVL:hover,.dropdown_ap_dropdown__2JFK6.dropdown_active__1XmVL:hover .dropdown_ui__3adU2.dropdown_button__35DRy,.dropdown_ap_dropdown__2JFK6.dropdown_active__1XmVL:hover .dropdown_ui__3adU2.dropdown_floating__2xTTT.dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u{background:#708892}.dropdown_ap_dropdown__2JFK6.dropdown_disabled__5E_Iu,.dropdown_ap_dropdown__2JFK6.dropdown_disabled__5E_Iu .dropdown_ui__3adU2.dropdown_button__35DRy,.dropdown_ap_dropdown__2JFK6.dropdown_disabled__5E_Iu .dropdown_ui__3adU2.dropdown_floating__2xTTT.dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u{pointer-events:none;background:#c5d0d5}.dropdown_ap_dropdown__2JFK6 .dropdown_ui__3adU2.dropdown_button__35DRy{border-radius:.9375em!important;color:#fff}.dropdown_ap_dropdown__2JFK6 .dropdown_ui__3adU2.dropdown_button__35DRy,.dropdown_ap_dropdown__2JFK6 .dropdown_ui__3adU2.dropdown_floating__2xTTT.dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u{background:#8ba2ab;box-shadow:1px 3px 6px rgb(112 136 146/16%)!important}.dropdown_ap_dropdown__2JFK6 .dropdown_ui__3adU2.dropdown_floating__2xTTT.dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u{border-radius:0!important;position:relative!important;border-left:1px solid;border-top-right-radius:.9375em!important;border-bottom-right-radius:.9375em!important}.dropdown_ap_dropdown__2JFK6 i.dropdown_dropdown__3d8z9.dropdown_icon__3Kz9u{position:absolute!important;font-size:1.6em!important;left:-22%;right:0;top:25%;bottom:0}.dropdown_ap_dropdown__2JFK6 .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS{background:#fff;box-shadow:2px 2px 10px rgb(112 136 146/20%)!important;border-radius:23px!important;width:190px;padding:.625em;height:auto;left:-10.5em!important;right:0;top:2.1em;overflow:auto}.dropdown_ap_icon_dropdown__2nITA.dropdown_image__1fTKn .dropdown_ui__3adU2.dropdown_dropdown__3d8z9 .dropdown_item__39hVw img{border-radius:50%;height:30px;width:30px}.dropdown_ap_icon_dropdown__2nITA.dropdown_image__1fTKn.dropdown_input__1PRtl .dropdown_menu__19LHi.dropdown_transition__2sHrS.dropdown_visible__2CqUv{height:auto;max-height:300px;overflow-y:auto}.dropdown_ap_custom_text_dropdown__1pINk .dropdown_selected__3rO_o.dropdown_item__39hVw,.dropdown_ap_dropdown__2JFK6 .dropdown_selected__3rO_o.dropdown_item__39hVw{background:rgba(0,0,0,.03)!important;color:rgba(0,0,0,.95)!important;border-radius:30px}.dropdown_ap_icon_dropdown__2nITA .dropdown_remove_icon__2pLg6 .dropdown_dropdown__3d8z9.dropdown_icon__3Kz9u,.dropdown_ap_icon_dropdown__2nITA .dropdown_remove_icon__2pLg6 i.dropdown_ellipsis__hAcV_.dropdown_horizontal__1pV-W.dropdown_icon__3Kz9u{display:none}.dropdown_ap_icon_dropdown__2nITA .dropdown_remove_icon__2pLg6 .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS{top:1px;left:1px!important}.dropdown_ap_custom_text_dropdown__1pINk i.dropdown_circle__1AcC_.dropdown_icon__3Kz9u:before,.dropdown_ap_dropdown__2JFK6 i.dropdown_circle__1AcC_.dropdown_icon__3Kz9u:before,.dropdown_ap_form_dropdown__36RpM.dropdown_customform__3Z2dr i.dropdown_circle__1AcC_.dropdown_icon__3Kz9u:before,.dropdown_ap_icon_dropdown__2nITA i.dropdown_circle__1AcC_.dropdown_icon__3Kz9u:before{background:#eef784!important;border:.125em solid #104f56!important;box-sizing:border-box;border-radius:.9375em!important;color:#eef784!important;font-size:12px;padding:.1875em .25em}.dropdown_ap_dropdown__2JFK6 .dropdown_ui__3adU2.dropdown_button__35DRy:active,.dropdown_ap_dropdown__2JFK6 .dropdown_ui__3adU2.dropdown_button__35DRy:hover{color:#fff!important}.dropdown_ap_form_dropdown__36RpM.dropdown_customform__3Z2dr.dropdown_minutes__2x60Q,.dropdown_ap_form_dropdown__36RpM.dropdown_customform__3Z2dr.dropdown_minutes__2x60Q .dropdown_ui__3adU2.dropdown_button__35DRy.dropdown_dropdown__3d8z9.dropdown_icon__3Kz9u.dropdown_medium__23-JC{width:10.375em!important}.dropdown_ap_form_dropdown__36RpM.dropdown_customform__3Z2dr.dropdown_minutes__2x60Q .dropdown_divider__1uFIA.dropdown_text__1zFIY{font-size:35px}.dropdown_ap_dropdown__2JFK6 i.dropdown_check__1BWxp.dropdown_circle__1AcC_.dropdown_icon__3Kz9u:before,.dropdown_ap_form_dropdown__36RpM.dropdown_customform__3Z2dr i.dropdown_check__1BWxp.dropdown_circle__1AcC_.dropdown_icon__3Kz9u:before,.dropdown_ap_icon_dropdown__2nITA i.dropdown_check__1BWxp.dropdown_circle__1AcC_.dropdown_icon__3Kz9u:before{content:\"\\f00c\";color:#000!important}.dropdown_ap_form_dropdown__36RpM.dropdown_customform__3Z2dr.dropdown_scroll__E5K5- .dropdown_menu__19LHi.dropdown_transition__2sHrS.dropdown_visible__2CqUv{height:160px!important}.dropdown_ap_dropdown__2JFK6 .dropdown_ui__3adU2.dropdown_dropdown__3d8z9 .dropdown_menu__19LHi>.dropdown_item__39hVw:hover{border-radius:.9375em!important}.dropdown_ui__3adU2.dropdown_buttons__2PRob.dropdown_ap_icon_dropdown__2nITA button{display:none}.dropdown_ap_icon_dropdown__2nITA .dropdown_ui__3adU2.dropdown_floating__2xTTT.dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u{background:#8ba2ab!important;color:#fff;width:40px;height:40px;border-radius:50%;position:relative}.dropdown_ap_icon_dropdown__2nITA.dropdown_bg_white__3x4gR .dropdown_ui__3adU2.dropdown_floating__2xTTT.dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u{background:#fff!important;color:#000!important;font-size:20px;padding:.375em}.dropdown_ap_icon_dropdown__2nITA.dropdown_light_green__U_-3w .dropdown_ui__3adU2.dropdown_floating__2xTTT.dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u{color:#bed16d!important;background:#fff!important;box-shadow:none!important;height:30px!important}.dropdown_ap_icon_dropdown__2nITA i.dropdown_dropdown__3d8z9.dropdown_icon__3Kz9u,.dropdown_ap_icon_dropdown__2nITA i.dropdown_ellipsis__hAcV_.dropdown_horizontal__1pV-W.dropdown_icon__3Kz9u{position:absolute!important;top:.49em;left:.7125em;font-size:20px!important;padding:0!important}.dropdown_ap_icon_dropdown__2nITA i.dropdown_ellipsis__hAcV_.dropdown_horizontal__1pV-W.dropdown_icon__3Kz9u{top:.775em}.dropdown_ap_form_dropdown__36RpM .dropdown_menu__19LHi.dropdown_transition__2sHrS.dropdown_large__QfKvb,.dropdown_ap_form_dropdown__36RpM .dropdown_menu__19LHi.dropdown_transition__2sHrS.dropdown_medium__23-JC,.dropdown_ap_form_dropdown__36RpM .dropdown_menu__19LHi.dropdown_transition__2sHrS.dropdown_small__3Nq-s{display:none}.dropdown_ap_form_dropdown__36RpM .dropdown_menu__19LHi.dropdown_transition__2sHrS.dropdown_visible__2CqUv.dropdown_small__3Nq-s .dropdown_item__39hVw{padding-left:0!important}.dropdown_ap_form_dropdown__36RpM .dropdown_ui__3adU2.dropdown_left__r5l8u.dropdown_icon__3Kz9u.dropdown_input__1PRtl.dropdown_search__2DWC2 input{background:#f8f8f8;box-shadow:inset 0 2px 3px -1px rgb(112 136 146/5%);border-radius:15px!important;width:20.125em;height:3.125em}.dropdown_ap_form_dropdown__36RpM.dropdown_custom__2VVxx{position:relative}.dropdown_ap_form_dropdown__36RpM.dropdown_custom__2VVxx .dropdown_menu__19LHi.dropdown_transition__2sHrS.dropdown_visible__2CqUv .dropdown_select_option__3YbvE{font-weight:600;font-size:16px;line-height:24px;color:#bed16d;padding-left:15px}.dropdown_ap_form_dropdown__36RpM.dropdown_custom__2VVxx .dropdown_menu__19LHi.dropdown_transition__2sHrS.dropdown_visible__2CqUv .dropdown_item__39hVw{font-style:normal;font-weight:400;font-size:15px;line-height:22px;color:#104f56;padding-left:15px!important}.dropdown_ap_form_dropdown__36RpM.dropdown_custom__2VVxx .dropdown_menu__19LHi.dropdown_transition__2sHrS.dropdown_visible__2CqUv .dropdown_item__39hVw:hover{border-radius:30px;font-weight:600}.dropdown_ap_custom_text_dropdown__1pINk .dropdown_menu__19LHi.dropdown_transition__2sHrS .dropdown_item__39hVw{font-style:normal;font-weight:400;font-size:15px;line-height:22px;color:#104f56}.dropdown_ap_custom_text_dropdown__1pINk .dropdown_menu__19LHi.dropdown_transition__2sHrS .dropdown_item__39hVw:hover{font-weight:600}.dropdown_ap_form_dropdown__36RpM.dropdown_custom__2VVxx .dropdown_divider__1uFIA.dropdown_text__1zFIY{width:100%;padding-left:30px}.dropdown_ap_form_dropdown__36RpM.dropdown_custom__2VVxx .dropdown_divider__1uFIA.dropdown_text__1zFIY,.dropdown_ap_form_dropdown__36RpM.dropdown_custom__2VVxx .dropdown_plus__c9mNz{color:#63c6c0;font-style:normal;font-weight:600;font-size:1.225em;line-height:1.5625em}.dropdown_ap_form_dropdown__36RpM.dropdown_custom__2VVxx .dropdown_plus__c9mNz{position:absolute;left:1px}.dropdown_ap_custom_dot_dropdown__2oGhM .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS,.dropdown_ap_custom_text_dropdown__1pINk .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS,.dropdown_ap_form_dropdown__36RpM .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS,.dropdown_ap_icon_dropdown__2nITA .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS,.dropdown_ap_notification__3xU5L .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS{background:#fff;box-shadow:2px 2px 10px rgb(112 136 146/20%)!important;border-radius:23px!important;width:190px;padding:.625em;height:auto;overflow:auto}.dropdown_ap_custom_text_dropdown__1pINk.dropdown_line__2fbRu{color:#104f56;font-style:normal;font-weight:600;font-size:1.225em;line-height:1.5625em;border-bottom:3px solid #104f56}.dropdown_ap_custom_text_dropdown__1pINk.dropdown_line__2fbRu .dropdown_divider__1uFIA.dropdown_text__1zFIY{padding:6px}.dropdown_ap_custom_dot_dropdown__2oGhM .dropdown_selected__3rO_o.dropdown_item__39hVw,.dropdown_ap_icon_dropdown__2nITA .dropdown_item__39hVw:hover,.dropdown_ap_icon_dropdown__2nITA .dropdown_selected__3rO_o.dropdown_item__39hVw{background:rgba(0,0,0,.03)!important;color:#104f56;background:#f8f8f8;border-radius:30px!important}.dropdown_ap_custom_dot_dropdown__2oGhM .dropdown_menu__19LHi>.dropdown_item__39hVw:hover,.dropdown_ap_custom_text_dropdown__1pINk .dropdown_ui__3adU2.dropdown_dropdown__3d8z9 .dropdown_menu__19LHi>.dropdown_item__39hVw:hover{border-radius:.9375em!important}.dropdown_ap_dropdown__2JFK6.dropdown_medium__23-JC{height:50px;width:185px}.dropdown_ap_dropdown__2JFK6.dropdown_small__3Nq-s{height:40px;width:163px}.dropdown_ap_dropdown__2JFK6.dropdown_medium__23-JC button{width:62%}.dropdown_ap_dropdown__2JFK6.dropdown_small__3Nq-s button{width:65%}.dropdown_ap_custom_text_dropdown__1pINk.dropdown_line__2fbRu span.dropdown_text__1zFIY,.dropdown_ap_dropdown__2JFK6 .dropdown_ui__3adU2.dropdown_floating__2xTTT.dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u span.dropdown_text__1zFIY{font-style:normal;font-weight:400;font-size:15px;line-height:22px;color:#104f56}.dropdown_ap_icon_dropdown__2nITA .dropdown_item__39hVw span.dropdown_text__1zFIY{font-style:normal!important;font-weight:500!important;font-size:16px!important;line-height:24px!important;color:#104f56!important}.dropdown_ap_dropdown__2JFK6 .dropdown_selected__3rO_o.dropdown_item__39hVw span.dropdown_text__1zFIY,.dropdown_ap_icon_dropdown__2nITA .dropdown_item__39hVw span.dropdown_text__1zFIY:hover,.dropdown_ap_icon_dropdown__2nITA .dropdown_selected__3rO_o.dropdown_item__39hVw span.dropdown_text__1zFIY{font-weight:600!important}.dropdown_ap_custom_text_dropdown__1pINk span.dropdown_text__1zFIY{font-size:.9375em;line-height:1.375em;color:#104f56}.dropdown_ap_icon_dropdown__2nITA.dropdown_medium__23-JC,.dropdown_ap_icon_dropdown__2nITA.dropdown_medium__23-JC .dropdown_ui__3adU2.dropdown_floating__2xTTT.dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u{width:50px;height:50px}.dropdown_ap_icon_dropdown__2nITA.dropdown_small__3Nq-s,.dropdown_ap_icon_dropdown__2nITA.dropdown_small__3Nq-s .dropdown_ui__3adU2.dropdown_floating__2xTTT.dropdown_dropdown__3d8z9.dropdown_button__35DRy.dropdown_icon__3Kz9u{width:40px;height:40px}.dropdown_ap_icon_dropdown__2nITA.dropdown_medium__23-JC i.dropdown_dropdown__3d8z9.dropdown_icon__3Kz9u{top:.79em!important;left:.9125em!important}.dropdown_ui__3adU2.dropdown_left__r5l8u.dropdown_icon__3Kz9u.dropdown_input__1PRtl.dropdown_search__2DWC2 input{border-radius:.9375em!important}.dropdown_ap_dropdown__2JFK6.dropdown_calendar__1p96m{width:185px!important;float:right}.dropdown_ap_dropdown__2JFK6.dropdown_calendar__1p96m button{width:68%}.dropdown_ap_dropdown__2JFK6.dropdown_calendar__1p96m .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS{left:-150px!important;width:185px;height:369px;overflow-y:scroll}.dropdown_ap_dropdown__2JFK6.dropdown_calendar__1p96m .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS .dropdown_header__RpVXG{font-style:normal;font-weight:600;font-size:15px;line-height:23px;color:#8ba2ab;mix-blend-mode:normal;opacity:.7;border:none;box-shadow:0 0 #fff}.dropdown_ap_dropdown__2JFK6.dropdown_calendar__1p96m .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS .dropdown_item__39hVw .dropdown_text__1zFIY{font-style:normal;font-weight:400;font-size:15px;color:#104f56}.dropdown_ap_dropdown__2JFK6.dropdown_calendar__1p96m .dropdown_visible__2CqUv.dropdown_menu__19LHi.dropdown_transition__2sHrS .dropdown_item__39hVw.dropdown_active__1XmVL{background:rgba(0,0,0,.05);border-radius:15px}";
styleInject(css_248z);

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
