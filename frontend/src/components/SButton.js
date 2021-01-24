/* Argumenty:
 * eventBus: obiekt eventBusa służący do komunikacji. Musi być przekazany
 *           z zewnątrz, gdyż istnieje tylko jedna, globalna jego kopia
 *           i każdy komponent musi używać tej jednej kopii, żeby każdy
 *           nadawał na tym samym event busie.
 * eventName: event który ma być wyemitowany w przypadku kliknięcia,
 *           jest to string
 * buttonText: tekst jaki ma być wyświetlony na buttonie, również jako string
 * buttonVariant: wariant buttona (primary/secondary/tertiary), który decyduje
 *          o jego wyglądzie, również jako string
 */

function SButton (eventBus, eventName, buttonVariant, buttonText) {

  const buttonHTMLElement = document.createElement('button');

  const primaryColor = '#41b3a3';
  const primaryDarkerColor = '#1a9c8a';
  const whiteColor = '#FFFFFF';
  const grayColor = '#bababa'; 


  /* Tutaj podłączamy funkcję emitującą event przekazany w argumencie funkcji SButton() */
  buttonHTMLElement.onclick = () => {
    if (buttonHTMLElement.disabled === false) {
      eventBus.emit(eventName)
    }
  };

  /* Za pomocą instrukcji warunkowej sprawdzamy jaki wariant został podany jako argument */

  const buttonStyle = buttonHTMLElement.style;

  switch(buttonVariant) {
    case 'primary':
      buttonStyle["background-color"] = primaryColor;
      buttonStyle["color"] = whiteColor;
      buttonStyle["border"] = `1px solid ${primaryColor}`;
      buttonHTMLElement.onmouseenter = () => {
        if (!buttonHTMLElement.disabled) {
          buttonStyle["background-color"] = primaryDarkerColor;
        }
        
      }
      buttonHTMLElement.onmouseleave = () => {
        if (!buttonHTMLElement.disabled) {
          buttonStyle["background-color"] = primaryColor;
        }
      }

      Object.defineProperty(buttonHTMLElement, 'disabled', {
        set: (newvalue) => {
          if (newvalue===false) {
            buttonStyle["background-color"] = primaryColor;
            buttonStyle["color"] = whiteColor;
            buttonStyle["border"] = `1px solid ${primaryColor}`;
          } else {
            buttonStyle["background-color"] = whiteColor;
            buttonStyle["color"] = grayColor;
            buttonStyle["border"] = `1px solid ${grayColor}`;
          }
        }
      });
      break;

    case 'secondary':
      buttonStyle["background-color"] = whiteColor;
      buttonStyle["color"] = primaryColor;
      buttonStyle["border"] = `1px solid ${primaryColor}`;
      buttonHTMLElement.onmouseenter = () => {
        buttonStyle["color"] = primaryDarkerColor;
        buttonStyle["border"] = `1px solid ${primaryDarkerColor}`;
      }
      buttonHTMLElement.onmouseleave = () => {
        buttonStyle["color"] = primaryColor;
        buttonStyle["border"] = `1px solid ${primaryColor}`;
      }
      Object.defineProperty(buttonHTMLElement, 'disabled', {
        set: (newvalue) => {
          if (newvalue===false) {
            buttonStyle["background-color"] = whiteColor;
            buttonStyle["color"] = primaryColor;
            buttonStyle["border"] = `1px solid ${primaryColor}`;
          } else {
            buttonStyle["background-color"] = whiteColor;
            buttonStyle["color"] = grayColor;
            buttonStyle["border"] = `1px solid ${grayColor}`;
          }
        }
      });
      break;

    case 'tertiary':
      buttonStyle["color"] = primaryColor;
      buttonStyle["border"] = `none`;
      buttonStyle["background"] = `none`;
      buttonHTMLElement.onmouseenter = () => {
        buttonStyle["color"] = primaryDarkerColor;  
      }
      buttonHTMLElement.onmouseleave = () => {
        buttonStyle["color"] = primaryColor;
      }
      Object.defineProperty(buttonHTMLElement, 'disabled', {
        set: (newvalue) => {
          if (newvalue===false) {   
            buttonStyle["color"] = primaryColor;
          } else {
            buttonStyle["color"] = grayColor;
          }
        }
      });
      break;
    }

    /* Dodaj style wspólne dla wszystkich wariantów */
    //buttonStyle['border'] = '1px'
    buttonStyle['border-radius'] = '6px';
    buttonStyle['outline'] = 'none';
    buttonStyle['box-shadow'] = 'none';
    buttonStyle['margin'] = '0.5rem';
   
    /* Jako tekst na buttonie ustaw wartość parametru buttonText */ 
    buttonHTMLElement.textContent = buttonText;

    /* Na koniec zwracamy nasz scustomizowany, przygotowany */
  return buttonHTMLElement;
}

export default SButton;
