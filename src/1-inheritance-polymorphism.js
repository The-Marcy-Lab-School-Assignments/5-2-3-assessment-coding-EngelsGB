class Phone {
  constructor(num) {
    this.phoneNumber = num;
    this.contacts = [];
  }
  makeCall(nameOrNum) {
    const contact = this.contacts.find(({name, phoneNumber}) => name === nameOrNum || phoneNumber === nameOrNum);
    if (contact) return `Calling ${contact.name}...`;
    else if (nameOrNum.length === 10) return `Calling ${nameOrNum}...`;
    return 'Invalid';
  }
  addContact(contact) {
    if ((contact.name && contact.phoneNumber) && contact.phoneNumber.length === 10) {
      this.contacts.push(contact);
      return `${contact.name} added.`;
    }
    return 'Invalid';
  }
  removeContact(contactName) {
    const contactIndex = this.contacts.findIndex(({name}) => name === contactName);
    if (contactIndex === -1) return 'Contact not found.';
    this.contacts.splice(contactIndex, 1);
    return `${contactName} removed.`;
  }
}

class AppleIPhone extends Phone {
  constructor(num, model) {
    super(num);
    this.model = model;
  }
  sendIMessage(phone, msg) {
    if (phone instanceof AppleIPhone) return `Message: ${msg} - sent from ${this.model}`;
    return 'Message could not be sent.';
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
