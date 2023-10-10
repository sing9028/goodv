if(jQuery("body").hasClass("single-product")){
    // console.log("single-product");

    // add back button after order button
    // jQuery('<button id="btn_submit_back" type="button" class="single_add_to_cart_button button alt btn_outline btn_back">Back</button>').insertAfter('.single-product.woocommerce button.button[name="add-to-cart"]');
    jQuery('<button id="btn_submit_back" type="button" class="single_add_to_cart_button button alt btn_outline btn_back">Back</button>').insertAfter('.single-product.woocommerce button.button[type="submit"]');

    // set user info
    jQuery('.com_id td p[name="com_id"]').html(curBillingObj["first_name"]);
    jQuery('.com_name td p[name="com_name"]').html(curBillingObj["last_name"]);
    jQuery('.com_addr td p[name="com_addr"]').html(curBillingObj["address"]);
    jQuery('.contact_num td p[name="contact_num"]').html(curBillingObj["phone"]);
    jQuery('#com_id').html(curBillingObj["first_name"]);
    jQuery('#com_name').html(curBillingObj["last_name"]);
    jQuery('#com_addr').html(curBillingObj["address"]);
    jQuery('#contact_num').html(curBillingObj["phone"]);

    orderFormInit();
}

function orderFormInit() {
    // patient set testing data
    jQuery('input[name="patient_id"]').val("test1");
    jQuery('input[name="patient_name"]').val("test2");
    // RE set testing data
    jQuery('input[name="sph_re"]').val(-8);
    jQuery('input[name="cyl_re"]').val(-0.25);
    jQuery('input[name="axis_re"]').val(1);
    jQuery('input[name="flat_k_re"]').val(7);
    jQuery('input[name="steep_k_re"]').val(7);
    jQuery('input[name="steep_k_axis_re"]').val(1);
    jQuery('input[name="flat_e_re"]').val(0.01);
    jQuery('input[name="steep_e_re"]').val(0.01);
    jQuery('input[name="hvid_re"]').val(10.5);
    jQuery('input[name="pupil_size_re"]').val(4);
    // LE set testing data
    jQuery('input[name="sph_le"]').val(-7);
    jQuery('input[name="cyl_le"]').val(-5);
    jQuery('input[name="axis_le"]').val(2);
    jQuery('input[name="flat_k_le"]').val(7.8);
    jQuery('input[name="steep_k_le"]').val(7.5);
    jQuery('input[name="steep_k_axis_le"]').val(90);
    jQuery('input[name="flat_e_le"]').val(0.6);
    jQuery('input[name="steep_e_le"]').val(0.6);
    jQuery('input[name="hvid_le"]').val(11.5);
    jQuery('input[name="pupil_size_le"]').val(5);

    // set all input
    jQuery(".thwepo-extra-options.thwepo_variable .value input").each(function() {
        var input_id = jQuery(this).attr("id");
        var input_placeholder = jQuery(this).attr("placeholder");
        jQuery(this).addClass("mdc-text-field__input").attr("autocorrect","off").attr("autocomplete","off").attr("spellcheck","false").attr("aria-labelledby",input_id);
        jQuery(this).wrap('<div class="inline-text-field-container"><label class="mdc-text-field mdc-text-field--outlined"></label></div>');
        jQuery(this).after('<div class="mdc-notched-outline mdc-notched-outline--upgraded"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><span id="'+input_id+'-label" class="mdc-floating-label">'+input_placeholder+'</span></div><div class="mdc-notched-outline__trailing"></div></div>');
        
    });
    jQuery(".thwepo-extra-options.thwepo_variable .value input").each(function() {
        var input_name = 'input[name="'+jQuery(this).attr("name")+'"]';
        // console.log(input_name);
        // console.log(jQuery(input_name).val());
        if(jQuery(input_name).val() != ""){
            jQuery(this).parent().find(".mdc-notched-outline--upgraded").addClass("mdc-notched-outline--notched");
            // jQuery(this).parent().find(".mdc-floating-label").addClass("mdc-notched-outline--notched");
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

    // set order text
    // jQuery('.single-product.woocommerce button.button[name="add-to-cart"]').html("Order Lens");
    jQuery('.single-product.woocommerce button.button[type="submit"]').html("Order Lens");

    // set all tab sequence of all Patient field
    jQuery('input[name="patient_id"]').attr("tabindex", "1");
    jQuery('input[name="patient_name"]').attr("tabindex", "2");
    // set all tab sequence of all order RE field
    jQuery('input[name="sph_re"]').attr("tabindex", "3");
    jQuery('input[name="cyl_re"]').attr("tabindex", "4");
    jQuery('input[name="axis_re"]').attr("tabindex", "5");
    jQuery('input[name="flat_k_re"]').attr("tabindex", "6");
    jQuery('input[name="flat_e_re"]').attr("tabindex", "7");
    jQuery('input[name="steep_k_re"]').attr("tabindex", "8");
    jQuery('input[name="steep_e_re"]').attr("tabindex", "9");
    jQuery('input[name="steep_k_axis_re"]').attr("tabindex", "10");
    jQuery('input[name="hvid_re"]').attr("tabindex", "11");
    jQuery('input[name="pupil_size_re"]').attr("tabindex", "12");
    // set all tab sequence of all order LE field
    jQuery('input[name="sph_le"]').attr("tabindex", "13");
    jQuery('input[name="cyl_le"]').attr("tabindex", "14");
    jQuery('input[name="axis_le"]').attr("tabindex", "15");
    jQuery('input[name="flat_k_le"]').attr("tabindex", "16");
    jQuery('input[name="flat_e_le"]').attr("tabindex", "17");
    jQuery('input[name="steep_k_le"]').attr("tabindex", "18");
    jQuery('input[name="steep_e_le"]').attr("tabindex", "19");
    jQuery('input[name="steep_k_axis_le"]').attr("tabindex", "20");
    jQuery('input[name="hvid_le"]').attr("tabindex", "21");
    jQuery('input[name="pupil_size_le"]').attr("tabindex", "22");
    // set all tab sequence of cal button
    jQuery('#btn_cal').attr("tabindex", "23");
    // set all tab sequence of all modification RE field
    jQuery('input[name="bc_flat_re"]').attr("tabindex", "24");
    jQuery('input[name="bc_steep_re"]').attr("tabindex", "25");
    jQuery('input[name="ac_flat_re"]').attr("tabindex", "26");
    jQuery('input[name="ac_steep_re"]').attr("tabindex", "27");
    jQuery('input[name="pc_flat_re"]').attr("tabindex", "28");
    jQuery('input[name="pc_steep_re"]').attr("tabindex", "29");
    jQuery('input[name="delta_target_re"]').attr("tabindex", "30");
    jQuery('input[name="bc_width_re"]').attr("tabindex", "31");
    jQuery('input[name="ld_re"]').attr("tabindex", "32");
    jQuery('input[name="remarks_re"]').attr("tabindex", "33");
    // set all tab sequence of all modification LE field
    jQuery('input[name="bc_flat_le"]').attr("tabindex", "34");
    jQuery('input[name="bc_steep_le"]').attr("tabindex", "35");
    jQuery('input[name="ac_flat_le"]').attr("tabindex", "36");
    jQuery('input[name="ac_steep_le"]').attr("tabindex", "37");
    jQuery('input[name="pc_flat_le"]').attr("tabindex", "38");
    jQuery('input[name="pc_steep_le"]').attr("tabindex", "39");
    jQuery('input[name="delta_target_le"]').attr("tabindex", "40");
    jQuery('input[name="bc_width_le"]').attr("tabindex", "41");
    jQuery('input[name="ld_le"]').attr("tabindex", "42");
    jQuery('input[name="remarks_le"]').attr("tabindex", "43");
    // set all tab sequence of confirm button
    jQuery('#btn_confirm').attr("tabindex", "44");
    // set all tab sequence of order button
    // jQuery('.single-product.woocommerce button.button[name="add-to-cart"]').attr("tabindex", "45");
    jQuery('.single-product.woocommerce button.button[type="submit"]').attr("tabindex", "45");

    // set required textbox checking
    var text_patient_id="N";
    var text_patient_name="N";

    // After RE/LE checkbox clicked
    var cbox_re="Y";
    var cbox_le="Y";
    var re_all_input='.thwepo-extra-options.thwepo_variable.order input[type="number"][name*="_re"]';
    var le_all_input='.thwepo-extra-options.thwepo_variable.order input[type="number"][name*="_le"]';
    var re_all_input_check="Y";
    var le_all_input_check="Y";
    var re_check="N";
    var le_check="N";
    var re_ajax_check="N";
    var le_ajax_check="N";
    jQuery(".cbox_eye input").on( "click", function() {
        if(jQuery(this).attr("id") == "checkbox_re"){
            var number_name=jQuery(re_all_input);
            if(cbox_re=="Y"){
                cbox_re="N";
            }else{
                cbox_re="Y";
            }
        }else{
            var number_name=jQuery(le_all_input);
            if(cbox_le=="Y"){
                cbox_le="N";
            }else{
                cbox_le="Y";
            }
        }
        var cbox=jQuery(this);
        jQuery(number_name).each(function() {
            if(cbox.is(':checked')){
                // console.log("cbox_eye checked");
                jQuery(this).removeAttr('disabled');
                jQuery(this).parent().removeClass("mdc-text-field--disabled");
                jQuery(this).parent().find(".mdc-notched-outline--upgraded").addClass("mdc-notched-outline--notched");
                jQuery(this).parent().find(".mdc-floating-label").addClass("mdc-floating-label--float-above");
                jQuery(this).parent().find(".mdc-notched-outline__notch").removeClass("width-auto");
            }else{
                // console.log("cbox_eye unchecked");
                jQuery(this).attr('disabled', 'disabled').val("");
                jQuery(this).parent().addClass("mdc-text-field--disabled");
                jQuery(this).parent().find(".mdc-notched-outline--upgraded").removeClass("mdc-notched-outline--notched");
                jQuery(this).parent().find(".mdc-floating-label").removeClass("mdc-floating-label--float-above");
                jQuery(this).parent().find(".mdc-notched-outline__notch").addClass("width-auto");
            }
        });
    });

    jQuery("#btn_cal_reset").on( "click", function() {
        // reset all Patient field
        jQuery('input[name="patient_id"]').val("");
        jQuery('input[name="patient_name"]').val("");
        // reset all order RE field
        jQuery('input[name="sph_re"]').val("");
        jQuery('input[name="cyl_re"]').val("");
        jQuery('input[name="axis_re"]').val("");
        jQuery('input[name="flat_k_re"]').val("");
        jQuery('input[name="flat_e_re"]').val("");
        jQuery('input[name="steep_k_re"]').val("");
        jQuery('input[name="steep_e_re"]').val("");
        jQuery('input[name="steep_k_axis_re"]').val("");
        jQuery('input[name="hvid_re"]').val("");
        jQuery('input[name="pupil_size_re"]').val("");
        // reset all order LE field
        jQuery('input[name="sph_le"]').val("");
        jQuery('input[name="cyl_le"]').val("");
        jQuery('input[name="axis_le"]').val("");
        jQuery('input[name="flat_k_le"]').val("");
        jQuery('input[name="flat_e_le"]').val("");
        jQuery('input[name="steep_k_le"]').val("");
        jQuery('input[name="steep_e_le"]').val("");
        jQuery('input[name="steep_k_axis_le"]').val("");
        jQuery('input[name="hvid_le"]').val("");
        jQuery('input[name="pupil_size_le"]').val("");
    });

    // set default RE modification field
    // var default_ld_re=0;
    var default_bc_width_re=6;
    var default_bc_flat_re=0;
    var default_bc_steep_re=0;
    var default_ac_flat_re=0;
    var default_ac_steep_re=0;
    var default_pc_flat_re=0;
    var default_pc_steep_re=0;
    var default_delta_target_re=0;
    
    // set default LE modification field
    // var default_ld_le=0;
    var default_bc_width_le=6;
    var default_bc_flat_le=0;
    var default_bc_steep_le=0;
    var default_ac_flat_le=0;
    var default_ac_steep_le=0;
    var default_pc_flat_le=0;
    var default_pc_steep_le=0;
    var default_delta_target_le=0;
    
    // set hidden RE field to store value if user skip modification page
    var model_re="";
    var material_re="";
    var design_re="";
    var bc_design_re="";
    var ld_re=0;
    var lp_re=0;
    var thickness_re=0;
    var bc_width_re=0;
    var bc_flat_re=0;
    var bc_steep_re=0;
    var ac1_flat_re=0;
    var ac1_steep_re=0;
    var ac2_flat_re=0;
    var ac2_steep_re=0;
    var pc_flat_re=0;
    var pc_steep_re=0;
    var delta_target_re=0;
    var made_re="";
    // set hidden LE field to store value if user skip modification page
    var model_le="";
    var material_le="";
    var design_le="";
    var bc_design_le="";
    var ld_le=0;
    var lp_le=0;
    var thickness_le=0;
    var bc_width_le=0;
    var bc_flat_le=0;
    var bc_steep_le=0;
    var ac1_flat_le=0;
    var ac1_steep_le=0;
    var ac2_flat_le=0;
    var ac2_steep_le=0;
    var pc_flat_le=0;
    var pc_steep_le=0;
    var delta_target_le=0;
    var made_le="";
    // set default modification RE field
    var modify_bc_flat_re=0;
    var modify_ac_flat_re=0;
    var modify_pc_flat_re=0;
    var modify_bc_steep_re=0;
    var modify_ac_steep_re=0;
    var modify_pc_steep_re=0;
    // set default modification LE field
    var modify_bc_flat_le=0;
    var modify_ac_flat_le=0;
    var modify_pc_flat_le=0;
    var modify_bc_steep_le=0;
    var modify_ac_steep_le=0;
    var modify_pc_steep_le=0;
    
    
    var error_msg="";
    function orderFormCheck(cbox){
        if(cbox=="RE"){
            var cbox_e=cbox_re;
            var flat_k_val=parseFloat(jQuery('input[name="flat_k_re"]').val());
            var steep_k_val=parseFloat(jQuery('input[name="steep_k_re"]').val());
            var cbox_all_input=re_all_input;
            var cbox_all_input_check=re_all_input_check;
            var cbox_check=re_check;
            var eye_text = "Right Eye";
        }else if(cbox=="LE"){
            var cbox_e=cbox_le;
            var flat_k_val=parseFloat(jQuery('input[name="flat_k_le"]').val());
            var steep_k_val=parseFloat(jQuery('input[name="steep_k_le"]').val());
            var cbox_all_input=le_all_input;
            var cbox_all_input_check=le_all_input_check;
            var cbox_check=le_check;
            var eye_text = "Left Eye";
        }
        if(cbox_e=="Y"){
            jQuery(cbox_all_input).each(function() {
                if(jQuery(this).val() == ""){
                    cbox_all_input_check="N";
                }
            });
            if(cbox_all_input_check=="N"){
                error_msg+='\nAll Input of '+eye_text+' is required';
            }else if(cbox_all_input_check=="Y"){
                // console.log(flat_k_val);
                // console.log(steep_k_val);
                if(flat_k_val>9 && flat_k_val<37.33){
                    error_msg+='\n"Flat K" of '+eye_text+' must be in range 7-9(mm) or 37.33-48(D)';
                }else {
                    if((flat_k_val>=37.33&&flat_k_val<=48)){
                        jQuery('input[name="flat_k_re"]').val(Math.round(336/flat_k_val));
                    }
                }
                if(steep_k_val>9 && steep_k_val<37.33){
                    error_msg+='\n"Steep K" of '+eye_text+' must be in range 7-9(mm) or 37.33-48(D)';
                }else {
                    if((steep_k_val>=37.33&&steep_k_val<=48)){
                        jQuery('input[name="steep_re"]').val(Math.round(336/steep_k_val));
                    }
                    if(flat_k_val >= steep_k_val){
                        if(cbox=="RE"){
                            re_check="Y";
                        }else if(cbox=="LE"){
                            le_check="Y";
                        }
                    }else{
                        error_msg+='\n"Steep K" of '+eye_text+' must be less than or equal to "Flat K" of '+eye_text;
                    }
                }
            }
        }
    }

    // After Calculate Lens button clicked
    jQuery("#btn_cal").on( "click", function() {
        // console.log("cbox_re="+cbox_re+"||cbox_le="+cbox_le);
        error_msg="";
        if(jQuery('input[name="patient_id"]').val() != ""){
            text_patient_id="Y";
        }else{
            text_patient_id="N";
        }
        if(jQuery('input[name="patient_name"]').val() != ""){
            text_patient_name="Y";
        }else{
            text_patient_name="N";
        }
        if(text_patient_id=="N"){
            error_msg+="\nPatient ID is required";
        }
        if(text_patient_name=="N"){
            error_msg+="\nPatient Name is required";
        }
        if(cbox_re=="N"&&cbox_le=="N"){
            error_msg+="\nSelect at least one checkbox(RE/LE)";
        }
        if(cbox_re=="Y"){
            orderFormCheck("RE");
        }
        if(cbox_le=="Y"){
            orderFormCheck("LE");
        }
        if(cbox_re=="Y"&&cbox_le=="Y"){
            if(re_check=="Y"&&le_check=="N"){
                re_check="N";
                le_check="N";
            }else if(re_check=="N"&&le_check=="Y"){
                re_check="N";
                le_check="N";
            }
        }
        // console.log("re_check="+re_check+"||le_check="+le_check);
        if(text_patient_id=="Y"&&text_patient_name=="Y"&&(re_check=="Y"||le_check=="Y")){
            orderClick("cal",cbox_re,cbox_le);
        }
        if(error_msg != ""){
            jQuery(".error_msg").html(error_msg);
        }
    });

    // After Modiification RE/LE checkbox clicked
    var cbox_re_m="N";
    var cbox_le_m="N";
    var re_all_input_m='.thwepo-extra-options.thwepo_variable.modification1 input[type="number"][name*="_re"]';
    var le_all_input_m='.thwepo-extra-options.thwepo_variable.modification1 input[type="number"][name*="_le"]';
    var re_all_input2_m='.thwepo-extra-options.thwepo_variable.modification2 input[name*="_re"]';
    var le_all_input2_m='.thwepo-extra-options.thwepo_variable.modification2 input[name*="_le"]';
    var re_all_input_check_m="N";
    var le_all_input_check_m="N";
    var re_check_m="N";
    var le_check_m="N";
    var re_ajax_check_m="N";
    var le_ajax_check_m="N";

    function ModificationFormInput(input){
        jQuery(input).each(function() {
            // console.log("cbox_eye unchecked");
            jQuery(this).not('[name*="remarks"]').attr('disabled', 'disabled').val("");
            jQuery(this).not('[name*="remarks"]').parent().addClass("mdc-text-field--disabled");
            jQuery(this).not('[name*="remarks"]').parent().find(".mdc-notched-outline--upgraded").removeClass("mdc-notched-outline--notched");
            jQuery(this).not('[name*="remarks"]').parent().find(".mdc-floating-label").removeClass("mdc-floating-label--float-above");
            jQuery(this).not('[name*="remarks"]').parent().find(".mdc-notched-outline__notch").addClass("width-auto");
        });
    }
    ModificationFormInput(re_all_input_m);
    ModificationFormInput(le_all_input_m);
    ModificationFormInput(re_all_input2_m);
    ModificationFormInput(le_all_input2_m);

    function ModificationFormCheckbox(number_name,cbox_m,eye_name){
        jQuery(number_name).each(function() {
            if(cbox_m.is(':checked')){
                // console.log("cbox_eye checked");
                jQuery(this).not('[name*="remarks"]').removeAttr('disabled');
                jQuery(this).not('[name*="remarks"]').parent().removeClass("mdc-text-field--disabled");
                jQuery(this).not('[name*="remarks"]').parent().find(".mdc-notched-outline--upgraded").addClass("mdc-notched-outline--notched");
                jQuery(this).not('[name*="remarks"]').parent().find(".mdc-floating-label").addClass("mdc-floating-label--float-above");
                jQuery(this).not('[name*="remarks"]').parent().find(".mdc-notched-outline__notch").removeClass("width-auto");
                // set default RE/LE Modification value
                if(eye_name=="re"){
                    var bc_flat_val=default_bc_flat_re;
                    var bc_steep_val=default_bc_steep_re;
                    var ac_flat_val=default_ac_flat_re;
                    var ac_steep_val=default_ac_steep_re;
                    var pc_flat_val=default_pc_flat_re;
                    var pc_steep_val=default_pc_steep_re;
                    var delta_target_val=default_delta_target_re;
                    var bc_width_val=default_bc_width_re;

                    var ld_val=ld_re;
                }else if(eye_name=="le"){
                    var bc_flat_val=default_bc_flat_le;
                    var bc_steep_val=default_bc_steep_le;
                    var ac_flat_val=default_ac_flat_le;
                    var ac_steep_val=default_ac_steep_le;
                    var pc_flat_val=default_pc_flat_le;
                    var pc_steep_val=default_pc_steep_le;
                    var delta_target_val=default_delta_target_le;
                    var bc_width_val=default_bc_width_le;
                    
                    var ld_val=ld_le;
                }
                jQuery('input[name="bc_flat_'+eye_name+'"]').val(bc_flat_val);
                jQuery('input[name="bc_steep_'+eye_name+'"]').val(bc_steep_val);
                jQuery('input[name="ac_flat_'+eye_name+'"]').val(ac_flat_val);
                jQuery('input[name="ac_steep_'+eye_name+'"]').val(ac_steep_val);
                jQuery('input[name="pc_flat_'+eye_name+'"]').val(pc_flat_val);
                jQuery('input[name="pc_steep_'+eye_name+'"]').val(pc_steep_val);
                jQuery('input[name="delta_target_'+eye_name+'"]').val(delta_target_val);
                jQuery('input[name="bc_width_'+eye_name+'"]').val(bc_width_val);
                jQuery('input[name="ld_'+eye_name+'"]').val(ld_val);
            }else{
                // console.log("cbox_eye unchecked");
                jQuery(this).not('[name*="remarks"]').attr('disabled', 'disabled').val("");
                jQuery(this).not('[name*="remarks"]').parent().addClass("mdc-text-field--disabled");
                jQuery(this).not('[name*="remarks"]').parent().find(".mdc-notched-outline--upgraded").removeClass("mdc-notched-outline--notched");
                jQuery(this).not('[name*="remarks"]').parent().find(".mdc-floating-label").removeClass("mdc-floating-label--float-above");
                jQuery(this).not('[name*="remarks"]').parent().find(".mdc-notched-outline__notch").addClass("width-auto");
                // set default Modification value
                jQuery('input[name="bc_flat_'+eye_name+'"]').val("");
                jQuery('input[name="bc_steep_'+eye_name+'"]').val("");
                jQuery('input[name="ac_flat_'+eye_name+'"]').val("");
                jQuery('input[name="ac_steep_'+eye_name+'"]').val("");
                jQuery('input[name="pc_flat_'+eye_name+'"]').val("");
                jQuery('input[name="pc_steep_'+eye_name+'"]').val("");
                jQuery('input[name="delta_target_'+eye_name+'"]').val("");
                jQuery('input[name="bc_width_'+eye_name+'"]').val("");
                jQuery('input[name="ld_'+eye_name+'"]').val("");
            }
        });
    }

    jQuery(".cbox_eye_m input").on( "click", function() {
        if(jQuery(this).attr("id") == "checkbox_re_m"){
            var number_name_m=jQuery(re_all_input_m);
            var number_name2_m=jQuery(re_all_input2_m);
            var eye_name="re";
            if(cbox_re_m=="Y"){
                cbox_re_m="N";
            }else{
                cbox_re_m="Y";
            }
        }else{
            var number_name_m=jQuery(le_all_input_m);
            var number_name2_m=jQuery(le_all_input2_m);
            var eye_name="le";
            if(cbox_le_m=="Y"){
                cbox_le_m="N";
            }else{
                cbox_le_m="Y";
            }
        }
        var cbox_m=jQuery(this);
        ModificationFormCheckbox(number_name_m,cbox_m,eye_name)
        ModificationFormCheckbox(number_name2_m,cbox_m,eye_name)
    });

    jQuery("#btn_confirm_reset").on( "click", function() {
        // reset all modification RE field
        jQuery('input[name="bc_flat_re"]').val("");
        jQuery('input[name="bc_steep_re"]').val("");
        jQuery('input[name="ac_flat_re"]').val("");
        jQuery('input[name="ac_steep_re"]').val("");
        jQuery('input[name="pc_flat_re"]').val("");
        jQuery('input[name="pc_steep_re"]').val("");
        jQuery('input[name="delta_target_re"]').val("");
        jQuery('input[name="bc_width_re"]').val("");
        jQuery('input[name="ld_re"]').val("");
        jQuery('input[name="remarks_re"]').val("");
        // reset all modification LE field
        jQuery('input[name="bc_flat_le"]').val("");
        jQuery('input[name="bc_steep_le"]').val("");
        jQuery('input[name="ac_flat_le"]').val("");
        jQuery('input[name="ac_steep_le"]').val("");
        jQuery('input[name="pc_flat_le"]').val("");
        jQuery('input[name="pc_steep_le"]').val("");
        jQuery('input[name="delta_target_le"]').val("");
        jQuery('input[name="bc_width_le"]').val("");
        jQuery('input[name="ld_le"]').val("");
        jQuery('input[name="remarks_le"]').val("");
    });

    jQuery("#btn_confirm_back").on( "click", function() {
        jQuery(".thwepo-extra-options.thwepo_variable.company").show();
        jQuery(".thwepo-extra-options.thwepo_variable.company tbody tr:nth-child(10)").show();
        jQuery(".thwepo-extra-options.thwepo_variable.company tbody tr:nth-child(9)").show();
        jQuery(".thwepo-extra-options.thwepo_variable.order").show();
        jQuery("#btn_cal").show();
        jQuery("#patient_id_val").html(jQuery('input[name="patient_id"]').val());
        jQuery("#patient_name_val").html(jQuery('input[name="patient_name"]').val());
        jQuery("#modification").hide();
        jQuery(".thwepo-extra-options.thwepo_variable.modification0").hide();
        jQuery(".thwepo-extra-options.thwepo_variable.modification1").hide();
        jQuery(".thwepo-extra-options.thwepo_variable.modification2").hide();
        jQuery([document.documentElement, document.body]).animate({
            scrollTop: jQuery(".single-product-category").offset().top-150
        }, 500);
    });

    // After Confirm Parameters button clicked
    jQuery("#btn_confirm").on( "click", function() {
        error_msg="";
        // if skip Modification
        if(cbox_re_m=="N"&&cbox_le_m=="N"){

            console.log("design_re="+design_re+"//design_le="+design_le);
            if(design_re=="Spherical"){
                jQuery("#pa_re").val("spherical").change();
            }else if(design_re=="Toric"){
                jQuery("#pa_re").val("toric").change();
            }
            if(design_le=="Spherical"){
                jQuery("#pa_le").val("spherical").change();
            }else if(design_le=="Toric"){
                jQuery("#pa_le").val("toric").change();
            }

            show_next_page("confirm");
            // console.log(re_check);
            // console.log(le_check);
            if(re_check){
                jQuery('input[name="model_re"]').removeAttr('disabled').val(model_re);
                jQuery('input[name="material_re"]').removeAttr('disabled').val(material_re);
                jQuery('input[name="design_re"]').removeAttr('disabled').val(design_re);
                jQuery('input[name="bc_design_re"]').removeAttr('disabled').val(bc_design_re);
                jQuery('input[name="ld_re"]').removeAttr('disabled').val(ld_re);
                jQuery('input[name="lp_re"]').removeAttr('disabled').val(lp_re);
                jQuery('input[name="thickness_re"]').removeAttr('disabled').val(thickness_re);
                jQuery('input[name="bc_width_re"]').removeAttr('disabled').val(bc_width_re);
                jQuery('input[name="bc_flat_re2"]').removeAttr('disabled').val(bc_flat_re);
                jQuery('input[name="bc_steep_re2"]').removeAttr('disabled').val(bc_steep_re);
                jQuery('input[name="ac1_flat_re"]').removeAttr('disabled').val(ac1_flat_re);
                jQuery('input[name="ac1_steep_re"]').removeAttr('disabled').val(ac1_steep_re);
                jQuery('input[name="ac2_flat_re"]').removeAttr('disabled').val(ac2_flat_re);
                jQuery('input[name="ac2_steep_re"]').removeAttr('disabled').val(ac2_steep_re);
                jQuery('input[name="pc_flat_re2"]').removeAttr('disabled').val(pc_flat_re);
                jQuery('input[name="pc_steep_re2"]').removeAttr('disabled').val(pc_steep_re);
            }
            if(le_check){
                jQuery('input[name="model_le"]').removeAttr('disabled').val(model_le);
                jQuery('input[name="material_le"]').removeAttr('disabled').val(material_le);
                jQuery('input[name="design_le"]').removeAttr('disabled').val(design_le);
                jQuery('input[name="bc_design_le"]').removeAttr('disabled').val(bc_design_le);
                jQuery('input[name="ld_le"]').removeAttr('disabled').val(ld_le);
                jQuery('input[name="lp_le"]').removeAttr('disabled').val(lp_le);
                jQuery('input[name="thickness_le"]').removeAttr('disabled').val(thickness_le);
                jQuery('input[name="bc_width_le"]').removeAttr('disabled').val(bc_width_le);
                jQuery('input[name="bc_flat_le2"]').removeAttr('disabled').val(bc_flat_le);
                jQuery('input[name="bc_steep_le2"]').removeAttr('disabled').val(bc_steep_le);
                jQuery('input[name="ac1_flat_le"]').removeAttr('disabled').val(ac1_flat_le);
                jQuery('input[name="ac1_steep_le"]').removeAttr('disabled').val(ac1_steep_le);
                jQuery('input[name="ac2_flat_le"]').removeAttr('disabled').val(ac2_flat_le);
                jQuery('input[name="ac2_steep_le"]').removeAttr('disabled').val(ac2_steep_le);
                jQuery('input[name="pc_flat_le2"]').removeAttr('disabled').val(pc_flat_le);
                jQuery('input[name="pc_steep_le2"]').removeAttr('disabled').val(pc_steep_le);
            }
        }else if(cbox_re_m=="Y"&&cbox_le_m=="N"){
            re_check_m="Y";
            orderClick("confirm",cbox_re_m,cbox_le_m);
        }else if(cbox_re_m=="N"&&cbox_le_m=="Y"){
            le_check_m="Y";
            orderClick("confirm",cbox_re_m,cbox_le_m);
        }else if(cbox_re_m=="Y"&&cbox_le_m=="Y"){
            re_check_m="Y";
            le_check_m="Y";
            orderClick("confirm",cbox_re_m,cbox_le_m);
        }
        if(error_msg != ""){
            jQuery(".error_msg").html(error_msg);
        }else{
            // show remark text
            var remarks_re=jQuery('input[name="remarks_re"]').val();
            jQuery("#remarks_re").html(remarks_re);
            var remarks_le=jQuery('input[name="remarks_le"]').val();
            jQuery("#remarks_le").html(remarks_le);
        }
    });

    // jQuery(".d-none").each(function() {
    //     jQuery(this).parent().parent().parent().parent().hide();
    // });

    function show_next_page(page){
        if(page=="cal"){
            // console.log(re_ajax_check);
            if(re_ajax_check=="N"){
                jQuery("#cbox_re_m").hide();
                jQuery(re_all_input_m).each(function() {
                    jQuery(this).parent().parent().hide();
                });
                jQuery(re_all_input2_m).each(function() {
                    jQuery(this).parent().parent().hide();
                });
                jQuery(".confirm_title_re").hide();
                jQuery(".confirm_val_re").hide();
            }else{
                jQuery(".confirm_title_re").show();
                jQuery(".confirm_val_re").show();
            }
            // console.log(le_ajax_check);
            if(le_ajax_check=="N"){
                jQuery("#cbox_le_m").hide();
                jQuery(le_all_input_m).each(function() {
                    jQuery(this).parent().parent().hide();
                });
                jQuery(le_all_input2_m).each(function() {
                    jQuery(this).parent().parent().hide();
                });
                jQuery(".confirm_title_le").hide();
                jQuery(".confirm_val_le").hide();
            }else{
                jQuery(".confirm_title_le").show();
                jQuery(".confirm_val_le").show();
            }
            // show Modifiction Page
            jQuery(".thwepo-extra-options.thwepo_variable.company tbody tr:nth-child(10)").hide();
            jQuery(".thwepo-extra-options.thwepo_variable.company tbody tr:nth-child(9)").hide();
            jQuery(".thwepo-extra-options.thwepo_variable.order").hide();
            jQuery("#btn_cal").hide();
            jQuery("#patient_id_val").html(jQuery('input[name="patient_id"]').val());
            jQuery("#patient_name_val").html(jQuery('input[name="patient_name"]').val());
            jQuery("#modification").show();
            jQuery(".thwepo-extra-options.thwepo_variable.modification0").show();
            jQuery(".thwepo-extra-options.thwepo_variable.modification1").show();
            jQuery(".thwepo-extra-options.thwepo_variable.modification2").show();
            jQuery([document.documentElement, document.body]).animate({
                scrollTop: jQuery("#modification").offset().top-150
            }, 500);
            // jQuery(".single-product .woocommerce-variation-add-to-cart .variations").css("display","block !important");
        }else if(page=="confirm"){
            // show Confirmation Page
            jQuery(".lens_val").hide();
            jQuery(".thwepo-extra-options.thwepo_variable.company").hide();
            jQuery(".thwepo-extra-options.thwepo_variable.modification0").hide();
            jQuery(".thwepo-extra-options.thwepo_variable.modification1").hide();
            jQuery(".thwepo-extra-options.thwepo_variable.modification2").hide();
            jQuery(".thwepo-extra-options.thwepo_variable.confirmation").hide();
            jQuery("#company_info").show();
            jQuery("#confirmation_re").show();
            jQuery("#confirmation_le").show();
            jQuery(".confirm_price").html(jQuery(".single-product .woocommerce-variation-price .price bdi").html());
            // jQuery('.single-product.woocommerce button.button[name="add-to-cart"]').show();
            jQuery('.single-product.woocommerce button.button[type="submit"]').show();
            jQuery([document.documentElement, document.body]).animate({
                scrollTop: jQuery("#confirmation_re").offset().top-200
            }, 500);
            jQuery("#btn_submit_back").show();

            // setTimeout(function() { 
                jQuery("#btn_submit_back").on( "click", function() {
                    // console.log("btn_submit_back");
                    jQuery(".lens_val").show();
                    jQuery(".thwepo-extra-options.thwepo_variable.company").show();
                    jQuery(".thwepo-extra-options.thwepo_variable.modification0").show();
                    jQuery(".thwepo-extra-options.thwepo_variable.modification1").show();
                    jQuery(".thwepo-extra-options.thwepo_variable.modification2").show();
                    jQuery(".thwepo-extra-options.thwepo_variable.confirmation").show();
                    jQuery("#company_info").hide();
                    jQuery("#confirmation_re").hide();
                    jQuery("#confirmation_le").hide();
                    // jQuery('.single-product.woocommerce button.button[name="add-to-cart"]').hide();
                    jQuery('.single-product.woocommerce button.button[type="submit"]').hide();
                    jQuery([document.documentElement, document.body]).animate({
                        scrollTop: jQuery("#modification").offset().top-200
                    }, 500);
                    
                    if(cbox_re_m!="Y"){
                        // reset Modification RE field
                        // jQuery('input[name="bc_flat_re"]').val(modify_bc_flat_re);
                        // jQuery('input[name="bc_steep_re"]').val(modify_bc_steep_re);
                        // jQuery('input[name="ac_flat_re"]').val(modify_ac_flat_re);
                        // jQuery('input[name="ac_steep_re"]').val(modify_ac_steep_re);
                        // jQuery('input[name="pc_flat_re"]').val(modify_pc_flat_re);
                        // jQuery('input[name="pc_steep_re"]').val(modify_pc_steep_re);
                        // jQuery('input[name="delta_target_re"]').val(delta_target_re);
                        jQuery('input[name="bc_width_re"]').val("");
                        jQuery('input[name="ld_re"]').val("");
                    }
                    if(cbox_le_m!="Y"){
                        // reset Modification LE field
                        // jQuery('input[name="bc_flat_le"]').val(modify_bc_flat_le);
                        // jQuery('input[name="bc_steep_le"]').val(modify_bc_steep_le);
                        // jQuery('input[name="ac_flat_le"]').val(modify_ac_flat_le);
                        // jQuery('input[name="ac_steep_le"]').val(modify_ac_steep_le);
                        // jQuery('input[name="pc_flat_le"]').val(modify_pc_flat_le);
                        // jQuery('input[name="pc_steep_le"]').val(modify_pc_steep_le);
                        // jQuery('input[name="delta_target_le"]').val(delta_target_le);
                        jQuery('input[name="bc_width_le"]').val("");
                        jQuery('input[name="ld_le"]').val("");
                    }

                    jQuery(this).hide();
                });
            // }, 500);
        }
    }

    function orderClick(page,cbox_re,cbox_le) {
        //defining a list of all parameters
        if(page=="cal"){
            param_list = ["sph","cyl","axis","flat_k","steep_k","steep_k_axis","flat_e","steep_e","hvid","pupil_size"];
            var RE = { 
                // getting the data from the HTML form for Right Eye
                "sph": jQuery('input[name="sph_re"]').val(),
                "cyl": jQuery('input[name="cyl_re"]').val(),
                "axis": jQuery('input[name="axis_re"]').val(),
                "flat_k": jQuery('input[name="flat_k_re"]').val(),
                "steep_k": jQuery('input[name="steep_k_re"]').val(),
                "steep_k_axis": jQuery('input[name="steep_k_axis_re"]').val(),
                "flat_e": jQuery('input[name="flat_e_re"]').val(),
                "steep_e": jQuery('input[name="steep_e_re"]').val(),
                "hvid": jQuery('input[name="hvid_re"]').val(),
                "pupil_size": jQuery('input[name="pupil_size_re"]').val()
            };                                                               
            // console.log(RE);
            var LE = {
                // getting the data from the HTML form for Left Eye
                "sph": jQuery('input[name="sph_le"]').val(),
                "cyl": jQuery('input[name="cyl_le"]').val(),
                "axis": jQuery('input[name="axis_le"]').val(),
                "flat_k": jQuery('input[name="flat_k_le"]').val(),
                "steep_k": jQuery('input[name="steep_k_le"]').val(),
                "steep_k_axis": jQuery('input[name="steep_k_axis_le"]').val(),
                "flat_e": jQuery('input[name="flat_e_le"]').val(),
                "steep_e": jQuery('input[name="steep_e_le"]').val(),
                "hvid": jQuery('input[name="hvid_le"]').val(),
                "pupil_size": jQuery('input[name="pupil_size_le"]').val()
            };
            // console.log(LE);
        }else if(page=="confirm"){
            param_list = ["sph","cyl","axis","flat_k","steep_k","steep_k_axis","flat_e","steep_e","hvid","pupil_size","modify"];
            var RE = { 
                // getting the data from the HTML form for Right Eye
                "sph": jQuery('input[name="sph_re"]').val(),
                "cyl": jQuery('input[name="cyl_re"]').val(),
                "axis": jQuery('input[name="axis_re"]').val(),
                "flat_k": jQuery('input[name="flat_k_re"]').val(),
                "steep_k": jQuery('input[name="steep_k_re"]').val(),
                "steep_k_axis": jQuery('input[name="steep_k_axis_re"]').val(),
                "flat_e": jQuery('input[name="flat_e_re"]').val(),
                "steep_e": jQuery('input[name="steep_e_re"]').val(),
                "hvid": jQuery('input[name="hvid_re"]').val(),
                "pupil_size": jQuery('input[name="pupil_size_re"]').val(),
                "modify": {
                    "flat": {
                        "BOZR": jQuery('input[name="bc_flat_re"]').val(),
                        "AC": jQuery('input[name="ac_flat_re"]').val(),
                        "PC": jQuery('input[name="pc_flat_re"]').val()
                    },
                    "steep": {
                        "BOZR": jQuery('input[name="bc_steep_re"]').val(),
                        "AC": jQuery('input[name="ac_steep_re"]').val(),
                        "PC": jQuery('input[name="pc_steep_re"]').val()
                    },
                    "BC_width": jQuery('input[name="bc_width_re"]').val(),
                    "LD": jQuery('input[name="ld_re"]').val(),
                    "delta_target": jQuery('input[name="delta_target_re"]').val()
                }
            };                                                               
            // console.log(RE);
            var LE = {
                // getting the data from the HTML form for Left Eye
                "sph": jQuery('input[name="sph_le"]').val(),
                "cyl": jQuery('input[name="cyl_le"]').val(),
                "axis": jQuery('input[name="axis_le"]').val(),
                "flat_k": jQuery('input[name="flat_k_le"]').val(),
                "steep_k": jQuery('input[name="steep_k_le"]').val(),
                "steep_k_axis": jQuery('input[name="steep_k_axis_le"]').val(),
                "flat_e": jQuery('input[name="flat_e_le"]').val(),
                "steep_e": jQuery('input[name="steep_e_le"]').val(),
                "hvid": jQuery('input[name="hvid_le"]').val(),
                "pupil_size": jQuery('input[name="pupil_size_le"]').val(),
                "modify": {
                    "flat": {
                        "BOZR": jQuery('input[name="bc_flat_le"]').val(),
                        "AC": jQuery('input[name="ac_flat_le"]').val(),
                        "PC": jQuery('input[name="pc_flat_le"]').val()
                    },
                    "steep": {
                        "BOZR": jQuery('input[name="bc_steep_le"]').val(),
                        "AC": jQuery('input[name="ac_steep_le"]').val(),
                        "PC": jQuery('input[name="pc_steep_le"]').val()
                    },
                    "BC_width": jQuery('input[name="bc_width_le"]').val(),
                    "LD": jQuery('input[name="ld_le"]').val(),
                    "delta_target": jQuery('input[name="delta_target_le"]').val()
                }
            };
            // console.log(LE);
        }
        //Acquiring data from the form

        

        function check_range(data_name, check_value, page){
            // checking if input data is in a reasonable range or not
            if(page=="cal"){
                var data_type = {
                    // declaring data_type & defining exact range to be checked
                    sph: {min: -8, max:0},
                    cyl: {min: -6, max:0},
                    axis: {min: 1, max:180},
                    e: {min: 0.01, max:1},
                    k: {min: 7, max: 9},
                    hvid: {min: 10.5, max: 14},
                    pupil_size: {min: 4, max: 7}
                };
                var data_range = {
                    // defining range of each type of variable / parameters
                    // under definition on @data_type
                    sph: data_type["sph"],
                    cyl: data_type["cyl"],
                    axis: data_type["axis"],
                    flat_k: data_type["k"],
                    steep_k: data_type["k"],
                    steep_k_axis: data_type["axis"],
                    flat_e: data_type["e"],
                    steep_e: data_type["e"],
                    hvid: data_type["hvid"],
                    pupil_size: data_type["pupil_size"]
                };
            }else if(page=="confirm"){
                var data_type = {
                    // declaring data_type & defining exact range to be checked
                    sph: {min: -8, max:0},
                    cyl: {min: -6, max:0},
                    axis: {min: 1, max:180},
                    e: {min: 0.01, max:1},
                    k: {min: 7, max: 9},
                    hvid: {min: 8, max: 14},
                    pupil_size: {min: 4, max: 7},
                    bc: {min: -20, max: 20},
                    ac: {min: -30, max: 30},
                    ld: {min: 9.5, max: 12},
                    // ld: {min: 7, max: 12},
                    delta_target: {min: -4, max: 4}
                };
                var data_range = {
                    // defining range of each type of variable / parameters
                    // under definition on @data_type
                    sph: data_type["sph"],
                    cyl: data_type["cyl"],
                    axis: data_type["axis"],
                    flat_k: data_type["k"],
                    steep_k: data_type["k"],
                    steep_k_axis: data_type["axis"],
                    flat_e: data_type["e"],
                    steep_e: data_type["e"],
                    hvid: data_type["hvid"],
                    pupil_size: data_type["pupil_size"],
                    modify: {
                        flat: {
                            BOZR: data_type["bc"],
                            AC: data_type["ac"],
                            PC: data_type["ac"],
                        },
                        steep: {
                            BOZR: data_type["bc"],
                            AC: data_type["ac"],
                            PC: data_type["ac"],
                        },
                        BC_width: data_type["pupil_size"],
                        LD: data_type["ld"],
                        delta_target: data_type["delta_target"]
                    }
                };
            }
            if (check_value >= data_range[data_name]["min"] && check_value <= data_range[data_name]["max"] && check_value !=""){
                return true;
            } else {
                return false;
            }
        }

        function check_invalid_input(eye_param_obj, page){
            // using function check_range
            // RETURN a list of invalid inputs
                // if all valid, it would return an empty list
            var param_check = {};
            invalid_list = [];
            for (let [key, value] of Object.entries(eye_param_obj)){
                param_check[key] = check_range(key, value, page);
                if (param_check[key] == false) {
                    invalid_list.push(key);
                }
            };
            console.log("check_invalid_input:");
            console.log(param_check);
            return invalid_list;
        }
        
        function call_back_display(obj, eye_str, page){
            // console.log("Call Back Function:");
            // console.log(eye_str);
            console.log(page);
            console.log(obj);

            lens_param=obj;
            var eye_str_lc=eye_str.toLowerCase();

            var model=jQuery(".product_title.entry-title").text().split(" ");
            var material="Boston XO2";
            if(page=="cal"){
                // set parameter value
                var sph=jQuery('input[name="sph_'+eye_str_lc+'"]').val();
                var cyl=jQuery('input[name="cyl_'+eye_str_lc+'"]').val();
                var axis=jQuery('input[name="axis_'+eye_str_lc+'"]').val();
                var flat_k=jQuery('input[name="flat_k_'+eye_str_lc+'"]').val();
                var flat_k_d=Math.round(336/jQuery('input[name="flat_k_'+eye_str_lc+'"]').val());
                var steep_k=jQuery('input[name="steep_k_'+eye_str_lc+'"]').val();
                var steep_k_d=Math.round(336/jQuery('input[name="steep_k_'+eye_str_lc+'"]').val());
                var steep_k_axis=jQuery('input[name="steep_k_axis_'+eye_str_lc+'"]').val();
                var steep_k_axis_2=steep_k_axis - 90;
                if(steep_k_axis_2<=0){
                    steep_k_axis_2=steep_k_axis_2+180;
                    // console.log(steep_k_axis_2);
                }
                var flat_e=jQuery('input[name="flat_e_'+eye_str_lc+'"]').val();
                var steep_e=jQuery('input[name="steep_e_'+eye_str_lc+'"]').val();
                var hvid=jQuery('input[name="hvid_'+eye_str_lc+'"]').val();
                var pupil_size=jQuery('input[name="pupil_size_'+eye_str_lc+'"]').val();
                var design=lens_param["default"]["Design"];
                var bc_design=lens_param["default"]["BC Design"];

                // show parameter value
                jQuery("#rx_"+eye_str_lc).html(sph +" / " + cyl + " x " + axis);
                jQuery("#flat_k_"+eye_str_lc).html(flat_k+ " mm" + "(" +flat_k_d + " D)" + " @ " + steep_k_axis_2);
                jQuery("#flat_e_"+eye_str_lc).html(flat_e);
                jQuery("#steep_k_"+eye_str_lc).html(steep_k+ " mm" + "(" +steep_k_d + " D)" + " @ " + steep_k_axis);
                jQuery("#steep_e_"+eye_str_lc).html(steep_e);
                jQuery("#hvid_"+eye_str_lc).html(hvid);
                jQuery("#pupil_size_"+eye_str_lc).html(pupil_size);
                jQuery("#design_"+eye_str_lc).html(design);
                jQuery("#bc_design_"+eye_str_lc).html(bc_design);

                // hide parameter field
                if(bc_design=="Spherical"){
                    jQuery('input[name="bc_steep_'+eye_str_lc).parent().parent().hide();
                    jQuery('input[name="bc_flat_'+eye_str_lc).parent().find(".mdc-floating-label").html("BC");
                }
                if(design=="Spherical"){
                    jQuery('input[name="ac_steep_'+eye_str_lc).parent().parent().hide();
                    jQuery('input[name="ac_flat_'+eye_str_lc).parent().find(".mdc-floating-label").html("AC");
                    jQuery('input[name="pc_steep_'+eye_str_lc).parent().parent().hide();
                    jQuery('input[name="pc_flat_'+eye_str_lc).parent().find(".mdc-floating-label").html("PC");
                }

                // set hidden value
                var ld=lens_param["default"]["zone_width"]["LD"];
                var lp=lens_param["default"]["lens_power"];
                var thickness=lens_param["default"]["central_thickness"];
                var bc_width=Math.round(lens_param["default"]["zone_width"]["BOZR"]*2);
                var bc_flat=Math.round(lens_param["default"]["flat"]["BOZR"]*100)/100;
                var bc_steep=Math.round(lens_param["default"]["steep"]["BOZR"]*100)/100;
                var ac1_flat=Math.round(lens_param["default"]["flat"]["AC1"]*100)/100;
                var ac1_steep=Math.round(lens_param["default"]["steep"]["AC1"]*100)/100;
                var ac2_flat=Math.round(lens_param["default"]["flat"]["AC2"]*100)/100;
                var ac2_steep=Math.round(lens_param["default"]["steep"]["AC2"]*100)/100;
                var pc_flat=Math.round(lens_param["default"]["flat"]["PC"]*100)/100;
                var pc_steep=Math.round(lens_param["default"]["steep"]["PC"]*100)/100;

                // store hidden value if skip modification page
                if(eye_str_lc=="re"){
                    model_re=model[1];
                    material_re=material;
                    design_re=design;
                    bc_design_re=bc_design;
                    ld_re=ld;
                    lp_re=lp;
                    thickness_re=thickness;
                    bc_width_re=bc_width;
                    bc_flat_re=bc_flat;
                    bc_steep_re=bc_steep;
                    ac1_flat_re=ac1_flat;
                    ac1_steep_re=ac1_flat;
                    ac2_flat_re=ac1_flat;
                    ac2_steep_re=ac1_flat;
                    pc_flat_re=pc_flat;
                    pc_steep_re=pc_steep;
                }else if(eye_str_lc=="le"){
                    model_le=model[1];
                    material_le=material;
                    design_le=design;
                    bc_design_le=bc_design;
                    ld_le=ld;
                    lp_le=lp;
                    thickness_le=thickness;
                    bc_width_le=bc_width;
                    bc_flat_le=bc_flat;
                    bc_steep_le=bc_steep;
                    ac1_flat_le=ac1_flat;
                    ac1_steep_le=ac1_flat;
                    ac2_flat_le=ac1_flat;
                    ac2_steep_le=ac1_flat;
                    pc_flat_le=pc_flat;
                    pc_steep_le=pc_steep;
                }

                // show Confirmation parameter value if skip modification page
                jQuery("#model_"+eye_str_lc).html(model[1]);
                jQuery("#material_"+eye_str_lc).html(material);
                jQuery("#design2_"+eye_str_lc).html(design);
                jQuery("#ld_"+eye_str_lc).html(ld);
                jQuery("#lp_"+eye_str_lc).html(lp);
                jQuery("#thickness_"+eye_str_lc).html(thickness);
                jQuery("#bc_width_"+eye_str_lc).html(bc_width);
                jQuery("#bc_flat_"+eye_str_lc).html(bc_flat);
                jQuery("#bc_steep_"+eye_str_lc).html(bc_steep);
                jQuery("#ac1_flat_"+eye_str_lc).html(ac1_flat);
                jQuery("#ac1_steep_"+eye_str_lc).html(ac1_steep);
                jQuery("#ac2_flat_"+eye_str_lc).html(ac2_flat);
                jQuery("#ac2_steep_"+eye_str_lc).html(ac2_steep);
                jQuery("#pc_flat_"+eye_str_lc).html(pc_flat);
                jQuery("#pc_steep_"+eye_str_lc).html(pc_steep);

                // Replace default RE/LE Modification field with returning JSON data
                // if(eye_str_lc=="re"){
                //     bc_flat_re=bc_flat;
                //     bc_steep_re=bc_steep;
                //     ac_flat_re=ac1_flat;
                //     ac_steep_re=ac1_steep;
                //     pc_flat_re=pc_flat;
                //     pc_steep_re=pc_steep;
                //     bc_width_re=bc;
                //     ld_re=ld;
                // }else if(eye_str_lc=="le"){
                //     bc_flat_le=bc_flat;
                //     bc_steep_le=bc_steep;
                //     ac_flat_le=ac1_flat;
                //     ac_steep_le=ac1_steep;
                //     pc_flat_le=pc_flat;
                //     pc_steep_le=pc_steep;
                //     bc_width_le=bc;
                //     ld_le=ld;
                // }
            }else if(page=="confirm"){
                // set parameter value

                var design=lens_param["modified"]["Design"];
                if(eye_str_lc=="re"){
                    design_re=design;
                }else if(eye_str_lc=="le"){
                    design_le=design;
                }
                if(design_re=="Spherical"){
                    jQuery("#pa_re").val("spherical").change();
                }else if(design_re=="Toric"){
                    jQuery("#pa_re").val("toric").change();
                }
                if(design_le=="Spherical"){
                    jQuery("#pa_le").val("spherical").change();
                }else if(design_le=="Toric"){
                    jQuery("#pa_le").val("toric").change();
                }

                var ld=lens_param["modified"]["zone_width"]["LD"];
                var lp=lens_param["modified"]["lens_power"];
                var thickness=lens_param["modified"]["central_thickness"];

                var made_bc_flat="";
                var made_ac_flat="";
                var made_pc_flat="";
                var made_bc_steep="";
                var made_ac_steep="";
                var made_pc_steep="";
                if(lens_param["modified"]["modification"] != null){
                    if(lens_param["modified"]["modification"]["flat"] != null){
                        if(lens_param["modified"]["modification"]["flat"]["BOZR"] != null){
                            if(eye_str_lc=="re"){
                                modify_bc_flat_re=lens_param["modified"]["modification"]["flat"]["BOZR"];
                            }else{
                                modify_bc_flat_le=lens_param["modified"]["modification"]["flat"]["BOZR"];
                            }
                            made_bc_flat="BC(flat):"+lens_param["modified"]["modification"]["flat"]["BOZR"];
                        }
                        if(lens_param["modified"]["modification"]["flat"]["AC"] != null){
                            if(eye_str_lc=="re"){
                                modify_ac_flat_re=lens_param["modified"]["modification"]["flat"]["AC"];
                            }else{
                                modify_ac_flat_le=lens_param["modified"]["modification"]["flat"]["AC"];
                            }
                            made_ac_flat=" AC(flat):"+lens_param["modified"]["modification"]["flat"]["AC"];
                        }
                        if(lens_param["modified"]["modification"]["flat"]["PC"] != null){
                            if(eye_str_lc=="re"){
                                modify_pc_flat_re=lens_param["modified"]["modification"]["flat"]["PC"];
                            }else{
                                modify_pc_flat_le=lens_param["modified"]["modification"]["flat"]["PC"];
                            }
                            made_pc_flat=" PC(flat):"+lens_param["modified"]["modification"]["flat"]["PC"];
                        }
                    }
                    if(lens_param["modified"]["modification"]["steep"] != null){
                        if(lens_param["modified"]["modification"]["steep"]["BOZR"] != null){
                            if(eye_str_lc=="re"){
                                modify_bc_steep_re=lens_param["modified"]["modification"]["steep"]["BOZR"];
                            }else{
                                modify_bc_steep_le=lens_param["modified"]["modification"]["steep"]["BOZR"];
                            }
                            made_bc_steep=" BC(steep):"+lens_param["modified"]["modification"]["steep"]["BOZR"];
                        }
                        if(lens_param["modified"]["modification"]["steep"]["AC"] != null){
                            if(eye_str_lc=="re"){
                                modify_ac_steep_re=lens_param["modified"]["modification"]["steep"]["AC"];
                            }else{
                                modify_ac_steep_le=lens_param["modified"]["modification"]["steep"]["AC"];
                            }
                            made_ac_steep=" AC(steep):"+lens_param["modified"]["modification"]["steep"]["AC"];
                        }
                        if(lens_param["modified"]["modification"]["steep"]["PC"] != null){
                            if(eye_str_lc=="re"){
                                modify_pc_steep_re=lens_param["modified"]["modification"]["steep"]["PC"];
                            }else{
                                modify_pc_steep_le=lens_param["modified"]["modification"]["steep"]["PC"];
                            }
                            made_pc_steep=" PC(steep):"+lens_param["modified"]["modification"]["steep"]["PC"];
                        }
                    }
                    
                }
                var made=made_bc_flat+made_ac_flat+made_pc_flat+made_bc_steep+made_ac_steep+made_pc_steep;

                var bc_width=Math.round(lens_param["modified"]["zone_width"]["BOZR"]*2);
                var bc_flat=Math.round(lens_param["modified"]["flat"]["BOZR"]*100)/100;
                var bc_steep=Math.round(lens_param["modified"]["steep"]["BOZR"]*100)/100;
                var ac1_flat=Math.round(lens_param["modified"]["flat"]["AC1"]*100)/100;
                var ac1_steep=Math.round(lens_param["modified"]["steep"]["AC1"]*100)/100;
                var ac2_flat=Math.round(lens_param["modified"]["flat"]["AC2"]*100)/100;
                var ac2_steep=Math.round(lens_param["modified"]["steep"]["AC2"]*100)/100;
                var pc_flat=Math.round(lens_param["modified"]["flat"]["PC"]*100)/100;
                var pc_steep=Math.round(lens_param["modified"]["steep"]["PC"]*100)/100;

                // show parameter value
                jQuery("#model_"+eye_str_lc).html(model[1]);
                jQuery("#material_"+eye_str_lc).html(material);
                jQuery("#design2_"+eye_str_lc).html(design);
                jQuery("#ld_"+eye_str_lc).html(ld);
                jQuery("#lp_"+eye_str_lc).html(lp);
                jQuery("#thickness_"+eye_str_lc).html(thickness);
                jQuery("#made_"+eye_str_lc).html(made);
                jQuery("#bc_width_"+eye_str_lc).html(bc_width);
                jQuery("#bc_flat_"+eye_str_lc).html(bc_flat);
                jQuery("#bc_steep_"+eye_str_lc).html(bc_steep);
                jQuery("#ac1_flat_"+eye_str_lc).html(ac1_flat);
                jQuery("#ac1_steep_"+eye_str_lc).html(ac1_steep);
                jQuery("#ac2_flat_"+eye_str_lc).html(ac2_flat);
                jQuery("#ac2_steep_"+eye_str_lc).html(ac2_steep);
                jQuery("#pc_flat_"+eye_str_lc).html(pc_flat);
                jQuery("#pc_steep_"+eye_str_lc).html(pc_steep);
                
                // set value to hidden input
                jQuery('input[name="model_'+eye_str_lc+'"]').val(model[1]);
                jQuery('input[name="material_'+eye_str_lc+'"]').val(material);
                jQuery('input[name="design_'+eye_str_lc+'"]').val(design);
                jQuery('input[name="lp_'+eye_str_lc+'"]').val(lp);
                jQuery('input[name="thickness_'+eye_str_lc+'"]').val(thickness);
                jQuery('input[name="made_'+eye_str_lc+'"]').val(made);
                jQuery('input[name="bc_flat_'+eye_str_lc+'2"]').val(bc_flat);
                jQuery('input[name="bc_steep_'+eye_str_lc+'2"]').val(bc_steep);
                jQuery('input[name="ac1_flat_'+eye_str_lc+'"]').val(ac1_flat);
                jQuery('input[name="ac1_steep_'+eye_str_lc+'"]').val(ac1_steep);
                jQuery('input[name="ac2_flat_'+eye_str_lc+'"]').val(ac2_flat);
                jQuery('input[name="ac2_steep_'+eye_str_lc+'"]').val(ac2_steep);
                jQuery('input[name="pc_flat_'+eye_str_lc+'2"]').val(pc_flat);
                jQuery('input[name="pc_steep_'+eye_str_lc+'2"]').val(pc_steep);
            }
        }
        function get_lens_param(eye_obj, eye_str,invalid_list, page){
            console.log("JSON to Azure="+eye_str+":");
            console.log(eye_obj);
            // Validation of the input data
            if (invalid_list.length == 0){
                // if all data are valid
                // using AJAX to call the Azure Function 
                // to give the lens parameters

                jQuery.ajax({
                type: "POST",
                // url: "https://gvcaltest.azurewebsites.net/api/HttpTriggerEyeParamCal",
                url: "https://gvlenscal.azurewebsites.net/api/HttpTriggerLensCalculator",
                data: JSON.stringify(eye_obj),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    // Handle success response
                    console.log(page+":result_"+eye_str+"="+response);
                    // To display the returned Parameters
                    call_back_display(response, eye_str, page);
                    if(page=="cal"){
                        if(re_check=="Y"&&le_check=="Y"){
                            if(eye_str=="LE"){
                                le_ajax_check="Y";
                            }
                            if(eye_str=="RE"){
                                re_ajax_check="Y";
                            }
                            if(re_ajax_check=="Y"&&le_ajax_check=="Y"){
                                show_next_page(page);
                            }
                        }else if(re_check=="Y"&&le_check=="N"){
                            if(eye_str=="RE"){
                                re_ajax_check="Y";
                                show_next_page(page);
                            }
                        }else if(re_check=="N"&&le_check=="Y"){
                            if(eye_str=="LE"){
                                le_ajax_check="Y";
                                show_next_page(page);
                            }
                        }
                    }else if(page=="confirm"){
                        console.log("re="+re_check_m+"//le="+le_check_m+"//eye="+eye_str);
                        if(re_check_m=="Y"&&le_check_m=="Y"){
                            if(eye_str=="LE"){
                                le_ajax_check_m="Y";
                            }
                            if(eye_str=="RE"){
                                re_ajax_check_m="Y";
                            }
                            if(re_ajax_check_m=="Y"&&le_ajax_check_m=="Y"){
                                // console.log("re="+re_check_m+"//le="+le_check_m);
                                show_next_page(page);
                            }
                        }else if(re_check_m=="Y"&&le_check_m=="N"){
                            // console.log("re="+re_check_m+"//le="+le_check_m+"//eye="+eye_str);
                            if(eye_str=="RE"){
                                re_ajax_check_m="Y";
                                show_next_page(page);
                            }
                        }else if(re_check_m=="N"&&le_check_m=="Y"){
                            // console.log("re="+re_check_m+"//le="+le_check_m+"//eye="+eye_str);
                            if(eye_str=="LE"){
                                le_ajax_check_m="Y";
                                show_next_page(page);
                            }
                        }
                    }
                    
                },
                error: function (xhr, status, error) {
                    // Handle error response
                    console.log("error="+xhr.responseText);
                }
            })
            } else {
                if (eye_str == "RE"){
                    eye_text = "Right Eye";
                } else{
                    eye_text = "Left Eye";
                }
                console.log("Invalid Input of "+ eye_text +": " + invalid_list);
                error_msg+="\nInvalid Input of "+ eye_text +": " + invalid_list;
            };
        }
        // console.log("cbox_re="+cbox_re+"||cbox_re_m="+cbox_re_m);
        if(cbox_re=="Y"||cbox_re_m=="Y"){
            console.log("cbox_re="+cbox_re+"||cbox_re_m="+cbox_re_m);
            //Running the lens calculation for RE
            if(page=="cal"){
                invalid_input_list_re = check_invalid_input(RE, page);
            }
            //console.log("invalid_input_list_re : ", invalid_input_list_re);
            RE_lens_param = get_lens_param(RE, "RE", invalid_input_list_re, page);
            // console.log("RE Lens Param : ", RE_lens_param);
        }
        // console.log("cbox_le="+cbox_le+"||cbox_le_m="+cbox_le_m);
        if(cbox_le=="Y"||cbox_le_m=="Y"){
            console.log("cbox_le="+cbox_le+"||cbox_le_m="+cbox_le_m);
            //Running the lens calculation for LE
            if(page=="cal"){
                invalid_input_list_le = check_invalid_input(LE, page);
            }
            LE_lens_param = get_lens_param(LE, "LE", invalid_input_list_le, page);
            // console.log(LE_lens_param);
        }
    }
}