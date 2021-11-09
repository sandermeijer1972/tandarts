const dentists = [
  {first_name: "Emiel", last_name: "Zeijen", gender: "male", region: "Netherlands"},
  {first_name: "Reza", last_name: "Naserkhaki", gender: "male", region: "Netherlands"},
  {first_name: "Julia", last_name: "van Putten", gender: "female", region: "Netherlands"},
  {first_name: "Roos", last_name: "Bol", gender: "female", region: "Netherlands"}
];

const assistents = [
  {first_name: "Bep", last_name: "van Klaveren", gender: "female", region: "Netherlands"},
  {first_name: "Truus", last_name: "Lauwers", gender: "female", region: "Netherlands"},
  {first_name: "geen", last_name: ""}
];

const names = [
  {id: 1, first_name: "Herman", last_name: "de Boer", email: "hdeboer57@hetnet.nl", mobile: "06-90528326", year_of_birth: 1957, sick: false},
  {id: 2, first_name: "Sjaak", last_name: "Sassen", email: "sjaak123@hotmail.com", mobile: "06-11342569", year_of_birth: 1968, sick: false},
  {id: 3, first_name: "Wilma", last_name: "Janssen", email: "wmh.janssen@xs4all.nl", mobile: "06-78564577", year_of_birth: 1973, sick: false},
  {id: 4, first_name: "Ronald", last_name: "Koster", email: "ronnieponnie@hotmail.com", mobile: "06-11256633", year_of_birth: 1980, sick: false},
  {id: 5, first_name: "Thérèse", last_name: "de Bruin", email: "tdbruin@planet.nl", mobile: "06-45857447", year_of_birth: 1971, sick: false},
  {id: 6, first_name: "Karin", last_name: "van der Veen", email: "karinvdveen@gmail.com", mobile: "06-11223358", year_of_birth: 1983, sick: false},
  {id: 7, first_name: "John", last_name: "Uitdenbosch", email: "johndenbosch", mobile: "06-55158896", year_of_birth: 1975, sick: false},
  {id: 8, first_name: "Mohammed", last_name: "El Zafzafi", email: "mo_zafzafi@gmail.com", mobile: "06-12385299", year_of_birth: 1986, sick: false},
  {id: 9, first_name: "Anna", last_name: "Aalbers", email: "annaaalbers94@hotmail.com", mobile: "06-45731596", year_of_birth: 1994, sick: false},
  {id: 10, first_name: "Sonja", last_name: "Meulendijk", email: "s.meulendijk@ziggo.nl", mobile: "06-23143689", year_of_birth: 1972, sick: false},
  {id: 11, first_name: "Robert", last_name: "Hartgerink", email: "robhart@live.nl", mobile: "06-14587413", year_of_birth: 1969, sick: false},
  {id: 12, first_name: "Mathijs", last_name: "de Ruiter", email: "mdruiter93@hotmail.com", mobile: "06-45214789", year_of_birth: 1993, sick: false},
  {id: 13, first_name: "Emma", last_name: "Steen", email: "steen_emma@gmail.com", mobile: "06-65258711", year_of_birth: 1999, sick: false},
  {id: 14, first_name: "Hester", last_name: "den Breejen", email: "hessie74@hotmail.com", mobile: "06-23562536", year_of_birth: 1974, sick: false},
  {id: 15, first_name: "Hasan", last_name: "Karabulut", email: "turk_hasan@hotmail.com", mobile: "06-11447536", year_of_birth: 1979, sick: false},
  {id: 16, first_name: "Joost", last_name: "de Wolde", email: "jj_wolde@hetnet.nl", mobile: "06-25478413", year_of_birth: 1978, sick: false},
  {id: 17, first_name: "Hans", last_name: "de Beuker", email: "beukertje81@hotmail.com", mobile: "06-88452114", year_of_birth: 1981, sick: false},
  {id: 18, first_name: "Daan", last_name: "de Jong", email: "daandejong2004@hotmail.com", mobile: "06-54785433", year_of_birth: 2004, sick: false},
  {id: 19, first_name: "Daan", last_name: "Houtkamp", email: "daan_2005@gmail.com", mobile: "06-74366988", year_of_birth: 2005, sick: false},
  {id: 20, first_name: "Elise", last_name: "Meijer", email: "dit_is_elise@gmail.com", mobile: "06-14583333", year_of_birth: 2003, sick: false},
  {id: 21, first_name: "Alida", last_name: "de Ruiter", email: "amderuiter@caiway.nl", mobile: "06-11589997", year_of_birth: 1986, sick: false},
  {id: 22, first_name: "Sander", last_name: "Simons", email: "sjsimons@ziggo.nl", mobile: "06-55153366", year_of_birth: 1972, sick: false},
  {id: 23, first_name: "Brenda", last_name: "de Kuiper", email: "brenniekuiper@hotmail.com", mobile: "06-14714714", year_of_birth: 1976, sick: false},
  {id: 24, first_name: "Bas", last_name: "de Jong", email: "bdejong@xs4all.nl", mobile: "06-45685231", year_of_birth: 1948, sick: false},
  {id: 25, first_name: "Willemijn", last_name: "Eierkamp", email: "willemijntje88@hotmail.com", mobile: "06-65659898", year_of_birth: 1988, sick: false},
  {id: 26, first_name: "Esther", last_name: "de Groot", email: "esther_degroot@gmail.com", mobile: "06-11587445", year_of_birth: 1991, sick: false},
  {id: 27, first_name: "Jan", last_name: "Lobbezo", email: "jklobbezo@planet.nl", mobile: "06-22558754", year_of_birth: 1953, sick: false},
  {id: 28, first_name: "Johan", last_name: "de Vries", email: "vries.johan@hetnet.nl", mobile: "06-12899877", year_of_birth: 1982, sick: false},
  {id: 29, first_name: "Sjaan", last_name: "Meijer", email: "sjaan65@hotmail.com", mobile: "06-55475584", year_of_birth: 1965, sick: false},
  {id: 30, first_name: "Janneke", last_name: "de Groot", email: "jjh.degroot@caiway.nl", mobile: "06-22474733", year_of_birth: 1984, sick: false},
  {id: 31, first_name: "Bob", last_name: "Brouwer", email: "bobbob@gmail.com", mobile: "06-65465656", year_of_birth: 1977, sick: false},
  {id: 32, first_name: "Ans", last_name: "Prinsen", email: "am.prinsen@caiway.nl", mobile: "06-45852221", year_of_birth: 1968, sick: false},
  {id: 33, first_name: "Leila", last_name: "Erarslan", email: "lerarslan84@hotmail.com", mobile: "06-99811475", year_of_birth: 1984, sick: false},
  {id: 34, first_name: "Kees", last_name: "Prinsen", email: "kees.prinsen@ziggo.nl", mobile: "06-14142255", year_of_birth: 1967, sick: false},
  {id: 35, first_name: "John", last_name: "Trompet", email: "janklaassendetrompetter@hotmail.com", mobile: "06-55475533", year_of_birth: 1980, sick: false},
  {id: 36, first_name: "Annemieke", last_name: "Vlaming", email: "annemiekie77@hotmail.com", mobile: "06-22365659", year_of_birth: 1977, sick: false},
  {id: 37, first_name: "Barbara", last_name: "van de Marel", email: "barbiemarel@gmail.com", mobile: "06-25444733", year_of_birth: 1981, sick: false},
  {id: 38, first_name: "Henk", last_name: "de Kuier", email: "henkie1964@hotmail.com", mobile: "06-28877544", year_of_birth: 1964, sick: false},
  {id: 39, first_name: "Jan", last_name: "Plomp", email: "j.plomp@hetnet.nl", mobile: "06-44545555", year_of_birth: 1959, sick: false},
  {id: 40, first_name: "Jos", last_name: "van Zaal", email: "jvzaal@planet.nl", mobile: "06-11458799", year_of_birth: 1965, sick: false},
  {id: 41, first_name: "Maartje", last_name: "de Waal", email: "maartje.dewaal@caiway.nl", mobile: "06-33658871", year_of_birth: 1975, sick: false},
  {id: 42, first_name: "José", last_name: "Meijer", email: "jose.meijer@ziggo.nl", mobile: "06-23523588", year_of_birth: 1975, sick: false},
  {id: 43, first_name: "Koos", last_name: "Jansen", email: "ks,jansen@caiway.nl", mobile: "06-14416336", year_of_birth: 1959, sick: false},
  {id: 44, first_name: "Lien", last_name: "Lelieveld", email: "lientje2006@gmail.com", mobile: "06-84845236", year_of_birth: 2006, sick: false},
  {id: 45, first_name: "Debbie", last_name: "van Dale", email: "deb.vandale@xs4all.nl", mobile: "06-33584110", year_of_birth: 1999, sick: false},
  {id: 46, first_name: "Hans", last_name: "Klein", email: "hjk.klein@ziggo.nl", mobile: "06-54711200", year_of_birth: 1966, sick: false},
  {id: 47, first_name: "Sjors", last_name: "Buskermolen", email: "sjors.buskermolen@hetnet.nl", mobile: "06-10250698", year_of_birth: 1987, sick: false},
  {id: 48, first_name: "Piet", last_name: "Sassen", email: "pb.sassen@ziggo.nl", mobile: "06-20047833", year_of_birth: 1961, sick: false},
  {id: 49, first_name: "Emily", last_name: "van Driel", email: "emmy_100888@hotmail.com", mobile: "06-14706808", year_of_birth: 1988, sick: false},
  {id: 50, first_name: "Janneke", last_name: "Klein", email: "hjk.klein@ziggo.nl", mobile: "06-54001478", year_of_birth: 1969, sick: false},
  {id: 51, first_name: "Frank", last_name: "Grootebroek", email: "frank_groot@gmail.com", mobile: "06-20605860", year_of_birth: 1985, sick: false},
  {id: 52, first_name: "Paulien", last_name: "Rabbering", email: "pieniemienie@hotmail.com", mobile: "06-55200410", year_of_birth: 1984, sick: false},
  {id: 53, first_name: "Joris", last_name: "Klein", email: "joris.klein@hetnet.nl", mobile: "06-11405066", year_of_birth: 1997, sick: false},
  {id: 54, first_name: "Renske", last_name: "de Boer", email: "rh.deboer@xs4all.nl", mobile: "06-20568407", year_of_birth: 1980, sick: false},
  {id: 55, first_name: "Ali", last_name: "Bashmahura", email: "a.bashma@hetnet.nl", mobile: "06-20036055", year_of_birth: 1978, sick: false},
  {id: 56, first_name: "Robert", last_name: "Willemse", email: "r.willemse@ziggo.nl", mobile: "06-12506890", year_of_birth: 1979, sick: false},
  {id: 57, first_name: "Jenny", last_name: "Willemse", email: "r.willemse@ziggo.nl", mobile: "06-20548096", year_of_birth: 1985, sick: false},
  {id: 58, first_name: "Mathilde", last_name: "Willemse", email: "r.willemse@ziggo.nl", mobile: "06-20548096", year_of_birth: 2015, sick: false},
  {id: 59, first_name: "Bart", last_name: "Willemse", email: "r.willemse@ziggo.nl", mobile: "06-20548096", year_of_birth: 2014, sick: false},
  {id: 60, first_name: "Rob", last_name: "Meijer", email: "rob.meijer@hetnet.nl", mobile: "06-23060548", year_of_birth: 1985, sick: false},
  {id: 61, first_name: "Truus", last_name: "de Groot", email: "t.d.groot@planet.nl", mobile: "06-21589607", year_of_birth: 1976, sick: false},
  {id: 62, first_name: "Veronique", last_name: "Meijer", email: "vero_75@hotmail.com", mobile: "06-60305501", year_of_birth: 1975, sick: false},
  {id: 63, first_name: "Wietze", last_name: "Hartgerink", email: "wietze2006@gmail.com", mobile: "06-11030555", year_of_birth: 1995, sick: false},
  {id: 64, first_name: "Manuel", last_name: "de Gijsel", email: "mft.gijsel@ziggo.nl", mobile: "06-33580154", year_of_birth: 1981, sick: false},
  {id: 65, first_name: "Betsy", last_name: "Bakker", email: "bpm.bakker@xs4all.nl", mobile: "06-11036050", year_of_birth: 1941, sick: false},
  {id: 66, first_name: "Harold", last_name: "Visser", email: "visserman@hetnet.nl", mobile: "06-40156398", year_of_birth: 1958, sick: false},
  {id: 67, first_name: "Henk", last_name: "Lek", email: "h.lek@live.nl", mobile: "06-20158200", year_of_birth: 1959, sick: false},
  {id: 68, first_name: "Johan", last_name: "de Boer", email: "boederij_johan@hotmail.com", mobile: "06-35904784", year_of_birth: 1973, sick: false},
  {id: 69, first_name: "Patricia", last_name: "de Graaf", email: "pdr.de.graaf@caiway.nl", mobile: "06-22059708", year_of_birth: 1970, sick: false},
  {id: 70, first_name: "Sonja", last_name: "Mulder-Smit", email: "st.mulder@hetnet.nl", mobile: "06-14825402", year_of_birth: 1973, sick: false},
  {id: 71, first_name: "Anja", last_name: "Niemeijer", email: "niemeijer@live.nl", mobile: "06-14500689", year_of_birth: 1986, sick: false},
  {id: 72, first_name: "Dennis", last_name: "de Visser", email: "dennis1978@hotmail.com", mobile: "06-65058704", year_of_birth: 1978, sick: false},
  {id: 73, first_name: "Gea", last_name: "Smit", email: "geasmit@gmail.com", mobile: "06-10035047", year_of_birth: 1961, sick: false},
  {id: 74, first_name: "Lydia", last_name: "Bakker", email: "l.bakker@caiway.nl", mobile: "06-65032014", year_of_birth: 1971, sick: false},
  {id: 75, first_name: "Jochem", last_name: "de Vries", email: "jochem2304@hotmail.com", mobile: "06-30369971", year_of_birth: 1989, sick: false},
  {id: 76, first_name: "Daphne", last_name: "Janssen", email: "daffie1983@hotmail.com", mobile: "06-40258833", year_of_birth: 1983, sick: false},
  {id: 77, first_name: "Ria", last_name: "Keizer", email: "rf.keizer@hetnet.nl", mobile: "06-25045087", year_of_birth: 1952, sick: false},
  {id: 78, first_name: "Merel", last_name: "Molenaar", email: "merel_liefie@gmail.com", mobile: "06-54800265", year_of_birth: 2001, sick: false},
  {id: 79, first_name: "Marco", last_name: "Hendriks", email: "marco.lennie@hetnet.nl", mobile: "06-50036987", year_of_birth: 1975, sick: false},
  {id: 80, first_name: "Lennie", last_name: "Hendriks-Meijer", email: "marco.lennie@hetnet.nl", mobile: "06-12352040", year_of_birth: 1978, sick: false},
  {id: 81, first_name: "Emma", last_name: "Hendriks", email: "emma_2007@gmail.com", mobile: "06-12352040", year_of_birth: 2007, sick: false},
  {id: 82, first_name: "Daan", last_name: "Hendriks", email: "daan_hendriks_09@gmail.com", mobile: "06-12352040", year_of_birth: 2009, sick: false},
  {id: 83, first_name: "Sem", last_name: "Hendriks", email: "marco.lennie@hetnet.nl", mobile: "06-12352040", year_of_birth: 2012, sick: false},
  {id: 84, first_name: "Mees", last_name: "Hendriks", email: "marco.lennie@hetnet.nl", mobile: "06-12352040", year_of_birth: 2012, sick: false},
  {id: 85, first_name: "Carola", last_name: "Lauwers-van Zaal", email: "jdg.lauwers@ziggo.nl", mobile: "06-56560014", year_of_birth: 1978, sick: false},
  {id: 86, first_name: "Jordan", last_name: "Lauwers", email: "jdg.lauwers@ziggo.nl", mobile: "06-22015408", year_of_birth: 1976, sick: false},
  {id: 87, first_name: "Michael", last_name: "Mulder", email: "mmulder@xs4all.nl", mobile: "06-10003589", year_of_birth: 1983, sick: false},
  {id: 88, first_name: "Fatima", last_name: "Kunduz", email: "ft.kunduz@hetnet.nl", mobile: "06-10056008", year_of_birth: 1994, sick: false},
  {id: 89, first_name: "Jurgen", last_name: "Vis", email: "jur_vis@hotmail.com", mobile: "06-30563325", year_of_birth: 1978, sick: false},
  {id: 90, first_name: "Remco", last_name: "Bakker", email: "bakker.klaassen@hetnet.nl", mobile: "06-54025056", year_of_birth: 1986, sick: false},
  {id: 91, first_name: "Natasja", last_name: "Bakker-Klaassen", email: "bakker.klaassen@hetnet.nl", mobile: "06-12041050", year_of_birth: 1988, sick: false},
  {id: 92, first_name: "Daan", last_name: "Bakker", email: "bakker.klaassen@hetnet.nl", mobile: "06-12041050", year_of_birth: 2012, sick: false},
  {id: 93, first_name: "Emma", last_name: "Bakker", email: "bakker.klaassen@hetnet.nl", mobile: "06-12041050", year_of_birth: 2014, sick: false},
  {id: 94, first_name: "John", last_name: "Vis", email: "john.vis@xs4all.nl", mobile: "06-10447377", year_of_birth: 1977, sick: false},
  {id: 95, first_name: "Martijn", last_name: "van Tol", email: "toolie@hotmail.com", mobile: "06-14058966", year_of_birth: 1978, sick: false},
  {id: 96, first_name: "Linda", last_name: "Vos-van Tol", email: "linda_vantol@hotmail.com", mobile: "06-25005630", year_of_birth: 1983, sick: false},
  {id: 97, first_name: "Jessica", last_name: "Bos", email: "jes.bos@planet.nl", mobile: "06-13063440", year_of_birth: 1989, sick: false},
  {id: 98, first_name: "Valentijn", last_name: "Bos", email: "jes.bos@planet.nl", mobile: "06-13063440", year_of_birth: 2012, sick: false},
  {id: 99, first_name: "Roos", last_name: "Bos", email: "jes.bos@planet.nl", mobile: "06-13063440", year_of_birth: 2015, sick: false},
  {id: 100, first_name: "Marco", last_name: "Peeters", email: "mgt.peeters@ziggo.nl", mobile: "06-14785288", year_of_birth: 1972, sick: false},

];


const getRandomName = (array) => {
  const person = array[Math.floor(Math.random() * array.length)];
  return `${person.first_name} ${person.last_name}`;
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomName(names),
  dentist: getRandomName(dentists),
  assistant: getRandomName(assistents),
});

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;
