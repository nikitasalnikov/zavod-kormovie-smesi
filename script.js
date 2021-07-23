 $(function() {

     $(".skill_per").each(function() {
         $this = $(this);
         var per = $(this).attr("per");
         $this.css("width", per + "%");
         $this.find(".value").text(per + "%").css("opacity", "1");
     });

 });

 document.querySelector('.header__nav-btn').addEventListener('click', function() {
     document.querySelector('.modal').classList.add('open');
 });

 document.querySelector('#close').addEventListener('click', function() {
     document.querySelector('.modal').classList.remove('open');
 });



 document.querySelector('#request__btn').addEventListener('click', function() {
     document.querySelector('.modal__request').classList.add('open');
 });

 document.querySelector('#close__btn').addEventListener('click', function() {
     document.querySelector('.modal__request').classList.remove('open');
 });



 document.querySelector('.input__form-btn').addEventListener('click', function() {
     document.querySelector('.modal__compare').classList.add('open');
 });

 document.querySelector('#compare__close').addEventListener('click', function() {
     document.querySelector('.modal__compare').classList.remove('open');
 });



 document.querySelector('#ration__btn').addEventListener('click', function() {
     document.querySelector('.modal__order').classList.add('open');
 });

 document.querySelector('#order__close').addEventListener('click', function() {
     document.querySelector('.modal__order').classList.remove('open');
 });


 /*accordeon*/
 $(function() {
         var Accordion = function(el, multiple) {
             this.el = el || {};
             // more then one submenu open?
             this.multiple = multiple || false;

             var dropdownlink = this.el.find('.dropdownlink');
             dropdownlink.on('click', { el: this.el, multiple: this.multiple },
                 this.dropdown);
         };

         Accordion.prototype.dropdown = function(e) {
             var $el = e.data.el,
                 $this = $(this),
                 //this is the ul.submenuItems
                 $next = $this.next();

             $next.slideToggle();
             $this.parent().toggleClass('open');

             if (!e.data.multiple) {
                 //show only one menu at the same time
                 $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
             }
         }

         var accordion = new Accordion($('.accordion-menu'), false);
     })
     /*accordeon end*/