# Super Projekt - najlepsza TODO apka prosto znad Wisły

## O projekcie
 - task board: https://app.asana.com/0/1166934573102385/board
 - Tech Stack:
  - Frontend
    - Bootstrap https://getbootstrap.com/docs/4.0/getting-started/introduction/
  - API:
    - Python + Flask https://flask.palletsprojects.com/en/1.1.x/quickstart/
  - Database:
    - MongoDB https://www.mongodb.com/

## Konwencje i nazewnictwo [In progress]:
 - nazewnictwo branchów na gicie:
   - *feature/xyz*: dla nowych rzeczy, nowych funkcjonalności/komponentów/aspektów aplikacji
   - *fix/xyz*: kiedy naprawiamy/poprawiamy istniejącą funkcjonalność
   - *refactor/xyz*: kiedy nie zmieniamy funkcjonalności, a jedynie sprzątamy/porządkujemy/upiększamy kod

## Git

**1**. Jeśli nie masz jeszcze gitowego repository projektu:

    git clone https://github.com/twardzikf/super-projekt.git
    cd super-projekt

## MongoDB

**1**. Zainstaluj i uruchom bazę danych MongoDB na swoim systemie:
  - Windows: https://www.mongodb.com/try/download/community
  - Linux Manjaro:

    (https://stackoverflow.com/questions/59455725/install-mongodb-on-manjaro)
        git clone https://aur.archlinux.org/mongodb-bin.git
        cd mongodb-bin
        makepkg -si
        systemctl start mongodb
    Opcjonalnie, poniższa komenda może być dodatkowo potrzebna:

        systemctl enable mongodb

    Żeby uruchomić mongo (jeśli chcemy działać na nim w terminalu):

        mongo

**2**. Oficjalna strona do pobrania MongoDB Compass (MongoDB GUI):
	https://www.mongodb.com/try/download/compass

	Nie ma wersji na Manjaro, ja znalazłem działającą wersję w bauh: mongodb-compass 1.22.1-1 ogarcia

**3** Zakładamy bazę danych

	Otwieramy MongoDB Compass
	Naciskamy zielony guzik "connect"
	Naciskamy "create database"
	Nazywamy database "super-projekt"
	Tworzymy w niej kolekcje "users", "tasks" i "goals"

## Frontend

**0**. Upewnij się, że masz zainstalowane **npm**.

    npm -v

Jeśli nie, zainstaluj npm (Linux Manjaro, dla innych OS szukaj sam(a))

    sudo pacman -Syu nodejs npm

https://forum.manjaro.org/t/how-to-install-nodejs-and-npm-404/98736

(**Ważne**: wykonuj wszystkie poniższe komendy w root folderze dla frontendu, czyli w *superprojekt/frontend*)

**1**. Zainstaluj/Aktualizuj wszystkie wymagane paczki.

    npm i

(Ta operacja stworzy folder **node_modules** który nie będzie dodawany do gita - każdy ma go oddzielnie, lokalnie u siebie)

**2**. Uruchom serwer serwujący frontend pod *http://localhost:8080*

    npm run serve

(Tak długo jak serwer jest uruchomiony, strona jest dostepna w przeglądarce i będzie automatycznie odświeżana podczas edytowania plików przy pracy nad projektem.)

## API

**0**. Upewnij się, że masz zainstalowane **python** oraz **pip**.

(**Ważne**: wykonuj wszystkie poniższe komendy w root folderze dla api, czyli w *superprojekt/api*)

**1**. Stwórz środowisko wirtualne (tylko raz przy inicjalizacji projektu).

    python3 -m venv env

(W wyniku tej komendy zostanie utworzony folder **env**, który nie będzie dodawany do gita - każdy ma go oddzielnie, lokalnie u siebie)

**2**. Wejdź w tryb wirtualnego srodowiska.

    source env/bin/activate

**3**. Zainstaluj wszystkie wymagane paczki.

    pip3 install -r requirements.txt

**4**. Dodaj paczkę i zapisz ją w pliku z listą paczek wymaganych w projekcie

    pip install paczka_name && pip freeze > requirements.txt

**5**. Uruchom aplikację.

    python3 src/app.py

**6**. Przerywając bądź kończąc pracę, wyjdź ze środowiska wirtualnego.

    deactivate

## Przydatne/ciekawe linki

### Git
- https://campus.datacamp.com/courses/introduction-to-git/basic-workflow?ex=2
- https://deepsource.io/blog/git-best-practices/

### Frontend

##### HTML & CSS
- https://github.com/gendx/html-cheat-sheet
- https://acchou.github.io/html-css-cheat-sheet/html-css-cheat-sheet.html#css
- https://github.com/iLoveCodingOrg/html-cheatsheet

##### JS
- https://javascript.info/
- https://www.sitepoint.com/shorthand-javascript-techniques/

##### Design, UI & UX
- https://medium.muz.li/
- https://dribbble.com/colors/2516c7?percent=30
- https://coolors.co/app
- https://materialdesignicons.com/
- https://material.io/design/introduction/#principles
- https://docs.google.com/spreadsheets/d/1XMdzbylu10auGFyfJjc5yzn3-rYk-89rqBna0TBvL2M/edit#gid=503173508


##### Wyjątkowe strony/projekty/biblioteki
- https://www.30secondsofcode.org/css/p/1
- https://tympanus.net/Development/GridLayoutMotion/
- https://www.supremo.co.uk/typeterms/
- http://www.csszengarden.com/
- https://www.bucketlistly.blog/?ref=bucketlistly
- https://shopify.github.io/draggable/examples/
- https://material.io/resources/
- https://material.io/design/material-studies/basil.html#typography
- https://codepen.io/juliangarnier/pen/idhuG
- https://codepen.io/jaysalvat/pen/HaqBf
- https://codepen.io/juliangarnier/pen/hzDAF
