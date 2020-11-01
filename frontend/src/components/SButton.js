import EventBus from '../EventBus';

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

  /* Na początek tworzymy generyczny, zwyczajny HTML button */
  const buttonHTMLElement = document.createElement('button');

  const primaryColor = '#FF0000';
  const primaryDarkerColor = '#?'; // TODO uzupełnij kolor
  const whiteColor = '#FFFFFF';
  const grayColor = '#?'; // TODO uzupełnij kolor

  /* Następnie ustawiamy treść tekstu buttona na wartość podaną jako argument buttonText */
  // TODO

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
      /* Dodaj style odpowiednie dla wariantu primary */
      // Przykład dodawania styli css w javascripcie
      buttonStyle["background-color"] = primaryColor;
      // TODO
      break;
    case 'secondary':
      /* Dodaj style odpowiednie dla wariantu secondary */
      // TODO
      break;
    case 'tertiary':
      /* Dodaj style odpowiednie dla wariantu tertiary */
      // TODO
      break;
  }
  /* Dodaj style wspólne dla wszystkich wariantów,
  w tym te odpowiadające za efekty :hover, :active, disabled */
  // TODO



  /* Na koniec zwracamy nasz scustomizowany, przygotowany */
  return buttonHTMLElement;
}

export default SButton;
