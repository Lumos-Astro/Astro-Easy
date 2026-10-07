// ════════════════════════════════════════════════
//  OSCAR — Shared people dataset
//  Used by astro_world.html (the map) AND person.html
//  (individual profile pages). Edit people here — both
//  pages read from this single file.
//
//  FIELDS
//   slug        unique id used in the URL: person.html?slug=alba-barka
//               (lowercase, hyphens, no spaces or accents)
//   name        full name
//   role        their title, e.g. "PhD Researcher"
//   institution where they work now
//   masters     where they did their Master's (optional, "" to hide)
//   photo       path to their picture, e.g. "pics/people/alba-barka.jpg"
//               ("" = shows their initials instead)
//   bio         a short text about them (optional, "" to hide)
//
//  bio and masters can be plain text, OR an object with both
//  languages so they switch with the EN/PT toggle:
//      bio: { en: "Text in English.", pt: "Texto em português." }
// ════════════════════════════════════════════════
const researchers = {
    "Portugal": { label: "Portugal", people: [
        {
            slug: "alba-barka",
            name: "Alba Barka",
            role: { en: "PhD Researcher", pt: "Investigadora de Doutoramento" },
            institution: "FCUP — Faculdade de Ciências da Universidade do Porto",
            masters: {
                en: "University of Bologna, with a thesis done in collaboration with the University of Padova",
                pt: "Universidade de Bolonha, com tese realizada em colaboração com a Universidade de Pádua"
                    },
            photo: "pics/people/alba_barka.jpeg",
            bio: {
                en: "I am a PhD student in Porto, supervised by Prof. Dr. Nuno Santos and Dr. Ângela Santos. My research focuses on mitigating stellar activity to improve the detection of Earth-like planets, using the Sun as a proxy. During my Master's at the University of Bologna, I worked with the University of Padova on transit timing variations (TTVs) as a method for detecting exoplanets.",
                pt: "Sou estudante de doutoramento no Porto, sob a orientação do Prof. Dr. Nuno Santos e da Dra. Ângela Santos. A minha investigação centra-se na mitigação da atividade estelar para melhorar a deteção de planetas semelhantes à Terra, usando o Sol como proxy. Durante o mestrado na Universidade de Bolonha, trabalhei em colaboração com a Universidade de Pádua no estudo de variações no tempo de trânsito (TTVs) como método de deteção de exoplanetas."
            }},
        {
            slug: "ines-rolo",
            name: "Inês Rolo",
            role: { en: "PhD Researcher", pt: "Investigadora de Doutoramento" },
            institution: "FCUP — Faculdade de Ciências da Universidade do Porto",
            masters: {
                en: "University of Porto — Faculty of Sciences",
                pt: "Universidade do Porto — Faculdade de Ciências"},
            photo: "pics/people/ines-rolo.jpg",
            bio: {
                en: "I am a PhD student in Porto, supervised by Dr. Margarida Cunha, Dr. Ângela Santos and Dr. Victoria Laura Antoci. Ciência ID: 0B18-AAAE-47AE",
                pt: "Sou estudante de doutoramento no Porto, sob a orientação da Dra. Margarida Cunha, da Dra. Ângela Santos e da Dra. Victoria Laura Antoci. Ciência ID: 0B18-AAAE-47AE"
            }
        },
    ]},
    //"Austria": { label: "Austria", people: [
    //    { slug: "joao-ferreira", name: "Dr. João Ferreira", role: "Head Researcher", institution: "University of Vienna — Department of Astrophysics", masters: "", photo: "", bio: "" },
    //]},
    "United Kingdom": { label: "United Kingdom", people: [] },
    "Germany": { label: "Germany", people: [] },
    "France": { label: "France", people: [] },
    "Spain": { label: "Spain", people: [] },
    "United States": { label: "United States", people: [] },
    "Brazil": { label: "Brazil", people: [] },
    "Chile": { label: "Chile", people: [] },
    "Netherlands": { label: "Netherlands", people: [] },
    "Italy": { label: "Italy", people: [] },
    "Sweden": { label: "Sweden", people: [] },
    "Australia": { label: "Australia", people: [] },
    "Japan": { label: "Japan", people: [] },
    // ADD MORE:
    // "Country Name": { label: "Country Name", people: [
    //     {
    //         slug: "name-surname",
    //         name: "Name Surname",
    //         role: "PhD Researcher",
    //         institution: "University / Institute",
    //         masters: "MSc Astronomy & Astrophysics — FCUP",
    //         photo: "pics/people/name-surname.jpg",
    //         bio: "One or two sentences about them."
    //     },
    // ]},
};

// Look up one person by slug across every country. Returns
// { person, country } or null if no match is found.
function findPersonBySlug(slug) {
    for (const country in researchers) {
        const match = researchers[country].people.find(p => p.slug === slug);
        if (match) return { person: match, country };
    }
    return null;
}
