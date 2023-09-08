// patient set testing data
jQuery('input[name="patient_id"]').val("test1");
jQuery('input[name="patient_name"]').val("test2");
// RE set testing data
jQuery('input[name="sph_re"]').val(-8);
jQuery('input[name="cyl_re"]').val(-6);
jQuery('input[name="axis_re"]').val(1);
jQuery('input[name="flat_k_re"]').val(7);
jQuery('input[name="steep_k_re"]').val(7);
jQuery('input[name="steep_k_axis_re"]').val(1);
jQuery('input[name="flat_e_re"]').val(0.01);
jQuery('input[name="steep_e_re"]').val(0.01);
jQuery('input[name="hvid_re"]').val(8);
jQuery('input[name="pupil_size_re"]').val(4);
// LE set testing data
jQuery('input[name="sph_le"]').val(-7);
jQuery('input[name="cyl_le"]').val(-5);
jQuery('input[name="axis_le"]').val(2);
jQuery('input[name="flat_k_le"]').val(8);
jQuery('input[name="steep_k_le"]').val(8);
jQuery('input[name="steep_k_axis_le"]').val(90);
jQuery('input[name="flat_e_le"]').val(0.02);
jQuery('input[name="steep_e_le"]').val(0.02);
jQuery('input[name="hvid_le"]').val(9);
jQuery('input[name="pupil_size_le"]').val(5);

// set all input
jQuery(".thwepo-extra-options.thwepo_simple .value input").each(function() {
    var input_id = jQuery(this).attr("id");
    var input_placeholder = jQuery(this).attr("placeholder");
    jQuery(this).addClass("mdc-text-field__input").attr("autocorrect","off").attr("autocomplete","off").attr("spellcheck","false").attr("aria-labelledby",input_id);
    jQuery(this).wrap('<div class="inline-text-field-container"><label class="mdc-text-field mdc-text-field--outlined"></label></div>');
    jQuery(this).after('<div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><span id="'+input_id+'-label" class="mdc-floating-label">'+input_placeholder+'</span></div><div class="mdc-notched-outline__trailing"></div></div>');
    
});
jQuery(".thwepo-extra-options.thwepo_simple .value input").each(function() {
    var input_name = 'input[name="'+jQuery(this).attr("name")+'"]';
    // console.log(input_name);
    // console.log(jQuery(input_name).val());
    if(jQuery(input_name).val() != ""){
        jQuery(this).parent().find(".mdc-notched-outline--upgraded").addClass("mdc-notched-outline--notched");
        jQuery(this).parent().find(".mdc-floating-label").addClass("mdc-notched-outline--notched");
    }
});

// set all checkbox
var cbox_re=`<div class="mdc-form-field">
  <div class="mdc-checkbox">
    <input type="checkbox"
           class="mdc-checkbox__native-control"
           id="checkbox_re" checked/>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__focus-ring"></div>
  </div>
  <label for="checkbox_re">Right Eye</label>
</div>`;
var cbox_le=`<div class="mdc-form-field">
  <div class="mdc-checkbox">
    <input type="checkbox"
           class="mdc-checkbox__native-control"
           id="checkbox_le" checked/>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__focus-ring"></div>
  </div>
  <label for="checkbox_le">Left Eye</label>
</div>`;
var cbox_re_m=`<div class="mdc-form-field">
  <div class="mdc-checkbox">
    <input type="checkbox"
           class="mdc-checkbox__native-control"
           id="checkbox_re_m"/>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__focus-ring"></div>
  </div>
  <label for="checkbox_re_m">Modification (Right)</label>
</div>`;
var cbox_le_m=`<div class="mdc-form-field">
  <div class="mdc-checkbox">
    <input type="checkbox"
           class="mdc-checkbox__native-control"
           id="checkbox_le_m"/>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__focus-ring"></div>
  </div>
  <label for="checkbox_le_m">Modification (Left)</label>
</div>`;
jQuery("#cbox_re").html(cbox_re);
jQuery("#cbox_le").html(cbox_le);
jQuery("#cbox_re_m").html(cbox_re_m);
jQuery("#cbox_le_m").html(cbox_le_m);