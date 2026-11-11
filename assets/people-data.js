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

        {
            slug: "afonso-mota",
            name: "Afonso Mota",
            role: { en: "PhD Researcher", pt: "Investigador de Doutoramento" },
            institution: "Instituto de Astrofísica e Ciências do Espaço (IA); CIIMAR; Museu de História Natural de Paris (MNHN)",
            masters: {
                en: "University of Lisboa — Faculty of Sciences",
                pt: "Universidade de Lisboa — Faculdade de Ciências"},
            photo: "pics/people/afonso_mota.JPG",
            bio: {
                en: "My research bridges microbiology and astrophysics to assess microbial habitability in the Solar System (e.g. Mars and icy moons) and beyond (exoplanets). In particular, my work focuses on modelling (exo)planetary environments and then performing laboratory experiments to assess the survival and growth capabilities of microorganisms in such conditions. Supervisors: Marta Cortesão, Nuno C. Santos, Catarina Magalhães, Adrienne Kish",
                pt: "A minha investigação faz a ponte entre a microbiologia e a astrofísica para avaliar a habitabilidade microbiana no Sistema Solar (por exemplo, Marte e luas geladas) e para além dele (exoplanetas). Em particular, o meu trabalho centra-se na modelação de ambientes (exo)planetários e, em seguida, na realização de experiências laboratoriais para avaliar a capacidade de sobrevivência e de crescimento de microrganismos nessas condições. Supervisores: Marta Cortesão, Nuno C. Santos, Catarina Magalhães, Adrienne Kish"
            }
        },

                {
            slug: "jen-peralta",
            name: "Jennifer P. Lucero",
            role: { en: "PhD Researcher", pt: "Investigador de Doutoramento" },
            institution: "Instituto de Astrofísica e Ciências do Espaço (IA)",
            masters: {
                en: "Pontificia Universidad Catolica de Chile ",
                pt: "Pontificia Universidad Catolica de Chile "},
            photo: "pics/people/jenn.jpg",
            bio: {
                en: "My research investigates how stellar activity impacts the characterization of exoplanet atmospheres, with a particular focus on high-resolution spectroscopic observations. For my research I use data from the Paranal Solar ESPRESSO Telescope (PoET). Supervisors: Dr. Nuno C. Santos, Dr. Olivier Demangeon",
                pt: "A minha investigação estuda o impacto da atividade estelar na caracterização de atmosferas de exoplanetas, com especial enfoque em observações espectroscópicas de alta resolução. No âmbito da minha investigação, utilizo dados do Paranal Solar ESPRESSO Telescope (PoET). Supervisores: Dr. Nuno C. Santos, Dr. Olivier Demangeon"
            }
        },

                        {
            slug: "Diogo-Baptista",
            name: "Diogo Baptista",
            role: { en: "PhD Researcher", pt: "Investigador de Doutoramento" },
            institution: "Instituto de Astrofísica e Ciências do Espaço (IA), The Institute of Physics for Advanced Materials, Nanotechnology and Photonics (IFIMUP)",
            masters: {
                en: "University of Porto — Faculty of Sciences",
                pt: "Universidade do Porto — Faculdade de Ciências"},
            photo: "pics/people/diogo_baptista.jpeg",
            bio: {
                en: "I work on computational chemistry, acessing planetary atmospheres and optical properties of atmospheric compounds. Supervisors: Clara Sousa-Silva, Estelina Lora da Silva",
                pt: "Eu trabalho em química computacional, explorando atmosferas planetárias e propriedades ópticas de compostos atmosféricos. Supervisores: Clara Sousa-Silva, Estelina Lora da Silva "
            }
        },

        {
            slug: "Alexandre-Branco",
            name: "Alexandre Branco",
            role: { en: "PhD Researcher", pt: "Investigador de Doutoramento" },
            institution: " Instituto de Astrofísica e Ciências do Espaço (CAUP); Faculdade de Ciências da Universidade do Porto",
            masters: {
                en: "University of Lisboa— Faculty of Sciences",
                pt: "Universidade de Lisboa — Faculdade de Ciências"},
            photo: "pics/people/alexandre_branco.jpeg",
            bio: {
                en: "As of now, I am looking to understand what processes determine the different chemical compositions we observe in exoplanet atmospheres. These processes include photochemistry, atmospheric circulation, interactions with the planetary interior, and potential biospheres! Supervisors: Clara Sousa-Silva; Olivier Demangeon; Pedro Machado",
                pt: "Atualmente procuro perceber que processos determinam as diferentes composições químicas que observamos nas  atmosferas de exoplanetas. Estes processos incluem,  fotoquímica, circulação atmosférica, interações com o interior planetário e potenciais biosferas! Supervisores: Clara Sousa-Silva; Olivier Demangeon; Pedro Machado "
            }
        },

                {
            slug: "Kahled-AlMoula",
            name: "Kahled Al-Moula",
            role: { en: "Post-Doctoral Researcher", pt: "Investigador de Pós-Doutoramento" },
            institution: " Instituto de Astrofísica e Ciências do Espaço (CAUP); Faculdade de Ciências da Universidade do Porto",
            masters: {
                en: "Uppsala University",
                pt: "Uppsala University"},
            phd: {
                en: "University of Geneva",
                pt: "University of Geneva"},
            photo: "pics/people/kahled_al_moula.jpeg",
            bio: {
                en: "My work is focused on the characterization and mitigation of stellar activity in radial velocity time series to enable the mass measurement Earth-like planets. I primarily use observations from solar telescopes connected to high-resolution spectrograph to isolate the effects of solar-type variability.",
                pt: "O meu trabalho centra-se na caracterização e mitigação da atividade estelar em séries temporais de velocidade radial para permitir a medição da massa de planetas semelhantes à Terra. Utilizo principalmente observações de telescópios solares ligados a espectrógrafos de alta resolução para isolar os efeitos da variabilidade do tipo solar."
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
