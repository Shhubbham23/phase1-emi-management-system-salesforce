import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';  

export default class ServiceFormPhase1 extends LightningElement {

    //create formadata object 
    @track formData = {
        fullname: "",
        phone: "",
        serviceType: ""
    }

    // Options to show the services
    serviceOptions = [
        { label: "Electrician", value: "Electrician" },
        { label: "Plumber", value: "Plumber" },
        { label: "Gardner", value: "Gardner" },
    ]
    serviceType = '';

    // error flags
    showNameError = false;
    showPhoneError = false;
    showServiceError = false;

    // handle input change
    handleInputChange(event) {
        const field = event.target.name;
        const value = event.target.value;

        // handling input field
        this.formData[field] = value;

        // handling service type/combobox field
        if (field === "serviceType") {
            this.serviceType = value;
        }

        // handling errors
        if (field === "fullName") this.showNameError = false;
        if (field === "phone") this.showPhoneError = false;
        if (field === "serviceType") this.showServiceError = false;
    }

    submitRequest() {
        // lets assume the form is valid 
        let isValid = true;

        // clear old error mesg first so new validation starts fresh
        this.showNameError = false;
        this.showPhoneError = false;
        this.showServiceError = false;

        // validate each required field
        if (!this.formData.fullname.trim()) {
            this.showNameError = true;
            isValid = false;
        }

        if (!this.formData.phone.trim()) {
            this.showPhoneError = true;
            isValid = false;
        }

        if (!this.formData.serviceType.trim()) {
            this.showServiceError = true;
            isValid = false;
        }

        // i dont go futher is there is an error
        if (!isValid) return;

        // if Form is valid then Show success toast
        const toast = new ShowToastEvent({
            title: "Success",
            message: "Successfully Submitted",
            variant: "success",
        });
        this.dispatchEvent(toast);

        // reset form fields
        this.formData = {
            fullname: "",
            phone: "",
            serviceType: ""
        }

        // clear the visual input from ui
        this.template.querySelectorAll('lightning-input, lightning-combobox').forEach(field => {field.value = ''});
    }
}