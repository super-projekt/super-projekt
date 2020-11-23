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

import { read } from "@popperjs/core";

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
     
      buttonHTMLElement.onmouseenter = () => {
        buttonStyle["background-color"] = primaryDarkerColor;
      }
   
      buttonHTMLElement.onmouseleave = () => {
        buttonStyle["background-color"] = primaryColor;
      }

      break;

    case 'secondary':
      buttonStyle["background-color"] = whiteColor;
      buttonStyle["color"] = primaryColor;
      buttonStyle["border-color"] = primaryColor; 

      buttonHTMLElement.onmouseenter = () => {
        buttonStyle["color"] = primaryDarkerColor;
         buttonStyle["border-color"] = primaryDarkerColor;
      }
   
      buttonHTMLElement.onmouseleave = () => {
        buttonStyle["color"] = primaryColor;
        buttonStyle["border-color"] = primaryColor;
      }
     
      break;

    case 'tertiary':
      buttonStyle["color"] = primaryColor;

      buttonHTMLElement.onmouseenter = () => {
        buttonStyle["color"] = primaryDarkerColor;
        
      }
   
      buttonHTMLElement.onmouseleave = () => {
        buttonStyle["color"] = primaryColor;
    
      }
      break;


  }
  /* Dodaj style wspólne dla wszystkich wariantów */

  /* buttonStyle['padding'] = 'x,y,z,b' */

  buttonHTMLElement.textContent = buttonText;

 

  /* Na koniec zwracamy nasz scustomizowany, przygotowany */
  return buttonHTMLElement;
}

export default SButton;
