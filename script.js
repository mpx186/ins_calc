//HTML ELEMENTS
const name_html = document.getElementById("name");
const surname_html = document.getElementById("surname");
const company_html = document.getElementById("company");
const pkdNo_html = document.getElementById("pkdNo");
const button_html = document.getElementById("submit");

const div_right = document.querySelector(".right-side");
const td_wyliczenie = document.querySelector(".wyliczenie");
const td_data = document.querySelector(".data");
const td_pkd = document.querySelector(".pkd");
const td_bazowa = document.querySelector(".bazowa");
const td_wspolczynnik = document.querySelector(".wspolczynnik");
const td_final = document.querySelector(".final");

const reset = document.querySelector("button");

const bazowa = document.querySelector("#own-base");

const button_base = document.querySelector(".own");
const button_own = document.querySelector("button.own");

//VARIABLES
let name = "";
let surname = "";
let company = "";
let pkd = "";
let stawka_bazowa = 1258;
let date = "";
let wspolczynnik = "";
let final = "";

//EVENTS HANDLERS
const inputs = [name_html, surname_html, company_html, pkdNo_html];

const handleChange = function() {
   switch (this.id) {
      case "name":
         name = this.value;
         break;
      case "surname":
         surname = this.value;
         break;
      case "company":
         company = this.value;
         break;
      case "pkdNo":
         pkd = this.value;
      default:
         break;
   }
};

const handleFocus = function() {
   this.placeholder = "";
};

inputs.forEach(input => {
   input.addEventListener("change", handleChange);
});

inputs.forEach(input => {
   input.addEventListener("focus", handleFocus);
});

// TEMPORARY SOLUTION WITH DATA IN THE ARRAY
const pkdArray = [
   ["A", 1, "PKD 01.12.Z", "Uprawa ryżu"],
   [
      "A",
      1,
      "PKD 01.13.Z",
      "Uprawa warzyw, włączając melony oraz uprawa roślin korzeniowych i roślin bulwiastych"
   ],
   ["A", 1, "PKD 01.14.Z", "Uprawa trzciny cukrowej"],
   ["A", 1, "PKD 01.15.Z", "Uprawa tytoniu"],
   ["A", 1, "PKD 01.16.Z", "Uprawa roślin włóknistych"],
   ["A", 1, "PKD 01.19.Z", "Pozostałe uprawy rolne inne niż wieloletnie"],
   ["A", 1, "PKD 01.21.Z", "Uprawa winogron"],
   [
      "A",
      1,
      "PKD 01.22.Z",
      "Uprawa drzew i krzewów owocowych tropikalnych i podzwrotnikowych"
   ],
   ["A", 1, "PKD 01.23.Z", "Uprawa drzew i krzewów owocowych cytrusowych"],
   [
      "A",
      1,
      "PKD 01.24.Z",
      "Uprawa drzew i krzewów owocowych ziarnkowych i pestkowych"
   ],
   [
      "A",
      1,
      "PKD 01.25.Z",
      "Uprawa pozostałych drzew i krzewów owocowych oraz orzechów"
   ],
   ["A", 1, "PKD 01.26.Z", "Uprawa drzew oleistych"],
   [
      "A",
      1,
      "PKD 01.27.Z",
      "Uprawa roślin wykorzystywanych do produkcji napojów"
   ],
   [
      "A",
      1,
      "PKD 01.28.Z",
      "Uprawa roślin przyprawowych i aromatycznych oraz roślin wykorzystywanych do produkcji leków i wyrobów farmaceutycznych"
   ],
   ["A", 1, "PKD 01.29.Z", "Uprawa pozostałych roślin wieloletnich"],
   ["A", 1, "PKD 01.30.Z", "Rozmnażanie roślin"],
   ["A", 1, "PKD 01.41.Z", "Chów i hodowla bydła mlecznego"],
   ["A", 1, "PKD 01.42.Z", "Chów i hodowla pozostałego bydła i bawołów"],
   [
      "A",
      1,
      "PKD 01.43.Z",
      "Chów i hodowla koni i pozostałych zwierząt koniowatych"
   ],
   [
      "A",
      1,
      "PKD 01.44.Z",
      "Chów i hodowla wielbłądów i zwierząt wielbłądowatych"
   ],
   ["A", 1, "PKD 01.45.Z", "Chów i hodowla owiec i kóz"],
   ["A", 1, "PKD 01.46.Z", "Chów i hodowla świń"],
   ["A", 1, "PKD 01.47.Z", "Chów i hodowla drobiu"],
   ["A", 1, "PKD 01.49.Z", "Chów i hodowla pozostałych zwierząt"],
   [
      "A",
      1,
      "PKD 01.50.Z",
      "Uprawy rolne połączone z chowem i hodowlą zwierząt (działalność mieszana)"
   ],
   [
      "A",
      1,
      "PKD 01.61.Z",
      "Działalność usługowa wspomagająca produkcję roślinną"
   ],
   [
      "A",
      1,
      "PKD 01.62.Z",
      "Działalność usługowa wspomagająca chów i hodowlę zwierząt gospodarskich"
   ],
   ["A", 1, "PKD 01.63.Z", "Działalność usługowa następująca po zbiorach"],
   ["A", 1, "PKD 01.64.Z", "Obróbka nasion dla celów rozmnażania roślin"],
   [
      "A",
      1,
      "PKD 01.70.Z",
      "Łowiectwo i pozyskiwanie zwierząt łownych, włączając działalność usługową"
   ],
   [
      "A",
      2,
      "PKD 02.10.Z",
      "Gospodarka leśna i pozostała działalność leśna, z wyłączeniem pozyskiwania produktów leśnych"
   ],
   ["A", 2, "PKD 02.20.Z", "Pozyskiwanie drewna"],
   [
      "A",
      2,
      "PKD 02.30.Z",
      "Pozyskiwanie dziko rosnących produktów leśnych, z wyłączeniem drewna"
   ],
   ["A", 2, "PKD 02.40.Z", "Działalność usługowa związana z leśnictwem"],
   ["A", 3, "PKD 03.11.Z", "Rybołówstwo w wodach morskich"],
   ["A", 3, "PKD 03.12.Z", "Rybołówstwo w wodach śródlądowych"],
   [
      "A",
      3,
      "PKD 03.21.Z",
      "Chów i hodowla ryb oraz pozostałych organizmów wodnych w wodach morskich"
   ],
   [
      "A",
      3,
      "PKD 03.22.Z",
      "Chów i hodowla ryb oraz pozostałych organizmów wodnych w wodach śródlądowych"
   ],
   ["B", 5, "PKD 05.10.Z", "Wydobywanie węgla kamiennego"],
   ["B", 5, "PKD 05.20.Z", "Wydobywanie węgla brunatnego (lignitu)"],
   ["B", 6, "PKD 06.10.Z", "Górnictwo ropy naftowej"],
   ["B", 6, "PKD 06.20.Z", "Górnictwo gazu ziemnego"],
   ["B", 7, "PKD 07.10.Z", "Górnictwo rud żelaza"],
   ["B", 7, "PKD 07.21.Z", "Górnictwo rud uranu i toru"],
   ["B", 7, "PKD 07.29.Z", "Górnictwo pozostałych rud metali nieżelaznych"],
   [
      "B",
      8,
      "PKD 08.11.Z",
      "Wydobywanie kamieni ozdobnych oraz kamienia dla potrzeb budownictwa, skał wapiennych, gipsu, kredy i łupków"
   ],
   [
      "B",
      8,
      "PKD 08.12.Z",
      "Wydobywanie żwiru i piasku; wydobywanie gliny i kaolinu"
   ],
   [
      "B",
      8,
      "PKD 08.91.Z",
      "Wydobywanie minerałów dla przemysłu chemicznego oraz do produkcji nawozów"
   ],
   ["B", 8, "PKD 08.92.Z", "Wydobywanie torfu"],
   ["B", 8, "PKD 08.93.Z", "Wydobywanie soli"],
   [
      "B",
      8,
      "PKD 08.99.Z",
      "Pozostałe górnictwo i wydobywanie, gdzie indziej niesklasyfikowane"
   ],
   [
      "B",
      9,
      "PKD 09.10.Z",
      "Działalność usługowa wspomagająca eksploatację złóż ropy naftowej i gazu ziemnego"
   ],
   [
      "B",
      9,
      "PKD 09.90.Z",
      "Działalność usługowa wspomagająca pozostałe górnictwo i wydobywanie"
   ],
   [
      "C",
      10,
      "PKD 10.11.Z",
      "Przetwarzanie i konserwowanie mięsa, z wyłączeniem mięsa z drobiu"
   ],
   ["C", 10, "PKD 10.12.Z", "Przetwarzanie i konserwowanie mięsa z drobiu"],
   [
      "C",
      10,
      "PKD 10.13.Z",
      "Produkcja wyrobów z mięsa, włączając wyroby z mięsa drobiowego"
   ],
   [
      "C",
      10,
      "PKD 10.20.Z",
      "Przetwarzanie i konserwowanie ryb, skorupiaków i mięczaków"
   ],
   ["C", 10, "PKD 10.31.Z", "Przetwarzanie i konserwowanie ziemniaków"],
   ["C", 10, "PKD 10.32.Z", "Produkcja soków z owoców i warzyw"],
   [
      "C",
      10,
      "PKD 10.39.Z",
      "Pozostałe przetwarzanie i konserwowanie owoców i warzyw"
   ],
   [
      "C",
      10,
      "PKD 10.41.Z",
      "Produkcja olejów i pozostałych tłuszczów płynnych"
   ],
   [
      "C",
      10,
      "PKD 10.42.Z",
      "Produkcja margaryny i podobnych tłuszczów jadalnych"
   ],
   ["C", 10, "PKD 10.51.Z", "Przetwórstwo mleka i wyrób serów"],
   ["C", 10, "PKD 10.52.Z", "Produkcja lodów"],
   ["C", 10, "PKD 10.61.Z", "Wytwarzanie produktów przemiału zbóż"],
   ["C", 10, "PKD 10.62.Z", "Wytwarzanie skrobi i wyrobów skrobiowych"],
   [
      "C",
      10,
      "PKD 10.71.Z",
      "Produkcja pieczywa; produkcja świeżych wyrobów ciastkarskich i ciastek"
   ],
   [
      "C",
      10,
      "PKD 10.72.Z",
      "Produkcja sucharów i herbatników; produkcja konserwowanych wyrobów ciastkarskich i ciastek"
   ],
   [
      "C",
      10,
      "PKD 10.73.Z",
      "Produkcja makaronów, klusek, kuskusu i podobnych wyrobów mącznych"
   ],
   ["C", 10, "PKD 10.81.Z", "Produkcja cukru"],
   [
      "C",
      10,
      "PKD 10.82.Z",
      "Produkcja kakao, czekolady i wyrobów cukierniczych"
   ],
   ["C", 10, "PKD 10.83.Z", "Przetwórstwo herbaty i kawy"],
   ["C", 10, "PKD 10.84.Z", "Produkcja przypraw"],
   ["C", 10, "PKD 10.85.Z", "Wytwarzanie gotowych posiłków i dań"],
   [
      "C",
      10,
      "PKD 10.86.Z",
      "Produkcja artykułów spożywczych homogenizowanych i żywności dietetycznej"
   ],
   [
      "C",
      10,
      "PKD 10.89.Z",
      "Produkcja pozostałych artykułów spożywczych, gdzie indziej niesklasyfikowana"
   ],
   [
      "C",
      10,
      "PKD 10.91.Z",
      "Produkcja gotowej paszy dla zwierząt gospodarskich"
   ],
   ["C", 10, "PKD 10.92.Z", "Produkcja gotowej karmy dla zwierząt domowych"],
   [
      "C",
      11,
      "PKD 11.01.Z",
      "Destylowanie, rektyfikowanie i mieszanie alkoholi"
   ],
   ["C", 11, "PKD 11.02.Z", "Produkcja win gronowych"],
   ["C", 11, "PKD 11.03.Z", "Produkcja cydru i pozostałych win owocowych"],
   [
      "C",
      11,
      "PKD 11.04.Z",
      "Produkcja pozostałych niedestylowanych napojów fermentowanych"
   ],
   ["C", 11, "PKD 11.05.Z", "Produkcja piwa"],
   ["C", 11, "PKD 11.06.Z", "Produkcja słodu"],
   [
      "C",
      11,
      "PKD 11.07.Z",
      "Produkcja napojów bezalkoholowych; produkcja wód mineralnych i pozostałych wód butelkowanych"
   ],
   ["C", 12, "PKD 12.00.Z", "PRODUKCJA WYROBÓW TYTONIOWYCH"],
   ["C", 13, "PKD 13.10.A", "Produkcja przędzy bawełnianej"],
   ["C", 13, "PKD 13.10.B", "Produkcja przędzy wełnianej"],
   ["C", 13, "PKD 13.10.C", "Produkcja przędzy z włókien chemicznych"],
   [
      "C",
      13,
      "PKD 13.10.D",
      "Produkcja przędzy z pozostałych włókien tekstylnych, włączając produkcję nici"
   ],
   ["C", 13, "PKD 13.20.A", "Produkcja tkanin bawełnianych"],
   ["C", 13, "PKD 13.20.B", "Produkcja tkanin wełnianych"],
   ["C", 13, "PKD 13.20.C", "Produkcja tkanin z włókien chemicznych"],
   ["C", 13, "PKD 13.20.D", "Produkcja pozostałych tkanin"],
   ["C", 13, "PKD 13.30.Z", "Wykończanie wyrobów włókienniczych"],
   ["C", 13, "PKD 13.91.Z", "Produkcja dzianin metrażowych"],
   ["C", 13, "PKD 13.92.Z", "Produkcja gotowych wyrobów tekstylnych"],
   ["C", 13, "PKD 13.93.Z", "Produkcja dywanów i chodników"],
   [
      "C",
      13,
      "PKD 13.94.Z",
      "Produkcja wyrobów powroźniczych, lin, szpagatów i wyrobów sieciowych"
   ],
   [
      "C",
      13,
      "PKD 13.95.Z",
      "Produkcja włóknin i wyrobów wykonanych z włóknin, z wyłączeniem odzieży"
   ],
   [
      "C",
      13,
      "PKD 13.96.Z",
      "Produkcja pozostałych technicznych i przemysłowych wyrobów tekstylnych"
   ],
   [
      "C",
      13,
      "PKD 13.99.Z",
      "Produkcja pozostałych wyrobów tekstylnych, gdzie indziej niesklasyfikowana"
   ],
   ["C", 14, "PKD 14.11.Z", "Produkcja odzieży skórzanej"],
   ["C", 14, "PKD 14.12.Z", "Produkcja odzieży roboczej"],
   ["C", 14, "PKD 14.13.Z", "Produkcja pozostałej odzieży wierzchniej"],
   ["C", 14, "PKD 14.14.Z", "Produkcja bielizny"],
   [
      "C",
      14,
      "PKD 14.19.Z",
      "Produkcja pozostałej odzieży i dodatków do odzieży"
   ],
   ["C", 14, "PKD 14.20.Z", "Produkcja wyrobów futrzarskich"],
   ["C", 14, "PKD 14.31.Z", "Produkcja wyrobów pończoszniczych"],
   ["C", 14, "PKD 14.39.Z", "Produkcja pozostałej odzieży dzianej"],
   [
      "C",
      15,
      "PKD 15.11.Z",
      "Wyprawa skór, garbowanie; wyprawa i barwienie skór futerkowych"
   ],
   [
      "C",
      15,
      "PKD 15.12.Z",
      "Produkcja toreb bagażowych, toreb ręcznych i podobnych wyrobów kaletniczych; produkcja wyrobów rymarskich"
   ],
   ["C", 15, "PKD 15.20.Z", "Produkcja obuwia"],
   ["C", 16, "PKD 16.10.Z", "Produkcja wyrobów tartacznych"],
   [
      "C",
      16,
      "PKD 16.21.Z",
      "Produkcja arkuszy fornirowych i płyt wykonanych na bazie drewna"
   ],
   ["C", 16, "PKD 16.22.Z", "Produkcja gotowych parkietów podłogowych"],
   [
      "C",
      16,
      "PKD 16.23.Z",
      "Produkcja pozostałych wyrobów stolarskich i ciesielskich dla budownictwa"
   ],
   ["C", 16, "PKD 16.24.Z", "Produkcja opakowań drewnianych"],
   [
      "C",
      16,
      "PKD 16.29.Z",
      "Produkcja pozostałych wyrobów z drewna; produkcja wyrobów z korka, słomy i materiałów używanych do wyplatania"
   ],
   ["C", 17, "PKD 17.11.Z", "Produkcja masy włóknistej"],
   ["C", 17, "PKD 17.12.Z", "Produkcja papieru i tektury"],
   [
      "C",
      17,
      "PKD 17.21.Z",
      "Produkcja papieru falistego i tektury falistej oraz opakowań z papieru i tektury"
   ],
   [
      "C",
      17,
      "PKD 17.22.Z",
      "Produkcja artykułów gospodarstwa domowego, toaletowych i sanitarnych"
   ],
   ["C", 17, "PKD 17.23.Z", "Produkcja artykułów piśmiennych"],
   ["C", 17, "PKD 17.24.Z", "Produkcja tapet"],
   [
      "C",
      17,
      "PKD 17.29.Z",
      "Produkcja pozostałych wyrobów z papieru i tektury"
   ],
   ["C", 18, "PKD 18.11.Z", "Drukowanie gazet"],
   ["C", 18, "PKD 18.12.Z", "Pozostałe drukowanie"],
   [
      "C",
      18,
      "PKD 18.13.Z",
      "Działalność usługowa związana z przygotowywaniem do druku"
   ],
   ["C", 18, "PKD 18.14.Z", "Introligatorstwo i podobne usługi"],
   ["C", 18, "PKD 18.20.Z", "Reprodukcja zapisanych nośników informacji"],
   ["C", 19, "PKD 19.10.Z", "Wytwarzanie i przetwarzanie koksu"],
   [
      "C",
      19,
      "PKD 19.20.Z",
      "Wytwarzanie i przetwarzanie produktów rafinacji ropy naftowej"
   ],
   ["C", 20, "PKD 20.11.Z", "Produkcja gazów technicznych"],
   ["C", 20, "PKD 20.12.Z", "Produkcja barwników i pigmentów"],
   [
      "C",
      20,
      "PKD 20.13.Z",
      "Produkcja pozostałych podstawowych chemikaliów nieorganicznych"
   ],
   [
      "C",
      20,
      "PKD 20.14.Z",
      "Produkcja pozostałych podstawowych chemikaliów organicznych"
   ],
   ["C", 20, "PKD 20.15.Z", "Produkcja nawozów i związków azotowych"],
   [
      "C",
      20,
      "PKD 20.16.Z",
      "Produkcja tworzyw sztucznych w formach podstawowych"
   ],
   [
      "C",
      20,
      "PKD 20.17.Z",
      "Produkcja kauczuku syntetycznego w formach podstawowych"
   ],
   [
      "C",
      20,
      "PKD 20.20.Z",
      "Produkcja pestycydów i pozostałych środków agrochemicznych"
   ],
   [
      "C",
      20,
      "PKD 20.30.Z",
      "Produkcja farb, lakierów i podobnych powłok, farb drukarskich i mas uszczelniających"
   ],
   [
      "C",
      20,
      "PKD 20.41.Z",
      "Produkcja mydła i detergentów, środków myjących i czyszczących"
   ],
   ["C", 20, "PKD 20.42.Z", "Produkcja wyrobów kosmetycznych i toaletowych"],
   ["C", 20, "PKD 20.51.Z", "Produkcja materiałów wybuchowych"],
   ["C", 20, "PKD 20.52.Z", "Produkcja klejów"],
   ["C", 20, "PKD 20.53.Z", "Produkcja olejków eterycznych"],
   [
      "C",
      20,
      "PKD 20.59.Z",
      "Produkcja pozostałych wyrobów chemicznych, gdzie indziej niesklasyfikowana"
   ],
   ["C", 20, "PKD 20.60.Z", "Produkcja włókien chemicznych"],
   [
      "C",
      21,
      "PKD 21.10.Z",
      "Produkcja podstawowych substancji farmaceutycznych"
   ],
   [
      "C",
      21,
      "PKD 21.20.Z",
      "Produkcja leków i pozostałych wyrobów farmaceutycznych"
   ],
   [
      "C",
      22,
      "PKD 22.11.Z",
      "Produkcja opon i dętek z gumy; bieżnikowanie i regenerowanie opon z gumy"
   ],
   ["C", 22, "PKD 22.19.Z", "Produkcja pozostałych wyrobów z gumy"],
   [
      "C",
      22,
      "PKD 22.21.Z",
      "Produkcja płyt, arkuszy, rur i kształtowników z tworzyw sztucznych"
   ],
   ["C", 22, "PKD 22.22.Z", "Produkcja opakowań z tworzyw sztucznych"],
   [
      "C",
      22,
      "PKD 22.23.Z",
      "Produkcja wyrobów dla budownictwa z tworzyw sztucznych"
   ],
   [
      "C",
      22,
      "PKD 22.29.Z",
      "Produkcja pozostałych wyrobów z tworzyw sztucznych"
   ],
   ["C", 23, "PKD 23.11.Z", "Produkcja szkła płaskiego"],
   ["C", 23, "PKD 23.12.Z", "Kształtowanie i obróbka szkła płaskiego"],
   ["C", 23, "PKD 23.13.Z", "Produkcja szkła gospodarczego"],
   ["C", 23, "PKD 23.14.Z", "Produkcja włókien szklanych"],
   [
      "C",
      23,
      "PKD 23.19.Z",
      "Produkcja i obróbka pozostałego szkła, włączając szkło techniczne"
   ],
   ["C", 23, "PKD 23.20.Z", "Produkcja wyrobów ogniotrwałych"],
   ["C", 23, "PKD 23.31.Z", "Produkcja ceramicznych kafli i płytek"],
   [
      "C",
      23,
      "PKD 23.32.Z",
      "Produkcja cegieł, dachówek i materiałów budowlanych, z wypalanej gliny"
   ],
   [
      "C",
      23,
      "PKD 23.41.Z",
      "Produkcja ceramicznych wyrobów stołowych i ozdobnych"
   ],
   ["C", 23, "PKD 23.42.Z", "Produkcja ceramicznych wyrobów sanitarnych"],
   [
      "C",
      23,
      "PKD 23.43.Z",
      "Produkcja ceramicznych izolatorów i osłon izolacyjnych"
   ],
   [
      "C",
      23,
      "PKD 23.44.Z",
      "Produkcja pozostałych technicznych wyrobów ceramicznych"
   ],
   ["C", 23, "PKD 23.49.Z", "Produkcja pozostałych wyrobów ceramicznych"],
   ["C", 23, "PKD 23.51.Z", "Produkcja cementu"],
   ["C", 23, "PKD 23.52.Z", "Produkcja wapna i gipsu"],
   ["C", 23, "PKD 23.61.Z", "Produkcja wyrobów budowlanych z betonu"],
   ["C", 23, "PKD 23.62.Z", "Produkcja wyrobów budowlanych z gipsu"],
   ["C", 23, "PKD 23.63.Z", "Produkcja masy betonowej prefabrykowanej"],
   ["C", 23, "PKD 23.64.Z", "Produkcja zaprawy murarskiej"],
   ["C", 23, "PKD 23.65.Z", "Produkcja cementu wzmocnionego włóknem"],
   [
      "C",
      23,
      "PKD 23.69.Z",
      "Produkcja pozostałych wyrobów z betonu, gipsu i cementu"
   ],
   ["C", 23, "PKD 23.70.Z", "Cięcie, formowanie i wykańczanie kamienia"],
   ["C", 23, "PKD 23.91.Z", "Produkcja wyrobów ściernych"],
   [
      "C",
      23,
      "PKD 23.99.Z",
      "Produkcja pozostałych wyrobów z mineralnych surowców niemetalicznych, gdzie indziej niesklasyfikowana"
   ],
   [
      "C",
      24,
      "PKD 24.10.Z",
      "Produkcja surówki, żelazostopów, żeliwa i stali oraz wyrobów hutniczych"
   ],
   [
      "C",
      24,
      "PKD 24.20.Z",
      "Produkcja rur, przewodów, kształtowników zamkniętych i łączników, ze stali"
   ],
   ["C", 24, "PKD 24.31.Z", "Produkcja prętów ciągnionych na zimno"],
   ["C", 24, "PKD 24.32.Z", "Produkcja wyrobów płaskich walcowanych na zimno"],
   ["C", 24, "PKD 24.33.Z", "Produkcja wyrobów formowanych na zimno"],
   ["C", 24, "PKD 24.34.Z", "Produkcja drutu"],
   ["C", 24, "PKD 24.41.Z", "Produkcja metali szlachetnych"],
   ["C", 24, "PKD 24.42.A", "Produkcja aluminium hutniczego"],
   ["C", 24, "PKD 24.42.B", "Produkcja wyrobów z aluminium i stopów aluminium"],
   ["C", 24, "PKD 24.43.Z", "Produkcja ołowiu, cynku i cyny"],
   ["C", 24, "PKD 24.44.Z", "Produkcja miedzi"],
   ["C", 24, "PKD 24.45.Z", "Produkcja pozostałych metali nieżelaznych"],
   ["C", 24, "PKD 24.46.Z", "Wytwarzanie paliw jądrowych"],
   ["C", 24, "PKD 24.51.Z", "Odlewnictwo żeliwa"],
   ["C", 24, "PKD 24.52.Z", "Odlewnictwo staliwa"],
   ["C", 24, "PKD 24.53.Z", "Odlewnictwo metali lekkich"],
   ["C", 24, "PKD 24.54.A", "Odlewnictwo miedzi i stopów miedzi"],
   [
      "C",
      24,
      "PKD 24.54.B",
      "Odlewnictwo pozostałych metali nieżelaznych, gdzie indziej niesklasyfikowane"
   ],
   ["C", 25, "PKD 25.11.Z", "Produkcja konstrukcji metalowych i ich części"],
   [
      "C",
      25,
      "PKD 25.12.Z",
      "Produkcja metalowych elementów stolarki budowlanej"
   ],
   [
      "C",
      25,
      "PKD 25.21.Z",
      "Produkcja grzejników i kotłów centralnego ogrzewania"
   ],
   [
      "C",
      25,
      "PKD 25.29.Z",
      "Produkcja pozostałych zbiorników, cystern i pojemników metalowych"
   ],
   [
      "C",
      25,
      "PKD 25.30.Z",
      "Produkcja wytwornic pary, z wyłączeniem kotłów do centralnego ogrzewania gorącą wodą"
   ],
   ["C", 25, "PKD 25.40.Z", "Produkcja broni i amunicji"],
   [
      "C",
      25,
      "PKD 25.50.Z",
      "Kucie, prasowanie, wytłaczanie i walcowanie metali; metalurgia proszków"
   ],
   ["C", 25, "PKD 25.61.Z", "Obróbka metali i nakładanie powłok na metale"],
   ["C", 25, "PKD 25.62.Z", "Obróbka mechaniczna elementów metalowych"],
   ["C", 25, "PKD 25.71.Z", "Produkcja wyrobów nożowniczych i sztućców"],
   ["C", 25, "PKD 25.72.Z", "Produkcja zamków i zawiasów"],
   ["C", 25, "PKD 25.73.Z", "Produkcja narzędzi"],
   ["C", 25, "PKD 25.91.Z", "Produkcja pojemników metalowych"],
   ["C", 25, "PKD 25.92.Z", "Produkcja opakowań z metali"],
   ["C", 25, "PKD 25.93.Z", "Produkcja wyrobów z drutu, łańcuchów i sprężyn"],
   ["C", 25, "PKD 25.94.Z", "Produkcja złączy i śrub"],
   [
      "C",
      25,
      "PKD 25.99.Z",
      "Produkcja pozostałych gotowych wyrobów metalowych, gdzie indziej niesklasyfikowana"
   ],
   ["C", 26, "PKD 26.11.Z", "Produkcja elementów elektronicznych"],
   ["C", 26, "PKD 26.12.Z", "Produkcja elektronicznych obwodów drukowanych"],
   ["C", 26, "PKD 26.20.Z", "Produkcja komputerów i urządzeń peryferyjnych"],
   ["C", 26, "PKD 26.30.Z", "Produkcja sprzętu (tele)komunikacyjnego"],
   [
      "C",
      26,
      "PKD 26.40.Z",
      "Produkcja elektronicznego sprzętu powszechnego użytku"
   ],
   [
      "C",
      26,
      "PKD 26.51.Z",
      "Produkcja instrumentów i przyrządów pomiarowych, kontrolnych i nawigacyjnych"
   ],
   ["C", 26, "PKD 26.52.Z", "Produkcja zegarków i zegarów"],
   [
      "C",
      26,
      "PKD 26.60.Z",
      "Produkcja urządzeń napromieniowujących, sprzętu elektromedycznego i elektroterapeutycznego"
   ],
   [
      "C",
      26,
      "PKD 26.70.Z",
      "Produkcja instrumentów optycznych i sprzętu fotograficznego"
   ],
   [
      "C",
      26,
      "PKD 26.80.Z",
      "Produkcja magnetycznych i optycznych niezapisanych nośników informacji"
   ],
   [
      "C",
      27,
      "PKD 27.11.Z",
      "Produkcja elektrycznych silników, prądnic i transformatorów"
   ],
   [
      "C",
      27,
      "PKD 27.12.Z",
      "Produkcja aparatury rozdzielczej i sterowniczej energii elektrycznej"
   ],
   ["C", 27, "PKD 27.20.Z", "Produkcja baterii i akumulatorów"],
   ["C", 27, "PKD 27.31.Z", "Produkcja kabli światłowodowych"],
   [
      "C",
      27,
      "PKD 27.32.Z",
      "Produkcja pozostałych elektronicznych i elektrycznych przewodów i kabli"
   ],
   ["C", 27, "PKD 27.33.Z", "Produkcja sprzętu instalacyjnego"],
   ["C", 27, "PKD 27.40.Z", "Produkcja elektrycznego sprzętu oświetleniowego"],
   [
      "C",
      27,
      "PKD 27.51.Z",
      "Produkcja elektrycznego sprzętu gospodarstwa domowego"
   ],
   [
      "C",
      27,
      "PKD 27.52.Z",
      "Produkcja nieelektrycznego sprzętu gospodarstwa domowego"
   ],
   ["C", 27, "PKD 27.90.Z", "Produkcja pozostałego sprzętu elektrycznego"],
   [
      "C",
      28,
      "PKD 28.11.Z",
      "Produkcja silników i turbin, z wyłączeniem silników lotniczych, samochodowych i motocyklowych"
   ],
   [
      "C",
      28,
      "PKD 28.12.Z",
      "Produkcja sprzętu i wyposażenia do napędu hydraulicznego i pneumatycznego"
   ],
   ["C", 28, "PKD 28.13.Z", "Produkcja pozostałych pomp i sprężarek"],
   ["C", 28, "PKD 28.14.Z", "Produkcja pozostałych kurków i zaworów"],
   [
      "C",
      28,
      "PKD 28.15.Z",
      "Produkcja łożysk, kół zębatych, przekładni zębatych i elementów napędowych"
   ],
   ["C", 28, "PKD 28.21.Z", "Produkcja pieców, palenisk i palników piecowych"],
   ["C", 28, "PKD 28.22.Z", "Produkcja urządzeń dźwigowych i chwytaków"],
   [
      "C",
      28,
      "PKD 28.23.Z",
      "Produkcja maszyn i sprzętu biurowego, z wyłączeniem komputerów i urządzeń peryferyjnych"
   ],
   ["C", 28, "PKD 28.24.Z", "Produkcja narzędzi ręcznych mechanicznych"],
   [
      "C",
      28,
      "PKD 28.25.Z",
      "Produkcja przemysłowych urządzeń chłodniczych i wentylacyjnych"
   ],
   [
      "C",
      28,
      "PKD 28.29.Z",
      "Produkcja pozostałych maszyn ogólnego przeznaczenia, gdzie indziej niesklasyfikowana"
   ],
   ["C", 28, "PKD 28.30.Z", "Produkcja maszyn dla rolnictwa i leśnictwa"],
   ["C", 28, "PKD 28.41.Z", "Produkcja maszyn do obróbki metalu"],
   ["C", 28, "PKD 28.49.Z", "Produkcja pozostałych narzędzi mechanicznych"],
   ["C", 28, "PKD 28.91.Z", "Produkcja maszyn dla metalurgii"],
   [
      "C",
      28,
      "PKD 28.92.Z",
      "Produkcja maszyn dla górnictwa i do wydobywania oraz budownictwa"
   ],
   [
      "C",
      28,
      "PKD 28.93.Z",
      "Produkcja maszyn stosowanych w przetwórstwie żywności, tytoniu i produkcji napojów"
   ],
   [
      "C",
      28,
      "PKD 28.94.Z",
      "Produkcja maszyn dla przemysłu tekstylnego, odzieżowego i skórzanego"
   ],
   ["C", 28, "PKD 28.95.Z", "Produkcja maszyn dla przemysłu papierniczego"],
   [
      "C",
      28,
      "PKD 28.96.Z",
      "Produkcja maszyn do obróbki gumy lub tworzyw sztucznych oraz wytwarzania wyrobów z tych materiałów"
   ],
   [
      "C",
      28,
      "PKD 28.99.Z",
      "Produkcja pozostałych maszyn specjalnego przeznaczenia, gdzie indziej niesklasyfikowana"
   ],
   [
      "C",
      29,
      "PKD 29.10.A",
      "Produkcja silników do pojazdów samochodowych (z wyłączeniem motocykli) oraz do ciągników rolniczych"
   ],
   ["C", 29, "PKD 29.10.B", "Produkcja samochodów osobowych"],
   ["C", 29, "PKD 29.10.C", "Produkcja autobusów"],
   [
      "C",
      29,
      "PKD 29.10.D",
      "Produkcja pojazdów samochodowych przeznaczonych do przewozu towarów"
   ],
   [
      "C",
      29,
      "PKD 29.10.E",
      "Produkcja pozostałych pojazdów samochodowych, z wyłączeniem motocykli"
   ],
   [
      "C",
      29,
      "PKD 29.20.Z",
      "Produkcja nadwozi do pojazdów silnikowych; produkcja przyczep i naczep"
   ],
   [
      "C",
      29,
      "PKD 29.31.Z",
      "Produkcja wyposażenia elektrycznego i elektronicznego do pojazdów silnikowych"
   ],
   [
      "C",
      29,
      "PKD 29.32.Z",
      "Produkcja pozostałych części i akcesoriów do pojazdów silnikowych, z wyłączeniem motocykli"
   ],
   ["C", 30, "PKD 30.11.Z", "Produkcja statków i konstrukcji pływających"],
   ["C", 30, "PKD 30.12.Z", "Produkcja łodzi wycieczkowych i sportowych"],
   [
      "C",
      30,
      "PKD 30.20.Z",
      "Produkcja lokomotyw kolejowych oraz taboru szynowego"
   ],
   [
      "C",
      30,
      "PKD 30.30.Z",
      "Produkcja statków powietrznych, statków kosmicznych i podobnych maszyn"
   ],
   ["C", 30, "PKD 30.40.Z", "Produkcja wojskowych pojazdów bojowych"],
   ["C", 30, "PKD 30.91.Z", "Produkcja motocykli"],
   ["C", 30, "PKD 30.92.Z", "Produkcja rowerów i wózków inwalidzkich"],
   [
      "C",
      30,
      "PKD 30.99.Z",
      "Produkcja pozostałego sprzętu transportowego, gdzie indziej niesklasyfikowana"
   ],
   ["C", 31, "PKD 31.01.Z", "Produkcja mebli biurowych i sklepowych"],
   ["C", 31, "PKD 31.02.Z", "Produkcja mebli kuchennych"],
   ["C", 31, "PKD 31.03.Z", "Produkcja materaców"],
   ["C", 31, "PKD 31.09.Z", "Produkcja pozostałych mebli"],
   ["C", 32, "PKD 32.11.Z", "Produkcja monet"],
   ["C", 32, "PKD 32.12.Z", "Produkcja wyrobów jubilerskich i podobnych"],
   [
      "C",
      32,
      "PKD 32.13.Z",
      "Produkcja sztucznej biżuterii i wyrobów podobnych"
   ],
   ["C", 32, "PKD 32.20.Z", "Produkcja instrumentów muzycznych"],
   ["C", 32, "PKD 32.30.Z", "Produkcja sprzętu sportowego"],
   ["C", 32, "PKD 32.40.Z", "Produkcja gier i zabawek"],
   [
      "C",
      32,
      "PKD 32.50.Z",
      "Produkcja urządzeń, instrumentów oraz wyrobów medycznych, włączając dentystyczne"
   ],
   ["C", 32, "PKD 32.91.Z", "Produkcja mioteł, szczotek i pędzli"],
   [
      "C",
      32,
      "PKD 32.99.Z",
      "Produkcja pozostałych wyrobów, gdzie indziej niesklasyfikowana"
   ],
   [
      "C",
      33,
      "PKD 33.11.Z",
      "Naprawa i konserwacja metalowych wyrobów gotowych"
   ],
   ["C", 33, "PKD 33.12.Z", "Naprawa i konserwacja maszyn"],
   [
      "C",
      33,
      "PKD 33.13.Z",
      "Naprawa i konserwacja urządzeń elektronicznych i optycznych"
   ],
   ["C", 33, "PKD 33.14.Z", "Naprawa i konserwacja urządzeń elektrycznych"],
   ["C", 33, "PKD 33.15.Z", "Naprawa i konserwacja statków i łodzi"],
   [
      "C",
      33,
      "PKD 33.16.Z",
      "Naprawa i konserwacja statków powietrznych i statków kosmicznych"
   ],
   [
      "C",
      33,
      "PKD 33.17.Z",
      "Naprawa i konserwacja pozostałego sprzętu transportowego"
   ],
   [
      "C",
      33,
      "PKD 33.19.Z",
      "Naprawa i konserwacja pozostałego sprzętu i wyposażenia"
   ],
   [
      "C",
      33,
      "PKD 33.20.Z",
      "Instalowanie maszyn przemysłowych, sprzętu i wyposażenia"
   ],
   ["D", 35, "PKD 35.11.Z", "Wytwarzanie energii elektrycznej"],
   ["D", 35, "PKD 35.12.Z", "Przesyłanie energii elektrycznej"],
   ["D", 35, "PKD 35.13.Z", "Dystrybucja energii elektrycznej"],
   ["D", 35, "PKD 35.14.Z", "Handel energią elektryczną"],
   ["D", 35, "PKD 35.21.Z", "Wytwarzanie paliw gazowych"],
   ["D", 35, "PKD 35.22.Z", "Dystrybucja paliw gazowych w systemie sieciowym"],
   ["D", 35, "PKD 35.23.Z", "Handel paliwami gazowymi w systemie sieciowym"],
   [
      "D",
      35,
      "PKD 35.30.Z",
      "Wytwarzanie i zaopatrywanie w parę wodną, gorącą wodę i powietrze do układów klimatyzacyjnych"
   ],
   ["E", 36, "PKD 36.00.Z", "POBÓR, UZDATNIANIE I DOSTARCZANIE WODY"],
   ["E", 37, "PKD 37.00.Z", "ODPROWADZANIE I OCZYSZCZANIE ŚCIEKÓW"],
   ["E", 38, "PKD 38.11.Z", "Zbieranie odpadów innych niż niebezpieczne"],
   ["E", 38, "PKD 38.12.Z", "Zbieranie odpadów niebezpiecznych"],
   [
      "E",
      38,
      "PKD 38.21.Z",
      "Obróbka i usuwanie odpadów innych niż niebezpieczne"
   ],
   [
      "E",
      38,
      "PKD 38.22.Z",
      "Przetwarzanie i unieszkodliwianie odpadów niebezpiecznych"
   ],
   ["E", 38, "PKD 38.31.Z", "Demontaż wyrobów zużytych"],
   ["E", 38, "PKD 38.32.Z", "Odzysk surowców z materiałów segregowanych"],
   [
      "E",
      39,
      "PKD 39.00.Z",
      "DZIAŁALNOŚĆ ZWIĄZANA Z REKULTYWACJĄ I POZOSTAŁA DZIAŁALNOŚĆ USŁUGOWA ZWIĄZANA Z GOSPODARKĄ ODPADAMI"
   ],
   [
      "F",
      41,
      "PKD 41.10.Z",
      "Realizacja projektów budowlanych związanych ze wznoszeniem budynków"
   ],
   [
      "F",
      41,
      "PKD 41.20.Z",
      "Roboty budowlane związane ze wznoszeniem budynków mieszkalnych i niemieszkalnych"
   ],
   ["F", 42, "PKD 42.11.Z", "Roboty związane z budową dróg i autostrad"],
   [
      "F",
      42,
      "PKD 42.12.Z",
      "Roboty związane z budową dróg szynowych i kolei podziemnej"
   ],
   ["F", 42, "PKD 42.13.Z", "Roboty związane z budową mostów i tuneli"],
   [
      "F",
      42,
      "PKD 42.21.Z",
      "Roboty związane z budową rurociągów przesyłowych i sieci rozdzielczych"
   ],
   [
      "F",
      42,
      "PKD 42.22.Z",
      "Roboty związane z budową linii telekomunikacyjnych i elektroenergetycznych"
   ],
   [
      "F",
      42,
      "PKD 42.91.Z",
      "Roboty związane z budową obiektów inżynierii wodnej"
   ],
   [
      "F",
      42,
      "PKD 42.99.Z",
      "Roboty związane z budową pozostałych obiektów inżynierii lądowej i wodnej, gdzie indziej niesklasyfikowane"
   ],
   ["F", 43, "PKD 43.11.Z", "Rozbiórka i burzenie obiektów budowlanych"],
   ["F", 43, "PKD 43.12.Z", "Przygotowanie terenu pod budowę"],
   [
      "F",
      43,
      "PKD 43.13.Z",
      "Wykonywanie wykopów i wierceń geologiczno-inżynierskich"
   ],
   ["F", 43, "PKD 43.21.Z", "Wykonywanie instalacji elektrycznych"],
   [
      "F",
      43,
      "PKD 43.22.Z",
      "Wykonywanie instalacji wodno-kanalizacyjnych, cieplnych, gazowych i klimatyzacyjnych"
   ],
   ["F", 43, "PKD 43.29.Z", "Wykonywanie pozostałych instalacji budowlanych"],
   ["F", 43, "PKD 43.31.Z", "Tynkowanie"],
   ["F", 43, "PKD 43.32.Z", "Zakładanie stolarki budowlanej"],
   ["F", 43, "PKD 43.33.Z", "Posadzkarstwo; tapetowanie i oblicowywanie ścian"],
   ["F", 43, "PKD 43.34.Z", "Malowanie i szklenie"],
   [
      "F",
      43,
      "PKD 43.39.Z",
      "Wykonywanie pozostałych robót budowlanych wykończeniowych"
   ],
   ["F", 43, "PKD 43.91.Z", "Wykonywanie konstrukcji i pokryć dachowych"],
   [
      "F",
      43,
      "PKD 43.99.Z",
      "Pozostałe specjalistyczne roboty budowlane, gdzie indziej niesklasyfikowane"
   ],
   [
      "G",
      45,
      "PKD 45.11.Z",
      "Sprzedaż hurtowa i detaliczna samochodów osobowych i furgonetek"
   ],
   [
      "G",
      45,
      "PKD 45.19.Z",
      "Sprzedaż hurtowa i detaliczna pozostałych pojazdów samochodowych, z wyłączeniem motocykli"
   ],
   [
      "G",
      45,
      "PKD 45.20.Z",
      "Konserwacja i naprawa pojazdów samochodowych, z wyłączeniem motocykli"
   ],
   [
      "G",
      45,
      "PKD 45.31.Z",
      "Sprzedaż hurtowa części i akcesoriów do pojazdów samochodowych, z wyłączeniem motocykli"
   ],
   [
      "G",
      45,
      "PKD 45.32.Z",
      "Sprzedaż detaliczna części i akcesoriów do pojazdów samochodowych, z wyłączeniem motocykli"
   ],
   [
      "G",
      45,
      "PKD 45.40.Z",
      "Sprzedaż hurtowa i detaliczna motocykli, ich naprawa i konserwacja oraz sprzedaż hurtowa i detaliczna części i akcesoriów do nich"
   ],
   [
      "G",
      46,
      "PKD 46.11.Z",
      "Działalność agentów zajmujących się sprzedażą płodów rolnych, żywych zwierząt, surowców dla przemysłu tekstylnego i półproduktów"
   ],
   [
      "G",
      46,
      "PKD 46.12.Z",
      "Działalność agentów zajmujących się sprzedażą paliw, rud, metali i chemikaliów przemysłowych"
   ],
   [
      "G",
      46,
      "PKD 46.13.Z",
      "Działalność agentów zajmujących się sprzedażą drewna i materiałów budowlanych"
   ],
   [
      "G",
      46,
      "PKD 46.14.Z",
      "Działalność agentów zajmujących się sprzedażą maszyn, urządzeń przemysłowych, statków i samolotów"
   ],
   [
      "G",
      46,
      "PKD 46.15.Z",
      "Działalność agentów zajmujących się sprzedażą mebli, artykułów gospodarstwa domowego i drobnych wyrobów metalowych"
   ],
   [
      "G",
      46,
      "PKD 46.16.Z",
      "Działalność agentów zajmujących się sprzedażą wyrobów tekstylnych, odzieży, wyrobów futrzarskich, obuwia i artykułów skórzanych"
   ],
   [
      "G",
      46,
      "PKD 46.17.Z",
      "Działalność agentów zajmujących się sprzedażą żywności, napojów i wyrobów tytoniowych"
   ],
   [
      "G",
      46,
      "PKD 46.18.Z",
      "Działalność agentów specjalizujących się w sprzedaży pozostałych określonych towarów"
   ],
   [
      "G",
      46,
      "PKD 46.19.Z",
      "Działalność agentów zajmujących się sprzedażą towarów różnego rodzaju"
   ],
   [
      "G",
      46,
      "PKD 46.21.Z",
      "Sprzedaż hurtowa zboża, nieprzetworzonego tytoniu, nasion i pasz dla zwierząt"
   ],
   ["G", 46, "PKD 46.22.Z", "Sprzedaż hurtowa kwiatów i roślin"],
   ["G", 46, "PKD 46.23.Z", "Sprzedaż hurtowa żywych zwierząt"],
   ["G", 46, "PKD 46.24.Z", "Sprzedaż hurtowa skór"],
   ["G", 46, "PKD 46.31.Z", "Sprzedaż hurtowa owoców i warzyw"],
   ["G", 46, "PKD 46.32.Z", "Sprzedaż hurtowa mięsa i wyrobów z mięsa"],
   [
      "G",
      46,
      "PKD 46.33.Z",
      "Sprzedaż hurtowa mleka, wyrobów mleczarskich, jaj, olejów i tłuszczów jadalnych"
   ],
   ["G", 46, "PKD 46.34.A", "Sprzedaż hurtowa napojów alkoholowych"],
   ["G", 46, "PKD 46.34.B", "Sprzedaż hurtowa napojów bezalkoholowych"],
   ["G", 46, "PKD 46.35.Z", "Sprzedaż hurtowa wyrobów tytoniowych"],
   [
      "G",
      46,
      "PKD 46.36.Z",
      "Sprzedaż hurtowa cukru, czekolady, wyrobów cukierniczych i piekarskich"
   ],
   ["G", 46, "PKD 46.37.Z", "Sprzedaż hurtowa herbaty, kawy, kakao i przypraw"],
   [
      "G",
      46,
      "PKD 46.38.Z",
      "Sprzedaż hurtowa pozostałej żywności, włączając ryby, skorupiaki i mięczaki"
   ],
   [
      "G",
      46,
      "PKD 46.39.Z",
      "Sprzedaż hurtowa niewyspecjalizowana żywności, napojów i wyrobów tytoniowych"
   ],
   ["G", 46, "PKD 46.41.Z", "Sprzedaż hurtowa wyrobów tekstylnych"],
   ["G", 46, "PKD 46.42.Z", "Sprzedaż hurtowa odzieży i obuwia"],
   [
      "G",
      46,
      "PKD 46.43.Z",
      "Sprzedaż hurtowa elektrycznych artykułów użytku domowego"
   ],
   [
      "G",
      46,
      "PKD 46.44.Z",
      "Sprzedaż hurtowa wyrobów porcelanowych, ceramicznych i szklanych oraz środków czyszczących"
   ],
   ["G", 46, "PKD 46.45.Z", "Sprzedaż hurtowa perfum i kosmetyków"],
   [
      "G",
      46,
      "PKD 46.46.Z",
      "Sprzedaż hurtowa wyrobów farmaceutycznych i medycznych"
   ],
   [
      "G",
      46,
      "PKD 46.47.Z",
      "Sprzedaż hurtowa mebli, dywanów i sprzętu oświetleniowego"
   ],
   ["G", 46, "PKD 46.48.Z", "Sprzedaż hurtowa zegarków, zegarów i biżuterii"],
   [
      "G",
      46,
      "PKD 46.49.Z",
      "Sprzedaż hurtowa pozostałych artykułów użytku domowego"
   ],
   [
      "G",
      46,
      "PKD 46.51.Z",
      "Sprzedaż hurtowa komputerów, urządzeń peryferyjnych i oprogramowania"
   ],
   [
      "G",
      46,
      "PKD 46.52.Z",
      "Sprzedaż hurtowa sprzętu elektronicznego i telekomunikacyjnego oraz części do niego"
   ],
   [
      "G",
      46,
      "PKD 46.61.Z",
      "Sprzedaż hurtowa maszyn i urządzeń rolniczych oraz dodatkowego wyposażenia"
   ],
   ["G", 46, "PKD 46.62.Z", "Sprzedaż hurtowa obrabiarek"],
   [
      "G",
      46,
      "PKD 46.63.Z",
      "Sprzedaż hurtowa maszyn wykorzystywanych w górnictwie, budownictwie oraz inżynierii lądowej i wodnej"
   ],
   [
      "G",
      46,
      "PKD 46.64.Z",
      "Sprzedaż hurtowa maszyn dla przemysłu tekstylnego oraz maszyn do szycia i maszyn dziewiarskich"
   ],
   ["G", 46, "PKD 46.65.Z", "Sprzedaż hurtowa mebli biurowych"],
   [
      "G",
      46,
      "PKD 46.66.Z",
      "Sprzedaż hurtowa pozostałych maszyn i urządzeń biurowych"
   ],
   ["G", 46, "PKD 46.69.Z", "Sprzedaż hurtowa pozostałych maszyn i urządzeń"],
   ["G", 46, "PKD 46.71.Z", "Sprzedaż hurtowa paliw i produktów pochodnych"],
   ["G", 46, "PKD 46.72.Z", "Sprzedaż hurtowa metali i rud metali"],
   [
      "G",
      46,
      "PKD 46.73.Z",
      "Sprzedaż hurtowa drewna, materiałów budowlanych i wyposażenia sanitarnego"
   ],
   [
      "G",
      46,
      "PKD 46.74.Z",
      "Sprzedaż hurtowa wyrobów metalowych oraz sprzętu i dodatkowego wyposażenia hydraulicznego i grzejnego"
   ],
   ["G", 46, "PKD 46.75.Z", "Sprzedaż hurtowa wyrobów chemicznych"],
   ["G", 46, "PKD 46.76.Z", "Sprzedaż hurtowa pozostałych półproduktów"],
   ["G", 46, "PKD 46.77.Z", "Sprzedaż hurtowa odpadów i złomu"],
   ["G", 46, "PKD 46.90.Z", "Sprzedaż hurtowa niewyspecjalizowana"],
   [
      "G",
      47,
      "PKD 47.11.Z",
      "Sprzedaż detaliczna prowadzona w niewyspecjalizowanych sklepach z przewagą żywności, napojów i wyrobów tytoniowych"
   ],
   [
      "G",
      47,
      "PKD 47.19.Z",
      "Pozostała sprzedaż detaliczna prowadzona w niewyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.21.Z",
      "Sprzedaż detaliczna owoców i warzyw prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.22.Z",
      "Sprzedaż detaliczna mięsa i wyrobów z mięsa prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.23.Z",
      "Sprzedaż detaliczna ryb, skorupiaków i mięczaków prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.24.Z",
      "Sprzedaż detaliczna pieczywa, ciast, wyrobów ciastkarskich i cukierniczych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.25.Z",
      "Sprzedaż detaliczna napojów alkoholowych i bezalkoholowych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.26.Z",
      "Sprzedaż detaliczna wyrobów tytoniowych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.29.Z",
      "Sprzedaż detaliczna pozostałej żywności prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.30.Z",
      "Sprzedaż detaliczna paliw do pojazdów silnikowych na stacjach paliw"
   ],
   [
      "G",
      47,
      "PKD 47.41.Z",
      "Sprzedaż detaliczna komputerów, urządzeń peryferyjnych i oprogramowania prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.42.Z",
      "Sprzedaż detaliczna sprzętu telekomunikacyjnego prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.43.Z",
      "Sprzedaż detaliczna sprzętu audiowizualnego prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.51.Z",
      "Sprzedaż detaliczna wyrobów tekstylnych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.52.Z",
      "Sprzedaż detaliczna drobnych wyrobów metalowych, farb i szkła prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.53.Z",
      "Sprzedaż detaliczna dywanów, chodników i innych pokryć podłogowych oraz pokryć ściennych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.54.Z",
      "Sprzedaż detaliczna elektrycznego sprzętu gospodarstwa domowego prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.59.Z",
      "Sprzedaż detaliczna mebli, sprzętu oświetleniowego i pozostałych artykułów użytku domowego prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.61.Z",
      "Sprzedaż detaliczna książek prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.62.Z",
      "Sprzedaż detaliczna gazet i artykułów piśmiennych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.63.Z",
      "Sprzedaż detaliczna nagrań dźwiękowych i audiowizualnych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.64.Z",
      "Sprzedaż detaliczna sprzętu sportowego prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.65.Z",
      "Sprzedaż detaliczna gier i zabawek prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.71.Z",
      "Sprzedaż detaliczna odzieży prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.72.Z",
      "Sprzedaż detaliczna obuwia i wyrobów skórzanych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.73.Z",
      "Sprzedaż detaliczna wyrobów farmaceutycznych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.74.Z",
      "Sprzedaż detaliczna wyrobów medycznych, włączając ortopedyczne, prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.75.Z",
      "Sprzedaż detaliczna kosmetyków i artykułów toaletowych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.76.Z",
      "Sprzedaż detaliczna kwiatów, roślin, nasion, nawozów, żywych zwierząt domowych, karmy dla zwierząt domowych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.77.Z",
      "Sprzedaż detaliczna zegarków, zegarów i biżuterii prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.78.Z",
      "Sprzedaż detaliczna pozostałych nowych wyrobów prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.79.Z",
      "Sprzedaż detaliczna artykułów używanych prowadzona w wyspecjalizowanych sklepach"
   ],
   [
      "G",
      47,
      "PKD 47.81.Z",
      "Sprzedaż detaliczna żywności, napojów i wyrobów tytoniowych prowadzona na straganach i targowiskach"
   ],
   [
      "G",
      47,
      "PKD 47.82.Z",
      "Sprzedaż detaliczna wyrobów tekstylnych, odzieży i obuwia prowadzona na straganach i targowiskach"
   ],
   [
      "G",
      47,
      "PKD 47.89.Z",
      "Sprzedaż detaliczna pozostałych wyrobów prowadzona na straganach i targowiskach"
   ],
   [
      "G",
      47,
      "PKD 47.91.Z",
      "Sprzedaż detaliczna prowadzona przez domy sprzedaży wysyłkowej lub Internet"
   ],
   [
      "G",
      47,
      "PKD 47.99.Z",
      "Pozostała sprzedaż detaliczna prowadzona poza siecią sklepową, straganami i targowiskami"
   ],
   ["H", 49, "PKD 49.10.Z", "Transport kolejowy pasażerski międzymiastowy"],
   ["H", 49, "PKD 49.20.Z", "Transport kolejowy towarów"],
   [
      "H",
      49,
      "PKD 49.31.Z",
      "Transport lądowy pasażerski, miejski i podmiejski"
   ],
   ["H", 49, "PKD 49.32.Z", "Działalność taksówek osobowych"],
   [
      "H",
      49,
      "PKD 49.39.Z",
      "Pozostały transport lądowy pasażerski, gdzie indziej niesklasyfikowany"
   ],
   ["H", 49, "PKD 49.41.Z", "Transport drogowy towarów"],
   ["H", 49, "PKD 49.42.Z", "Działalność usługowa związana z przeprowadzkami"],
   ["H", 49, "PKD 49.50.A", "Transport rurociągami paliw gazowych"],
   ["H", 49, "PKD 49.50.B", "Transport rurociągowy pozostałych towarów"],
   ["H", 50, "PKD 50.10.Z", "Transport morski i przybrzeżny pasażerski"],
   ["H", 50, "PKD 50.20.Z", "Transport morski i przybrzeżny towarów"],
   ["H", 50, "PKD 50.30.Z", "Transport wodny śródlądowy pasażerski"],
   ["H", 50, "PKD 50.40.Z", "Transport wodny śródlądowy towarów"],
   ["H", 51, "PKD 51.10.Z", "Transport lotniczy pasażerski"],
   ["H", 51, "PKD 51.21.Z", "Transport lotniczy towarów"],
   ["H", 51, "PKD 51.22.Z", "Transport kosmiczny"],
   ["H", 52, "PKD 52.10.A", "Magazynowanie i przechowywanie paliw gazowych"],
   [
      "H",
      52,
      "PKD 52.10.B",
      "Magazynowanie i przechowywanie pozostałych towarów"
   ],
   [
      "H",
      52,
      "PKD 52.21.Z",
      "Działalność usługowa wspomagająca transport lądowy"
   ],
   [
      "H",
      52,
      "PKD 52.22.A",
      "Działalność usługowa wspomagająca transport morski"
   ],
   [
      "H",
      52,
      "PKD 52.22.B",
      "Działalność usługowa wspomagająca transport śródlądowy"
   ],
   [
      "H",
      52,
      "PKD 52.23.Z",
      "Działalność usługowa wspomagająca transport lotniczy"
   ],
   ["H", 52, "PKD 52.24.A", "Przeładunek towarów w portach morskich"],
   ["H", 52, "PKD 52.24.B", "Przeładunek towarów w portach śródlądowych"],
   [
      "H",
      52,
      "PKD 52.24.C",
      "Przeładunek towarów w pozostałych punktach przeładunkowych"
   ],
   ["H", 52, "PKD 52.29.A", "Działalność morskich agencji transportowych"],
   ["H", 52, "PKD 52.29.B", "Działalność śródlądowych agencji transportowych"],
   ["H", 52, "PKD 52.29.C", "Działalność pozostałych agencji transportowych"],
   [
      "H",
      53,
      "PKD 53.10.Z",
      "Działalność pocztowa objęta obowiązkiem świadczenia usług powszechnych (operatora publicznego)"
   ],
   ["H", 53, "PKD 53.20.Z", "Pozostała działalność pocztowa i kurierska"],
   ["I", 55, "PKD 55.10.Z", "Hotele i podobne obiekty zakwaterowania"],
   [
      "I",
      55,
      "PKD 55.20.Z",
      "Obiekty noclegowe turystyczne i miejsca krótkotrwałego zakwaterowania"
   ],
   [
      "I",
      55,
      "PKD 55.30.Z",
      "Pola kempingowe (włączając pola dla pojazdów kempingowych) i pola namiotowe"
   ],
   ["I", 55, "PKD 55.90.Z", "Pozostałe zakwaterowanie"],
   ["I", 56, "PKD 56.10.A", "Restauracje i inne stałe placówki gastronomiczne"],
   ["I", 56, "PKD 56.10.B", "Ruchome placówki gastronomiczne"],
   [
      "I",
      56,
      "PKD 56.21.Z",
      "Przygotowywanie i dostarczanie żywności dla odbiorców zewnętrznych (katering)"
   ],
   ["I", 56, "PKD 56.29.Z", "Pozostała usługowa działalność gastronomiczna"],
   ["I", 56, "PKD 56.30.Z", "Przygotowywanie i podawanie napojów"],
   ["J", 58, "PKD 58.11.Z", "Wydawanie książek"],
   [
      "J",
      58,
      "PKD 58.12.Z",
      "Wydawanie wykazów oraz list (np. adresowych, telefonicznych)"
   ],
   ["J", 58, "PKD 58.13.Z", "Wydawanie gazet"],
   ["J", 58, "PKD 58.14.Z", "Wydawanie czasopism i pozostałych periodyków"],
   ["J", 58, "PKD 58.19.Z", "Pozostała działalność wydawnicza"],
   [
      "J",
      58,
      "PKD 58.21.Z",
      "Działalność wydawnicza w zakresie gier komputerowych"
   ],
   [
      "J",
      58,
      "PKD 58.29.Z",
      "Działalność wydawnicza w zakresie pozostałego oprogramowania"
   ],
   [
      "J",
      59,
      "PKD 59.11.Z",
      "Działalność związana z produkcją filmów, nagrań wideo i programów telewizyjnych"
   ],
   [
      "J",
      59,
      "PKD 59.12.Z",
      "Działalność postprodukcyjna związana z filmami, nagraniami wideo i programami telewizyjnymi"
   ],
   [
      "J",
      59,
      "PKD 59.13.Z",
      "Działalność związana z dystrybucją filmów, nagrań wideo i programów telewizyjnych"
   ],
   ["J", 59, "PKD 59.14.Z", "Działalność związana z projekcją filmów"],
   [
      "J",
      59,
      "PKD 59.20.Z",
      "Działalność w zakresie nagrań dźwiękowych i muzycznych"
   ],
   ["J", 60, "PKD 60.10.Z", "Nadawanie programów radiofonicznych"],
   [
      "J",
      60,
      "PKD 60.20.Z",
      "Nadawanie programów telewizyjnych ogólnodostępnych i abonamentowych"
   ],
   [
      "J",
      61,
      "PKD 61.10.Z",
      "Działalność w zakresie telekomunikacji przewodowej"
   ],
   [
      "J",
      61,
      "PKD 61.20.Z",
      "Działalność w zakresie telekomunikacji bezprzewodowej, z wyłączeniem telekomunikacji satelitarnej"
   ],
   [
      "J",
      61,
      "PKD 61.30.Z",
      "Działalność w zakresie telekomunikacji satelitarnej"
   ],
   [
      "J",
      61,
      "PKD 61.90.Z",
      "Działalność w zakresie pozostałej telekomunikacji"
   ],
   ["J", 62, "PKD 62.01.Z", "Działalność związana z oprogramowaniem"],
   [
      "J",
      62,
      "PKD 62.02.Z",
      "Działalność związana z doradztwem w zakresie informatyki"
   ],
   [
      "J",
      62,
      "PKD 62.03.Z",
      "Działalność związana z zarządzaniem urządzeniami informatycznymi"
   ],
   [
      "J",
      62,
      "PKD 62.09.Z",
      "Pozostała działalność usługowa w zakresie technologii informatycznych i komputerowych"
   ],
   [
      "J",
      63,
      "PKD 63.11.Z",
      "Przetwarzanie danych; zarządzanie stronami internetowymi (hosting) i podobna działalność"
   ],
   ["J", 63, "PKD 63.12.Z", "Działalność portali internetowych"],
   ["J", 63, "PKD 63.91.Z", "Działalność agencji informacyjnych"],
   [
      "J",
      63,
      "PKD 63.99.Z",
      "Pozostała działalność usługowa w zakresie informacji, gdzie indziej niesklasyfikowana"
   ],
   ["K", 64, "PKD 64.11.Z", "Działalność banku centralnego"],
   ["K", 64, "PKD 64.19.Z", "Pozostałe pośrednictwo pieniężne"],
   ["K", 64, "PKD 64.20.Z", "Działalność holdingów finansowych"],
   [
      "K",
      64,
      "PKD 64.30.Z",
      "Działalność trustów, funduszów i podobnych instytucji finansowych"
   ],
   ["K", 64, "PKD 64.91.Z", "Leasing finansowy"],
   ["K", 64, "PKD 64.92.Z", "Pozostałe formy udzielania kredytów"],
   [
      "K",
      64,
      "PKD 64.99.Z",
      "Pozostała finansowa działalność usługowa, gdzie indziej niesklasyfikowana, z wyłączeniem ubezpieczeń i funduszów emerytalnych"
   ],
   ["K", 65, "PKD 65.11.Z", "Ubezpieczenia na życie"],
   [
      "K",
      65,
      "PKD 65.12.Z",
      "Pozostałe ubezpieczenia osobowe oraz ubezpieczenia majątkowe"
   ],
   ["K", 65, "PKD 65.20.Z", "Reasekuracja"],
   ["K", 65, "PKD 65.30.Z", "Fundusze emerytalne"],
   ["K", 66, "PKD 66.11.Z", "Zarządzanie rynkami finansowymi"],
   [
      "K",
      66,
      "PKD 66.12.Z",
      "Działalność maklerska związana z rynkiem papierów wartościowych i towarów giełdowych"
   ],
   [
      "K",
      66,
      "PKD 66.19.Z",
      "Pozostała działalność wspomagająca usługi finansowe, z wyłączeniem ubezpieczeń i funduszów emerytalnych"
   ],
   [
      "K",
      66,
      "PKD 66.21.Z",
      "Działalność związana z oceną ryzyka i szacowaniem poniesionych strat"
   ],
   ["K", 66, "PKD 66.22.Z", "Działalność agentów i brokerów ubezpieczeniowych"],
   [
      "K",
      66,
      "PKD 66.29.Z",
      "Pozostała działalność wspomagająca ubezpieczenia i fundusze emerytalne"
   ],
   ["K", 66, "PKD 66.30.Z", "Działalność związana z zarządzaniem funduszami"],
   [
      "L",
      68,
      "PKD 68.10.Z",
      "Kupno i sprzedaż nieruchomości na własny rachunek"
   ],
   [
      "L",
      68,
      "PKD 68.20.Z",
      "Wynajem i zarządzanie nieruchomościami własnymi lub dzierżawionymi"
   ],
   ["L", 68, "PKD 68.31.Z", "Pośrednictwo w obrocie nieruchomościami"],
   [
      "L",
      68,
      "PKD 68.32.Z",
      "Zarządzanie nieruchomościami wykonywane na zlecenie"
   ],
   ["M", 69, "PKD 69.10.Z", "Działalność prawnicza"],
   [
      "M",
      69,
      "PKD 69.20.Z",
      "Działalność rachunkowo-księgowa; doradztwo podatkowe"
   ],
   [
      "M",
      70,
      "PKD 70.10.Z",
      "Działalność firm centralnych (head offices) i holdingów, z wyłączeniem holdingów finansowych"
   ],
   [
      "M",
      70,
      "PKD 70.21.Z",
      "Stosunki międzyludzkie (public relations) i komunikacja"
   ],
   [
      "M",
      70,
      "PKD 70.22.Z",
      "Pozostałe doradztwo w zakresie prowadzenia działalności gospodarczej i zarządzania"
   ],
   ["M", 71, "PKD 71.11.Z", "Działalność w zakresie architektury"],
   [
      "M",
      71,
      "PKD 71.12.Z",
      "Działalność w zakresie inżynierii i związane z nią doradztwo techniczne"
   ],
   ["M", 71, "PKD 71.20.A", "Badania i analizy związane z jakością żywności"],
   ["M", 71, "PKD 71.20.B", "Pozostałe badania i analizy techniczne"],
   [
      "M",
      72,
      "PKD 72.11.Z",
      "Badania naukowe i prace rozwojowe w dziedzinie biotechnologii"
   ],
   [
      "M",
      72,
      "PKD 72.19.Z",
      "Badania naukowe i prace rozwojowe w dziedzinie pozostałych nauk przyrodniczych i technicznych"
   ],
   [
      "M",
      72,
      "PKD 72.20.Z",
      "Badania naukowe i prace rozwojowe w dziedzinie nauk społecznych i humanistycznych"
   ],
   ["M", 73, "PKD 73.11.Z", "Działalność agencji reklamowych"],
   [
      "M",
      73,
      "PKD 73.12.A",
      "Pośrednictwo w sprzedaży czasu i miejsca na cele reklamowe w radio i telewizji"
   ],
   [
      "M",
      73,
      "PKD 73.12.B",
      "Pośrednictwo w sprzedaży miejsca na cele reklamowe w mediach drukowanych"
   ],
   [
      "M",
      73,
      "PKD 73.12.C",
      "Pośrednictwo w sprzedaży miejsca na cele reklamowe w mediach elektronicznych (Internet)"
   ],
   [
      "M",
      73,
      "PKD 73.12.D",
      "Pośrednictwo w sprzedaży miejsca na cele reklamowe w pozostałych mediach"
   ],
   ["M", 73, "PKD 73.20.Z", "Badanie rynku i opinii publicznej"],
   [
      "M",
      74,
      "PKD 74.10.Z",
      "Działalność w zakresie specjalistycznego projektowania"
   ],
   ["M", 74, "PKD 74.20.Z", "Działalność fotograficzna"],
   ["M", 74, "PKD 74.30.Z", "Działalność związana z tłumaczeniami"],
   [
      "M",
      74,
      "PKD 74.90.Z",
      "Pozostała działalność profesjonalna, naukowa i techniczna, gdzie indziej niesklasyfikowana"
   ],
   ["M", 75, "PKD 75.00.Z", "DZIAŁALNOŚĆ WETERYNARYJNA"],
   [
      "N",
      77,
      "PKD 77.11.Z",
      "Wynajem i dzierżawa samochodów osobowych i furgonetek"
   ],
   [
      "N",
      77,
      "PKD 77.12.Z",
      "Wynajem i dzierżawa pozostałych pojazdów samochodowych, z wyłączeniem motocykli"
   ],
   [
      "N",
      77,
      "PKD 77.21.Z",
      "Wypożyczanie i dzierżawa sprzętu rekreacyjnego i sportowego"
   ],
   ["N", 77, "PKD 77.22.Z", "Wypożyczanie kaset wideo, płyt CD, DVD itp."],
   [
      "N",
      77,
      "PKD 77.29.Z",
      "Wypożyczanie i dzierżawa pozostałych artykułów użytku osobistego i domowego"
   ],
   ["N", 77, "PKD 77.31.Z", "Wynajem i dzierżawa maszyn i urządzeń rolniczych"],
   [
      "N",
      77,
      "PKD 77.32.Z",
      "Wynajem i dzierżawa maszyn i urządzeń budowlanych"
   ],
   [
      "N",
      77,
      "PKD 77.33.Z",
      "Wynajem i dzierżawa maszyn i urządzeń biurowych, włączając komputery"
   ],
   ["N", 77, "PKD 77.34.Z", "Wynajem i dzierżawa środków transportu wodnego"],
   [
      "N",
      77,
      "PKD 77.35.Z",
      "Wynajem i dzierżawa środków transportu lotniczego"
   ],
   [
      "N",
      77,
      "PKD 77.39.Z",
      "Wynajem i dzierżawa pozostałych maszyn, urządzeń oraz dóbr materialnych, gdzie indziej niesklasyfikowane"
   ],
   [
      "N",
      77,
      "PKD 77.40.Z",
      "Dzierżawa własności intelektualnej i podobnych produktów, z wyłączeniem prac chronionych prawem autorskim"
   ],
   [
      "N",
      78,
      "PKD 78.10.Z",
      "Działalność związana z wyszukiwaniem miejsc pracy i pozyskiwaniem pracowników"
   ],
   ["N", 78, "PKD 78.20.Z", "Działalność agencji pracy tymczasowej"],
   [
      "N",
      78,
      "PKD 78.30.Z",
      "Pozostała działalność związana z udostępnianiem pracowników"
   ],
   ["N", 79, "PKD 79.11.A", "Działalność agentów turystycznych"],
   ["N", 79, "PKD 79.11.B", "Działalność pośredników turystycznych"],
   ["N", 79, "PKD 79.12.Z", "Działalność organizatorów turystyki"],
   [
      "N",
      79,
      "PKD 79.90.A",
      "Działalność pilotów wycieczek i przewodników turystycznych"
   ],
   ["N", 79, "PKD 79.90.B", "Działalność w zakresie informacji turystycznej"],
   [
      "N",
      79,
      "PKD 79.90.C",
      "Pozostała działalność usługowa w zakresie rezerwacji, gdzie indziej niesklasyfikowana"
   ],
   [
      "N",
      80,
      "PKD 80.10.Z",
      "Działalność ochroniarska, z wyłączeniem obsługi systemów bezpieczeństwa"
   ],
   [
      "N",
      80,
      "PKD 80.20.Z",
      "Działalność ochroniarska w zakresie obsługi systemów bezpieczeństwa"
   ],
   ["N", 80, "PKD 80.30.Z", "Działalność detektywistyczna"],
   [
      "N",
      81,
      "PKD 81.10.Z",
      "Działalność pomocnicza związana z utrzymaniem porządku w budynkach"
   ],
   [
      "N",
      81,
      "PKD 81.21.Z",
      "Niespecjalistyczne sprzątanie budynków i obiektów przemysłowych"
   ],
   [
      "N",
      81,
      "PKD 81.22.Z",
      "Specjalistyczne sprzątanie budynków i obiektów przemysłowych"
   ],
   ["N", 81, "PKD 81.29.Z", "Pozostałe sprzątanie"],
   [
      "N",
      81,
      "PKD 81.30.Z",
      "Działalność usługowa związana z zagospodarowaniem terenów zieleni"
   ],
   [
      "N",
      82,
      "PKD 82.11.Z",
      "Działalność usługowa związana z administracyjną obsługą biura"
   ],
   [
      "N",
      82,
      "PKD 82.19.Z",
      "Wykonywanie fotokopii, przygotowywanie dokumentów i pozostała specjalistyczna działalność wspomagająca prowadzenie biura"
   ],
   ["N", 82, "PKD 82.20.Z", "Działalność centrów telefonicznych (call center)"],
   [
      "N",
      82,
      "PKD 82.30.Z",
      "Działalność związana z organizacją targów, wystaw i kongresów"
   ],
   [
      "N",
      82,
      "PKD 82.91.Z",
      "Działalność świadczona przez agencje inkasa i biura kredytowe"
   ],
   ["N", 82, "PKD 82.92.Z", "Działalność związana z pakowaniem"],
   [
      "N",
      82,
      "PKD 82.99.Z",
      "Pozostała działalność wspomagająca prowadzenie działalności gospodarczej, gdzie indziej niesklasyfikowana"
   ],
   [
      "O",
      84,
      "PKD 84.11.Z",
      "Kierowanie podstawowymi rodzajami działalności publicznej"
   ],
   [
      "O",
      84,
      "PKD 84.12.Z",
      "Kierowanie w zakresie działalności związanej z ochroną zdrowia, edukacją, kulturą oraz pozostałymi usługami społecznymi, z wyłączeniem zabezpieczeń społecznych"
   ],
   [
      "O",
      84,
      "PKD 84.13.Z",
      "Kierowanie w zakresie efektywności gospodarowania"
   ],
   ["O", 84, "PKD 84.21.Z", "Sprawy zagraniczne"],
   ["O", 84, "PKD 84.22.Z", "Obrona narodowa"],
   ["O", 84, "PKD 84.23.Z", "Wymiar sprawiedliwości"],
   [
      "O",
      84,
      "PKD 84.24.Z",
      "Bezpieczeństwo państwa, porządek i bezpieczeństwo publiczne"
   ],
   ["O", 84, "PKD 84.25.Z", "Ochrona przeciwpożarowa"],
   ["O", 84, "PKD 84.30.Z", "Obowiązkowe zabezpieczenia społeczne"],
   ["P", 85, "PKD 85.10.Z", "Wychowanie przedszkolne"],
   ["P", 85, "PKD 85.20.Z", "Szkoły podstawowe"],
   ["P", 85, "PKD 85.31.A", "Gimnazja"],
   ["P", 85, "PKD 85.31.B", "Licea ogólnokształcące"],
   ["P", 85, "PKD 85.31.C", "Licea profilowane"],
   ["P", 85, "PKD 85.32.A", "Technika"],
   ["P", 85, "PKD 85.32.B", "Zasadnicze szkoły zawodowe"],
   ["P", 85, "PKD 85.32.C", "Szkoły specjalne przysposabiające do pracy"],
   ["P", 85, "PKD 85.41.Z", "Szkoły policealne"],
   [
      "P",
      85,
      "PKD 85.42.A",
      "Zakłady kształcenia nauczycieli i kolegia pracowników służb społecznych"
   ],
   ["P", 85, "PKD 85.42.B", "Szkoły wyższe"],
   [
      "P",
      85,
      "PKD 85.51.Z",
      "Pozaszkolne formy edukacji sportowej oraz zajęć sportowych i rekreacyjnych"
   ],
   ["P", 85, "PKD 85.52.Z", "Pozaszkolne formy edukacji artystycznej"],
   [
      "P",
      85,
      "PKD 85.53.Z",
      "Pozaszkolne formy edukacji z zakresu nauki jazdy i pilotażu"
   ],
   ["P", 85, "PKD 85.59.A", "Nauka języków obcych"],
   [
      "P",
      85,
      "PKD 85.59.B",
      "Pozostałe pozaszkolne formy edukacji, gdzie indziej niesklasyfikowane"
   ],
   ["P", 85, "PKD 85.60.Z", "Działalność wspomagająca edukację"],
   ["Q", 86, "PKD 86.10.Z", "Działalność szpitali"],
   ["Q", 86, "PKD 86.21.Z", "Praktyka lekarska ogólna"],
   ["Q", 86, "PKD 86.22.Z", "Praktyka lekarska specjalistyczna"],
   ["Q", 86, "PKD 86.23.Z", "Praktyka lekarska dentystyczna"],
   ["Q", 86, "PKD 86.90.A", "Działalność fizjoterapeutyczna"],
   ["Q", 86, "PKD 86.90.B", "Działalność pogotowia ratunkowego"],
   ["Q", 86, "PKD 86.90.C", "Praktyka pielęgniarek i położnych"],
   ["Q", 86, "PKD 86.90.D", "Działalność paramedyczna"],
   [
      "Q",
      86,
      "PKD 86.90.E",
      "Pozostała działalność w zakresie opieki zdrowotnej, gdzie indziej niesklasyfikowana"
   ],
   [
      "Q",
      87,
      "PKD 87.10.Z",
      "Pomoc społeczna z zakwaterowaniem zapewniająca opiekę pielęgniarską"
   ],
   [
      "Q",
      87,
      "PKD 87.20.Z",
      "Pomoc społeczna z zakwaterowaniem dla osób z zaburzeniami psychicznymi"
   ],
   [
      "Q",
      87,
      "PKD 87.30.Z",
      "Pomoc społeczna z zakwaterowaniem dla osób w podeszłym wieku i osób niepełnosprawnych"
   ],
   ["Q", 87, "PKD 87.90.Z", "Pozostała pomoc społeczna z zakwaterowaniem"],
   [
      "Q",
      88,
      "PKD 88.10.Z",
      "Pomoc społeczna bez zakwaterowania dla osób w podeszłym wieku i osób niepełnosprawnych"
   ],
   ["Q", 88, "PKD 88.91.Z", "Opieka dzienna nad dziećmi"],
   [
      "Q",
      88,
      "PKD 88.99.Z",
      "Pozostała pomoc społeczna bez zakwaterowania, gdzie indziej niesklasyfikowana"
   ],
   [
      "R",
      90,
      "PKD 90.01.Z",
      "Działalność związana z wystawianiem przedstawień artystycznych"
   ],
   [
      "R",
      90,
      "PKD 90.02.Z",
      "Działalność wspomagająca wystawianie przedstawień artystycznych"
   ],
   ["R", 90, "PKD 90.03.Z", "Artystyczna i literacka działalność twórcza"],
   ["R", 90, "PKD 90.04.Z", "Działalność obiektów kulturalnych"],
   ["R", 91, "PKD 91.01.A", "Działalność bibliotek"],
   ["R", 91, "PKD 91.01.B", "Działalność archiwów"],
   ["R", 91, "PKD 91.02.Z", "Działalność muzeów"],
   [
      "R",
      91,
      "PKD 91.03.Z",
      "Działalność historycznych miejsc i budynków oraz podobnych atrakcji turystycznych"
   ],
   [
      "R",
      91,
      "PKD 91.04.Z",
      "Działalność ogrodów botanicznych i zoologicznych oraz obszarów i obiektów ochrony przyrody"
   ],
   [
      "R",
      92,
      "PKD 92.00.Z",
      "DZIAŁALNOŚĆ ZWIĄZANA Z GRAMI LOSOWYMI I ZAKŁADAMI WZAJEMNYMI"
   ],
   ["R", 93, "PKD 93.11.Z", "Działalność obiektów sportowych"],
   ["R", 93, "PKD 93.12.Z", "Działalność klubów sportowych"],
   [
      "R",
      93,
      "PKD 93.13.Z",
      "Działalność obiektów służących poprawie kondycji fizycznej"
   ],
   ["R", 93, "PKD 93.19.Z", "Pozostała działalność związana ze sportem"],
   [
      "R",
      93,
      "PKD 93.21.Z",
      "Działalność wesołych miasteczek i parków rozrywki"
   ],
   ["R", 93, "PKD 93.29.Z", "Pozostała działalność rozrywkowa i rekreacyjna"],
   [
      "S",
      94,
      "PKD 94.11.Z",
      "Działalność organizacji komercyjnych i pracodawców"
   ],
   ["S", 94, "PKD 94.12.Z", "Działalność organizacji profesjonalnych"],
   ["S", 94, "PKD 94.20.Z", "Działalność związków zawodowych"],
   ["S", 94, "PKD 94.91.Z", "Działalność organizacji religijnych"],
   ["S", 94, "PKD 94.92.Z", "Działalność organizacji politycznych"],
   [
      "S",
      94,
      "PKD 94.99.Z",
      "Działalność pozostałych organizacji członkowskich, gdzie indziej niesklasyfikowana"
   ],
   [
      "S",
      95,
      "PKD 95.11.Z",
      "Naprawa i konserwacja komputerów i urządzeń peryferyjnych"
   ],
   [
      "S",
      95,
      "PKD 95.12.Z",
      "Naprawa i konserwacja sprzętu (tele)komunikacyjnego"
   ],
   [
      "S",
      95,
      "PKD 95.21.Z",
      "Naprawa i konserwacja elektronicznego sprzętu powszechnego użytku"
   ],
   [
      "S",
      95,
      "PKD 95.22.Z",
      "Naprawa i konserwacja urządzeń gospodarstwa domowego oraz sprzętu użytku domowego i ogrodniczego"
   ],
   ["S", 95, "PKD 95.23.Z", "Naprawa obuwia i wyrobów skórzanych"],
   [
      "S",
      95,
      "PKD 95.24.Z",
      "Naprawa i konserwacja mebli i wyposażenia domowego"
   ],
   ["S", 95, "PKD 95.25.Z", "Naprawa zegarów, zegarków oraz biżuterii"],
   [
      "S",
      95,
      "PKD 95.29.Z",
      "Naprawa pozostałych artykułów użytku osobistego i domowego"
   ],
   [
      "S",
      96,
      "PKD 96.01.Z",
      "Pranie i czyszczenie wyrobów włókienniczych i futrzarskich"
   ],
   ["S", 96, "PKD 96.02.Z", "Fryzjerstwo i pozostałe zabiegi kosmetyczne"],
   ["S", 96, "PKD 96.03.Z", "Pogrzeby i działalność pokrewna"],
   [
      "S",
      96,
      "PKD 96.04.Z",
      "Działalność usługowa związana z poprawą kondycji fizycznej"
   ],
   [
      "S",
      96,
      "PKD 96.09.Z",
      "Pozostała działalność usługowa, gdzie indziej niesklasyfikowana"
   ],
   ["T", 97, "PKD 97.00.Z", "GOSPODARSTWA DOMOWE ZATRUDNIAJĄCE PRACOWNIKÓW"],
   [
      "T",
      98,
      "PKD 98.10.Z",
      "Gospodarstwa domowe produkujące wyroby na własne potrzeby"
   ],
   [
      "T",
      98,
      "PKD 98.20.Z",
      "Gospodarstwa domowe świadczące usługi na własne potrzeby"
   ],
   ["U", 99, "PKD 99.00.Z", "ORGANIZACJE I ZESPOŁY EKSTERYTORIALNE"]
];

//BASE AMOUNT
const setBase = () => {
   stawka_bazowa = bazowa.value * 1;
};

button_base.addEventListener("click", setBase);

// SCROLL ANIMATION ON SMALL SCREEN
const animateScroll = () => {
   if (window.outerWidth < 1070) {
      const ScrollValue = div_right.offsetTop - 50;
      let position = 0;
      const clear = setInterval(() => {
         window.scrollTo(0, position);
         position += 8;
         if (position > ScrollValue) clearInterval(clear);
      }, 5);
   } else return;
};

const handleClick = e => {
   e.preventDefault();
   const result = pkdArray.find(item => item[2] === pkd);

   date = new Date().toLocaleString();

   if (result[0] === "A" || result[0] === "B" || result[0] === "C") {
      wspolczynnik = 0.8;
   } else if (result[0] === "D" || result[0] === "E" || result[0] === "F") {
      wspolczynnik = 1;
   } else if (result[0] === "G" || result[0] === "H" || result[0] === "I") {
      wspolczynnik = 1.5;
   } else {
      wspolczynnik = 2.25;
   }

   td_wyliczenie.textContent = company;
   td_data.textContent = date;
   td_pkd.textContent = result[3];
   td_bazowa.textContent = `${stawka_bazowa} zł`;
   td_wspolczynnik.textContent = wspolczynnik;
   td_final.textContent = (stawka_bazowa * wspolczynnik).toFixed(2) + " zł";
   div_right.style.display = "block";
   div_right.classList.remove("zoomOutDown");
   div_right.classList.add("animated", "bounceInRight");
   animateScroll();
};

button_html.addEventListener("click", handleClick);

const handleReset = () => {
   const unmountDiv = () => {
      div_right.style.display = "none";
   };

   setTimeout(unmountDiv, 1000);

   div_right.classList.remove("animated", "bounceInRight");
   div_right.classList.add("animated", "zoomOutDown");
   name = "";
   surname = "";
   company = "";
   pkd = "";
   stawka_bazowa = 1258;
   date = "";
   wspolczynnik = "";
   final = "";
   name_html.value = "";
   surname_html.value = "";
   company_html.value = "";
   pkdNo_html.value = "";
};

reset.addEventListener("click", handleReset);

const ownHide = () => {
   const div_changeBase = document.querySelector("div.change-base");
   div_changeBase.style.left = -180 + "px";
   setTimeout(() => {
      div_changeBase.style.left = "";
   }, 500);
   const popUp = document.querySelector("div.popup");
   const popUpBase = document.querySelector("div.popup > p.base");
   popUpBase.textContent = `${stawka_bazowa} zł`;
   popUp.classList.add("active");
   setTimeout(() => {
      popUp.classList.remove("active");
   }, 2500);
};

button_own.addEventListener("click", ownHide);

//// classes animated and jackInTheBox
