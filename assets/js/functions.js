$(document).ready(function(){function t(){$(".expander-trigger").click(function(){$(this).toggleClass("expander-hidden")})}t(),$("a[href$='.jpg'], a[href$='.png'], a[href$='.gif']").attr("data-lity","");$.bigfoot({actionOriginalFN:"delete",buttonMarkup:'<div class="bigfoot-footnote__container"> <button href="#" class="bigfoot-footnote__button" rel="footnote" id="{{SUP:data-footnote-backlink-ref}}" data-footnote-number="{{FOOTNOTENUM}}" data-footnote-identifier="{{FOOTNOTEID}}" title="guarda la nota n\xb0 {{FOOTNOTENUM}}" data-bigfoot-footnote="{{FOOTNOTECONTENT}}"> <span class="visually-hidden">{{FOOTNOTENUM}}</span> </button></div>'})});