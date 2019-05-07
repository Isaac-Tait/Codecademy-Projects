class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    /* Under the Nurse constructor(), add a getter that returns the value saved to the Nurse instance’s _certifications. */
    get certifications() {
      return this._certifications;
    }
    /* Add a method called addCertification under the certifications getter.
  
  The method should accept one input (newCertification). Inside the method, use the push method to add the newCertification value to the nurse’s certifications array. */
    addCertification(newCertification) {
      this._certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  
  /* At the bottom of main.js call the .addCertification() method on nurseOlynyk with a parameter of 'Genetics'. */
  nurseOlynyk.addCertification('Genetics');
  
  console.log(nurseOlynyk.remainingVacationDays);
  
  /* Log the value saved to the certifications property of nurseOlynyk. */
  console.log(nurseOlynyk.certifications);