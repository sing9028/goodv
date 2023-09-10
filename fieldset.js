// set order text
jQuery('.single-product.woocommerce button.button[name="add-to-cart"]').html("Order Lens");

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
// set all tab sequence of all modiification RE field
jQuery('input[name="bozr_flat_re"]').attr("tabindex", "24");
jQuery('input[name="bozr_steep_re"]').attr("tabindex", "25");
jQuery('input[name="ac_flat_re"]').attr("tabindex", "26");
jQuery('input[name="ac_steep_re"]').attr("tabindex", "27");
jQuery('input[name="pc_flat_re"]').attr("tabindex", "28");
jQuery('input[name="pc_steep_re"]').attr("tabindex", "29");
jQuery('input[name="target_re"]').attr("tabindex", "30");
jQuery('input[name="bcw_re"]').attr("tabindex", "31");
jQuery('input[name="diameter_re"]').attr("tabindex", "32");
jQuery('input[name="remarks_re"]').attr("tabindex", "33");
// set all tab sequence of all modiification LE field
jQuery('input[name="bozr_flat_le"]').attr("tabindex", "34");
jQuery('input[name="bozr_steep_le"]').attr("tabindex", "35");
jQuery('input[name="ac_flat_le"]').attr("tabindex", "36");
jQuery('input[name="ac_steep_le"]').attr("tabindex", "37");
jQuery('input[name="pc_flat_le"]').attr("tabindex", "38");
jQuery('input[name="pc_steep_le"]').attr("tabindex", "39");
jQuery('input[name="target_le"]').attr("tabindex", "40");
jQuery('input[name="bcw_le"]').attr("tabindex", "41");
jQuery('input[name="diameter_le"]').attr("tabindex", "42");
jQuery('input[name="remarks_le"]').attr("tabindex", "43");
// set all tab sequence of confirm button
jQuery('#btn_confirm').attr("tabindex", "44");
// set all tab sequence of order button
jQuery('.single-product.woocommerce button.button[name="add-to-cart"]').attr("tabindex", "45");

// set required textbox checking
var text_patient_id="N";
var text_patient_name="N";

// After RE/LE checkbox clicked
var cbox_re="Y";
var cbox_le="Y";
var re_all_input='.thwepo-extra-options.thwepo_simple.order input[type="number"][name*="_re"]';
var le_all_input='.thwepo-extra-options.thwepo_simple.order input[type="number"][name*="_le"]';
var re_all_input_check="Y";
var le_all_input_check="Y";
var re_check="N";
var le_check="N";
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

// After Calculate Lens button clicked
jQuery("#btn_cal").on( "click", function() {
    // console.log("cbox_re="+cbox_re+"||cbox_le="+cbox_le);
    var error_msg="";
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
        jQuery(re_all_input).each(function() {
            if(jQuery(this).val() == ""){
                re_all_input_check="N";
            }
        });
        if(re_all_input_check=="N"){
            error_msg+="\nAll RE field is required";
        }else if(re_all_input_check=="Y"){
            re_check="Y";
        }
    }
    if(cbox_le=="Y"){
        jQuery(le_all_input).each(function() {
            if(jQuery(this).val() == ""){
                le_all_input_check="N";
            }
        });
        if(le_all_input_check=="N"){
            error_msg+="\nAll LE field is required";
        }else if(le_all_input_check=="Y"){
            le_check="Y";
        }
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
    if(error_msg != ""){
        jQuery(".error_msg").html(error_msg);
    }
    // console.log(cbox_re);
    // console.log(re_all_input_check);
    // console.log(re_check);
    // console.log(cbox_le);
    // console.log(le_all_input_check);
    // console.log(le_check);
    if(text_patient_id=="Y"&&text_patient_name=="Y"&&(re_check=="Y"||le_check=="Y")){
        jQuery(".thwepo-extra-options.thwepo_simple.patient").hide();
        jQuery(".thwepo-extra-options.thwepo_simple.order").hide();
        jQuery("#btn_cal").hide();
        jQuery("#patient_id_val").html(jQuery('input[name="patient_id"]').val());
        jQuery("#patient_name_val").html(jQuery('input[name="patient_name"]').val());
        jQuery("#modification").show();
        jQuery(".thwepo-extra-options.thwepo_simple.modiification0").show();
        jQuery(".thwepo-extra-options.thwepo_simple.modiification").show();
        jQuery(".thwepo-extra-options.thwepo_simple.modiification2").show();
        jQuery([document.documentElement, document.body]).animate({
            scrollTop: $("#modification").offset().top-150
        }, 500);
        orderClick("cal",cbox_re,cbox_le);
    }
});

// After Modiification RE/LE checkbox clicked
var cbox_re_m="N";
var cbox_le_m="N";
var re_all_input_m='.thwepo-extra-options.thwepo_simple.modiification input[type="number"][name*="_re"]';
var le_all_input_m='.thwepo-extra-options.thwepo_simple.modiification input[type="number"][name*="_le"]';
var re_all_input2_m='.thwepo-extra-options.thwepo_simple.modiification2 input[name*="_re"]';
var le_all_input2_m='.thwepo-extra-options.thwepo_simple.modiification2 input[name*="_le"]';
var re_all_input_check_m="N";
var le_all_input_check_m="N";
jQuery(re_all_input_m).each(function() {
    // console.log("cbox_eye unchecked");
    jQuery(this).attr('disabled', 'disabled').val("");
    jQuery(this).parent().addClass("mdc-text-field--disabled");
    jQuery(this).parent().find(".mdc-notched-outline--upgraded").removeClass("mdc-notched-outline--notched");
    jQuery(this).parent().find(".mdc-floating-label").removeClass("mdc-floating-label--float-above");
    jQuery(this).parent().find(".mdc-notched-outline__notch").addClass("width-auto");
});
jQuery(le_all_input_m).each(function() {
    // console.log("cbox_eye unchecked");
    jQuery(this).attr('disabled', 'disabled').val("");
    jQuery(this).parent().addClass("mdc-text-field--disabled");
    jQuery(this).parent().find(".mdc-notched-outline--upgraded").removeClass("mdc-notched-outline--notched");
    jQuery(this).parent().find(".mdc-floating-label").removeClass("mdc-floating-label--float-above");
    jQuery(this).parent().find(".mdc-notched-outline__notch").addClass("width-auto");
});
jQuery(re_all_input2_m).each(function() {
    // console.log("cbox_eye unchecked");
    jQuery(this).attr('disabled', 'disabled').val("");
    jQuery(this).parent().addClass("mdc-text-field--disabled");
    jQuery(this).parent().find(".mdc-notched-outline--upgraded").removeClass("mdc-notched-outline--notched");
    jQuery(this).parent().find(".mdc-floating-label").removeClass("mdc-floating-label--float-above");
    jQuery(this).parent().find(".mdc-notched-outline__notch").addClass("width-auto");
});
jQuery(le_all_input2_m).each(function() {
    // console.log("cbox_eye unchecked");
    jQuery(this).attr('disabled', 'disabled').val("");
    jQuery(this).parent().addClass("mdc-text-field--disabled");
    jQuery(this).parent().find(".mdc-notched-outline--upgraded").removeClass("mdc-notched-outline--notched");
    jQuery(this).parent().find(".mdc-floating-label").removeClass("mdc-floating-label--float-above");
    jQuery(this).parent().find(".mdc-notched-outline__notch").addClass("width-auto");
});
jQuery(".cbox_eye_m input").on( "click", function() {
    if(jQuery(this).attr("id") == "checkbox_re_m"){
        var number_name_m=jQuery(re_all_input_m);
        var number_name2_m=jQuery(re_all_input2_m);
        if(cbox_re_m=="Y"){
            cbox_re_m="N";
        }else{
            cbox_re_m="Y";
        }
    }else{
        var number_name_m=jQuery(le_all_input_m);
        var number_name2_m=jQuery(le_all_input2_m);
        if(cbox_le_m=="Y"){
            cbox_le_m="N";
        }else{
            cbox_le_m="Y";
        }
    }
    var cbox_m=jQuery(this);
    jQuery(number_name_m).each(function() {
        if(cbox_m.is(':checked')){
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
    jQuery(number_name2_m).each(function() {
        if(cbox_m.is(':checked')){
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

// After Confirm Parameters button clicked
jQuery("#btn_confirm").on( "click", function() {
    jQuery(".lens_val").hide();
    jQuery(".thwepo-extra-options.thwepo_simple.modiification0").hide();
    jQuery(".thwepo-extra-options.thwepo_simple.modiification").hide();
    jQuery(".thwepo-extra-options.thwepo_simple.modiification2").hide();
    jQuery("#confirmation").show();
    jQuery(".confirm_price").html(jQuery(".price .amount bdi").html());
    jQuery('.single-product.woocommerce button.button[name="add-to-cart"]').show();
    jQuery([document.documentElement, document.body]).animate({
        scrollTop: $("#confirmation").offset().top-200
    }, 500);
    orderClick("confirm",cbox_re,cbox_le);
});

// jQuery(".d-none").each(function() {
//     jQuery(this).parent().parent().parent().parent().hide();
// });

function orderClick(page,cbox_re,cbox_le) {
    //defining a list of all parameters
    param_list = ["sph","cyl","axis","flat_k","steep_k","steep_k_axis","flat_e","steep_e","hvid","pupil_size"]
    //Acquiring data from the form

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

    function check_range(data_name, check_value){
        // checking if input data is in a reasonable range or not
        var data_type = {
            // declaring data_type & defining exact range to be checked
            sph: {min: -8, max:0},
            cyl: {min: -6, max:0},
            axis: {min: 1, max:180},
            e: {min: 0.01, max:1},
            k: {min: 7, max: 9},
            hvid: {min: 8, max: 14},
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

        if (check_value >= data_range[data_name]["min"] && check_value <= data_range[data_name]["max"] && check_value !=""){
            return true;
        } else {
            return false;
        }
    }

    function check_invalid_input(eye_param_obj){
        // using function check_range
        // RETURN a list of invalid inputs
            // if all valid, it would return an empty list
        var param_check = {};
        invalid_list = [];
        for (let [key, value] of Object.entries(eye_param_obj)){
            param_check[key] = check_range(key, value);
            if (param_check[key] == false) {
                invalid_list.push(key);
            }
        };
        // console.log(param_check);
        return invalid_list;
    }
    
    function call_back_display(obj, eye_str, page){
        // console.log("Call Back Function:");
        // console.log(eye_str);
        console.log(page);
        console.log(obj);

        lens_param = obj;
        var eye_str_lc = eye_str.toLowerCase();

        if(page=="cal"){
            // set parameter value
            var design = lens_param["default"]["Design"];
            // var bozr_flat = Math.round(lens_param["default"]["flat"]["BOZR"]*100)/100;
            // var bozr_steep = Math.round(lens_param["default"]["steep"]["BOZR"]*100)/100;
            // var ac1_flat = Math.round(lens_param["default"]["flat"]["AC1"]*100)/100;
            // var ac1_steep = Math.round(lens_param["default"]["steep"]["AC1"]*100)/100;
            // var ac2_flat = Math.round(lens_param["default"]["flat"]["AC2"]*100)/100;
            // var ac2_steep = Math.round(lens_param["default"]["steep"]["AC2"]*100)/100;
            // var pc_flat = Math.round(lens_param["default"]["flat"]["PC"]*100)/100;
            // var pc_steep = Math.round(lens_param["default"]["steep"]["PC"]*100)/100;
            var sph = jQuery('input[name="sph_'+eye_str_lc+'"]').val();
            var cyl = jQuery('input[name="cyl_'+eye_str_lc+'"]').val();
            var axis = jQuery('input[name="axis_'+eye_str_lc+'"]').val();
            var flat_k = jQuery('input[name="flat_k_'+eye_str_lc+'"]').val();
            var steep_k = jQuery('input[name="steep_k_'+eye_str_lc+'"]').val();
            var steep_k_axis = jQuery('input[name="steep_k_axis_'+eye_str_lc+'"]').val();
            var steep_k_axis_2=steep_k_axis - 90;
            if(steep_k_axis_2<=0){
                steep_k_axis_2=steep_k_axis_2+180;
                // console.log(steep_k_axis_2);
            }
            var flat_e = jQuery('input[name="flat_e_'+eye_str_lc+'"]').val();
            var steep_e = jQuery('input[name="steep_e_'+eye_str_lc+'"]').val();
            var hvid = jQuery('input[name="hvid_'+eye_str_lc+'"]').val();
            var pupil_size = jQuery('input[name="pupil_size_'+eye_str_lc+'"]').val();
            
            // show parameter value
            jQuery("#rx_"+eye_str_lc).html(sph +" / " + cyl + " x " + axis);
            jQuery("#flat_k_"+eye_str_lc).html(flat_k + " @ " + steep_k_axis_2);
            jQuery("#flat_e_"+eye_str_lc).html(flat_e);
            jQuery("#steep_k_"+eye_str_lc).html(steep_k + " @ " + steep_k_axis);
            jQuery("#steep_e_"+eye_str_lc).html(steep_e);
            jQuery("#hvid_"+eye_str_lc).html(hvid);
            jQuery("#pupil_size_"+eye_str_lc).html(pupil_size);
            jQuery("#design_"+eye_str_lc).html(design);
        }else if(page=="confirm"){
            // set parameter value
            var model = jQuery(".product_title.entry-title").text().split(" ");
            var design = lens_param["modified"]["Design"];
            var bozr_flat = Math.round(lens_param["modified"]["flat"]["BOZR"]*100)/100;
            var bozr_steep = Math.round(lens_param["modified"]["steep"]["BOZR"]*100)/100;
            var ac1_flat = Math.round(lens_param["modified"]["flat"]["AC1"]*100)/100;
            var ac1_steep = Math.round(lens_param["modified"]["steep"]["AC1"]*100)/100;
            var ac2_flat = Math.round(lens_param["modified"]["flat"]["AC2"]*100)/100;
            var ac2_steep = Math.round(lens_param["modified"]["steep"]["AC2"]*100)/100;
            var pc_flat = Math.round(lens_param["modified"]["flat"]["PC"]*100)/100;
            var pc_steep = Math.round(lens_param["modified"]["steep"]["PC"]*100)/100;

            // show parameter value
            jQuery("#model_"+eye_str_lc).html(model[1]);
            // jQuery("#material_"+eye_str_lc).html("Boston XO2");
            jQuery("#design2_"+eye_str_lc).html(design);
            jQuery("#bozr_flat_"+eye_str_lc).html(bozr_flat);
            jQuery("#bozr_steep_"+eye_str_lc).html(bozr_steep);
            jQuery("#ac1_flat_"+eye_str_lc).html(ac1_flat);
            jQuery("#ac1_steep_"+eye_str_lc).html(ac1_steep);
            jQuery("#ac2_flat_"+eye_str_lc).html(ac2_flat);
            jQuery("#ac2_steep_"+eye_str_lc).html(ac2_steep);
            jQuery("#pc_flat_"+eye_str_lc).html(pc_flat);
            jQuery("#pc_steep_"+eye_str_lc).html(pc_steep);

            // set value to hidden input
            jQuery('input[name="design_'+eye_str_lc+'"]').val(design);
            jQuery('input[name="bozr_flat_'+eye_str_lc+'"]').val(bozr_flat);
            jQuery('input[name="bozr_steep_'+eye_str_lc+'"]').val(bozr_steep);
            jQuery('input[name="ac1_flat_'+eye_str_lc+'"]').val(ac1_flat);
            jQuery('input[name="ac1_steep_'+eye_str_lc+'"]').val(ac1_steep);
            jQuery('input[name="ac2_flat_'+eye_str_lc+'"]').val(ac2_flat);
            jQuery('input[name="ac2_steep_'+eye_str_lc+'"]').val(ac2_steep);
            jQuery('input[name="pc_flat_'+eye_str_lc+'"]').val(pc_flat);
            jQuery('input[name="pc_steep_'+eye_str_lc+'"]').val(pc_steep);
        }
        
        // if (lens_param["Design"] == "Toric"){
        // // if the lens design if toric, then display the parameters according to steep K
        //     jQuery('input[name="bozr_steep_'+eye_str_lc+'"]').val(Math.round(lens_param["steep"]["BOZR"]*100)/100);
        //     jQuery('input[name="rc_steep_'+eye_str_lc+'""]').val(Math.round(lens_param["steep"]["RC1"]*100)/100);
        //     jQuery('input[name="ac1_steep_'+eye_str_lc+'""]').val(Math.round(lens_param["steep"]["AC1"]*100)/100);
        //     jQuery('input[name="ac2_steep_'+eye_str_lc+'""]').val(Math.round(lens_param["steep"]["AC2"]*100)/100);
        //     jQuery('input[name="pc_steep_'+eye_str_lc+'""]').val(Math.round(lens_param["steep"]["PC"]*100)/100);
        // } else {
        //     jQuery('input[name="bozr_steep_'+eye_str_lc+'"]').val("");
        //     jQuery('input[name="rc_steep_'+eye_str_lc+'"]').val("");
        //     jQuery('input[name="ac1_steep_'+eye_str_lc+'"]').val("");
        //     jQuery('input[name="ac2_steep_'+eye_str_lc+'"]').val("");
        //     jQuery('input[name="pc_steep_'+eye_str_lc+'"]').val("");
        // }
    }

    function get_lens_param(eye_obj, eye_str,invalid_list, page){
        // console.log(eye_str);
        // console.log(eye_obj);
        // Validation of the input data
        if (invalid_list.length == 0){
            // if all data are valid
            // using AJAX to call the Azure Function 
            // to give the lens parameters

            $.ajax({
            type: "POST",
            // url: "https://gvcaltest.azurewebsites.net/api/HttpTriggerEyeParamCal",
            url: "https://gvlenscal.azurewebsites.net/api/HttpTriggerLensCalculator",
            data: JSON.stringify(eye_obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                // Handle success response
                // document.getElementById("result_"+eye_str).innerHTML = "Response: " + JSON.stringify(response);
                console.log("result_"+eye_str+"="+response);
                // To display the returned Parameters
                call_back_display(response, eye_str, page);                        
            },
            error: function (xhr, status, error) {
                // Handle error response
                console.log("error="+xhr.responseText);
                // document.getElementById("result_"+eye_str).innerHTML = "Error: " + xhr.responseText;
            }
        })
        } else {
            if (eye_str == "RE"){
                eye_text = "Right Eye";
            } else{
                eye_text = "Left Eye";
            }
            console.log("Invalid Input of "+ eye_text +": " + invalid_list);
            // document.getElementById("result_"+eye_str).innerHTML = "Invalid Input of "+ eye_text +": " + invalid_list;
        };
    }

    if(cbox_re=="Y"){
        //Running the lens calculation for RE
        invalid_input_list_re = check_invalid_input(RE);
        //console.log("invalid_input_list_re : ", invalid_input_list_re);
        RE_lens_param = get_lens_param(RE, "RE", invalid_input_list_re, page);
        // console.log("RE Lens Param : ", RE_lens_param);
    }
    
    if(cbox_le=="Y"){
        //Running the lens calculation for LE
        invalid_input_list_le = check_invalid_input(LE);
        LE_lens_param = get_lens_param(LE, "LE", invalid_input_list_le, page);
        // console.log(LE_lens_param);
    }
}