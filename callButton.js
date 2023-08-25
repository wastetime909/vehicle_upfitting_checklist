function createModalButtonsFromArray(stringsArray) {
    const buttonContainer = document.getElementById('buttonContainer');
  
    stringsArray.forEach((stringValue, index) => {
      const newButton = document.createElement('button');
      const jsFriendlyStringValue = stringValue
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/(^|_)([a-z])/g, (match, p1, p2) => p2.toUpperCase());
      newButton.id = `button${index}`;
      newButton.className = 'open-modal-button';
      newButton.setAttribute('data-image', `${jsFriendlyStringValue}.jpg`);
      newButton.setAttribute('data-text', `${jsFriendlyStringValue}`);
      newButton.textContent = `${stringValue}`;
      newButton.setAttribute('class', `btn btn-light`);
  
      newButton.addEventListener('click', function() {
        const imageSource = this.getAttribute('data-image');
        const textContentVariable = this.getAttribute('data-text');
  
        modalImage.src = `images/${imageSource}`;
        modalText.textContent = window[textContentVariable];
        
        modal.style.display = 'flex';
      });
  
      buttonContainer.appendChild(newButton);
    });
  }
  

  